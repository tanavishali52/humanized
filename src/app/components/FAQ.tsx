"use client";

import React, { useState } from 'react';
import { HiOutlineSearch, HiChevronDown } from 'react-icons/hi';

interface FAQItem { question: string; answer: string; }
interface FAQCategory { title: string; items: FAQItem[]; }

const faqData: FAQCategory[] = [
  {
    title: "AI Humanizer",
    items: [
      { question: "How does the AI Humanizer work?", answer: "Our Humanizer Engine uses a sophisticated multi-pass process to rephrase AI-generated content. It first removes robotic sentence structures, then applies human-like stylistic variations, and finally polishes the text for maximum readability while preserving your original meaning." },
      { question: "Will it help bypass AI detectors like GPTZero or Originality.ai?", answer: "Yes. Our engine is specifically designed to break the predictable patterns (known as 'perplexity' and 'burstiness') that AI detectors look for. While no tool can guarantee 100% bypass, our 'High' strength setting is leading the industry in detection avoidance." },
      { question: "Does it change the meaning of my text?", answer: "No. The core promise of our Humanizer is meaning preservation. The AI is instructed to retain all key facts, names, dates, and the original intent of your writing while only changing the delivery style." }
    ]
  },
  {
    title: "Plagiarism Checker",
    items: [
      { question: "How thorough is the plagiarism scan?", answer: "We scan your text against a massive database of over 80 billion web pages, academic journals, books, and private repositories. Our deep scan technology can even identify 'paraphrased plagiarism' where the exact words have changed but the ideas remain un-cited." },
      { question: "Is my data stored or shared with other databases?", answer: "Absolutely not. We prioritize user privacy and document security. Your text is processed in real-time and is never stored, sold, or shared with third-party plagiarism databases." },
      { question: "What does the match percentage mean?", answer: "The percentage represents the total amount of text in your document that bears significant similarity to existing sources. A low percentage (under 5%) is generally considered highly original." }
    ]
  },
  {
    title: "AI Grammar Assistant",
    items: [
      { question: "How is this different from basic spell-checkers?", answer: "Traditional spell-checkers only look for rule-based errors. Our AI Assistant understands context and semantics, allowing it to provide sophisticated stylistic suggestions, fix passive voice issues, and improve overall narrative flow." },
      { question: "Can I use it for professional academic writing?", answer: "Yes! The 'Style' corrections are particularly useful for academic and professional contexts, helping you maintain a formal tone and avoid repetitive phrasing or informal language." }
    ]
  },
  {
    title: "General & Account",
    items: [
      { question: "Is there a limit on how much I can check?", answer: "Free users have a daily character limit. For high-volume professional use, our Premium plans offer higher limits and priority processing for complex scans." },
      { question: "Do you offer an API for developers?", answer: "Yes, we have a robust API that allows you to integrate our Humanization and Detection engines into your own applications. Check our Documentation section for more details." }
    ]
  }
];

const FAQ: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleItem = (id: string) => setActiveItem(activeItem === id ? null : id);

  const filteredData = faqData.map(category => ({
    ...category,
    items: category.items.filter(item =>
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.items.length > 0);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-32">
      <div className="text-center mb-10 sm:mb-16 animate-fade-in">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold gradient-heading tracking-tighter mb-4 sm:mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
          Got Questions?
        </h1>
        <p className="text-base sm:text-xl leading-relaxed mb-6 sm:mb-10 max-w-xl mx-auto" style={{ color: 'var(--muted)' }}>
          Everything you need to know about our AI-powered humanization and detection engines.
        </p>
        <div className="relative max-w-lg mx-auto">
          <input
            type="text"
            placeholder="Search for a topic or keyword..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full py-3 sm:py-4 pl-5 sm:pl-6 pr-12 sm:pr-14 rounded-2xl bg-white text-sm sm:text-base font-medium outline-none transition-all duration-300"
            style={{ border: '1px solid var(--border)', color: 'var(--text)' }}
            onFocus={e => { e.target.style.borderColor = 'var(--primary)'; e.target.style.boxShadow = '0 0 0 4px var(--primary-soft)'; }}
            onBlur={e => { e.target.style.borderColor = 'var(--border)'; e.target.style.boxShadow = 'none'; }}
          />
          <span className="absolute right-4 sm:right-5 top-1/2 -translate-y-1/2 text-xl" style={{ color: 'var(--muted)' }}><HiOutlineSearch /></span>
        </div>
      </div>

      <div className="flex flex-col gap-8 sm:gap-12">
        {filteredData.length > 0 ? (
          filteredData.map((category, catIdx) => (
            <div key={catIdx} className="flex flex-col gap-3 sm:gap-4">
              <h2 className="text-sm sm:text-lg font-extrabold uppercase tracking-widest text-theme" style={{ fontFamily: 'var(--font-heading)' }}>
                {category.title}
              </h2>
              <div className="flex flex-col gap-2 sm:gap-3">
                {category.items.map((item, itemIdx) => {
                  const id = `${catIdx}-${itemIdx}`;
                  const isOpen = activeItem === id;
                  return (
                    <div key={id} className="rounded-2xl transition-all duration-300 overflow-hidden bg-white"
                      style={{ border: isOpen ? '1px solid var(--primary)' : '1px solid var(--border)', boxShadow: isOpen ? '0 10px 25px rgba(0,0,0,0.05)' : 'none' }}
                    >
                      <button
                        className="w-full flex items-center justify-between p-4 sm:p-6 text-left bg-transparent border-none cursor-pointer text-sm sm:text-base font-bold leading-snug"
                        style={{ color: 'var(--text)' }}
                        onClick={() => toggleItem(id)}
                        aria-expanded={isOpen}
                      >
                        {item.question}
                        <span className="text-theme text-lg sm:text-xl flex-shrink-0 ml-3 sm:ml-4 transition-transform duration-300" style={{ transform: isOpen ? 'rotate(180deg)' : 'none' }}>
                          <HiChevronDown />
                        </span>
                      </button>
                      <div className="transition-all duration-300 overflow-hidden" style={{ maxHeight: isOpen ? '400px' : '0', opacity: isOpen ? 1 : 0 }}>
                        <p className="px-4 sm:px-6 pb-4 sm:pb-6 text-sm sm:text-base leading-relaxed" style={{ color: 'var(--muted)' }}>{item.answer}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-12 sm:py-16" style={{ color: 'var(--muted)' }}>
            <p>No results found for &quot;{searchTerm}&quot;. Try focusing on keywords like &quot;bypass&quot; or &quot;privacy&quot;.</p>
          </div>
        )}
      </div>

      <div className="text-center mt-12 sm:mt-20 py-10 sm:py-16" style={{ borderTop: '1px solid var(--border)' }}>
        <h3 className="text-xl sm:text-2xl font-extrabold mb-3" style={{ color: 'var(--text)', fontFamily: 'var(--font-heading)' }}>Still curious?</h3>
        <p className="mb-6 sm:mb-8" style={{ color: 'var(--muted)' }}>Our support team is ready to help you with any unique technical needs.</p>
        <a
          href="mailto:support@mydetector.ai"
          className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-theme text-white rounded-2xl font-bold text-sm sm:text-base no-underline shadow-theme hover:-translate-y-0.5 transition-all duration-300"
        >
          Contact Our Team
        </a>
      </div>
    </div>
  );
};

export default FAQ;
