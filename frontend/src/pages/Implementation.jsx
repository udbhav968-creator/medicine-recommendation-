import React, { useState } from 'react';
import { Terminal, Database, Cpu, Layers, GitBranch, ShieldCheck, CheckCircle, BarChart3, Activity } from 'lucide-react';

export default function Implementation() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
      {/* HEADER */}
      <div className="space-y-2">
        <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest">System Architecture & Engineering</div>
        <h1 className="font-orbitron font-extrabold text-3xl text-white">MediSynth AI Implementation Console</h1>
        <p className="text-slate-400 text-sm max-w-3xl">
          Technical specifications, dataset train/validation/test splits, hyperparameter matrices, and multimodal deep learning pipelines.
        </p>
      </div>

      {/* TABS */}
      <div className="flex items-center gap-2 bg-slate-900/60 p-1.5 rounded-xl border border-slate-800 w-fit">
        {[
          { id: 'overview', label: 'Architecture Overview', icon: Layers },
          { id: 'datasets', label: 'Training Datasets & Splits', icon: Database },
          { id: 'models', label: 'AI Models Specs', icon: Cpu },
          { id: 'metrics', label: 'Validation Metrics', icon: BarChart3 },
        ].map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 border border-cyan-500/30'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Icon className="w-4 h-4" />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* TAB CONTENT: DATASETS & SPLITS */}
      {activeTab === 'datasets' && (
        <div className="space-y-6 animate-fadeIn">
          {/* TOP PIPELINE CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card p-5 rounded-xl border border-slate-800 space-y-2">
              <span className="text-[10px] font-mono text-slate-500 uppercase">Data Preprocessing</span>
              <div className="text-xl font-bold text-cyan-400 font-orbitron">Min-Max Normalization</div>
              <div className="text-xs text-slate-400">Rescales feature ranges to [0, 1]</div>
            </div>

            <div className="glass-card p-5 rounded-xl border border-slate-800 space-y-2">
              <span className="text-[10px] font-mono text-slate-500 uppercase">Dimensionality Reduction</span>
              <div className="text-xl font-bold text-blue-400 font-orbitron">PCA Reduction</div>
              <div className="text-xs text-slate-400">Z = X · W (retaining 95% variance)</div>
            </div>

            <div className="glass-card p-5 rounded-xl border border-slate-800 space-y-2">
              <span className="text-[10px] font-mono text-slate-500 uppercase">RL Policy Optimization</span>
              <div className="text-xl font-bold text-emerald-400 font-orbitron">Q-Learning</div>
              <div className="text-xs text-slate-400">10,000 training episodes</div>
            </div>
          </div>

          {/* SPLIT TABLE & CROSS-VALIDATION */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="glass-card p-6 rounded-2xl space-y-4">
              <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                <Database className="w-4 h-4 text-cyan-400" />
                Train / Validation / Test Dataset Split
              </h3>
              <div className="space-y-3 text-xs">
                <div className="flex justify-between items-center bg-slate-900/60 p-3 rounded-lg border border-slate-800">
                  <span className="text-slate-300">Training Set (80%)</span>
                  <span className="font-mono font-bold text-cyan-400">198,633 records</span>
                </div>
                <div className="flex justify-between items-center bg-slate-900/60 p-3 rounded-lg border border-slate-800">
                  <span className="text-slate-300">Validation Set (10%)</span>
                  <span className="font-mono font-bold text-amber-400">24,829 records</span>
                </div>
                <div className="flex justify-between items-center bg-slate-900/60 p-3 rounded-lg border border-slate-800">
                  <span className="text-slate-300">Test Set (10%)</span>
                  <span className="font-mono font-bold text-blue-400">24,829 records</span>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl space-y-4">
              <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                <GitBranch className="w-4 h-4 text-cyan-400" />
                Cross-Validation Strategy
              </h3>
              <div className="space-y-3 text-xs">
                <div className="flex justify-between items-center bg-slate-900/60 p-3 rounded-lg border border-slate-800">
                  <span className="text-slate-300">CV Method</span>
                  <span className="font-mono font-bold text-emerald-400">Stratified K-Fold (k=10)</span>
                </div>
                <div className="flex justify-between items-center bg-slate-900/60 p-3 rounded-lg border border-slate-800">
                  <span className="text-slate-300">Stratified By</span>
                  <span className="font-mono text-slate-200">Disease + Phenotype</span>
                </div>
                <div className="flex justify-between items-center bg-slate-900/60 p-3 rounded-lg border border-slate-800">
                  <span className="text-slate-300">Hyperparameter Search</span>
                  <span className="font-mono text-cyan-400">GridSearchCV (Seed: 42)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* OVERVIEW / DEFAULT */}
      {activeTab === 'overview' && (
        <div className="glass-card p-8 rounded-2xl space-y-6 animate-fadeIn">
          <h3 className="text-base font-orbitron font-bold text-white">System Architecture & Pipeline Integration</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-300">
            <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800 space-y-2">
              <div className="font-bold text-cyan-400 text-sm">1. Frontend Client Layer</div>
              <p>React 18 + Vite SPA styled with Tailwind CSS. Communicates via REST APIs with backend services.</p>
            </div>
            <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800 space-y-2">
              <div className="font-bold text-blue-400 text-sm">2. FastAPI Gateway</div>
              <p>Python 3.11 API backend managing intake requests, genomic file parsing, and ML inference invocation.</p>
            </div>
            <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800 space-y-2">
              <div className="font-bold text-emerald-400 text-sm">3. ML Recommendation Engine</div>
              <p>Heterogeneous Graph Neural Network + XGBoost toxicity classifier and MLP personalized dosage regressor.</p>
            </div>
            <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800 space-y-2">
              <div className="font-bold text-amber-400 text-sm">4. Pharmacogenomics Datasets</div>
              <p>Integrated CPIC guidelines, PharmGKB annotations, ClinVar variant tables, and DrugBank SMILES descriptors.</p>
            </div>
          </div>
        </div>
      )}

      {/* MODELS TAB */}
      {activeTab === 'models' && (
        <div className="glass-card p-8 rounded-2xl space-y-6 animate-fadeIn text-xs text-slate-300">
          <h3 className="text-base font-orbitron font-bold text-white">AI & Machine Learning Model Specifications</h3>
          <div className="space-y-4">
            <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800 flex justify-between items-center">
              <div>
                <div className="font-bold text-cyan-400 text-sm">HeteroGNN Recommender</div>
                <div className="text-slate-400">Graph Neural Network on Patient ↔ Variant ↔ Drug graph</div>
              </div>
              <span className="font-mono text-emerald-400 font-bold">PyTorch Geometric</span>
            </div>
            <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800 flex justify-between items-center">
              <div>
                <div className="font-bold text-blue-400 text-sm">DNABERT Variant Predictor</div>
                <div className="text-slate-400">Sequence classification on CYP450 SNPs</div>
              </div>
              <span className="font-mono text-cyan-400 font-bold">HuggingFace Transformers</span>
            </div>
            <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800 flex justify-between items-center">
              <div>
                <div className="font-bold text-amber-400 text-sm">Toxicity Classifier</div>
                <div className="text-slate-400">Adverse Drug Reaction risk score (Low, Mod, High)</div>
              </div>
              <span className="font-mono text-amber-400 font-bold">XGBoost Ensemble</span>
            </div>
          </div>
        </div>
      )}

      {/* METRICS TAB */}
      {activeTab === 'metrics' && (
        <div className="glass-card p-8 rounded-2xl space-y-6 animate-fadeIn">
          <h3 className="text-base font-orbitron font-bold text-white">Model Performance & Validation Metrics</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800">
              <span className="text-[10px] font-mono text-slate-500 uppercase">Accuracy</span>
              <div className="text-2xl font-bold text-emerald-400 font-orbitron mt-1">94.2%</div>
            </div>
            <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800">
              <span className="text-[10px] font-mono text-slate-500 uppercase">Precision</span>
              <div className="text-2xl font-bold text-cyan-400 font-orbitron mt-1">91.8%</div>
            </div>
            <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800">
              <span className="text-[10px] font-mono text-slate-500 uppercase">Recall</span>
              <div className="text-2xl font-bold text-blue-400 font-orbitron mt-1">93.1%</div>
            </div>
            <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800">
              <span className="text-[10px] font-mono text-slate-500 uppercase">AUC-ROC</span>
              <div className="text-2xl font-bold text-amber-400 font-orbitron mt-1">0.971</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
