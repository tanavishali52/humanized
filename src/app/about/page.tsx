import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { HiCheckBadge, HiOutlineLightBulb, HiOutlineShieldCheck, HiOutlineUserGroup, HiArrowLongLeft } from 'react-icons/hi2';

export const metadata: Metadata = {
  title: "About Humanize AI - Best Free AI to Human Text Converter",
  description: "Learn how Humanize AI transforms robotic AI text into natural, human-sounding content. Our advanced algorithms ensure your writing is engaging, authentic, and SEO-friendly.",
};

const AboutPage: React.FC = () => {
  return (
    <main className="relative min-h-screen pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6 overflow-hidden">
      {/* Background Layer */}
      <div className="absolute inset-0 -z-20 bg-[var(--bg)]" />

      {/* SEO Optimized Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/best-free-ai-to-human-text-converter.png"
          alt="Best Free AI to Human Text Converter - Humanize AI Background"
          fill
          priority
          className="object-cover opacity-[0.25]"
          sizes="100vw"
        />
        <div 
          className="absolute inset-0" 
          style={{ 
            background: 'linear-gradient(to bottom, transparent 0%, var(--bg) 80%, var(--bg) 100%)' 
          }} 
        />
      </div>

      <header className="relative text-center mb-12 sm:mb-20 animate-fade-in z-10">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold gradient-heading tracking-tighter mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
          Humanize AI – Best Free AI to Human Text Converter
        </h1>
        <p className="text-lg sm:text-2xl font-medium max-w-3xl mx-auto" style={{ color: 'var(--muted)' }}>
          The most powerful tool to transform AI-generated text into natural, human-sounding content.
        </p>
      </header>

      <div className="max-w-5xl mx-auto mb-16 sm:mb-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="flex flex-col gap-4 sm:gap-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight" style={{ color: 'var(--text)', fontFamily: 'var(--font-heading)' }}>
              Real, Engaging, and Authentic Writing
            </h2>
            <p className="text-sm sm:text-lg leading-relaxed" style={{ color: 'var(--muted)' }}>
              Humanize AI is a free, powerful online tool that transforms AI-generated text into natural, human-sounding content. Whether you call it an AI Humanizer or an AI to Human Text Converter, this tool is built for one purpose: making your writing feel real, engaging, and authentic.
            </p>
            <p className="text-sm sm:text-lg leading-relaxed" style={{ color: 'var(--muted)' }}>
              If your content sounds robotic or mechanical, Humanize AI rewrites it so it reads like it was written by a real person without changing your original meaning.
            </p>
          </div>
          <div className="glass-card h-[250px] sm:h-[350px] flex items-center justify-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-theme opacity-5 group-hover:opacity-10 transition-opacity duration-500" />
            <HiOutlineLightBulb size={100} className="text-theme sm:text-[140px] relative z-10 transition-transform duration-500 group-hover:scale-110" />
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mb-16 sm:mb-24 relative z-10">
        <div className="glass-card p-8 sm:p-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-6 tracking-tight text-center" style={{ color: 'var(--text)', fontFamily: 'var(--font-heading)' }}>
            What Is AI Text Humanization?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <p className="text-sm sm:text-lg leading-relaxed" style={{ color: 'var(--muted)' }}>
              AI text humanization is the process of rewriting AI-generated content so it sounds natural, conversational, and genuinely human. The goal is to remove stiff, repetitive, or mechanical phrasing and replace it with clear, flowing language that connects with real readers.
            </p>
            <p className="text-sm sm:text-lg leading-relaxed" style={{ color: 'var(--muted)' }}>
              Humanized content performs better because it is easier to read, more engaging, and builds trust with your audience. It also tends to rank more effectively in search engines, since search algorithms increasingly favor content that provides real value to readers.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mb-16 sm:mb-24 relative z-10">
        <header className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight" style={{ color: 'var(--text)', fontFamily: 'var(--font-heading)' }}>
            How Humanize AI Works
          </h2>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="glass-card p-6 sm:p-8 flex flex-col gap-4">
            <div className="w-12 h-12 rounded-2xl bg-theme/10 flex items-center justify-center text-theme">
              <HiOutlineShieldCheck size={28} />
            </div>
            <h3 className="text-xl font-bold" style={{ color: 'var(--text)', fontFamily: 'var(--font-heading)' }}>Advanced Algorithms</h3>
            <p className="text-sm sm:text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
              Our tool uses advanced rewriting algorithms to improve AI-generated text from popular platforms including ChatGPT, Google Gemini, Microsoft Copilot, Jasper, QuillBot, Grammarly, and Copy.ai.
            </p>
          </div>
          <div className="glass-card p-6 sm:p-8 flex flex-col gap-4">
            <div className="w-12 h-12 rounded-2xl bg-theme/10 flex items-center justify-center text-theme">
              <HiOutlineUserGroup size={28} />
            </div>
            <h3 className="text-xl font-bold" style={{ color: 'var(--text)', fontFamily: 'var(--font-heading)' }}>Tone Analysis</h3>
            <p className="text-sm sm:text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
              The system analyzes sentence structure, word choice, and overall tone. It then rewrites the content to sound more natural while preserving the original message and context.
            </p>
          </div>
          <div className="glass-card p-6 sm:p-8 flex flex-col gap-4">
            <div className="w-12 h-12 rounded-2xl bg-theme/10 flex items-center justify-center text-theme">
              <HiCheckBadge size={28} />
            </div>
            <h3 className="text-xl font-bold" style={{ color: 'var(--text)', fontFamily: 'var(--font-heading)' }}>Polished Result</h3>
            <p className="text-sm sm:text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
              The result is polished, readable content that is both audience-friendly and search-engine optimized, providing real value to your readers.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center py-12 sm:py-20 max-w-3xl mx-auto relative z-10" style={{ borderTop: '1px solid var(--border)' }}>
        <h2 className="text-2xl sm:text-4xl font-extrabold mb-6" style={{ color: 'var(--text)', fontFamily: 'var(--font-heading)' }}>Ready to humanize your content?</h2>
        <p className="mb-8 sm:mb-12 text-base sm:text-lg" style={{ color: 'var(--muted)' }}>Join thousands of users who trust Humanize AI for their writing needs.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/" className="px-8 sm:px-10 py-4 sm:py-5 bg-theme text-white rounded-2xl font-bold text-base sm:text-lg no-underline shadow-theme hover:-translate-y-0.5 transition-all duration-300">
            Get Started Now
          </Link>
          <Link href="/" className="flex items-center gap-2 font-semibold text-base no-underline transition-all duration-300 hover:text-theme" style={{ color: 'var(--muted)' }}>
            <HiArrowLongLeft /> Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;


