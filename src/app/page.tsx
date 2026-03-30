"use client";

import { useMemo, useState, useEffect } from "react";
import Pricing from "./components/Pricing";
import Skeleton from "./components/Skeleton";
import { HiSparkles, HiOutlineClipboard, HiOutlineTrash, HiCheck } from "react-icons/hi2";
import { MdErrorOutline } from "react-icons/md";

type Strength = "low" | "medium" | "high";

export default function Home() {
  const [strength, setStrength] = useState<Strength>("medium");
  const [input, setInput] = useState<string>("");
  const [output, setOutput] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const canSubmit = useMemo(() => input.trim().length > 10 && !loading, [input, loading]);
  const wordCount = useMemo(() => input.trim() ? input.trim().split(/\s+/).length : 0, [input]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (loading) {
      setProgress(0);
      interval = setInterval(() => {
        setProgress(prev => (prev >= 90 ? 90 : prev + 2));
      }, 100);
    } else {
      setProgress(0);
    }
    return () => clearInterval(interval);
  }, [loading]);

  async function onHumanize() {
    if (!canSubmit) return;
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/humanize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: input, strength }),
      });
      const data = (await res.json()) as { result?: string; error?: string };
      if (!res.ok) throw new Error(data.error ?? "Request failed.");
      setOutput(data.result ?? "");
      setProgress(100);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Unknown error");
    } finally {
      setTimeout(() => setLoading(false), 300);
    }
  }

  const handleCopy = () => {
    if (!output) return;
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleClear = () => {
    setInput("");
    setOutput("");
    setError(null);
  };

  return (
    <main className="min-h-screen w-full pt-24 sm:pt-32"
      style={{ background: 'radial-gradient(circle at top right, var(--primary-soft), transparent 40%), radial-gradient(circle at bottom left, var(--primary-soft), transparent 40%)' }}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 pb-16">
        {/* Header */}
        <header className="text-center mb-10 sm:mb-16 animate-fade-in">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-4 tracking-tighter gradient-heading" style={{ fontFamily: 'var(--font-heading)' }}>
            Humanize AI Text Into Human-Like Content
          </h1>
          <p className="text-base sm:text-xl max-w-xl mx-auto" style={{ color: 'var(--muted)' }}>
            Transform AI-generated text into natural, human-like content with our advanced multi-pass rewriting engine.
          </p>
        </header>

        {/* Tool Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-16 sm:mb-24">
          {/* Input Panel */}
          <div className="glass-card flex flex-col p-4 sm:p-8 min-h-[400px] sm:min-h-[500px]">
            <div className="flex justify-between items-center mb-4 sm:mb-6">
              <label className="font-semibold text-base sm:text-lg" style={{ color: 'var(--text)', fontFamily: 'var(--font-heading)' }}>Input Text</label>
              <button
                className="w-9 h-9 sm:w-10 sm:h-10 bg-white rounded-lg flex items-center justify-center cursor-pointer transition-all duration-300 disabled:opacity-30"
                style={{ border: '1px solid var(--border)', color: 'var(--muted)' }}
                onClick={handleClear}
                aria-label="Clear all input and output text"
                title="Clear text"
                disabled={!input && !output}
              >
                <HiOutlineTrash size={18} />
              </button>
            </div>

            <div className="relative flex-grow flex flex-col">
              <textarea
                className="w-full flex-grow min-h-[200px] sm:min-h-[350px] rounded-2xl p-4 sm:p-6 text-sm sm:text-base leading-relaxed resize-none bg-white transition-all duration-300 outline-none"
                style={{ border: '1px solid var(--border)', color: 'var(--text)', fontFamily: 'var(--font-body)', boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.02)' }}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Paste your AI-generated text here (min 10 characters)..."
                onFocus={e => { e.target.style.borderColor = 'var(--primary)'; e.target.style.boxShadow = '0 0 0 4px var(--primary-soft)'; }}
                onBlur={e => { e.target.style.borderColor = 'var(--border)'; e.target.style.boxShadow = 'inset 0 2px 4px rgba(0,0,0,0.02)'; }}
              />
            </div>

            {/* Controls */}
            <div className="mt-4 sm:mt-6 flex flex-col gap-4 sm:gap-6">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--muted)' }}>Rewriting Strength</span>
                <div className="flex p-1 rounded-xl" style={{ background: 'var(--bg)', border: '1px solid var(--border)' }}>
                  {(["low", "medium", "high"] as Strength[]).map((s) => (
                    <button
                      key={s}
                      className="px-4 sm:px-5 py-2 border-none rounded-lg text-xs sm:text-sm font-semibold cursor-pointer transition-all duration-300"
                      style={{
                        background: strength === s ? 'white' : 'transparent',
                        color: strength === s ? 'var(--primary)' : 'var(--muted)',
                        boxShadow: strength === s ? '0 2px 8px rgba(0,0,0,0.05)' : 'none',
                      }}
                      onClick={() => setStrength(s)}
                    >
                      {s.charAt(0).toUpperCase() + s.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-xs sm:text-sm" style={{ color: 'var(--muted)' }}>{wordCount} words</span>
                <button
                  className="px-6 sm:px-10 py-3 sm:py-4 bg-theme text-white border-none rounded-2xl font-bold text-sm sm:text-lg cursor-pointer transition-all duration-300 shadow-theme flex items-center gap-2 sm:gap-3 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                  style={{ fontFamily: 'var(--font-heading)' }}
                  onClick={onHumanize}
                  disabled={!canSubmit}
                >
                  {loading ? "Processing..." : (<><HiSparkles /> Humanize</>)}
                </button>
              </div>
            </div>

            {error && (
              <div className="mt-4 py-3 px-4 bg-red-50 border-l-4 border-red-500 text-red-700 rounded-lg text-sm flex items-center gap-2">
                <MdErrorOutline size={18} />{error}
              </div>
            )}
          </div>

          {/* Output Panel */}
          <div className="glass-card flex flex-col p-4 sm:p-8 min-h-[400px] sm:min-h-[500px]">
            <div className="flex justify-between items-center mb-4 sm:mb-6">
              <label className="font-semibold text-base sm:text-lg" style={{ color: 'var(--text)', fontFamily: 'var(--font-heading)' }}>Humanized Result</label>
              <button
                className="w-9 h-9 sm:w-10 sm:h-10 bg-white rounded-lg flex items-center justify-center cursor-pointer transition-all duration-300 disabled:opacity-30"
                style={{ border: '1px solid var(--border)', color: 'var(--muted)' }}
                onClick={handleCopy}
                title="Copy to clipboard"
                aria-label="Copy humanized text to clipboard"
                disabled={!output}
              >
                {copied ? <HiCheck size={18} style={{ color: 'var(--primary)' }} /> : <HiOutlineClipboard size={18} />}
              </button>
            </div>

            <div className="relative flex-grow flex flex-col">
              {loading && (
                <div className="absolute top-0 left-0 w-full h-1 rounded-t overflow-hidden">
                  <div className="h-full bg-theme transition-all duration-300" style={{ width: `${progress}%` }} />
                </div>
              )}
              {loading ? (
                <div className="flex flex-col gap-5 p-4 sm:p-8 bg-white h-full rounded-2xl animate-fade-in">
                  <Skeleton type="text" width="90%" />
                  <Skeleton type="text" width="100%" />
                  <Skeleton type="text" width="95%" />
                  <Skeleton type="text" width="80%" />
                  <Skeleton type="text" width="90%" />
                  <Skeleton type="text" width="70%" />
                </div>
              ) : (
                <textarea
                  className={`w-full flex-grow min-h-[200px] sm:min-h-[350px] rounded-2xl p-4 sm:p-6 text-sm sm:text-base leading-relaxed resize-none cursor-default outline-none ${output ? "animate-fade-in" : ""}`}
                  style={{ border: '1px solid var(--border)', color: 'var(--text)', background: 'var(--bg)', fontFamily: 'var(--font-body)' }}
                  value={output}
                  readOnly
                  placeholder="Your humanized text will appear here..."
                />
              )}
            </div>
          </div>
        </section>

        <Pricing />
      </div>
    </main>
  );
}
