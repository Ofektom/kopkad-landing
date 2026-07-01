import React from 'react';

/**
 * CoopLogoMark — the X symbol mark.
 *
 * The X has four arms. The top-right arm is longer than the rest and ends
 * with a slanted (butt) cut — the distinctive feature of the mark.
 *
 * color: stroke color (default amber, passes through to any background)
 */
export const CoopLogoMark = ({ size = 36, color = '#d97706' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {/* Bar 1 — top-left ↘ bottom-right, round caps both ends */}
    <line
      x1="7" y1="9"
      x2="27" y2="31"
      stroke={color}
      strokeWidth="5.2"
      strokeLinecap="round"
    />

    {/* Bar 2 lower — bottom-left ↗ to center, round cap on bottom-left end */}
    <line
      x1="7" y1="31"
      x2="17.5" y2="18.5"
      stroke={color}
      strokeWidth="5.2"
      strokeLinecap="round"
    />

    {/* Bar 2 upper — center ↗ extended top-right, butt cap = slanted end */}
    <line
      x1="17.5" y1="18.5"
      x2="34"   y2="2"
      stroke={color}
      strokeWidth="5.2"
      strokeLinecap="butt"
    />
  </svg>
);

export const CoopWordmark = ({ className = '' }) => (
  <div className={`flex items-center gap-2.5 ${className}`}>
    <CoopLogoMark size={34} color="#d97706" />
    <div className="flex flex-col justify-center leading-none">
      <span
        className="font-bold text-[#0f1629] tracking-tight"
        style={{ fontFamily: 'Montserrat, Inter, system-ui, sans-serif', fontSize: '18px', lineHeight: '1.15' }}
      >
        kopkad
      </span>
      <span
        className="font-semibold text-[#9ca3af] uppercase"
        style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '9px', letterSpacing: '0.13em', lineHeight: '1.5' }}
      >
        cooperative
      </span>
    </div>
  </div>
);
