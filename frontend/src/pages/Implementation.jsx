import React, { useState } from 'react';
import { 
  Activity, Cpu, FileText, BarChart3, Dna, ExternalLink, 
  CheckCircle2, AlertTriangle, ShieldAlert, Sparkles, User, Play, ArrowRight, Table, Layers
} from 'lucide-react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  LineChart, Line 
} from 'recharts';

export default function Implementation() {
  const [activeTab, setActiveTab] = useState('analytics');

  // RL TRAINING Q-LOSS DATA
  const qLossData = [
    { episode: 'Ep 100', loss: 0.42, qVal: 0.35 },
    { episode: 'Ep 500', loss: 0.28, qVal: 0.58 },
    { episode: 'Ep 1000', loss: 0.18, qVal: 0.74 },
    { episode: 'Ep 2000', loss: 0.09, qVal: 0.86 },
    { episode: 'Ep 5000', loss: 0.04, qVal: 0.942 }
  ];

  // ALGORITHM BENCHMARK DATA
  const benchmarkModels = [
    { name: 'Multimodal RL Q-Learning', proposed: true, acc: '94.2%', prec: '92.4%', auc: '0.971', speed: 'Medium', badgeColor: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/40' },
    { name: 'Gradient Boosting (XGBoost)', proposed: false, acc: '91.4%', prec: '89.7%', auc: '0.952', speed: 'Fast', badgeColor: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40' },
    { name: 'Deep Neural Network (3-layer)', proposed: false, acc: '90.8%', prec: '88.9%', auc: '0.948', speed: 'Medium', badgeColor: 'bg-blue-500/20 text-blue-400 border-blue-500/40' },
    { name: 'Random Forest', proposed: false, acc: '89.1%', prec: '87.3%', auc: '0.931', speed: 'Fast', badgeColor: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40' },
    { name: 'SVM (RBF Kernel)', proposed: false, acc: '86.4%', prec: '84.7%', auc: '0.911', speed: 'Fast', badgeColor: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40' },
    { name: 'Unimodal RL (EHR only)', proposed: false, acc: '85.3%', prec: '83.1%', auc: '0.895', speed: 'Medium', badgeColor: 'bg-amber-500/20 text-amber-400 border-amber-500/40' },
    { name: 'Unimodal RL (Genomics only)', proposed: false, acc: '81.7%', prec: '80.2%', auc: '0.878', speed: 'Medium', badgeColor: 'bg-amber-500/20 text-amber-400 border-amber-500/40' },
    { name: 'Logistic Regression', proposed: false, acc: '79.2%', prec: '77.5%', auc: '0.853', speed: 'Fast', badgeColor: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40' },
    { name: 'Rule-Based System (CPIC)', proposed: false, acc: '73.4%', prec: '70.1%', auc: '0.798', speed: 'Fast', badgeColor: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">
      {/* TITLE BAR */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 glass-card p-6 rounded-2xl border border-cyan-500/20">
        <div>
          <div className="text-[10px] font-mono uppercase tracking-widest text-cyan-400">Implementation Console</div>
          <h1 className="text-2xl md:text-3xl font-orbitron font-extrabold text-white">MediSynth AI — Precision Medicine Platform</h1>
        </div>
        <a 
          href="https://medisynthai.vercel.app/" 
          target="_blank" 
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400 hover:border-cyan-500/50 transition-colors w-fit"
        >
          Open Fullscreen <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* MAIN IMPLEMENTATION WORKSPACE */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* SIDEBAR NAVIGATION */}
        <div className="lg:col-span-3 glass-card rounded-2xl p-4 flex flex-col justify-between h-[680px]">
          <div className="space-y-4">
            <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800">
              <div className="font-orbitron font-bold text-sm text-white">MediSynth AI</div>
              <div className="text-[10px] font-mono text-slate-400">PRECISION MEDICINE V3.0</div>
              <div className="flex items-center gap-1.5 mt-2 text-[10px] font-mono text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> All Systems Nominal
              </div>
            </div>

            <nav className="space-y-1 text-xs font-medium">
              <button
                onClick={() => setActiveTab('rl_mdp')}
                className={`w-full p-3 rounded-xl flex items-center gap-3 transition-colors ${
                  activeTab === 'rl_mdp' ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 font-bold' : 'text-slate-400 hover:text-white hover:bg-slate-900/50'
                }`}
              >
                <Cpu className="w-4 h-4" /> RL MDP Engine
              </button>

              <button
                onClick={() => setActiveTab('prescriptions')}
                className={`w-full p-3 rounded-xl flex items-center gap-3 transition-colors ${
                  activeTab === 'prescriptions' ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 font-bold' : 'text-slate-400 hover:text-white hover:bg-slate-900/50'
                }`}
              >
                <FileText className="w-4 h-4" /> Prescriptions
              </button>

              <button
                onClick={() => setActiveTab('analytics')}
                className={`w-full p-3 rounded-xl flex items-center gap-3 transition-colors ${
                  activeTab === 'analytics' ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 font-bold' : 'text-slate-400 hover:text-white hover:bg-slate-900/50'
                }`}
              >
                <BarChart3 className="w-4 h-4" /> Analytics & Benchmarks
              </button>

              <button
                onClick={() => setActiveTab('pharmacogenomics')}
                className={`w-full p-3 rounded-xl flex items-center gap-3 transition-colors ${
                  activeTab === 'pharmacogenomics' ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 font-bold' : 'text-slate-400 hover:text-white hover:bg-slate-900/50'
                }`}
              >
                <Dna className="w-4 h-4" /> Pharmacogenomics
              </button>
            </nav>
          </div>

          {/* USER PROFILE CARD AT BOTTOM */}
          <div className="p-3 bg-slate-900/90 rounded-xl border border-slate-800 flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold text-xs border border-cyan-500/30">
              UA
            </div>
            <div>
              <div className="text-xs font-bold text-white">Dr. MediSynth</div>
              <div className="text-[10px] text-slate-500 font-mono">Chief AI Officer</div>
            </div>
          </div>
        </div>

        {/* CONTENT AREA */}
        <div className="lg:col-span-9 glass-card rounded-2xl p-6 min-h-[680px]">
          {/* TAB 1: ANALYTICS & BENCHMARKS */}
          {activeTab === 'analytics' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <h2 className="text-lg font-orbitron font-bold text-white flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-cyan-400" /> Algorithm Comparison & Evaluation Matrix
                </h2>
                <span className="text-xs font-mono text-slate-400">10-Fold Stratified CV</span>
              </div>

              {/* BENCHMARK TABLE */}
              <div className="overflow-x-auto rounded-xl border border-slate-800">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-900/80 text-slate-400 uppercase font-mono text-[10px] border-b border-slate-800">
                    <tr>
                      <th className="p-3">Model / Algorithm</th>
                      <th className="p-3">Accuracy</th>
                      <th className="p-3">Precision / F1</th>
                      <th className="p-3">AUC-ROC</th>
                      <th className="p-3">Inference Speed</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 text-slate-300 font-mono">
                    {benchmarkModels.map((m, idx) => (
                      <tr key={idx} className={m.proposed ? 'bg-cyan-500/10 font-bold text-white' : 'hover:bg-slate-900/40'}>
                        <td className="p-3 flex items-center gap-2">
                          {m.name}
                          {m.proposed && (
                            <span className="text-[9px] px-1.5 py-0.5 rounded bg-cyan-500 text-black font-extrabold uppercase">
                              Proposed
                            </span>
                          )}
                        </td>
                        <td className={`p-3 ${m.proposed ? 'text-cyan-400 font-bold' : ''}`}>{m.acc}</td>
                        <td className="p-3">{m.prec}</td>
                        <td className="p-3">{m.auc}</td>
                        <td className="p-3">
                          <span className={`px-2 py-0.5 rounded text-[10px] border ${m.badgeColor}`}>
                            {m.speed}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* CHART COMPARISON */}
              <div className="h-56 pt-4">
                <div className="text-xs font-semibold text-white mb-2">Accuracy Comparison Across Paradigms</div>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={benchmarkModels.slice(0, 5)}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                    <XAxis dataKey="name" stroke="#94a3b8" fontSize={10} />
                    <YAxis domain={[70, 100]} stroke="#94a3b8" fontSize={10} />
                    <Tooltip contentStyle={{ backgroundColor: '#090d16', borderColor: '#1e293b', fontSize: 11 }} />
                    <Bar dataKey="acc" fill="#22d3ff" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}

          {/* TAB 2: RL MDP ENGINE */}
          {activeTab === 'rl_mdp' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <h2 className="text-lg font-orbitron font-bold text-white flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-cyan-400" /> Reinforcement Learning Markov Decision Process (MDP)
                </h2>
                <span className="text-xs font-mono text-emerald-400">Q(s, a) Bellman Optimality</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800 space-y-1">
                  <span className="text-slate-500 font-mono text-[10px] uppercase">State Space S</span>
                  <div className="text-sm font-bold text-white">3,840 States</div>
                  <p className="text-[11px] text-slate-400">Genomics + eGFR + ALT/AST + Disease Stage</p>
                </div>
                <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800 space-y-1">
                  <span className="text-slate-500 font-mono text-[10px] uppercase">Action Space A</span>
                  <div className="text-sm font-bold text-cyan-400">87 Drug/Dose Actions</div>
                  <p className="text-[11px] text-slate-400">Candidate selection & +/- dosage scaling</p>
                </div>
                <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800 space-y-1">
                  <span className="text-slate-500 font-mono text-[10px] uppercase">Discount Factor γ</span>
                  <div className="text-sm font-bold text-emerald-400">γ = 0.90 | α = 0.50</div>
                  <p className="text-[11px] text-slate-400">Multi-stage treatment trajectory optimization</p>
                </div>
              </div>

              {/* Q-LEARNING LOSS GRAPH */}
              <div className="h-64 pt-2">
                <div className="text-xs font-semibold text-white mb-2">Q-Learning Convergence & Loss Reduction</div>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={qLossData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                    <XAxis dataKey="episode" stroke="#94a3b8" fontSize={11} />
                    <YAxis stroke="#94a3b8" fontSize={11} />
                    <Tooltip contentStyle={{ backgroundColor: '#090d16', borderColor: '#1e293b', fontSize: 11 }} />
                    <Line type="monotone" dataKey="qVal" stroke="#22d3ff" strokeWidth={2} name="Mean Q-Value" />
                    <Line type="monotone" dataKey="loss" stroke="#ff4d6d" strokeWidth={2} name="Bellman Loss" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}

          {/* TAB 3: PRESCRIPTIONS */}
          {activeTab === 'prescriptions' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <h2 className="text-lg font-orbitron font-bold text-white flex items-center gap-2">
                  <FileText className="w-5 h-5 text-cyan-400" /> Prescriptions & Drug Interaction Matrix
                </h2>
                <span className="text-xs font-mono text-cyan-400">RxNorm Verified</span>
              </div>

              <div className="space-y-3 text-xs">
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-sm text-white">Metformin 500mg (Twice Daily)</span>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono text-[10px]">Optimal</span>
                  </div>
                  <p className="text-slate-400">Indication: Type 2 Diabetes Mellitus. eGFR &gt; 60 mL/min threshold satisfied.</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-sm text-white">Atorvastatin 20mg (Once Daily at Night)</span>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono text-[10px]">Optimal</span>
                  </div>
                  <p className="text-slate-400">Indication: Cardiovascular risk reduction. SLCO1B1 Normal transporter status confirmed.</p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: PHARMACOGENOMICS */}
          {activeTab === 'pharmacogenomics' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <h2 className="text-lg font-orbitron font-bold text-white flex items-center gap-2">
                  <Dna className="w-5 h-5 text-cyan-400" /> Pharmacogenomics & CPIC Level 1A/1B Guidelines
                </h2>
                <span className="text-xs font-mono text-cyan-400">PharmGKB & ClinVar</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
                  <span className="font-bold text-sm text-white flex items-center gap-2">
                    <Dna className="w-4 h-4 text-cyan-400" /> CYP2D6 (*4/*4) Poor Metabolizer
                  </span>
                  <p className="text-slate-400">Codeine and Tramadol analgesia conversion impaired. CPIC recommends selecting non-CYP2D6 analgesics.</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
                  <span className="font-bold text-sm text-white flex items-center gap-2">
                    <Dna className="w-4 h-4 text-cyan-400" /> CYP2C9 (*2/*3) Poor Metabolizer
                  </span>
                  <p className="text-slate-400">Warfarin clearance reduced by 75%. CPIC Level 1A guidelines mandate initial dose reduction of 50-75%.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
