import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-[#02060f] py-8 px-6 mt-16 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <div className="font-orbitron text-slate-200 font-bold mb-1">MediSynth AI — Precision Medicine v3.0</div>
          <div>Integrated Datasets: PharmGKB • DrugBank • CPIC Guidelines • ClinVar • FDA FAERS</div>
        </div>
        <div className="text-right">
          <div>Developed by <a href="https://github.com/udbhav968-creator" target="_blank" rel="noreferrer" className="text-cyan-400 font-semibold hover:underline">Udbhav Yadav (@udbhav968-creator)</a></div>
          <div className="text-[11px] text-slate-500 mt-1">© {new Date().getFullYear()} MediSynth AI. Open Source under MIT License.</div>
        </div>
      </div>
    </footer>
  );
}
