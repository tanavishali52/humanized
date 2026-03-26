import React from 'react';
import GrammarChecker from '../components/GrammarChecker';
import styles from '../page.module.css';

export const metadata = {
  title: "AI Grammar Checker - MyDetector",
  description: "Improve your writing with our advanced AI grammar and style assistant.",
};

export default function GrammarPage() {
  return (
    <main className={styles.main}>
      <GrammarChecker />
    </main>
  );
}
