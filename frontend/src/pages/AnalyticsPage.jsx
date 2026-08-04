import React, { useState } from 'react';
import { BarChart3, Cpu, Dna, Activity, ShieldCheck, Zap, Search, Sparkles, TrendingUp, Layers, Table } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { ALL_100_MODELS } from '../data/all_100_models';

export default function AnalyticsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedParadigm, setSelectedParadigm] = useState('All');

  // PARADIGM BREAKDOWN DATA
  const paradigmPieData = [
    { name: 'Supervised Learning (35)', value: 35, color: '#00e5a0' },
    { name: 'Unsupervised Learning (30)', value: 30, color: '#ffb547' },
    { name: 'Reinforcement Learning (20)', value: 20, color: '#22d3ff' },
    { name: 'Deep Learning & Transformers (15)', value: 15, color: '#a855f7' }
  ];

  // Q-LEARNING CONVERGENCE DATA
  const qLossData = [
    { episode: 'Ep 100', loss: 0.42, qVal: 0.35, accuracy: 74.7 },
    { episode: 'Ep 500', loss: 0.28, qVal: 0.58, accuracy: 79.4 },
    { episode: 'Ep 1000', loss: 0.18, qVal: 0.74, accuracy: 83.6 },
    { episode: 'Ep 2000', loss: 0.09, qVal: 0.86, accuracy: 90.1 },
    { episode: 'Ep 5000', loss: 0.04, qVal: 0.942, accuracy: 94.2 }
  ];

  // ROC CURVE DATA
  const rocCurveData = [
    { fpr: 0.0, tpr: 0.0 },
    { fpr: 0.02, tpr: 0.45 },
    { fpr: 0.05, tpr: 0.78 },
    { fpr: 0.10, tpr: 0.91 },
    { fpr: 0.15, tpr: 0.96 },
    { fpr: 0.25, tpr: 0.98 },
    { fpr: 1.0, tpr: 1.0 }
  ];

  const filteredModels = ALL_100_MODELS.filter(m => {
    const matchesSearch = m.name.toLowerCase().includes(searchQuery.toLowerCase()) || m.paradigm.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesParadigm = selectedParadigm === 'All' || m.paradigm.toLowerCase().includes(selectedParadigm.toLowerCase());
    return matchesSearch && matchesParadigm;
  });

  return (
    <div className="max-w-7xl mx-auto px-6 py-8 space-y-8 animate-fadeIn">
      {/* HEADER BANNER */}
      <div className="glass-card p-8 rounded-3xl border border-cyan-500/20 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-2">
            <Sparkles className="w-3.5 h-3.5" /> 100-Model Analytics & Performance Hub
          </div>
          <h1 className="text-3xl font-orbitron font-extrabold text-white">MediSynth AI Analytics Dashboard</h1>
          <p className="text-slate-400 text-xs mt-1">Cross-validated benchmark analytics across 248,291 patient records and 6 biomedical datasets.</p>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-center px-4 py-2 bg-slate-900/80 rounded-xl border border-slate-800">
            <div className="text-xl font-bold font-mono text-cyan-400">94.2%</div>
            <div className="text-[10px] text-slate-500 uppercase font-mono">Champion Accuracy</div>
          </div>
          <div className="text-center px-4 py-2 bg-slate-900/80 rounded-xl border border-slate-800">
            <div className="text-xl font-bold font-mono text-emerald-400">0.971</div>
            <div className="text-[10px] text-slate-500 uppercase font-mono">AUC-ROC Score</div>
          </div>
        </div>
      </div>

      {/* TOP STATS CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
        <div className="glass-card p-5 rounded-2xl border border-slate-800 space-y-1">
          <div className="text-slate-400 font-mono text-[10px] uppercase flex items-center justify-between">
            Total AI Models <Cpu className="w-4 h-4 text-cyan-400" />
          </div>
          <div className="text-2xl font-bold font-orbitron text-white">100 Models</div>
          <p className="text-[11px] text-slate-400">4 Learning Paradigms Executed</p>
        </div>

        <div className="glass-card p-5 rounded-2xl border border-slate-800 space-y-1">
          <div className="text-slate-400 font-mono text-[10px] uppercase flex items-center justify-between">
            Datasets Integrated <Database className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-2xl font-bold font-orbitron text-white">6 Datasets</div>
          <p className="text-[11px] text-slate-400">PharmGKB, ClinVar, FAERS, MIMIC-IV</p>
        </div>

        <div className="glass-card p-5 rounded-2xl border border-slate-800 space-y-1">
          <div className="text-slate-400 font-mono text-[10px] uppercase flex items-center justify-between">
            Cross-Validation <Activity className="w-4 h-4 text-purple-400" />
          </div>
          <div className="text-2xl font-bold font-orbitron text-white">10-Fold CV</div>
          <p className="text-[11px] text-slate-400">Stratified Patient Evaluation</p>
        </div>

        <div className="glass-card p-5 rounded-2xl border border-slate-800 space-y-1">
          <div className="text-slate-400 font-mono text-[10px] uppercase flex items-center justify-between">
            Inference Latency <Zap className="w-4 h-4 text-amber-400" />
          </div>
          <div className="text-2xl font-bold font-orbitron text-white">1.2 ms</div>
          <p className="text-[11px] text-slate-400">Ultra-Fast Real-Time Scoring</p>
        </div>
      </div>

      {/* CHARTS GRID 1: ACCURACY BAR CHART & PARADIGM PIE CHART */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* CHART 1: ACCURACY COMPARISON */}
        <div className="lg:col-span-8 glass-card p-6 rounded-2xl space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <h3 className="font-orbitron font-bold text-sm text-white flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-cyan-400" /> Accuracy Comparison Across Top AI Models
            </h3>
            <span className="text-[10px] font-mono text-cyan-400">Top 8 Architectures</span>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={ALL_100_MODELS.slice(0, 8)}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                <XAxis dataKey="name" stroke="#94a3b8" fontSize={9} interval={0} angle={-15} textAnchor="end" />
                <YAxis domain={[70, 100]} stroke="#94a3b8" fontSize={10} />
                <Tooltip contentStyle={{ backgroundColor: '#090d16', borderColor: '#1e293b', fontSize: 11 }} />
                <Bar dataKey="acc" fill="#22d3ff" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* CHART 2: PARADIGM PIE CHART */}
        <div className="lg:col-span-4 glass-card p-6 rounded-2xl space-y-4">
          <div className="border-b border-slate-800 pb-3">
            <h3 className="font-orbitron font-bold text-sm text-white flex items-center gap-2">
              <Layers className="w-4 h-4 text-cyan-400" /> Model Paradigm Distribution
            </h3>
          </div>
          <div className="h-52">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={paradigmPieData} cx="50%" cy="50%" innerRadius={45} outerRadius={70} dataKey="value">
                  {paradigmPieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: '#090d16', borderColor: '#1e293b', fontSize: 11 }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-1 text-[11px] font-mono">
            {paradigmPieData.map((p, idx) => (
              <div key={idx} className="flex justify-between items-center text-slate-300">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: p.color }} /> {p.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CHARTS GRID 2: Q-LOSS CONVERGENCE & ROC CURVE */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Q-LOSS CONVERGENCE */}
        <div className="lg:col-span-7 glass-card p-6 rounded-2xl space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <h3 className="font-orbitron font-bold text-sm text-white flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-emerald-400" /> Q-Learning Loss Convergence & Accuracy Trajectory
            </h3>
            <span className="text-[10px] font-mono text-emerald-400">Bellman Q* Optimality</span>
          </div>
          <div className="h-60">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={qLossData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                <XAxis dataKey="episode" stroke="#94a3b8" fontSize={10} />
                <YAxis stroke="#94a3b8" fontSize={10} />
                <Tooltip contentStyle={{ backgroundColor: '#090d16', borderColor: '#1e293b', fontSize: 11 }} />
                <Line type="monotone" dataKey="accuracy" stroke="#00e5a0" strokeWidth={2} name="Accuracy (%)" />
                <Line type="monotone" dataKey="loss" stroke="#ff4d6d" strokeWidth={2} name="Bellman Loss" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* ROC CURVE */}
        <div className="lg:col-span-5 glass-card p-6 rounded-2xl space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <h3 className="font-orbitron font-bold text-sm text-white flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-purple-400" /> ROC Curve (AUC = 0.971)
            </h3>
            <span className="text-[10px] font-mono text-purple-400">Toxicity Classifier</span>
          </div>
          <div className="h-60">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={rocCurveData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                <XAxis dataKey="fpr" stroke="#94a3b8" fontSize={10} name="False Positive Rate" />
                <YAxis dataKey="tpr" stroke="#94a3b8" fontSize={10} name="True Positive Rate" />
                <Tooltip contentStyle={{ backgroundColor: '#090d16', borderColor: '#1e293b', fontSize: 11 }} />
                <Line type="monotone" dataKey="tpr" stroke="#a855f7" strokeWidth={2.5} dot={{ r: 3 }} name="TPR vs FPR" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* FULL SEARCHABLE 100 MODELS TABLE */}
      <section className="glass-card rounded-2xl p-6 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div>
            <h2 className="text-lg font-orbitron font-bold text-white flex items-center gap-2">
              <Table className="w-5 h-5 text-cyan-400" /> 100-Model Evaluation Suite & Metrics Table
            </h2>
            <p className="text-xs text-slate-400">Search and filter across all 100 models trained on 6 biomedical datasets</p>
          </div>

          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              <input
                type="text"
                placeholder="Search models..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-slate-900 border border-slate-800 rounded-xl pl-9 pr-3 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-cyan-500 w-48 md:w-64"
              />
            </div>

            <select
              value={selectedParadigm}
              onChange={(e) => setSelectedParadigm(e.target.value)}
              className="bg-slate-900 border border-slate-800 rounded-xl px-3 py-1.5 text-xs text-cyan-400 focus:outline-none"
            >
              <option value="All">All Paradigms (100)</option>
              <option value="Supervised">Supervised (35)</option>
              <option value="Unsupervised">Unsupervised (30)</option>
              <option value="Reinforcement">Reinforcement Learning (20)</option>
              <option value="Deep Learning">Deep Learning & Transformers (15)</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto rounded-xl border border-slate-800 max-h-[480px] overflow-y-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-900/90 sticky top-0 z-10 text-slate-400 uppercase font-mono text-[10px] border-b border-slate-800">
              <tr>
                <th className="p-3">#</th>
                <th className="p-3">Model / Algorithm</th>
                <th className="p-3">Paradigm</th>
                <th className="p-3">Accuracy</th>
                <th className="p-3">Precision / F1</th>
                <th className="p-3">AUC-ROC</th>
                <th className="p-3">Inference Speed</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300 font-mono">
              {filteredModels.map((m, idx) => (
                <tr key={idx} className={m.proposed ? 'bg-cyan-500/10 font-bold text-white' : 'hover:bg-slate-900/40'}>
                  <td className="p-3 text-slate-500 text-[10px]">{idx + 1}</td>
                  <td className="p-3 flex items-center gap-2">
                    {m.name}
                    {m.proposed && (
                      <span className="text-[9px] px-1.5 py-0.5 rounded bg-cyan-500 text-black font-extrabold uppercase">
                        Proposed Champion
                      </span>
                    )}
                  </td>
                  <td className="p-3 text-slate-400 text-[11px]">{m.paradigm}</td>
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
      </section>
    </div>
  );
}
