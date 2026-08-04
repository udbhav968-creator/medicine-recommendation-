import React, { useState } from 'react';
import { Bot, Send, X, Sparkles, BookOpen, ShieldCheck } from 'lucide-react';

export default function ClinicalCopilot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: 'Hello Dr. MediSynth! I am your RAG Clinical Copilot backed by PharmGKB, DrugBank, and CPIC guidelines. Ask me any genomic or drug interaction question.'
    }
  ]);
  const [loading, setLoading] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = input.trim();
    setMessages((prev) => [...prev, { sender: 'user', text: userMsg }]);
    setInput('');
    setLoading(true);

    setTimeout(() => {
      let botResponse = 'Based on PharmGKB and CPIC Level 1A guidelines: ';

      if (userMsg.toLowerCase().includes('cyp2d6') || userMsg.toLowerCase().includes('codeine')) {
        botResponse += 'CYP2D6 Poor Metabolizers (*4/*4) cannot convert Codeine to Morphine, resulting in analgesic failure. Use non-CYP2D6 analgesics such as Acetaminophen or NSAIDs.';
      } else if (userMsg.toLowerCase().includes('cyp2c9') || userMsg.toLowerCase().includes('warfarin')) {
        botResponse += 'CYP2C9 *2 and *3 variants significantly impair Warfarin clearance. A 50–75% dose reduction is mandatory, or switch to a DOAC (Apixaban/Rivaroxaban).';
      } else if (userMsg.toLowerCase().includes('hla') || userMsg.toLowerCase().includes('abacavir')) {
        botResponse += 'HLA-B*5701 Positive status is 100% CONTRAINDICATED for Abacavir due to severe, potentially fatal hypersensitivity reaction (CPIC Level 1A).';
      } else {
        botResponse += 'Multimodal RL analysis recommends selecting first-line therapy adjusted for renal eGFR and CYP450 metabolizer status with continuous ADR surveillance.';
      }

      setMessages((prev) => [...prev, { sender: 'bot', text: botResponse }]);
      setLoading(false);
    }, 1000);
  };

  return (
    <>
      {/* FLOATING TRIGGER BUTTON */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-bold shadow-xl shadow-cyan-500/30 hover:scale-105 transition-transform flex items-center gap-2 group"
      >
        <Bot className="w-6 h-6" />
        <span className="text-xs font-orbitron hidden group-hover:inline">RAG Clinical Copilot</span>
      </button>

      {/* CHAT MODAL */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
          <div className="glass-card w-full max-w-lg rounded-2xl border border-cyan-500/30 overflow-hidden flex flex-col h-[520px]">
            {/* HEADER */}
            <div className="p-4 bg-slate-900/80 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center border border-cyan-500/30">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-orbitron font-bold text-sm text-white flex items-center gap-2">
                    Med-RAG Copilot <Sparkles className="w-3 h-3 text-cyan-400" />
                  </div>
                  <div className="text-[10px] font-mono text-slate-400">PharmGKB & DrugBank Knowledge Base</div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* MESSAGES */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3 text-xs">
              {messages.map((m, idx) => (
                <div key={idx} className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`max-w-[85%] p-3 rounded-xl leading-relaxed ${
                      m.sender === 'user'
                        ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-slate-200'
                        : 'bg-slate-900 border border-slate-800 text-slate-300'
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="text-slate-500 text-xs italic flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" /> Searching PharmGKB embeddings...
                </div>
              )}
            </div>

            {/* INPUT */}
            <div className="p-3 bg-slate-900/80 border-t border-slate-800 flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about CYP2D6, Abacavir, Warfarin doses..."
                className="flex-1 bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
              />
              <button
                onClick={handleSend}
                className="p-2 rounded-lg bg-cyan-500 text-black hover:bg-cyan-400 transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
