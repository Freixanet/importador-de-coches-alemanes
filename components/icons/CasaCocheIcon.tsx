
import React from 'react';

export const CasaCocheIcon: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
    <polyline points="9 22 9 12 15 12 15 22"></polyline>
    <circle cx="17" cy="18" r="2"></circle>
    <circle cx="7" cy="18" r="2"></circle>
    <path d="M9 18h6"></path>
  </svg>
);
