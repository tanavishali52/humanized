import React from 'react';
import FAQ from '../components/FAQ';
import styles from '../page.module.css';

export const metadata = {
  title: "Frequently Asked Questions - MyDetector",
  description: "Find answers to all your questions about our AI Humanizer, Plagiarism Checker, and AI Grammar Assistant.",
};

export default function FAQPage() {
  return (
    <main className={styles.main}>
      <FAQ />
    </main>
  );
}
