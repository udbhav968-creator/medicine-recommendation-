import React, { useState } from 'react';
import { Box, RotateCw, Sparkles, Layers } from 'lucide-react';

export default function MoleculeViewer3D({ drugName = 'Metformin', smiles = 'C(N)(N)=NC(N)=O' }) {
  const [angle, setAngle] = useState(0);

  const rotate = () => {
    setAngle((prev) => (prev + 45) % 360);
  };

  return (
    <div className="glass-card rounded-2xl p-5 space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm font-semibold text-white">
          <Box className="w-4 h-4 text-cyan-400" />
          3D Molecular Binding Structure Viewer
        </div>
        <button
          onClick={rotate}
          className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors"
          title="Rotate Molecule"
        >
          <RotateCw className="w-4 h-4" />
        </button>
      </div>

      {/* 3D CANVAS CANVAS SIMULATION */}
      <div className="h-48 rounded-xl bg-slate-950/80 border border-slate-800 relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,255,0.1),transparent_70%)] pointer-events-none" />

        <div
          className="transition-transform duration-500 flex items-center justify-center gap-4"
          style={{ transform: `rotate(${angle}deg)` }}
        >
          {/* ATOMS & BONDS GRAPHIC */}
          <div className="w-10 h-10 rounded-full bg-cyan-400 flex items-center justify-center font-bold font-mono text-black text-xs shadow-lg shadow-cyan-400/50">
            N1
          </div>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-500" />
          <div className="w-14 h-14 rounded-full bg-blue-500 flex items-center justify-center font-bold font-mono text-white text-sm shadow-lg shadow-blue-500/50">
            C1
          </div>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-emerald-400" />
          <div className="w-10 h-10 rounded-full bg-emerald-400 flex items-center justify-center font-bold font-mono text-black text-xs shadow-lg shadow-emerald-400/50">
            N2
          </div>
        </div>

        <div className="absolute bottom-2 left-3 text-[10px] font-mono text-slate-400">
          SMILES: <span className="text-cyan-400">{smiles}</span>
        </div>
      </div>

      <div className="flex items-center justify-between text-xs text-slate-400">
        <span>Target Binding Affinity: <strong className="text-emerald-400">-8.4 kcal/mol</strong></span>
        <span className="font-mono text-slate-500">ChemBERTa Vector Dim: 768</span>
      </div>
    </div>
  );
}
