import React, { useState } from 'react';
import { Database, Download, CheckCircle, Share2 } from 'lucide-react';

export default function FHIRConnector({ patientData }) {
  const [exported, setExported] = useState(false);

  const exportFHIR = () => {
    const fhirResource = {
      resourceType: "Patient",
      id: "medisynth-fhir-patient-001",
      active: true,
      name: [{ use: "official", family: patientData?.name || "Mehta", given: ["Arjun"] }],
      gender: "male",
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/patient-genomics-cyp2d6",
          valueString: patientData?.cyp2d6 || "Normal Metabolizer"
        }
      ]
    };

    const blob = new Blob([JSON.stringify(fhirResource, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "medisynth_fhir_patient_record.json";
    a.click();
    setExported(true);
  };

  return (
    <div className="glass-card rounded-2xl p-5 space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm font-semibold text-white">
          <Database className="w-4 h-4 text-cyan-400" />
          HL7 / FHIR R4 Hospital Interoperability Connector
        </div>
        <span className="text-[10px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
          Epic & Cerner Ready
        </span>
      </div>

      <div className="flex items-center justify-between text-xs bg-slate-900/60 p-3 rounded-xl border border-slate-800">
        <div className="text-slate-300">Export clinical record in standardized HL7 FHIR R4 JSON format</div>
        <button
          onClick={exportFHIR}
          className="px-3 py-1.5 rounded-lg bg-cyan-500 text-black font-bold text-xs flex items-center gap-1.5 hover:bg-cyan-400 transition-colors"
        >
          <Download className="w-3.5 h-3.5" />
          {exported ? 'FHIR Exported!' : 'Export FHIR JSON'}
        </button>
      </div>
    </div>
  );
}
