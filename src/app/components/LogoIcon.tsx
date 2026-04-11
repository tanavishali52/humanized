import React from 'react';

interface LogoIconProps {
  className?: string;
  size?: number;
}

const LogoIcon: React.FC<LogoIconProps> = ({ className = '', size = 44 }) => {
  return (
    <div 
      className={`relative rounded-xl overflow-hidden shadow-lg shadow-theme/20 transform transition-transform duration-500 hover:rotate-6 group ${className}`}
      style={{ width: size, height: size }}
    >
      <img 
        src="/logo-icon.png" 
        alt="Humanize AI Icon" 
        className="w-full h-full object-contain"
      />
      {/* Premium accent ring */}
      <div className="absolute inset-0 rounded-xl border border-white/20 pointer-events-none"></div>
    </div>
  );
};

export default LogoIcon;
