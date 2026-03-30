import React from 'react';
import './Skeleton.css';

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
  const combinedStyle = {
    ...style,
    width: width || (type === 'text' ? '100%' : width),
    height: height || style?.height,
  };

  return (
    <div 
      className={`skeleton skeleton-${type} ${className}`} 
      style={combinedStyle}
    />
  );
};

export default Skeleton;
