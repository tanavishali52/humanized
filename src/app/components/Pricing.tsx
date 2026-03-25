import React from 'react';
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
    <section className="pricing-section">
      <div className="pricing-header">
        <h2 className="pricing-title">Subscription Plans and Pricing</h2>
        <p className="pricing-subtitle">
          Choose the perfect plan to boost your productivity with our advanced AI humanization tools.
        </p>
      </div>

      <div className="pricing-grid">
        {plans.map((plan, index) => (
          <div key={index} className={`pricing-card ${plan.isCurrent ? 'current' : ''}`}>
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
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/>
                    </svg>
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

      <div className="payment-methods">
        <h4 className="payment-title">Supported Payment Methods</h4>
        <div className="payment-icons">
          {/* Simple representations of payment icons */}
          <div className="payment-icon stripe">Stripe</div>
          <div className="payment-icon visa">VISA</div>
          <div className="payment-icon mastercard">MasterCard</div>
          <div className="payment-icon amex">AMEX</div>
          <div className="payment-icon apple-pay">Apple Pay</div>
          <div className="payment-icon google-pay">Google Pay</div>
          <div className="payment-icon paypal">PayPal</div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
