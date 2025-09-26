import React from 'react';

interface LogoProps {
  className?: string;
}

export const AquaVistaLogo: React.FC<LogoProps> = ({ className }) => {
  return (
    <svg 
      viewBox="0 0 100 100" 
      className={className}
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M20 80 L50 20 L80 80" 
        stroke="currentColor" 
        strokeWidth="6" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M35 60 L65 60" 
        stroke="currentColor" 
        strokeWidth="6" 
        strokeLinecap="round"
      />
      <path 
        d="M25 85 C 40 70, 60 70, 75 85" 
        stroke="currentColor" 
        strokeWidth="4" 
        strokeLinecap="round"
      />
       <path 
        d="M30 90 C 40 78, 60 78, 70 90" 
        stroke="currentColor" 
        strokeWidth="3" 
        strokeLinecap="round"
        opacity="0.7"
      />
    </svg>
  );
};
