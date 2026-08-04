import React, { useState } from 'react';
import { FileText, Printer, QrCode, ShieldCheck, Download, X } from 'lucide-react';

export default function PrescriptionPDF({ patientName = 'Arjun Mehta', drug = 'Metformin 500mg', diagnosis = 'Type 2 Diabetes' }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 text-slate-200 text-xs font-semibold flex items-center gap-2 transition-colors"
      >
        <FileText className="w-4 h-4 text-cyan-400" />
        Generate Verified PDF Prescription
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-8 max-w-xl w-full space-y-6 text-slate-100 shadow-2xl relative">
            <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 text-slate-400 hover:text-white">
              <X className="w-5 h-5" />
            </button>

            {/* CLINIC HEADER */}
            <div className="border-b border-slate-800 pb-4 flex justify-between items-start">
              <div>
                <div className="font-orbitron font-extrabold text-xl text-white">MediSynth AI Precision Health</div>
                <div className="text-xs text-slate-400">Official Clinical Pharmacogenomics Record</div>
              </div>
              <div className="text-right text-[11px] font-mono text-cyan-400">
                Rx ID: MS-{Math.floor(100000 + Math.random() * 900000)}
              </div>
            </div>

            {/* PATIENT INFO */}
            <div className="grid grid-cols-2 gap-4 text-xs bg-slate-900/60 p-4 rounded-xl border border-slate-800">
              <div>
                <span className="text-slate-500 block uppercase font-mono text-[10px]">Patient Name</span>
                <strong className="text-white text-sm">{patientName}</strong>
              </div>
              <div>
                <span className="text-slate-500 block uppercase font-mono text-[10px]">Diagnosis</span>
                <strong className="text-cyan-400 text-sm">{diagnosis}</strong>
              </div>
            </div>

            {/* RX MEDICATIONS */}
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase text-emerald-400 tracking-wider">💊 Prescribed Regimen</span>
              <div className="p-4 rounded-xl bg-slate-900 border border-emerald-500/30 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-base text-white">{drug}</span>
                  <span className="text-xs font-mono text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">CPIC Level 1A Verified</span>
                </div>
                <div className="text-xs text-slate-400">Dosage: Take 1 tablet twice daily after meals. Monitor eGFR quarterly.</div>
              </div>
            </div>

            {/* QR & SIGNATURE */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-800">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-white text-black">
                  <QrCode className="w-10 h-10" />
                </div>
                <div className="text-[11px] text-slate-400 font-mono">
                  Blockchain Hash Verified<br />
                  <span className="text-slate-500">0x7a...94f3</span>
                </div>
              </div>

              <div className="text-right">
                <div className="font-orbitron font-bold text-sm text-cyan-400">Dr. MediSynth, MD</div>
                <div className="text-[10px] text-slate-500 font-mono">Chief Medical AI Officer</div>
              </div>
            </div>

            {/* BUTTONS */}
            <div className="flex gap-3 pt-2">
              <button onClick={() => window.print()} className="flex-1 py-2.5 rounded-xl bg-cyan-500 text-black font-bold text-xs flex items-center justify-center gap-2 hover:bg-cyan-400 transition-colors">
                <Printer className="w-4 h-4" /> Print / Export PDF
              </button>
              <button onClick={() => setIsOpen(false)} className="px-4 py-2.5 rounded-xl bg-slate-900 text-slate-300 text-xs font-semibold hover:text-white">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
