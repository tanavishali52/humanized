"use client";

import { useMemo, useState } from "react";
import styles from "./page.module.css";

type Strength = "low" | "medium" | "high";

export default function Home() {
  const [strength, setStrength] = useState<Strength>("medium");
  const [input, setInput] = useState<string>("");
  const [output, setOutput] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [theme, setTheme] = useState<"blue" | "purple" | "mint">("blue");

  const canSubmit = useMemo(() => input.trim().length > 0 && !loading, [input, loading]);

  async function onHumanize() {
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
    } catch (e) {
      setError(e instanceof Error ? e.message : "Unknown error");
      setOutput("");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className={styles.main} data-theme={theme}>
      <header className={styles.navbar}>
        <a className={styles.brand} href="#">
          Humanizer
        </a>
        <nav className={styles.navLinks}>
          <a href="#about">About</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
        </nav>
        <button
          className={styles.themeButton}
          aria-label="Change theme color"
          onClick={() =>
            setTheme((prev) => (prev === "blue" ? "purple" : prev === "purple" ? "mint" : "blue"))
          }
        >
          🎨
        </button>
      </header>

      <section className={styles.humanizerHeader}>
        <h1 className={styles.humanizerTitle}>Humanizer Engine</h1>
        <p className={styles.humanizerSubtitle}>
          Production-ready prompt rotation with multi-pass rewriting, strength control, and clean API flow.
        </p>
      </section>

      <section className={styles.humanizerGrid}>
        <div className={styles.panel}>
          <label className={styles.label} htmlFor="text">
            Text to humanize
          </label>
          <textarea
            id="text"
            className={styles.textarea}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Paste your text here..."
          />

          <div className={styles.controls}>
            <div>
              <label className={styles.label} htmlFor="strength">
                Strength
              </label>
              <select
                id="strength"
                className={styles.select}
                value={strength}
                onChange={(e) => setStrength(e.target.value as Strength)}
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>

            <button className={styles.button} onClick={onHumanize} disabled={!canSubmit}>
              {loading ? "Humanizing..." : "Humanize"}
            </button>
          </div>

          {error ? <p className={styles.error}>{error}</p> : null}
        </div>

        <div className={styles.panel}>
          <div className={styles.outputHeader}>
            <h2 className={styles.outputTitle}>Output</h2>
          </div>
          <textarea
            className={styles.textarea}
            value={output}
            readOnly
            placeholder="Your rewritten text will appear here..."
          />
        </div>
      </section>

      <section id="about" className={styles.section}>
        <h2>About</h2>
        <p>
          Humanizer uses structured prompt engineering to reduce robotic phrasing while preserving original meaning. It
          combines prompt variation, strength-based rewriting, and multi-pass flow for more natural output.
        </p>
      </section>

      <section id="pricing" className={styles.section}>
        <h2>Pricing</h2>
        <div className={styles.pricingGrid}>
          <article className={styles.priceCard}>
            <h3>Starter</h3>
            <p className={styles.price}>$9/mo</p>
            <p>Basic humanization and low-volume requests.</p>
          </article>
          <article className={styles.priceCard}>
            <h3>Pro</h3>
            <p className={styles.price}>$29/mo</p>
            <p>Multi-pass pipeline and priority processing.</p>
          </article>
          <article className={styles.priceCard}>
            <h3>Team</h3>
            <p className={styles.price}>$79/mo</p>
            <p>Team seats, analytics, and custom model settings.</p>
          </article>
        </div>
      </section>

      <section id="faq" className={styles.section}>
        <h2>FAQ</h2>
        <div className={styles.faqList}>
          <details className={styles.faqItem}>
            <summary>Does it change the meaning of my text?</summary>
            <p>No. The prompts enforce meaning preservation and retain key facts, names, and numbers.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Which strength should I use?</summary>
            <p>Use low for light cleanup, medium for balanced results, and high for strongest humanization.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Why use multi-pass rewriting?</summary>
            <p>It first removes robotic patterns, then humanizes style, and finally polishes readability.</p>
          </details>
        </div>
      </section>

      <footer className={styles.footer}>
        <p>Built for prompt-engineering R&D. Humanizer v1.</p>
      </footer>
    </main>
  );
}
