import React from 'react';
import { HiCheck } from 'react-icons/hi';
import './Pricing.css';

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
    features: [
      '20 quotas per month',
      'AI Humanizer',
      'Suitable for quickly verifying output quality and style.'
    ],
    buttonText: 'Current Plan',
    isCurrent: true
  },
  {
    name: 'Basic',
    price: '$6.99',
    tagline: 'Enhanced tools for individuals',
    features: [
      '1,100 quotas per month',
      'AI Humanizer',
      'Covers a variety of high-frequency, human-like text generation scenarios.'
    ],
    buttonText: 'Upgrade Now'
  },
  {
    name: 'Pro',
    price: '$14.99',
    tagline: 'For regular content creators',
    features: [
      '3,000 quotas per month',
      'AI Humanizer',
      'Batch processing is more efficient, and it offers the best value for money in the long run.'
    ],
    buttonText: 'Upgrade Now'
  },
  {
    name: 'Premium',
    price: '$29.99',
    tagline: 'The ultimate AI toolkit',
    features: [
      'Unlimited quota',
      'AI Humanizer',
      'Unlimited use of AI humanization features.'
    ],
    buttonText: 'Upgrade Now'
  }
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="pricing-section">
      <div className="pricing-header">
        <h2 className="pricing-title">Flexible Plans for Every Creator</h2>
        <p className="pricing-subtitle">
          Scale your content with production-ready AI humanization tools. Choose the plan that fits your workflow.
        </p>
      </div>

      <div className="pricing-grid">
        {plans.map((plan, index) => (
          <div 
            key={index} 
            className={`pricing-card ${plan.isCurrent ? 'current' : ''} ${plan.name === 'Pro' ? 'featured' : ''}`}
          >
            {plan.name === 'Pro' && <div className="popular-badge">Most Popular</div>}
            <h3 className="plan-name">{plan.name}</h3>
            <p className="plan-tagline">{plan.tagline}</p>
            <div className="plan-price">
              <span className="amount">{plan.price}</span>
              <span className="period">/month</span>
            </div>
            <ul className="plan-features">
              {plan.features.map((feature, fIndex) => (
                <li key={fIndex}>
                  <span className="check-icon">
                    <HiCheck />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
            <button className={`plan-button ${plan.isCurrent ? 'current-btn' : 'upgrade-btn'}`}>
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
