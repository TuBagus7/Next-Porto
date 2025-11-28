import React from 'react';

const WavingFlag = ({ country }) => {
  if (country === 'indonesia') {
    return (
      <div className="relative inline-block" style={{ perspective: '1000px' }}>
        <div 
          className="relative w-20 h-12 shadow-lg"
          style={{
            transformStyle: 'preserve-3d',
            animation: 'wave 2s ease-in-out infinite'
          }}
        >
          {/* Red stripe */}
          <div 
            className="absolute top-0 left-0 w-full h-1/2"
            style={{
              background: 'linear-gradient(90deg, #FF0000 0%, #CC0000 25%, #FF0000 50%, #CC0000 75%, #FF0000 100%)'
            }}
          />
          {/* White stripe */}
          <div 
            className="absolute bottom-0 left-0 w-full h-1/2"
            style={{
              background: 'linear-gradient(90deg, #FFFFFF 0%, #E8E8E8 25%, #FFFFFF 50%, #E8E8E8 75%, #FFFFFF 100%)'
            }}
          />
        </div>
      </div>
    );
  }

  if (country === 'uk') {
    return (
      <div className="relative inline-block" style={{ perspective: '1000px' }}>
        <div 
          className="relative w-20 h-12 shadow-lg"
          style={{
            transformStyle: 'preserve-3d',
            animation: 'wave 2s ease-in-out infinite'
          }}
        >
          <svg viewBox="0 0 60 30" className="w-full h-full">
            {/* Blue background */}
            <rect width="60" height="30" fill="#012169"/>
            {/* White diagonal cross (St Patrick & St Andrew) */}
            <path d="M0,0 L60,30 M60,0 L0,30" stroke="white" strokeWidth="6"/>
            {/* Red diagonal cross (St Patrick) */}
            <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="4"/>
            {/* White cross (St George) */}
            <path d="M30,0 L30,30 M0,15 L60,15" stroke="white" strokeWidth="10"/>
            {/* Red cross (St George) */}
            <path d="M30,0 L30,30 M0,15 L60,15" stroke="#C8102E" strokeWidth="6"/>
          </svg>
        </div>
      </div>
    );
  }

  return null;
};

export default WavingFlag;
