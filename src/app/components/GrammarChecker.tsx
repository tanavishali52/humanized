"use client";

import React, { useState, useMemo } from 'react';
import { HiExclamation, HiArrowNarrowRight, HiCheckCircle } from 'react-icons/hi';
import Skeleton from './Skeleton';

interface GrammarError { original: string; replacement: string; explanation: string; type: 'grammar' | 'spelling' | 'punctuation' | 'style'; }
interface GrammarResult { correctedText: string; errors: GrammarError[]; }

const GrammarChecker: React.FC = () => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<GrammarResult | null>(null);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const canCheck = useMemo(() => input.trim().length > 10, [input]);

  const handleCheck = async () => {
    setLoading(true); setResult(null); setError(null); setProgress(0);
    const interval = setInterval(() => setProgress(p => (p >= 90 ? 90 : p + 5)), 150);
    try {
      const res = await fetch("/api/grammar", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ text: input }) });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Grammar check failed");
      setProgress(100); setResult(data);
    } catch (e) { setError(e instanceof Error ? e.message : "An unexpected error occurred.");
    } finally { clearInterval(interval); setTimeout(() => setLoading(false), 300); }
  };

  const handleCopy = () => {
    if (result?.correctedText) { navigator.clipboard.writeText(result.correctedText); setCopied(true); setTimeout(() => setCopied(false), 2000); }
  };

  const badgeColors: Record<string, string> = {
    grammar: 'bg-red-100 text-red-700', spelling: 'bg-orange-100 text-orange-700',
    punctuation: 'bg-yellow-100 text-yellow-700', style: 'bg-blue-100 text-blue-700',
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-32">
      <div className="text-center mb-8 sm:mb-12 animate-fade-in">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold gradient-heading tracking-tighter mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
          Grammar & Style Assistant
        </h1>
        <p className="text-base sm:text-xl leading-relaxed" style={{ color: 'var(--muted)' }}>
          Refine your writing with AI-powered corrections and professional style suggestions.
        </p>
      </div>

      <div className="glass-card p-4 sm:p-8 mb-6 sm:mb-8">
        <textarea placeholder="Type or paste your text here (minimum 10 characters)..." value={input} onChange={(e) => setInput(e.target.value)} disabled={loading}
          className="w-full min-h-[180px] sm:min-h-[250px] rounded-2xl p-4 sm:p-6 text-sm sm:text-base leading-relaxed resize-none bg-white outline-none transition-all duration-300 disabled:opacity-50"
          style={{ border: '1px solid var(--border)', color: 'var(--text)' }}
          onFocus={e => { e.target.style.borderColor = 'var(--primary)'; e.target.style.boxShadow = '0 0 0 4px var(--primary-soft)'; }}
          onBlur={e => { e.target.style.borderColor = 'var(--border)'; e.target.style.boxShadow = 'none'; }}
        />
        <div className="flex items-center justify-between mt-4 sm:mt-6">
          <span className="text-xs sm:text-sm" style={{ color: 'var(--muted)' }}>{input.length} characters</span>
          <button className="px-6 sm:px-8 py-2.5 sm:py-3 bg-theme text-white rounded-2xl font-bold text-sm sm:text-base border-none cursor-pointer transition-all duration-300 shadow-theme hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={handleCheck} disabled={!canCheck || loading}>
            {loading ? "Analyzing..." : "Check Grammar"}
          </button>
        </div>
      </div>

      {loading && (
        <div className="mb-6 sm:mb-8 animate-fade-in">
          <div className="w-full h-1.5 rounded-full overflow-hidden" style={{ background: 'var(--border)' }}>
            <div className="h-full bg-theme rounded-full transition-all duration-300" style={{ width: `${progress}%` }}></div>
          </div>
          <p className="text-xs sm:text-sm mt-3 text-center" style={{ color: 'var(--muted)' }}>Analyzing syntax and stylistic flow...</p>
        </div>
      )}

      {error && (
        <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-red-50 border-l-4 border-red-500 rounded-2xl mb-6 sm:mb-8 animate-fade-in">
          <div className="text-red-500 text-xl sm:text-2xl mt-0.5"><HiExclamation /></div>
          <div><h4 className="font-bold text-red-800 mb-1 text-sm">Analysis Error</h4><p className="text-red-700 text-xs sm:text-sm">{error}</p></div>
        </div>
      )}

      {loading ? (
        <div className="flex flex-col gap-6 sm:gap-8 animate-fade-in">
          <div className="glass-card p-4 sm:p-8"><Skeleton type="title" width="200px" /><Skeleton type="text" width="90%" /><Skeleton type="text" width="100%" /><Skeleton type="text" width="95%" /></div>
          <div><Skeleton type="title" width="150px" /><Skeleton type="card" height="100px" /></div>
        </div>
      ) : result && (
        <div className="flex flex-col gap-6 sm:gap-8 animate-fade-in">
          <div className="glass-card p-4 sm:p-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-6 gap-3">
              <h3 className="text-lg sm:text-xl font-bold" style={{ color: 'var(--text)', fontFamily: 'var(--font-heading)' }}>Corrected Text</h3>
              <button className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-bold border-none cursor-pointer transition-all duration-300 ${copied ? 'bg-green-100 text-green-700' : ''}`}
                style={!copied ? { background: 'var(--bg)', color: 'var(--muted)' } : undefined} onClick={handleCopy}>
                {copied ? "Copied!" : "Copy Text"}
              </button>
            </div>
            <div className="p-4 sm:p-6 rounded-2xl text-sm sm:text-base leading-relaxed" style={{ background: 'var(--bg)', color: 'var(--text)' }}>{result.correctedText}</div>
            <div className="flex gap-4 sm:gap-6 mt-6 sm:mt-8 pt-4 sm:pt-6" style={{ borderTop: '1px solid var(--border)' }}>
              {[{ label: 'Issues', val: result.errors.length }, { label: 'Critical', val: result.errors.filter(e => e.type === 'grammar' || e.type === 'spelling').length }, { label: 'Style', val: result.errors.filter(e => e.type === 'style').length }].map(s => (
                <div key={s.label} className="text-center">
                  <span className="block text-xl sm:text-2xl font-extrabold" style={{ color: 'var(--text)', fontFamily: 'var(--font-heading)' }}>{s.val}</span>
                  <span className="text-[10px] sm:text-xs uppercase tracking-wider font-semibold" style={{ color: 'var(--muted)' }}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-3 sm:gap-4">
            <h3 className="text-lg sm:text-xl font-bold" style={{ color: 'var(--text)', fontFamily: 'var(--font-heading)' }}>Detailed Breakdown</h3>
            {result.errors.length > 0 ? result.errors.map((err, i) => (
              <div key={i} className="p-4 sm:p-5 bg-white rounded-2xl transition-all duration-300" style={{ border: '1px solid var(--border)' }}>
                <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-2 sm:mb-3">
                  <span className={`px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase ${badgeColors[err.type] || 'bg-gray-100 text-gray-700'}`}>{err.type}</span>
                  <div className="flex items-center gap-2 text-xs sm:text-sm"><span className="line-through text-red-500">{err.original}</span><HiArrowNarrowRight style={{ color: 'var(--muted)' }} /><span className="text-green-600 font-semibold">{err.replacement}</span></div>
                </div>
                <p className="text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>{err.explanation}</p>
              </div>
            )) : (
              <div className="text-center py-8 sm:py-12 bg-green-50 rounded-2xl"><div className="text-green-500 text-4xl sm:text-5xl mb-4 flex justify-center"><HiCheckCircle /></div><p className="text-green-700 font-semibold text-sm sm:text-base">Perfect! Your text is clear and correct.</p></div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default GrammarChecker;
