"use client";

import React, { useState, useMemo } from 'react';
import './PlagiarismChecker.css';

interface Source {
  url: string;
  title: string;
  matchPercentage: number;
}

interface Result {
  overallPercent: number;
  sources: Source[];
}

const PlagiarismChecker: React.FC = () => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<Result | null>(null);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);

  const canScan = useMemo(() => input.trim().length > 50, [input]);

  const handleScan = async () => {
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
    }, 150);

    try {
      const res = await fetch("/api/plagiarism", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: input }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Fetch failed");
      
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

  return (
    <div className="plag-checker-container">
      <div className="plag-checker-header">
        <h1>Plagiarism Checker</h1>
        <p>Verify the originality of your content against billions of web pages and academic records.</p>
      </div>

      <div className="plag-input-area">
        <textarea
          placeholder="Paste the text you want to check for plagiarism (minimum 50 characters)..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={loading}
        />
        <div className="plag-controls">
          <span className="char-count">{input.length} characters</span>
          <button 
            className={`scan-btn ${loading ? 'scanning' : ''}`}
            onClick={handleScan}
            disabled={!canScan || loading}
          >
            {loading ? `Scanning... ${progress}%` : "Check Plagiarism"}
          </button>
        </div>
      </div>

      {error && (
        <div className="plag-error-alert fadeIn">
          <div className="error-icon">!</div>
          <div className="error-msg">
            <h4>Scan Error</h4>
            <p>{error}</p>
          </div>
        </div>
      )}

      {loading && (
        <div className="plag-scanning-status">
          <div className="scanning-bar">
            <div className="scanning-bar-fill" style={{ width: `${progress}%` }}></div>
          </div>
          <p>Analyzing text and searching for matches on the web...</p>
        </div>
      )}

      {result && (
        <div className="plag-results fadeIn">
          <div className="result-main-card">
            <div className="score-circle">
              <svg viewBox="0 0 36 36" className="circular-chart">
                <path className="circle-bg"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path className="circle"
                  strokeDasharray={`${result.overallPercent}, 100`}
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <text x="18" y="20.35" className="percentage">{result.overallPercent}%</text>
              </svg>
            </div>
            <h3>Similarity Found</h3>
            
            <div className="verdict-card">
              <h4>Scan Verdict</h4>
              <p>
                {result.overallPercent < 5 
                  ? "Great! Your content is highly original. No significant matches found." 
                  : result.overallPercent < 20 
                  ? "Good, but some similarity found. Check the sources to ensure proper attribution." 
                  : "High similarity detected. Your content matches several existing sources."
                }
              </p>
            </div>
          </div>

          <div className="sources-list">
            <h3>Top Matching Sources</h3>
            {result.sources.length > 0 ? (
              result.sources.map((source, i) => (
                <div key={i} className="source-item">
                  <div className="source-info">
                    <span className="source-title">{source.title}</span>
                    <a href={source.url} target="_blank" rel="noopener noreferrer" className="source-url">
                      {source.url.replace(/^https?:\/\//, '').split('/')[0]}
                    </a>
                  </div>
                  <div className="source-match">
                    <span className="match-val">{source.matchPercentage}%</span>
                    <div className="match-tiny-bar">
                      <div className="match-tiny-bar-fill" style={{ width: `${source.matchPercentage * 5}%` }}></div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="no-sources">No individual matching sources identified.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PlagiarismChecker;
