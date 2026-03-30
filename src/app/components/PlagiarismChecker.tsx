"use client";

import React, { useState, useMemo } from 'react';
import { HiExclamationTriangle } from 'react-icons/hi2';
import Skeleton from './Skeleton';

interface Source { url: string; title: string; matchPercentage: number; }
interface Result { overallPercent: number; sources: Source[]; }

const PlagiarismChecker: React.FC = () => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<Result | null>(null);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);

  const canScan = useMemo(() => input.trim().length > 50, [input]);

  const handleScan = async () => {
    setLoading(true); setResult(null); setError(null); setProgress(0);
    const interval = setInterval(() => setProgress(p => (p >= 90 ? 90 : p + 5)), 150);
    try {
      const res = await fetch("/api/plagiarism", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ text: input }) });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Fetch failed");
      setProgress(100); setResult(data);
    } catch (e) { setError(e instanceof Error ? e.message : "An unexpected error occurred.");
    } finally { clearInterval(interval); setTimeout(() => setLoading(false), 300); }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-32">
      <div className="text-center mb-8 sm:mb-12 animate-fade-in">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold gradient-heading tracking-tighter mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
          Plagiarism Checker
        </h1>
        <p className="text-base sm:text-xl leading-relaxed" style={{ color: 'var(--muted)' }}>
          Verify content originality against billions of web pages and academic records.
        </p>
      </div>

      <div className="glass-card p-4 sm:p-8 mb-6 sm:mb-8">
        <textarea placeholder="Paste the text you want to check for plagiarism (minimum 50 characters)..." value={input} onChange={(e) => setInput(e.target.value)} disabled={loading}
          className="w-full min-h-[180px] sm:min-h-[250px] rounded-2xl p-4 sm:p-6 text-sm sm:text-base leading-relaxed resize-none bg-white outline-none transition-all duration-300 disabled:opacity-50"
          style={{ border: '1px solid var(--border)', color: 'var(--text)' }}
          onFocus={e => { e.target.style.borderColor = 'var(--primary)'; e.target.style.boxShadow = '0 0 0 4px var(--primary-soft)'; }}
          onBlur={e => { e.target.style.borderColor = 'var(--border)'; e.target.style.boxShadow = 'none'; }}
        />
        <div className="flex items-center justify-between mt-4 sm:mt-6">
          <span className="text-xs sm:text-sm" style={{ color: 'var(--muted)' }}>{input.length} characters</span>
          <button className="px-6 sm:px-8 py-2.5 sm:py-3 bg-theme text-white rounded-2xl font-bold text-sm sm:text-base border-none cursor-pointer transition-all duration-300 shadow-theme hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={handleScan} disabled={!canScan || loading}>
            {loading ? "Scanning..." : "Check Plagiarism"}
          </button>
        </div>
      </div>

      {loading && (
        <div className="mb-6 sm:mb-8 animate-fade-in">
          <div className="w-full h-1.5 rounded-full overflow-hidden" style={{ background: 'var(--border)' }}>
            <div className="h-full bg-theme rounded-full transition-all duration-300" style={{ width: `${progress}%` }}></div>
          </div>
          <p className="text-xs sm:text-sm mt-3 text-center" style={{ color: 'var(--muted)' }}>Analyzing text and searching for matches...</p>
        </div>
      )}

      {error && (
        <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-red-50 border-l-4 border-red-500 rounded-2xl mb-6 sm:mb-8 animate-fade-in">
          <div className="text-red-500 text-xl sm:text-2xl mt-0.5"><HiExclamationTriangle /></div>
          <div><h4 className="font-bold text-red-800 mb-1 text-sm">Scan Error</h4><p className="text-red-700 text-xs sm:text-sm">{error}</p></div>
        </div>
      )}

      {loading ? (
        <div className="flex flex-col gap-6 sm:gap-8 animate-fade-in">
          <div className="glass-card p-6 sm:p-8 flex flex-col items-center"><Skeleton type="card" width="120px" height="120px" style={{ borderRadius: '50%' }} /><Skeleton type="title" width="150px" /><Skeleton type="text" width="80%" /></div>
          <div className="glass-card p-6 sm:p-8"><Skeleton type="title" width="120px" /><Skeleton type="text" width="100%" /><Skeleton type="text" width="100%" /></div>
        </div>
      ) : result && (
        <div className="flex flex-col gap-6 sm:gap-8 animate-fade-in">
          <div className="glass-card p-6 sm:p-10 flex flex-col items-center text-center">
            <div className="w-24 h-24 sm:w-32 sm:h-32 mb-4 sm:mb-6">
              <svg viewBox="0 0 36 36" className="w-full h-full">
                <path className="fill-none" stroke="var(--border)" strokeWidth="3" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                <path className="fill-none" stroke="var(--primary)" strokeWidth="3" strokeLinecap="round" strokeDasharray={`${result.overallPercent}, 100`} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                <text x="18" y="20.35" textAnchor="middle" className="text-[0.5rem] font-bold" style={{ fill: 'var(--text)', fontFamily: 'var(--font-heading)' }}>{result.overallPercent}%</text>
              </svg>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-4" style={{ color: 'var(--text)', fontFamily: 'var(--font-heading)' }}>Similarity Detected</h3>
            <div className="p-4 sm:p-6 rounded-2xl w-full max-w-md" style={{ background: 'var(--bg)' }}>
              <h4 className="font-bold mb-2" style={{ color: 'var(--text)' }}>Scan Verdict</h4>
              <p className="text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                {result.overallPercent < 5 ? "Great! Your content is highly original." : result.overallPercent < 20 ? "Good, but some similarity found. Check sources." : "High similarity detected. Check existing matches."}
              </p>
            </div>
          </div>
          <div className="glass-card p-4 sm:p-8">
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6" style={{ color: 'var(--text)', fontFamily: 'var(--font-heading)' }}>Top Matches</h3>
            {result.sources.length > 0 ? (
              <div className="flex flex-col gap-3 sm:gap-4">
                {result.sources.map((source, i) => (
                  <div key={i} className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 sm:p-5 rounded-2xl transition-all duration-300 gap-3"
                    style={{ background: 'var(--bg)', border: '1px solid var(--border)' }}>
                    <div className="flex flex-col gap-1">
                      <span className="text-xs sm:text-sm font-semibold" style={{ color: 'var(--text)' }}>{source.title}</span>
                      <a href={source.url} target="_blank" rel="noopener noreferrer" className="text-xs text-theme no-underline hover:underline">{source.url.replace(/^https?:\/\//, '').split('/')[0]}</a>
                    </div>
                    <div className="flex items-center gap-3 sm:gap-4 min-w-[100px] sm:min-w-[120px]">
                      <span className="text-base sm:text-lg font-bold" style={{ color: 'var(--text)' }}>{source.matchPercentage}%</span>
                      <div className="w-12 sm:w-16 h-1.5 rounded-full overflow-hidden" style={{ background: 'var(--border)' }}>
                        <div className="h-full bg-theme rounded-full" style={{ width: `${source.matchPercentage}%` }}></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (<p className="text-center py-6 sm:py-8 text-sm" style={{ color: 'var(--muted)' }}>No significant matches found.</p>)}
          </div>
        </div>
      )}
    </div>
  );
};

export default PlagiarismChecker;
