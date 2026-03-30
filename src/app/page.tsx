"use client";

import { useMemo, useState, useEffect } from "react";
import styles from "./page.module.css";
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

  // Fake progress bar logic
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
    <main className={styles.main}>
      <div className={styles.container}>
        <header className={styles.humanizerHeader}>
          <h1 className={styles.humanizerTitle}>Humanizer Engine</h1>
          <p className={styles.humanizerSubtitle}>
            Transform AI-generated text into natural, human-like content with our advanced multi-pass rewriting engine.
          </p>
        </header>

        <section className={styles.humanizerGrid}>
          {/* Input Panel */}
          <div className={`${styles.panel} glass-card`}>
            <div className={styles.panelHeader}>
              <label className={styles.label}>Input Text</label>
              <button 
                className={styles.iconButton} 
                onClick={handleClear}
                title="Clear text"
                disabled={!input && !output}
              >
                <HiOutlineTrash size={18} />
              </button>
            </div>
            
            <div className={styles.textareaWrapper}>
              <textarea
                className={styles.textarea}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Paste your AI-generated text here (min 10 characters)..."
              />
            </div>

            <div className={styles.controls}>
              <div className={styles.strengthContainer}>
                <span className={styles.strengthLabel}>Rewriting Strength</span>
                <div className={styles.strengthButtons}>
                  {(["low", "medium", "high"] as Strength[]).map((s) => (
                    <button
                      key={s}
                      className={`${styles.strengthBtn} ${strength === s ? styles.active : ""}`}
                      onClick={() => setStrength(s)}
                    >
                      {s.charAt(0).toUpperCase() + s.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              <div className={styles.actions}>
                <span className={styles.wordCount}>{wordCount} words</span>
                <button 
                  className={styles.primaryButton} 
                  onClick={onHumanize} 
                  disabled={!canSubmit}
                >
                  {loading ? (
                    "Processing..."
                  ) : (
                    <>
                      <HiSparkles />
                      Humanize
                    </>
                  )}
                </button>
              </div>
            </div>

            {error && (
              <div className={styles.error}>
                <MdErrorOutline size={18} />
                {error}
              </div>
            )}
          </div>

          {/* Output Panel */}
          <div className={`${styles.panel} glass-card`}>
            <div className={styles.panelHeader}>
              <label className={styles.label}>Humanized Result</label>
              <div className={styles.resultActions}>
                <button 
                  className={styles.iconButton} 
                  onClick={handleCopy}
                  title="Copy to clipboard"
                  disabled={!output}
                >
                  {copied ? <HiCheck size={18} color="var(--primary)" /> : <HiOutlineClipboard size={18} />}
                </button>
              </div>
            </div>
            
            <div className={styles.textareaWrapper}>
              {loading && (
                <div className={styles.progressBarContainer}>
                  <div className={styles.progressBar} style={{ width: `${progress}%` }} />
                </div>
              )}
              {loading ? (
                <div className={styles.skeletonWrapper}>
                  <Skeleton type="text" width="90%" />
                  <Skeleton type="text" width="100%" />
                  <Skeleton type="text" width="95%" />
                  <Skeleton type="text" width="80%" />
                  <Skeleton type="text" width="90%" />
                  <Skeleton type="text" width="70%" />
                </div>
              ) : (
                <textarea
                  className={`${styles.textarea} ${styles.output} ${output ? "fadeIn" : ""}`}
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
