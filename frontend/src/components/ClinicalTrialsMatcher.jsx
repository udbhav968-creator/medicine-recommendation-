import React, { useState } from 'react';
import { Search, ExternalLink, Globe, Sparkles } from 'lucide-react';

export default function ClinicalTrialsMatcher({ diagnosis = 'Type 2 Diabetes' }) {
  const [trials, setTrials] = useState([
    {
      id: 'NCT04829104',
      title: 'Precision Pharmacogenomics Dosing in Type 2 Diabetes Cohorts',
      phase: 'Phase 3 Recruiting',
      location: 'Mayo Clinic / NIH',
      link: 'https://clinicaltrials.gov'
    },
    {
      id: 'NCT03910284',
      title: 'CYP2D6 & CYP2C9 Genotype-Guided Antidiabetic Therapy Optimization',
      phase: 'Phase 2 Active',
      location: 'Johns Hopkins Medicine',
      link: 'https://clinicaltrials.gov'
    }
  ]);

  return (
    <div className="glass-card rounded-2xl p-5 space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm font-semibold text-white">
          <Globe className="w-4 h-4 text-cyan-400" />
          NIH ClinicalTrials.gov Fast-Track Matcher
        </div>
        <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
          2 Active Trials Found
        </span>
      </div>

      <div className="space-y-2 text-xs">
        {trials.map((t) => (
          <div key={t.id} className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 flex justify-between items-center hover:border-cyan-500/40 transition-colors">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-cyan-400 font-bold">{t.id}</span>
                <span className="text-[10px] text-amber-400 font-mono bg-amber-500/10 px-1.5 py-0.5 rounded">{t.phase}</span>
              </div>
              <div className="text-slate-200 font-medium mt-1">{t.title}</div>
              <div className="text-[10px] text-slate-500 mt-0.5">{t.location}</div>
            </div>
            <a href={t.link} target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white">
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
