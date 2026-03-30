"use client";

import React, { useState } from 'react';
import { HiOutlineSearch, HiChevronDown } from 'react-icons/hi';
import './FAQ.css';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  title: string;
  items: FAQItem[];
}

const faqData: FAQCategory[] = [
  {
    title: "AI Humanizer",
    items: [
      {
        question: "How does the AI Humanizer work?",
        answer: "Our Humanizer Engine uses a sophisticated multi-pass process to rephrase AI-generated content. It first removes robotic sentence structures, then applies human-like stylistic variations, and finally polishes the text for maximum readability while preserving your original meaning."
      },
      {
        question: "Will it help bypass AI detectors like GPTZero or Originality.ai?",
        answer: "Yes. Our engine is specifically designed to break the predictable patterns (known as 'perplexity' and 'burstiness') that AI detectors look for. While no tool can guarantee 100% bypass, our 'High' strength setting is leading the industry in detection avoidance."
      },
      {
        question: "Does it change the meaning of my text?",
        answer: "No. The core promise of our Humanizer is meaning preservation. The AI is instructed to retain all key facts, names, dates, and the original intent of your writing while only changing the delivery style."
      }
    ]
  },
  {
    title: "Plagiarism Checker",
    items: [
      {
        question: "How thorough is the plagiarism scan?",
        answer: "We scan your text against a massive database of over 80 billion web pages, academic journals, books, and private repositories. Our deep scan technology can even identify 'paraphrased plagiarism' where the exact words have changed but the ideas remain un-cited."
      },
      {
        question: "Is my data stored or shared with other databases?",
        answer: "Absolutely not. We prioritize user privacy and document security. Your text is processed in real-time and is never stored, sold, or shared with third-party plagiarism databases."
      },
      {
        question: "What does the match percentage mean?",
        answer: "The percentage represents the total amount of text in your document that bears significant similarity to existing sources. A low percentage (under 5%) is generally considered highly original."
      }
    ]
  },
  {
    title: "AI Grammar Assistant",
    items: [
      {
        question: "How is this different from basic spell-checkers?",
        answer: "Traditional spell-checkers only look for rule-based errors. Our AI Assistant understands context and semantics, allowing it to provide sophisticated stylistic suggestions, fix passive voice issues, and improve overall narrative flow."
      },
      {
        question: "Can I use it for professional academic writing?",
        answer: "Yes! The 'Style' corrections are particularly useful for academic and professional contexts, helping you maintain a formal tone and avoid repetitive phrasing or informal language."
      }
    ]
  },
  {
    title: "General & Account",
    items: [
      {
        question: "Is there a limit on how much I can check?",
        answer: "Free users have a daily character limit. For high-volume professional use, our Premium plans offer higher limits and priority processing for complex scans."
      },
      {
        question: "Do you offer an API for developers?",
        answer: "Yes, we have a robust API that allows you to integrate our Humanization and Detection engines into your own applications. Check our Documentation section for more details."
      }
    ]
  }
];

const FAQ: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleItem = (id: string) => {
    setActiveItem(activeItem === id ? null : id);
  };

  const filteredData = faqData.map(category => ({
    ...category,
    items: category.items.filter(item => 
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
      item.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.items.length > 0);

  return (
    <div className="faq-container">
      <div className="faq-header">
        <h1>Got Questions?</h1>
        <p>Everything you need to know about our AI-powered humanization and detection engines.</p>
        
        <div className="faq-search">
          <input 
            type="text" 
            placeholder="Search for a topic or keyword..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <span className="search-icon"><HiOutlineSearch /></span>
        </div>
      </div>

      <div className="faq-content">
        {filteredData.length > 0 ? (
          filteredData.map((category, catIdx) => (
            <div key={catIdx} className="faq-category-section">
              <h2 className="category-title">{category.title}</h2>
              <div className="faq-list">
                {category.items.map((item, itemIdx) => {
                  const id = `${catIdx}-${itemIdx}`;
                  const isOpen = activeItem === id;
                  return (
                    <div key={id} className={`faq-item ${isOpen ? 'open' : ''}`}>
                      <button 
                        className="faq-question" 
                        onClick={() => toggleItem(id)}
                        aria-expanded={isOpen}
                      >
                        {item.question}
                        <span className="faq-toggle-icon"><HiChevronDown /></span>
                      </button>
                      <div className="faq-answer">
                        <p>{item.answer}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))
        ) : (
          <div className="no-results">
            <p>No results found for &quot;{searchTerm}&quot;. Try focusing on keywords like &quot;bypass&quot; or &quot;privacy&quot;.</p>
          </div>
        )}
      </div>

      <div className="faq-footer">
        <h3>Still curious?</h3>
        <p>Our support team is ready to help you with any unique technical needs.</p>
        <a href="mailto:support@mydetector.ai" className="contact-btn">Contact Our Team</a>
      </div>
    </div>
  );
};

export default FAQ;
