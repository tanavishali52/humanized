"use client";

import React, { useState, useMemo } from 'react';
import { HiExclamation, HiArrowNarrowRight, HiCheckCircle } from 'react-icons/hi';
import Skeleton from './Skeleton';
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

    const interval = setInterval(() => {
      setProgress(p => (p >= 90 ? 90 : p + 5));
    }, 150);

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
      setError(e instanceof Error ? e.message : "An unexpected error occurred.");
    } finally {
      clearInterval(interval);
      setTimeout(() => setLoading(false), 300);
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
        <h1>Grammar & Style Assistant</h1>
        <p>Refine your writing with AI-powered corrections and professional style suggestions.</p>
      </div>

      <div className="grammar-input-area glass-card">
        <textarea
          placeholder="Type or paste your text here (minimum 10 characters)..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={loading}
        />
        <div className="grammar-controls">
          <span className="char-count">{input.length} characters</span>
          <button 
            className="check-btn"
            onClick={handleCheck}
            disabled={!canCheck || loading}
          >
            {loading ? "Analyzing..." : "Check Grammar"}
          </button>
        </div>
      </div>

      {loading && (
        <div className="grammar-checking-status">
          <div className="checking-bar">
            <div className="checking-bar-fill" style={{ width: `${progress}%` }}></div>
          </div>
          <p>Analyzing syntax and stylistic flow...</p>
        </div>
      )}

      {error && (
        <div className="grammar-error-alert fadeIn">
          <div className="error-icon"><HiExclamation /></div>
          <div className="error-msg">
            <h4>Analysis Error</h4>
            <p>{error}</p>
          </div>
        </div>
      )}

      {loading ? (
        <div className="grammar-results fadeIn">
          <div className="result-main-card glass-card">
            <div className="result-card-header">
              <Skeleton type="title" width="200px" />
              <Skeleton type="button" />
            </div>
            <div className="corrected-text-box">
              <Skeleton type="text" width="90%" />
              <Skeleton type="text" width="100%" />
              <Skeleton type="text" width="95%" />
            </div>
            <div className="stats-summary">
              <div className="stat-item"><Skeleton type="text" width="40px" /></div>
              <div className="stat-item"><Skeleton type="text" width="40px" /></div>
              <div className="stat-item"><Skeleton type="text" width="40px" /></div>
            </div>
          </div>
          <div className="errors-list">
            <Skeleton type="title" width="150px" />
            <Skeleton type="card" height="100px" />
            <Skeleton type="card" height="100px" />
          </div>
        </div>
      ) : result && (
        <div className="grammar-results fadeIn">
          <div className="result-main-card glass-card">
            <div className="result-card-header">
              <h3>Corrected Text</h3>
              <button 
                className={`copy-btn ${copied ? 'copied' : ''}`} 
                onClick={handleCopy}
              >
                {copied ? "Copied!" : "Copy Text"}
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
                <span className="stat-label">Style Tips</span>
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
                <p>Perfect! Your text is clear and correct.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default GrammarChecker;
