from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional
import sys
import os

sys.path.append(os.path.join(os.path.dirname(__file__), "..", "ml_engine"))
from predictor import MediSynthPredictor

app = FastAPI(
    title="MediSynth AI API Service",
    description="Precision Medicine & Pharmacogenomic Drug Recommendation Backend API",
    version="3.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

predictor = MediSynthPredictor()

class PatientIntakeRequest(BaseModel):
    name: str
    age: int
    gender: str
    weight_kg: float
    height_cm: float
    diagnosis: str
    egfr: float
    cyp2c9: str
    cyp2d6: str
    cyp2c19: str
    vkorc1: str
    hla_b5701: str
    tpmt: str
    dpyd: str
    slco1b1: str
    current_medications: Optional[str] = ""

@app.get("/")
def read_root():
    return {
        "status": "online",
        "service": "MediSynth AI Backend API",
        "version": "3.0.0",
        "docs_url": "/docs"
    }

@app.post("/api/v1/predict")
def predict_recommendation(data: PatientIntakeRequest):
    result = predictor.predict(data.dict())
    return result

@app.post("/api/v1/genomics/vcf")
async def parse_vcf_file(request: Request):
    content = await request.body()
    vcf_text = content.decode('utf-8', errors='ignore')
    parsed_variants = predictor.parse_vcf_stream(vcf_text)
    return {
        "status": "processed",
        "variants_found": len(parsed_variants),
        "annotated_variants": parsed_variants
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
