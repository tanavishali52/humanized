import React from 'react';
import { HiCheck } from 'react-icons/hi';

interface PricingPlan {
  name: string;
  price: string;
  tagline: string;
  features: string[];
  buttonText: string;
  isCurrent?: boolean;
}

const plans: PricingPlan[] = [
  {
    name: 'Free',
    price: '$0',
    tagline: 'Perfect for beginners',
    features: ['20 quotas per month', 'AI Humanizer', 'Suitable for quickly verifying output quality and style.'],
    buttonText: 'Current Plan',
    isCurrent: true
  },
  {
    name: 'Basic',
    price: '$6.99',
    tagline: 'Enhanced tools for individuals',
    features: ['1,100 quotas per month', 'AI Humanizer', 'Covers a variety of high-frequency, human-like text generation scenarios.'],
    buttonText: 'Upgrade Now'
  },
  {
    name: 'Pro',
    price: '$14.99',
    tagline: 'For regular content creators',
    features: ['3,000 quotas per month', 'AI Humanizer', 'Batch processing is more efficient, and it offers the best value for money in the long run.'],
    buttonText: 'Upgrade Now'
  },
  {
    name: 'Premium',
    price: '$29.99',
    tagline: 'The ultimate AI toolkit',
    features: ['Unlimited quota', 'AI Humanizer', 'Unlimited use of AI humanization features.'],
    buttonText: 'Upgrade Now'
  }
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-16 sm:py-32 px-4 sm:px-6 flex flex-col items-center w-full" style={{ background: 'var(--bg)' }}>
      <div className="text-center mb-10 sm:mb-20 max-w-3xl animate-fade-in">
        <h2 className="text-3xl sm:text-5xl md:text-[3.5rem] font-extrabold gradient-heading tracking-tighter mb-4 sm:mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
          Flexible Plans for Every Creator
        </h2>
        <p className="text-base sm:text-xl leading-relaxed" style={{ color: 'var(--muted)' }}>
          Scale your content with production-ready AI humanization tools. Choose the plan that fits your workflow.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10 w-full max-w-[1200px] mb-12 sm:mb-24">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`bg-white rounded-3xl p-6 sm:p-10 flex flex-col relative overflow-visible transition-all duration-300 hover:-translate-y-3`}
            style={{
              border: plan.name === 'Pro' ? '2px solid var(--primary)' : '1px solid var(--border)',
              boxShadow: plan.name === 'Pro' ? '0 20px 40px var(--primary-soft)' : 'none',
              transform: plan.name === 'Pro' ? 'scale(1.05)' : undefined,
              zIndex: plan.name === 'Pro' ? 10 : undefined,
            }}
          >
            {plan.name === 'Pro' && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-theme text-white px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-extrabold tracking-wide uppercase shadow-theme"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Most Popular
              </div>
            )}
            <h3 className="text-xl sm:text-2xl font-extrabold mb-2" style={{ color: 'var(--text)', fontFamily: 'var(--font-heading)' }}>{plan.name}</h3>
            <p className="text-sm sm:text-base mb-6 sm:mb-8" style={{ color: 'var(--muted)' }}>{plan.tagline}</p>
            <div className="mb-6 sm:mb-10 flex items-baseline gap-1">
              <span className="text-4xl sm:text-5xl font-extrabold tracking-tight" style={{ color: 'var(--text)', fontFamily: 'var(--font-heading)' }}>{plan.price}</span>
              <span className="text-base sm:text-lg font-semibold" style={{ color: 'var(--muted)' }}>/month</span>
            </div>
            <ul className="list-none p-0 m-0 mb-8 sm:mb-12 flex-grow flex flex-col gap-3 sm:gap-4">
              {plan.features.map((feature, fIndex) => (
                <li key={fIndex} className="flex items-start gap-3 sm:gap-4 text-sm sm:text-base font-medium" style={{ color: 'var(--text)' }}>
                  <span className="text-theme text-lg sm:text-xl flex mt-0.5"><HiCheck /></span>
                  {feature}
                </li>
              ))}
            </ul>
            <button
              className={`w-full py-3 sm:py-4 rounded-2xl font-extrabold text-base sm:text-lg cursor-pointer transition-all duration-300 border-none`}
              style={{
                fontFamily: 'var(--font-heading)',
                background: plan.isCurrent ? 'var(--bg)' : 'var(--primary)',
                color: plan.isCurrent ? 'var(--muted)' : 'white',
                boxShadow: plan.isCurrent ? 'none' : '0 4px 15px var(--primary-soft)',
                cursor: plan.isCurrent ? 'default' : 'pointer',
              }}
            >
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
