import React from 'react';

interface SkeletonProps {
  className?: string;
  type?: 'text' | 'title' | 'button' | 'card';
  width?: string;
  height?: string;
  style?: React.CSSProperties;
}

const Skeleton: React.FC<SkeletonProps> = ({ 
  className = '', 
  type = 'text', 
  width, 
  height,
  style 
}) => {
  const typeClasses: Record<string, string> = {
    text: 'skeleton-text',
    title: 'skeleton-title',
    button: 'skeleton-button',
    card: 'skeleton-card',
  };

  return (
    <div 
      className={`skeleton ${typeClasses[type] || ''} ${className}`}
      style={{ width, height, ...style }}
    />
  );
};

export default Skeleton;
