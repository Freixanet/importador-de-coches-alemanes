
import React from 'react';

export const TrophyIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.983 1.903a.75.75 0 00-1.966 0L4.168 6.13a.75.75 0 00-.356.57l-.337 4.96a.75.75 0 00.51.724l7.25 2.9a.75.75 0 00.44 0l7.25-2.9a.75.75 0 00.51-.724l-.337-4.96a.75.75 0 00-.356-.57L11.983 1.903zM12 22.097V15.54" />
    </svg>
);
