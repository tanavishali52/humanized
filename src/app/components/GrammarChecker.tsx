"use client";

import React, { useState, useMemo } from 'react';
import { HiExclamation, HiArrowNarrowRight, HiCheckCircle } from 'react-icons/hi';
import './GrammarChecker.css';

interface GrammarError {
  original: string;
  replacement: string;
  explanation: string;
  type: 'grammar' | 'spelling' | 'punctuation' | 'style';
}

interface GrammarResult {
  correctedText: string;
  errors: GrammarError[];
}

const GrammarChecker: React.FC = () => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<GrammarResult | null>(null);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const canCheck = useMemo(() => input.trim().length > 10, [input]);

  const handleCheck = async () => {
    setLoading(true);
    setResult(null);
    setError(null);
    setProgress(0);

    // Initial dummy scan simulation for UX
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 95) {
          clearInterval(interval);
          return 95;
        }
        return p + 5;
      });
    }, 120);

    try {
      const res = await fetch("/api/grammar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: input }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Grammar check failed");
      
      setProgress(100);
      setResult(data);
    } catch (e) {
      console.error(e);
      setError(e instanceof Error ? e.message : "An unexpected error occurred.");
    } finally {
      clearInterval(interval);
      setLoading(false);
    }
  };

  const handleCopy = () => {
    if (result?.correctedText) {
      navigator.clipboard.writeText(result.correctedText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="grammar-checker-container">
      <div className="grammar-checker-header">
        <h1>Advanced Grammar & Style Assistant</h1>
        <p>Refine your writing with AI-powered corrections for grammar, spelling, and professional style.</p>
      </div>

      <div className="grammar-input-area">
        <textarea
          placeholder="Type or paste your text here (minimum 10 characters)..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={loading}
        />
        <div className="grammar-controls">
          <span className="char-count">{input.length} characters</span>
          <button 
            className={`check-btn ${loading ? 'checking' : ''}`}
            onClick={handleCheck}
            disabled={!canCheck || loading}
          >
            {loading ? `Analyzing... ${progress}%` : "Check Grammar"}
          </button>
        </div>
      </div>

      {error && (
        <div className="grammar-error-alert fadeIn">
          <div className="error-icon"><HiExclamation /></div>
          <div className="error-msg">
            <h4>Check Failed</h4>
            <p>{error}</p>
          </div>
        </div>
      )}

      {loading && (
        <div className="grammar-checking-status">
          <div className="checking-bar">
            <div className="checking-bar-fill" style={{ width: `${progress}%` }}></div>
          </div>
          <p>Analyzing syntax, semantics, and stylistic flow...</p>
        </div>
      )}

      {result && (
        <div className="grammar-results fadeIn">
          <div className="result-main-card">
            <div className="result-card-header">
              <h3>Corrected Text</h3>
              <button 
                className={`copy-btn ${copied ? 'copied' : ''}`} 
                onClick={handleCopy}
              >
                {copied ? "Copied!" : "Copy Corrected Text"}
              </button>
            </div>
            <div className="corrected-text-box">
              {result.correctedText}
            </div>
            
            <div className="stats-summary">
              <div className="stat-item">
                <span className="stat-value">{result.errors.length}</span>
                <span className="stat-label">Issues Found</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">
                  {result.errors.filter(e => e.type === 'grammar' || e.type === 'spelling').length}
                </span>
                <span className="stat-label">Critical Fixes</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">
                  {result.errors.filter(e => e.type === 'style').length}
                </span>
                <span className="stat-label">Stlye Suggestions</span>
              </div>
            </div>
          </div>

          <div className="errors-list">
            <h3>Detailed Breakdown</h3>
            {result.errors.length > 0 ? (
              result.errors.map((err, i) => (
                <div key={i} className={`error-item type-${err.type}`}>
                  <div className="error-header">
                    <span className="error-badge">{err.type}</span>
                    <div className="error-comparison">
                      <span className="orig-text">{err.original}</span>
                      <span className="arrow"><HiArrowNarrowRight /></span>
                      <span className="repl-text">{err.replacement}</span>
                    </div>
                  </div>
                  <p className="error-explanation">{err.explanation}</p>
                </div>
              ))
            ) : (
              <div className="no-errors-card">
                <div className="success-icon"><HiCheckCircle /></div>
                <p style={{ color: 'black' }}>Perfect! No grammar or spelling errors were detected in your text.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default GrammarChecker;
