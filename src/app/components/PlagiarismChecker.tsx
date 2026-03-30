"use client";

import React, { useState, useMemo } from 'react';
import { HiExclamationTriangle } from 'react-icons/hi2';
import Skeleton from './Skeleton';
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

    const interval = setInterval(() => {
      setProgress(p => (p >= 90 ? 90 : p + 5));
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
      setError(e instanceof Error ? e.message : "An unexpected error occurred.");
    } finally {
      clearInterval(interval);
      setTimeout(() => setLoading(false), 300);
    }
  };

  return (
    <div className="plag-checker-container">
      <div className="plag-checker-header">
        <h1>Plagiarism Checker</h1>
        <p>Verify content originality against billions of web pages and academic records.</p>
      </div>

      <div className="plag-input-area glass-card">
        <textarea
          placeholder="Paste the text you want to check for plagiarism (minimum 50 characters)..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={loading}
        />
        <div className="plag-controls">
          <span className="char-count">{input.length} characters</span>
          <button 
            className="scan-btn"
            onClick={handleScan}
            disabled={!canScan || loading}
          >
            {loading ? "Scanning..." : "Check Plagiarism"}
          </button>
        </div>
      </div>

      {loading && (
        <div className="plag-scanning-status">
          <div className="scanning-bar">
            <div className="scanning-bar-fill" style={{ width: `${progress}%` }}></div>
          </div>
          <p>Analyzing text and searching for matches...</p>
        </div>
      )}

      {error && (
        <div className="plag-error-alert fadeIn">
          <div className="error-icon"><HiExclamationTriangle /></div>
          <div className="error-msg">
            <h4>Scan Error</h4>
            <p>{error}</p>
          </div>
        </div>
      )}

      {loading ? (
        <div className="plag-results fadeIn">
          <div className="result-main-card glass-card">
            <div className="score-circle">
              <Skeleton type="card" width="100px" height="100px" style={{ borderRadius: '50%' }} />
            </div>
            <Skeleton type="title" width="150px" />
            <div className="verdict-card">
              <Skeleton type="text" width="60%" />
              <Skeleton type="text" width="90%" />
            </div>
          </div>
          <div className="sources-list glass-card">
            <Skeleton type="title" width="120px" />
            <Skeleton type="text" width="100%" />
            <Skeleton type="text" width="100%" />
          </div>
        </div>
      ) : result && (
        <div className="plag-results fadeIn">
          <div className="result-main-card glass-card">
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
            <h3>Similarity Detected</h3>
            
            <div className="verdict-card">
              <h4>Scan Verdict</h4>
              <p>
                {result.overallPercent < 5 
                  ? "Great! Your content is highly original." 
                  : result.overallPercent < 20 
                  ? "Good, but some similarity found. Check sources." 
                  : "High similarity detected. Check existing matches."
                }
              </p>
            </div>
          </div>

          <div className="sources-list glass-card">
            <h3>Top Matches</h3>
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
                      <div className="match-tiny-bar-fill" style={{ width: `${source.matchPercentage}%` }}></div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="no-sources">No significant matches found.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PlagiarismChecker;
