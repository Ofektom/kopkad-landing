import React, { useState } from 'react';
import { goToApp } from '../utils/appNav';
import {
  Users2, ChevronDown, ChevronUp, ArrowRight, ClipboardList,
  Zap, TrendingUp, CircleDollarSign, HandCoins, Users,
  QrCode, Lock, LineChart, Wallet, Store, Smartphone, Send,
  Landmark, MessageSquareText, UserPlus, Coins, Trophy,
} from 'lucide-react';
import {CoopLogoMark } from './CoopLogo.jsx';

// ── SVG Illustrations ─────────────────────────────────────────────────────────

const SavingsIllustration = () => (
  <svg viewBox="0 0 480 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-md">
    <rect x="140" y="20" width="200" height="360" rx="28" fill="#0e4f63" />
    <rect x="148" y="36" width="184" height="328" rx="20" fill="#f0fdff" />
    <rect x="148" y="36" width="184" height="36" rx="20" fill="#155e75" />
    <circle cx="240" cy="54" r="6" fill="#0e4f63" />
    <rect x="156" y="80" width="168" height="48" rx="10" fill="#155e75" />
    <text x="172" y="100" fontSize="10" fill="#a5f3fc" fontFamily="sans-serif">Total Savings</text>
    <text x="172" y="118" fontSize="14" fill="white" fontWeight="bold" fontFamily="sans-serif">₦485,000</text>
    <rect x="156" y="138" width="78" height="60" rx="10" fill="#fff7ed" />
    <circle cx="175" cy="158" r="10" fill="#fed7aa" />
    <text x="168" y="162" fontSize="10" fill="#c2410c" fontFamily="sans-serif">₦</text>
    <text x="162" y="178" fontSize="8" fill="#9a3412" fontFamily="sans-serif">Collected</text>
    <text x="162" y="190" fontSize="10" fill="#c2410c" fontWeight="bold" fontFamily="sans-serif">₦120k</text>
    <rect x="246" y="138" width="78" height="60" rx="10" fill="#f0fdff" />
    <circle cx="265" cy="158" r="10" fill="#a5f3fc" />
    <text x="260" y="162" fontSize="9" fill="#0e7490" fontFamily="sans-serif">+</text>
    <text x="251" y="178" fontSize="8" fill="#164e63" fontFamily="sans-serif">Members</text>
    <text x="258" y="190" fontSize="10" fill="#0e7490" fontWeight="bold" fontFamily="sans-serif">48</text>
    <rect x="156" y="210" width="168" height="90" rx="10" fill="white" />
    <text x="166" y="225" fontSize="8" fill="#6b7280" fontFamily="sans-serif">Monthly Collections</text>
    <rect x="168" y="260" width="18" height="30" rx="3" fill="#155e75" opacity="0.4" />
    <rect x="194" y="248" width="18" height="42" rx="3" fill="#155e75" opacity="0.6" />
    <rect x="220" y="240" width="18" height="50" rx="3" fill="#155e75" />
    <rect x="246" y="245" width="18" height="45" rx="3" fill="#f97316" />
    <rect x="272" y="235" width="18" height="55" rx="3" fill="#155e75" />
    <rect x="298" y="242" width="18" height="48" rx="3" fill="#155e75" opacity="0.7" />
    <rect x="156" y="312" width="168" height="44" rx="10" fill="white" />
    <circle cx="173" cy="334" r="10" fill="#fed7aa" />
    <text x="170" y="338" fontSize="9" fill="#9a3412" fontFamily="sans-serif">A</text>
    <rect x="190" y="328" width="70" height="6" rx="3" fill="#e5e7eb" />
    <rect x="190" y="338" width="50" height="5" rx="2" fill="#e5e7eb" />
    <rect x="282" y="327" width="34" height="14" rx="5" fill="#dcfce7" />
    <text x="286" y="338" fontSize="8" fill="#166534" fontFamily="sans-serif">Paid</text>
    <rect x="30" y="100" width="120" height="56" rx="14" fill="white" opacity="0.95" />
    <circle cx="54" cy="128" r="14" fill="#fed7aa" />
    <text x="48" y="133" fontSize="12" fill="#c2410c" fontFamily="sans-serif">₦</text>
    <text x="76" y="120" fontSize="8" fill="#6b7280" fontFamily="sans-serif">Payment</text>
    <text x="76" y="133" fontSize="10" fill="#111827" fontWeight="bold" fontFamily="sans-serif">₦5,000</text>
    <text x="76" y="144" fontSize="8" fill="#16a34a" fontFamily="sans-serif">✓ Approved</text>
    <rect x="330" y="200" width="120" height="56" rx="14" fill="white" opacity="0.95" />
    <circle cx="354" cy="228" r="14" fill="#d1fae5" />
    <text x="347" y="233" fontSize="14" fill="#059669" fontFamily="sans-serif">↑</text>
    <text x="376" y="220" fontSize="8" fill="#6b7280" fontFamily="sans-serif">Savings Rate</text>
    <text x="376" y="233" fontSize="11" fill="#111827" fontWeight="bold" fontFamily="sans-serif">+24.5%</text>
    <text x="376" y="244" fontSize="8" fill="#6b7280" fontFamily="sans-serif">this month</text>
    <circle cx="60" cy="300" r="8" fill="#f97316" opacity="0.3" />
    <circle cx="420" cy="80" r="12" fill="#155e75" opacity="0.2" />
    <circle cx="400" cy="340" r="6" fill="#f97316" opacity="0.4" />
  </svg>
);

const PosIllustration = () => (
  <svg viewBox="0 0 520 420" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-lg">
    {/* Merchant phone */}
    <rect x="150" y="10" width="220" height="400" rx="28" fill="#0e4f63" />
    <rect x="158" y="26" width="204" height="368" rx="20" fill="#f8fafc" />
    <rect x="158" y="26" width="204" height="40" rx="20" fill="#155e75" />
    <text x="196" y="52" fontSize="11" fill="#a5f3fc" fontFamily="sans-serif" fontWeight="600">Kopkad Pay · POS</text>

    {/* Wallet card */}
    <rect x="168" y="76" width="184" height="78" rx="14" fill="#155e75" />
    <text x="182" y="96" fontSize="8" fill="#a5f3fc" fontFamily="sans-serif">Wallet Balance</text>
    <text x="182" y="118" fontSize="18" fill="white" fontWeight="bold" fontFamily="sans-serif">₦184,250</text>
    <text x="182" y="138" fontSize="7.5" fill="#a5f3fc" fontFamily="sans-serif">Wema Bank · 99•• ••• 678</text>
    <rect x="296" y="128" width="46" height="16" rx="8" fill="white" opacity="0.2" />
    <text x="303" y="139" fontSize="7" fill="white" fontFamily="sans-serif">Share QR</text>

    {/* Three equal tiles */}
    {[
      { x: 168, label1: 'Charge', label2: 'Customer', bg: '#fff7ed', fg: '#c2410c', glyph: '₦' },
      { x: 231, label1: 'To', label2: 'Kopkad', bg: '#ecfeff', fg: '#0e7490', glyph: '→' },
      { x: 294, label1: 'To', label2: 'Bank', bg: '#eef2ff', fg: '#4338ca', glyph: '⌂' },
    ].map(({ x, label1, label2, bg, fg, glyph }) => (
      <g key={label2}>
        <rect x={x} y="166" width="58" height="66" rx="12" fill={bg} />
        <circle cx={x + 29} cy="188" r="11" fill="white" />
        <text x={x + 29} y="192" fontSize="11" fill={fg} fontFamily="sans-serif" fontWeight="700" textAnchor="middle">{glyph}</text>
        <text x={x + 29} y="212" fontSize="7.5" fill={fg} fontFamily="sans-serif" fontWeight="600" textAnchor="middle">{label1}</text>
        <text x={x + 29} y="222" fontSize="7.5" fill={fg} fontFamily="sans-serif" fontWeight="600" textAnchor="middle">{label2}</text>
      </g>
    ))}

    {/* Code entry */}
    <text x="168" y="252" fontSize="8" fill="#374151" fontFamily="sans-serif" fontWeight="600">Enter customer&apos;s code</text>
    {[0, 1, 2, 3, 4, 5].map(i => (
      <rect key={i} x={168 + i * 31} y="260" width="26" height="30" rx="6" fill="white" stroke="#cbd5e1" />
    ))}
    {/* One text run, one glyph per box — keeps the code a single string */}
    <text x="181 212 243 274 305 336" y="280" fontSize="12" fill="#0f172a" fontFamily="sans-serif" fontWeight="700" textAnchor="middle">482913</text>
    <rect x="168" y="302" width="184" height="30" rx="10" fill="#0e7490" />
    <text x="260" y="321" fontSize="9" fill="white" fontFamily="sans-serif" fontWeight="700" textAnchor="middle">Charge ₦2,500</text>

    {/* Success row */}
    <rect x="168" y="344" width="184" height="36" rx="10" fill="#f0fdf4" />
    <circle cx="186" cy="362" r="9" fill="#dcfce7" />
    <text x="182" y="366" fontSize="10" fill="#16a34a" fontFamily="sans-serif">✓</text>
    <text x="202" y="359" fontSize="8" fill="#166534" fontFamily="sans-serif" fontWeight="600">Payment received</text>
    <text x="202" y="370" fontSize="7" fill="#6b7280" fontFamily="sans-serif">From Ada · 0803••••412</text>

    {/* Customer's basic phone with SMS */}
    <g>
      <animateTransform attributeName="transform" type="translate" values="0,0;0,-6;0,0" dur="3s" repeatCount="indefinite" />
      <rect x="10" y="150" width="120" height="200" rx="16" fill="#334155" />
      <rect x="20" y="166" width="100" height="92" rx="6" fill="#d9f99d" />
      <text x="28" y="182" fontSize="7" fill="#365314" fontFamily="monospace" fontWeight="700">KOPKAD</text>
      <text x="28" y="196" fontSize="6.5" fill="#365314" fontFamily="monospace">Pay ₦2,500 to</text>
      <text x="28" y="207" fontSize="6.5" fill="#365314" fontFamily="monospace">Mama Ngozi Store</text>
      <text x="28" y="222" fontSize="6.5" fill="#365314" fontFamily="monospace">Code:</text>
      <text x="28" y="238" fontSize="12" fill="#1a2e05" fontFamily="monospace" fontWeight="700">482913</text>
      <text x="28" y="251" fontSize="5.5" fill="#365314" fontFamily="monospace">Expires in 3 min</text>
      {[0, 1, 2].map(r => [0, 1, 2].map(c => (
        <rect key={`${r}-${c}`} x={30 + c * 28} y={270 + r * 24} width="22" height="16" rx="5" fill="#475569" />
      )))}
    </g>
    <rect x="22" y="362" width="100" height="20" rx="10" fill="#fff7ed" />
    <text x="72" y="376" fontSize="7" fill="#c2410c" fontFamily="sans-serif" fontWeight="600" textAnchor="middle">No data · No app</text>

    {/* QR sticker */}
    <g>
      <animateTransform attributeName="transform" type="translate" values="0,0;0,-5;0,0" dur="2.6s" repeatCount="indefinite" />
      <rect x="392" y="90" width="112" height="132" rx="14" fill="white" opacity="0.97" />
      <text x="448" y="110" fontSize="8" fill="#155e75" fontFamily="sans-serif" fontWeight="700" textAnchor="middle">Pay this shop</text>
      {[[0,0],[0,1],[1,0],[2,2],[3,1],[1,3],[4,4],[0,4],[4,0],[2,0],[3,3],[1,2]].map(([r, c]) => (
        <rect key={`${r}${c}`} x={420 + c * 12} y={118 + r * 12} width="10" height="10" fill="#0e7490" />
      ))}
      <text x="448" y="196" fontSize="7" fill="#6b7280" fontFamily="sans-serif" textAnchor="middle">Transfer from</text>
      <text x="448" y="207" fontSize="7" fill="#6b7280" fontFamily="sans-serif" textAnchor="middle">any bank app</text>
    </g>

    <circle cx="480" cy="300" r="10" fill="#f97316" opacity="0.3" />
    <circle cx="420" cy="380" r="7" fill="#155e75" opacity="0.2" />
  </svg>
);

const InvestmentIllustration = () => (
  <svg viewBox="0 0 520 420" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-lg">
    {/* Main fund card */}
    <rect x="80" y="30" width="280" height="200" rx="20" fill="url(#investGrad)" />
    <defs>
      <linearGradient id="investGrad" x1="0" y1="0" x2="280" y2="200" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#0e4f63" />
        <stop offset="100%" stopColor="#1d4ed8" />
      </linearGradient>
    </defs>

    {/* Lock badge */}
    <rect x="96" y="46" width="88" height="22" rx="11" fill="white" opacity="0.15" />
    <text x="108" y="61" fontSize="10" fill="white" fontFamily="sans-serif" fontWeight="600">🔒 Locked Savings</text>

    {/* Principal */}
    <text x="96" y="90" fontSize="9" fill="#a5f3fc" fontFamily="sans-serif">Principal Amount</text>
    <text x="96" y="112" fontSize="26" fill="white" fontFamily="sans-serif" fontWeight="800">₦100,000</text>

    {/* Rate badge */}
    <rect x="256" y="90" width="86" height="32" rx="10" fill="white" opacity="0.2" />
    <text x="269" y="103" fontSize="8" fill="#a5f3fc" fontFamily="sans-serif">Annual Rate</text>
    <text x="269" y="116" fontSize="13" fill="#fbbf24" fontFamily="sans-serif" fontWeight="800">8% p.a.</text>

    {/* Divider */}
    <line x1="96" y1="126" x2="344" y2="126" stroke="white" strokeOpacity="0.2" strokeWidth="1" />

    {/* Stats row */}
    <text x="96" y="148" fontSize="8" fill="#a5f3fc" fontFamily="sans-serif">Projected Interest</text>
    <text x="96" y="162" fontSize="14" fill="#4ade80" fontFamily="sans-serif" fontWeight="700">+₦8,000</text>

    <text x="220" y="148" fontSize="8" fill="#a5f3fc" fontFamily="sans-serif">At Maturity</text>
    <text x="220" y="162" fontSize="14" fill="white" fontFamily="sans-serif" fontWeight="700">₦108,000</text>

    {/* Maturity */}
    <text x="96" y="184" fontSize="8" fill="#a5f3fc" fontFamily="sans-serif">Maturity Date</text>
    <text x="96" y="198" fontSize="10" fill="white" fontFamily="sans-serif" fontWeight="600">Dec 31, 2025 · 6 months</text>
    <text x="254" y="198" fontSize="10" fill="#fbbf24" fontFamily="sans-serif">217 days left</text>

    {/* Progress bar */}
    <rect x="80" y="240" width="280" height="14" rx="7" fill="#e2e8f0" />
    <rect x="80" y="240" width="140" height="14" rx="7" fill="#0e7490" />
    <text x="80" y="270" fontSize="8" fill="#6b7280" fontFamily="sans-serif">Start: Jun 2025</text>
    <text x="300" y="270" fontSize="8" fill="#6b7280" fontFamily="sans-serif">End: Dec 2025</text>

    {/* Growth chart */}
    <rect x="80" y="285" width="280" height="110" rx="14" fill="white" />
    <text x="96" y="306" fontSize="8" fill="#374151" fontFamily="sans-serif" fontWeight="600">Growth Projection</text>
    {/* Chart line */}
    <polyline
      points="96,370 136,358 176,346 216,334 256,322 296,310 336,300"
      stroke="#0e7490" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"
    />
    {/* Chart fill */}
    <polygon
      points="96,372 136,360 176,348 216,336 256,324 296,312 336,302 336,372"
      fill="#0e7490" opacity="0.08"
    />
    {/* Chart dots */}
    <circle cx="96" cy="370" r="3" fill="#0e7490" />
    <circle cx="216" cy="334" r="3" fill="#0e7490" />
    <circle cx="336" cy="300" r="4" fill="#0e7490" />
    <rect x="294" y="280" width="44" height="16" rx="6" fill="#dcfce7" />
    <text x="300" y="292" fontSize="8" fill="#166534" fontFamily="sans-serif" fontWeight="700">+8.0%</text>

    {/* Floating cards */}
    <rect x="0" y="60" width="68" height="68" rx="14" fill="white" opacity="0.97" />
    <text x="18" y="92" fontSize="22" fontFamily="sans-serif">📈</text>
    <text x="10" y="112" fontSize="7" fill="#374151" fontFamily="sans-serif" fontWeight="600">Fixed-rate</text>
    <text x="14" y="122" fontSize="7" fill="#6b7280" fontFamily="sans-serif">Returns</text>

    <rect x="388" y="150" width="110" height="62" rx="14" fill="white" opacity="0.97" />
    <circle cx="408" cy="178" r="12" fill="#fef3c7" />
    <text x="401" y="183" fontSize="12" fontFamily="sans-serif">💰</text>
    <text x="426" y="170" fontSize="7" fill="#6b7280" fontFamily="sans-serif">Total Funds</text>
    <text x="426" y="182" fontSize="10" fill="#111827" fontFamily="sans-serif" fontWeight="700">3 Active</text>
    <text x="426" y="194" fontSize="7" fill="#0e7490" fontFamily="sans-serif">₦285,000</text>
    <text x="426" y="205" fontSize="7" fill="#16a34a" fontFamily="sans-serif">+₦22,800 gains</text>

    <circle cx="460" cy="50" r="10" fill="#f97316" opacity="0.3" />
    <circle cx="30" cy="380" r="7" fill="#155e75" opacity="0.2" />
  </svg>
);

// ── Illustrated Scene SVGs ───────────────────────────────────────────────────

const AgentFieldSVG = () => (
  <svg viewBox="0 0 240 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect width="240" height="280" fill="#ecfeff" />
    {/* Ground shadow */}
    <ellipse cx="120" cy="266" rx="64" ry="9" fill="#a5f3fc" opacity="0.35" />
    {/* === BODY === */}
    <path d="M86 130 C82 130 76 134 74 152 L68 214 C68 218 72 220 88 220 L152 220 C168 220 172 218 172 214 L166 152 C164 134 158 130 154 130 Z" fill="#f97316" />
    {/* Collar */}
    <path d="M106 130 L120 150 L134 130" fill="#fde8d8" />
    {/* Neck */}
    <rect x="113" y="112" width="14" height="20" rx="6" fill="#c47a3a" />
    {/* Head */}
    <circle cx="120" cy="84" r="30" fill="#c47a3a" />
    {/* Afro hair */}
    <ellipse cx="120" cy="60" rx="34" ry="26" fill="#2d1400" />
    <circle cx="94" cy="70" r="11" fill="#2d1400" />
    <circle cx="146" cy="70" r="11" fill="#2d1400" />
    <circle cx="120" cy="56" r="13" fill="#2d1400" />
    {/* Eyes */}
    <circle cx="111" cy="87" r="3" fill="#4a2008" />
    <circle cx="129" cy="87" r="3" fill="#4a2008" />
    {/* Smile */}
    <path d="M113 98 Q120 105 127 98" stroke="#9a5020" strokeWidth="2.2" fill="none" strokeLinecap="round" />
    {/* === LEFT ARM — holding card === */}
    <path d="M86 144 L52 168 L46 198" stroke="#c47a3a" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    {/* === RIGHT ARM — holding phone === */}
    <path d="M154 144 L180 158 L184 184" stroke="#c47a3a" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    {/* === QR SAVINGS CARD === */}
    <rect x="24" y="192" width="48" height="62" rx="5" fill="white" />
    <rect x="24" y="192" width="48" height="14" rx="5" fill="#155e75" />
    <text x="30" y="203" fontSize="6.5" fill="white" fontFamily="sans-serif" fontWeight="700">KOPKAD</text>
    {/* QR dots */}
    <rect x="30" y="210" width="7" height="7" fill="#0e7490" />
    <rect x="30" y="218" width="7" height="7" fill="#0e7490" />
    <rect x="38" y="210" width="7" height="7" fill="#0e7490" />
    <rect x="46" y="210" width="7" height="7" fill="#0e7490" />
    <rect x="46" y="218" width="7" height="7" fill="#0e7490" />
    <rect x="38" y="218" width="3" height="3" fill="#0e7490" />
    <rect x="30" y="226" width="7" height="7" fill="#0e7490" />
    <rect x="46" y="226" width="7" height="7" fill="#0e7490" />
    <rect x="38" y="226" width="3" height="3" fill="#0e7490" />
    <text x="28" y="246" fontSize="5.5" fill="#6b7280" fontFamily="sans-serif">Member ID</text>
    <text x="28" y="253" fontSize="6" fill="#374151" fontFamily="sans-serif" fontWeight="700">AJO-10421</text>
    {/* === PHONE === */}
    <rect x="168" y="172" width="40" height="66" rx="7" fill="#1e293b" />
    <rect x="171" y="176" width="34" height="54" rx="5" fill="#0f172a" />
    <rect x="174" y="179" width="28" height="9" rx="3" fill="#155e75" />
    <text x="176" y="186" fontSize="5.5" fill="#a5f3fc" fontFamily="sans-serif">Scanning…</text>
    {/* Animated scan line */}
    <line x1="171" y1="197" x2="205" y2="197" stroke="#f97316" strokeWidth="1.5" opacity="0.9">
      <animate attributeName="y1" values="189;225;189" dur="1.8s" repeatCount="indefinite" />
      <animate attributeName="y2" values="189;225;189" dur="1.8s" repeatCount="indefinite" />
    </line>
    <text x="174" y="224" fontSize="5.5" fill="#22d3ee" fontFamily="sans-serif">₦5,000</text>
    <rect x="174" y="226" width="28" height="9" rx="3" fill="#dcfce7" />
    <text x="177" y="233" fontSize="5.5" fill="#166534" fontFamily="sans-serif">✓ Marked!</text>
    {/* === Floating elements === */}
    <g>
      <animateTransform attributeName="transform" type="translate" values="0,0;0,-9;0,0" dur="2.6s" repeatCount="indefinite" />
      <circle cx="18" cy="136" r="13" fill="#fef3c7" />
      <text x="11" y="141" fontSize="12" fill="#d97706" fontFamily="sans-serif" fontWeight="700">₦</text>
    </g>
    <g>
      <animateTransform attributeName="transform" type="translate" values="0,0;0,-6;0,0" dur="2s" repeatCount="indefinite" />
      <circle cx="212" cy="104" r="15" fill="#dcfce7" />
      <text x="205" y="110" fontSize="15" fontFamily="sans-serif">✓</text>
    </g>
    <text x="198" y="58" fontSize="13" fill="#f97316" opacity="0.7" fontFamily="sans-serif">★
      <animate attributeName="opacity" values="0.7;0.2;0.7" dur="1.6s" repeatCount="indefinite" />
    </text>
    <text x="14" y="196" fontSize="9" fill="#0e7490" opacity="0.4" fontFamily="sans-serif">✦
      <animate attributeName="opacity" values="0.4;0.1;0.4" dur="2.2s" repeatCount="indefinite" />
    </text>
  </svg>
);

const MobilePaymentSVG = () => (
  <svg viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect width="320" height="180" fill="#fff7ed" />
    {/* Decorative circles */}
    <circle cx="160" cy="90" r="56" fill="#fed7aa" opacity="0.25" />
    <circle cx="160" cy="90" r="36" fill="#fed7aa" opacity="0.2" />
    {/* === LEFT PERSON (SENDER) === */}
    {/* Body */}
    <path d="M28 100 C26 100 22 102 22 110 L18 150 C18 154 20 156 32 156 L60 156 C72 156 74 154 74 150 L70 110 C70 102 66 100 64 100 Z" fill="#155e75" />
    {/* Neck */}
    <rect x="39" y="88" width="10" height="14" rx="5" fill="#fed7aa" />
    {/* Head */}
    <circle cx="44" cy="76" r="20" fill="#fed7aa" />
    {/* Hair */}
    <ellipse cx="44" cy="60" rx="21" ry="13" fill="#5c3317" />
    {/* Eyes */}
    <circle cx="38" cy="78" r="2" fill="#44403c" />
    <circle cx="50" cy="78" r="2" fill="#44403c" />
    <path d="M39 85 Q44 89 49 85" stroke="#9a3412" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    {/* Left arm up — holding phone */}
    <path d="M28 110 L14 98 L10 82" stroke="#fed7aa" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    {/* Sending phone */}
    <rect x="2" y="60" width="22" height="36" rx="4" fill="#1e293b" />
    <rect x="4" y="63" width="18" height="28" rx="3" fill="#0f172a" />
    <rect x="6" y="65" width="14" height="6" rx="2" fill="#f97316" />
    <text x="7" y="70" fontSize="4" fill="white" fontFamily="sans-serif">Sending</text>
    <text x="6" y="82" fontSize="5.5" fill="#fbbf24" fontFamily="sans-serif" fontWeight="700">₦5k</text>
    {/* === FLOATING COINS === */}
    {[0,1,2].map(i => (
      <g key={i}>
        <animateTransform attributeName="transform" type="translate" values={`0,0;${30+i*30},0;${60+i*20},0`} dur={`${1.2+i*0.3}s`} repeatCount="indefinite" />
        <circle cx={90+i*20} cy={82+i*6} r="10" fill="#fbbf24">
          <animate attributeName="opacity" values="0;1;0" dur={`${1.2+i*0.3}s`} repeatCount="indefinite" begin={`${i*0.3}s`} />
        </circle>
        <text x={86+i*20} y={86+i*6} fontSize="9" fill="#78350f" fontFamily="sans-serif" fontWeight="700">
          ₦
          <animate attributeName="opacity" values="0;1;0" dur={`${1.2+i*0.3}s`} repeatCount="indefinite" begin={`${i*0.3}s`} />
        </text>
      </g>
    ))}
    {/* Arrow */}
    <path d="M 118 90 L 200 90" stroke="#f97316" strokeWidth="2.5" strokeDasharray="6 4" opacity="0.6" />
    <polygon points="200,86 208,90 200,94" fill="#f97316" opacity="0.6" />
    {/* === RIGHT PERSON (RECEIVER) === */}
    <path d="M256 100 C254 100 250 102 250 110 L246 150 C246 154 248 156 260 156 L288 156 C300 156 302 154 302 150 L298 110 C298 102 294 100 292 100 Z" fill="#f97316" />
    <rect x="267" y="88" width="10" height="14" rx="5" fill="#c47a3a" />
    <circle cx="272" cy="76" r="20" fill="#c47a3a" />
    <ellipse cx="272" cy="58" rx="22" ry="15" fill="#2d1400" />
    <circle cx="266" cy="78" r="2" fill="#44403c" />
    <circle cx="278" cy="78" r="2" fill="#44403c" />
    <path d="M267 85 Q272 90 277 85" stroke="#9a5020" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    <path d="M292 110 L306 98 L310 82" stroke="#c47a3a" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    {/* Receiving phone */}
    <rect x="296" y="60" width="22" height="36" rx="4" fill="#1e293b" />
    <rect x="298" y="63" width="18" height="28" rx="3" fill="#0f172a" />
    <rect x="300" y="65" width="14" height="6" rx="2" fill="#dcfce7" />
    <text x="301" y="70" fontSize="4" fill="#166534" fontFamily="sans-serif">Received!</text>
    <text x="302" y="80" fontSize="5.5" fill="#4ade80" fontFamily="sans-serif" fontWeight="700">₦5k</text>
    <circle cx="307" cy="57" r="7" fill="#dcfce7">
      <animate attributeName="r" values="6;9;6" dur="1.4s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="1;0.4;1" dur="1.4s" repeatCount="indefinite" />
    </circle>
    <text x="304" y="61" fontSize="8" fontFamily="sans-serif">✓</text>
    {/* Label */}
    <text x="130" y="165" fontSize="9" fill="#c2410c" fontFamily="sans-serif" fontWeight="600" textAnchor="middle">Instant · Secure · Verified</text>
  </svg>
);

const ShopCounterSVG = () => (
  <svg viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect width="320" height="180" fill="#eef2ff" />
    {/* Shop awning */}
    <rect x="0" y="0" width="320" height="22" fill="#6366f1" />
    {[0, 1, 2, 3, 4, 5, 6, 7].map(i => (
      <path key={i} d={`M${i * 40} 22 Q${i * 40 + 20} 36 ${i * 40 + 40} 22`} fill={i % 2 ? '#6366f1' : '#f97316'} />
    ))}
    {/* Counter */}
    <rect x="20" y="128" width="280" height="14" rx="5" fill="#c7d2fe" />
    <rect x="30" y="142" width="260" height="34" fill="#a5b4fc" />
    {/* Goods */}
    <rect x="36" y="104" width="22" height="24" rx="3" fill="#fbbf24" />
    <rect x="62" y="96" width="18" height="32" rx="3" fill="#34d399" />
    <rect x="84" y="108" width="26" height="20" rx="3" fill="#f87171" />
    {/* Merchant */}
    <path d="M152 92 C148 92 144 96 144 104 L142 128 L198 128 L196 104 C196 96 192 92 188 92 Z" fill="#0e7490" />
    <rect x="164" y="76" width="12" height="18" rx="6" fill="#c47a3a" />
    <circle cx="170" cy="62" r="18" fill="#c47a3a" />
    <ellipse cx="170" cy="48" rx="20" ry="12" fill="#2d1400" />
    <circle cx="164" cy="64" r="2" fill="#4a2008" />
    <circle cx="176" cy="64" r="2" fill="#4a2008" />
    <path d="M165 71 Q170 75 175 71" stroke="#9a5020" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    {/* Merchant's phone */}
    <path d="M196 104 L214 110" stroke="#c47a3a" strokeWidth="9" strokeLinecap="round" />
    <rect x="212" y="94" width="20" height="34" rx="4" fill="#1e293b" />
    <rect x="214" y="98" width="16" height="24" rx="2" fill="#dcfce7" />
    <text x="222" y="113" fontSize="9" fill="#16a34a" fontFamily="sans-serif" textAnchor="middle">✓</text>
    {/* QR sticker on counter */}
    <rect x="246" y="98" width="34" height="30" rx="4" fill="white" />
    <rect x="251" y="102" width="8" height="8" fill="#0e7490" />
    <rect x="267" y="102" width="8" height="8" fill="#0e7490" />
    <rect x="251" y="116" width="8" height="8" fill="#0e7490" />
    <rect x="262" y="113" width="5" height="5" fill="#0e7490" />
    {/* Floating badge */}
    <g>
      <animateTransform attributeName="transform" type="translate" values="0,0;0,-5;0,0" dur="3s" repeatCount="indefinite" />
      <rect x="226" y="44" width="84" height="30" rx="10" fill="white" opacity="0.95" />
      <text x="234" y="56" fontSize="7" fill="#4338ca" fontFamily="sans-serif" fontWeight="700">₦2,500 received</text>
      <text x="234" y="67" fontSize="6" fill="#6366f1" fontFamily="sans-serif">via SMS code</text>
    </g>
    <text x="160" y="166" fontSize="8" fill="#3730a3" fontFamily="sans-serif" fontWeight="600" textAnchor="middle">Your phone is the POS</text>
  </svg>
);

const CoopGroupSVG = () => (
  <svg viewBox="0 0 240 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect width="240" height="280" fill="#f0fdf4" />
    {/* Ground */}
    <ellipse cx="120" cy="266" rx="80" ry="10" fill="#a7f3d0" opacity="0.3" />
    {/* === PERSON LEFT === */}
    <path d="M22 168 C18 168 14 172 14 182 L10 234 C10 238 14 240 28 240 L56 240 C70 240 74 238 74 234 L70 182 C70 172 66 168 62 168 Z" fill="#0d9488" />
    <rect x="34" y="154" width="10" height="16" rx="5" fill="#fed7aa" />
    <circle cx="39" cy="140" r="22" fill="#fed7aa" />
    <ellipse cx="39" cy="122" rx="23" ry="14" fill="#92400e" />
    <circle cx="33" cy="143" r="2.5" fill="#44403c" />
    <circle cx="45" cy="143" r="2.5" fill="#44403c" />
    <path d="M34 152 Q39 157 44 152" stroke="#9a3412" strokeWidth="1.8" fill="none" strokeLinecap="round" />
    {/* Left arm extended toward center */}
    <path d="M62 182 L90 196 L112 204" stroke="#fed7aa" strokeWidth="13" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    {/* Right arm down */}
    <path d="M22 182 L10 198" stroke="#fed7aa" strokeWidth="13" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    {/* === PERSON CENTER === */}
    <path d="M88 172 C84 172 80 176 80 186 L76 238 C76 242 80 244 96 244 L144 244 C160 244 164 242 164 238 L160 186 C160 176 156 172 152 172 Z" fill="#f97316" />
    <rect x="111" y="156" width="12" height="18" rx="6" fill="#c47a3a" />
    <circle cx="117" cy="140" r="24" fill="#c47a3a" />
    <ellipse cx="117" cy="120" rx="26" ry="18" fill="#2d1400" />
    <circle cx="109" cy="143" r="3" fill="#4a2008" />
    <circle cx="125" cy="143" r="3" fill="#4a2008" />
    <path d="M110 154 Q117 160 124 154" stroke="#9a5020" strokeWidth="2" fill="none" strokeLinecap="round" />
    {/* Both arms extended — center connector */}
    <path d="M152 186 L176 196 L196 192" stroke="#c47a3a" strokeWidth="13" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <path d="M80 186 L56 194" stroke="#c47a3a" strokeWidth="13" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    {/* === PERSON RIGHT === */}
    <path d="M178 162 C174 162 170 166 170 176 L166 228 C166 232 170 234 184 234 L210 234 C224 234 228 232 228 228 L224 176 C224 166 220 162 216 162 Z" fill="#0d9488" />
    <rect x="190" y="148" width="10" height="16" rx="5" fill="#c47a3a" />
    <circle cx="195" cy="134" r="22" fill="#c47a3a" />
    <path d="M174 126 Q195 104 216 126 Q212 114 195 108 Q178 114 174 126 Z" fill="#1c1917" />
    <circle cx="189" cy="137" r="2.5" fill="#44403c" />
    <circle cx="201" cy="137" r="2.5" fill="#44403c" />
    <path d="M190 146 Q195 151 200 146" stroke="#9a5020" strokeWidth="1.8" fill="none" strokeLinecap="round" />
    {/* Right arm toward center */}
    <path d="M170 176 L144 192" stroke="#c47a3a" strokeWidth="13" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    {/* Left arm down */}
    <path d="M216 176 L228 192" stroke="#c47a3a" strokeWidth="13" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    {/* === CENTRAL COIN SYMBOL === */}
    <g>
      <animateTransform attributeName="transform" type="translate" values="0,0;0,-8;0,0" dur="2.2s" repeatCount="indefinite" />
      <circle cx="120" cy="88" r="30" fill="#fef3c7">
        <animate attributeName="r" values="28;32;28" dur="2.2s" repeatCount="indefinite" />
      </circle>
      <circle cx="120" cy="88" r="22" fill="#fbbf24" />
      <text x="113" y="95" fontSize="18" fill="#78350f" fontFamily="sans-serif" fontWeight="800">₦</text>
    </g>
    {/* Sparkle stars */}
    <text x="52" y="72" fontSize="14" fill="#f97316" opacity="0.8" fontFamily="sans-serif">★
      <animate attributeName="opacity" values="0.8;0.2;0.8" dur="1.7s" repeatCount="indefinite" />
    </text>
    <text x="174" y="66" fontSize="10" fill="#0d9488" opacity="0.7" fontFamily="sans-serif">★
      <animate attributeName="opacity" values="0.7;0.15;0.7" dur="2.1s" repeatCount="indefinite" />
    </text>
    <text x="18" y="110" fontSize="9" fill="#fbbf24" opacity="0.6" fontFamily="sans-serif">✦
      <animate attributeName="opacity" values="0.6;0.1;0.6" dur="1.9s" repeatCount="indefinite" />
    </text>
    <text x="210" y="108" fontSize="12" fill="#f97316" opacity="0.5" fontFamily="sans-serif">✦
      <animate attributeName="opacity" values="0.5;0.1;0.5" dur="2.4s" repeatCount="indefinite" />
    </text>
    {/* Label */}
    <rect x="60" y="250" width="120" height="22" rx="11" fill="#ccfbf1" />
    <text x="120" y="265" fontSize="8.5" fill="#0f766e" fontFamily="sans-serif" fontWeight="700" textAnchor="middle">Stronger Together</text>
  </svg>
);

// ── Reusable sub-components ───────────────────────────────────────────────────

const StepIcon = ({ number, icon: Icon, color }) => (
  <div className={`w-16 h-16 rounded-2xl ${color} flex items-center justify-center relative mx-auto`}>
    <Icon size={28} className="text-white" />
    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-orange-500 text-white text-xs font-bold flex items-center justify-center">
      {number}
    </span>
  </div>
);

const FaqItem = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        className="w-full flex items-center justify-between px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors"
        onClick={() => setOpen(!open)}
      >
        <span className="font-semibold text-gray-800 pr-4">{q}</span>
        {open
          ? <ChevronUp className="text-cyan-700 flex-shrink-0" size={20} />
          : <ChevronDown className="text-gray-400 flex-shrink-0" size={20} />}
      </button>
      {open && (
        <div className="px-6 py-4 text-gray-600 text-sm leading-relaxed bg-gray-50 border-t border-gray-100">{a}</div>
      )}
    </div>
  );
};

// ── Main ──────────────────────────────────────────────────────────────────────
const Landing = ({ onStartClick, onCoopClick, onMerchantClick }) => {
  /* ── DATA ─────────────────────────────────────────────────────────────────── */

  const mainAppFeatures = [
    { icon: ClipboardList, color: 'bg-cyan-700',   title: 'AJO Daily Card Marking',    desc: 'The core market savings workflow. Field agents register customers and mark their daily contributions in seconds, earning commission paid by Kopkad.' },
    { icon: QrCode,           color: 'bg-orange-500', title: 'QR Physical Card System',    desc: 'Print QR savings cards for members. Scan with any smartphone to instantly open their account.' },
    { icon: TrendingUp,       color: 'bg-emerald-600', title: 'Interest on Your Savings',   desc: 'No commission to save. Your balance earns interest, accrued daily and credited monthly — up to 20% p.a. depending on how much and how long you save. Rate can change with notice; 10% withholding tax applies.' },
    { icon: Lock,             color: "bg-indigo-600", title: "Locked Savings",              desc: "Lock money for 3–12 months at a fixed rate of up to 20% p.a., set at creation. Add money any time (Flexible Lock) or lock a one-off sum (Fixed Lock)." },
    { icon: Wallet,        color: 'bg-cyan-700',   title: 'Wallet & Account Number',    desc: 'Complete KYC to get your own permanent 10-digit account number. Top up from any bank app, withdraw to your bank any time.' },
    { icon: Store,         color: 'bg-orange-500', title: 'Merchant POS',               desc: 'Turn your phone into a POS with Kopkad Pay: charge customers, send to any Kopkad user, or pay out to any bank.' },
    { icon: MessageSquareText, color: 'bg-indigo-600', title: 'Pay Without Data',       desc: 'Pay a Kopkad merchant from your wallet by reading out a one-time SMS code. You don\'t need a smartphone, data or a card.' },
    { icon: Zap,           color: 'bg-emerald-600',title: 'SMS & Email Notifications',  desc: 'Instant alerts when savings are marked, money lands in or leaves your wallet, or a payout is processed.' },
  ];

  const steps = [
    { icon: Users2,      color: 'bg-cyan-700',   title: 'Sign Up & Verify',         desc: 'Create your account, choose your role, and verify your identity to unlock all features.' },
    { icon: ClipboardList,  color: 'bg-orange-500', title: 'Set Up Your Operation',    desc: 'Start a savings plan, open a Locked Savings plan, or switch on your merchant POS and print your QR sticker.' },
    { icon: CircleDollarSign, color: 'bg-cyan-700',   title: 'Grow, Track & Pay Out',    desc: 'Save and earn interest, take payments at your shop, and withdraw to any bank, with a full record of every transaction.' },
  ];

  const testimonials = [
    {
      name: 'Amaka O.', location: 'Lagos', role: 'Thrift Operator',
      initials: 'AO', avatarBg: 'bg-cyan-700',
      quote: 'I used to carry exercise books everywhere for 60+ customers. Kopkad replaced all that. Now I mark cards and take payment for my provisions from the same phone.',
    },
    {
      name: 'Chukwudi E.', location: 'Enugu', role: 'Cooperative Manager',
      initials: 'CE', avatarBg: 'bg-orange-500',
      quote: 'The cooperative platform is exactly what we needed. Members send money to their own account numbers and we see it land in real time. No more collecting cash manually at meetings.',
    },
    {
      name: 'Fatima B.', location: 'Kano', role: 'Personal Saver',
      initials: 'FB', avatarBg: 'bg-indigo-600',
      quote: 'I top up my wallet straight from my bank app, pay at the shop with just an SMS code, and I have a Locked Savings plan growing for my daughter\'s education.',
    },
  ];

  const faqs = [
    {
      q: 'What is Kopkad?',
      a: 'Kopkad is a digital financial management platform for Nigeria with two separate products: the main app (app.kopkad.ng) for personal savers, merchants, and market savings collectors — and Cooperative by Kopkad (cooperative.kopkad.ng), a full SaaS platform for managing cooperative societies.',
    },
    {
      q: 'Does Kopkad charge a commission on savings?',
      a: 'No — there is no commission to save. Your savings earn interest, accrued daily. The fees that do apply: an SMS alert fee, which you can avoid by using free in-app / push notifications; and a small processing fee on instant or off-cycle withdrawals to your bank after the launch period. You keep all of your principal.',
    },
    {
      q: 'How does my money earn interest?',
      a: 'Your balance accrues interest every day and it is credited to your savings monthly — up to 20% per year depending on how much and how long you save. Unlike a Locked Savings plan, a regular savings rate is not locked: it can change with notice. 10% withholding tax applies to interest.',
    },
    {
      q: 'Do I need to verify my identity (BVN)?',
      a: 'Complete KYC to get your own 10-digit account number for bank-transfer deposits. Card and USSD payments work without it. Agents can help market traders complete KYC on the spot.',
    },
    {
      q: 'What is the difference between the main app and Cooperative by Kopkad?',
      a: 'The main app is for savers, merchants, and savings collectors: QR card markings, no-commission savings that earn daily interest, Locked Savings, a personal wallet with its own account number, and the Kopkad Pay merchant POS. Cooperative by Kopkad is a standalone platform for running a cooperative society — with personal member wallets, 10-digit account numbers, savings interest, contribution groups, loans, and a branded member portal.',
    },
    {
      q: 'How does Cooperative by Kopkad pricing work?',
      a: 'There are no fixed tiers. You pick only the services you need from our catalogue (Thrift Contribution, Loans, Branding, AI Website, Analytics, Listing & Promotion, and more) and pay the sum of their monthly prices. Longer billing terms come with a bulk discount — currently about 8% on annual billing and 13% on a 2-year term.',
    },
    {
      q: 'How do member account numbers work in the cooperative?',
      a: 'Every activated cooperative member gets a permanent 10-digit account number. Members transfer from any Nigerian bank directly to that number — no reference or narration needed. The deposit appears in their cooperative wallet within seconds.',
    },
    {
      q: "What is Locked Savings?",
      a: "Locked Savings lets you lock a sum for 3 to 12 months at a fixed rate — up to 20% per annum — set when you open the plan and unchanged for the term. Choose Flexible Lock to keep adding money until maturity, or Fixed Lock for a single lump sum. The projected interest at maturity (less 10% withholding tax) is shown before you commit a single naira.",
    },
    {
      q: 'How does a merchant charge a customer?',
      a: 'On the POS, the merchant enters the customer\'s phone number and the amount. Kopkad texts the customer a 6-digit code that expires in 3 minutes, and the customer reads it out to the merchant. Once the code is entered, the money moves from the customer\'s Kopkad wallet to the merchant\'s instantly. Charges of ₦50,000 or more also need the customer\'s own security answer.',
    },
    {
      q: 'Do my customers need the Kopkad app, a smartphone, or data?',
      a: 'No. To be charged with an SMS code, a customer only needs a Kopkad wallet and a phone that can receive texts, so even a basic phone works. Customers who don\'t use Kopkad can pay you by bank transfer: scan your QR sticker, or transfer to your permanent account number from any bank app.',
    },
    {
      q: 'How do field agents earn?',
      a: 'Field agents register customers and mark their savings. You earn commission on the savings you mark, plus bonuses for marking streaks, milestones and referred customers who keep saving. Kopkad pays your commission. It is never charged to or deducted from your customers, who save commission-free. Earnings are paid out on scheduled payout days, and you can withdraw them to your bank. Savings groups for your customers are coming soon.',
    },
    {
      q: 'Who can become a merchant?',
      a: 'Anyone who sells goods or services: shop owners, market traders, and transport operators like keke, danfo and ride-hailing drivers. Sign up and choose "Become a Merchant", or switch to a merchant account from your personal dashboard. Complete KYC to get your account number, then send to other Kopkad users or any Nigerian bank, protected by your transaction PIN.',
    },
    {
      q: 'How do QR savings cards work?',
      a: 'Generate QR tokens from your dashboard, download print-ready sticker images, and attach them to physical cards for members. A field agent scans the QR to open that member\'s account instantly and mark the day\'s payment — no searching, no typing.',
    },
    {
      q: 'Is my money safe on Kopkad?',
      a: 'Kopkad is a record-keeping and financial management platform — it does not hold or pool your funds. All payments are processed through CBN-licensed payment channels. Money moves directly to and from verified bank accounts. Your data is encrypted and stored securely.',
    },
  ];

  const highlights = [
    { val: '₦2.4T+', label: 'Informal Savings\nPooled Annually' },
    { val: '40,000+', label: 'Cooperatives\nAwaiting Digitisation' },
    { val: '80M+',   label: 'Financially\nExcluded Nigerians' },
  ];

  /* ── JSX ──────────────────────────────────────────────────────────────────── */
  return (
    <div className="font-sans antialiased">

      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <section className="relative bg-gradient-to-br from-cyan-900 via-cyan-800 to-cyan-700 pt-24 pb-20 px-4 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-600 rounded-full opacity-20 translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-orange-500 rounded-full opacity-10 -translate-x-1/3 translate-y-1/3 pointer-events-none" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <span className="inline-block bg-orange-500/20 text-orange-300 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 border border-orange-500/30">
              Personal Savings · Merchant POS · Cooperative SaaS
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Nigeria's complete{' '}
              <span className="text-orange-400">financial platform</span>
            </h1>
            <p className="text-lg text-cyan-100 mb-10 leading-relaxed max-w-xl">
              The main app handles personal savings, Locked Savings, and Kopkad Pay, a POS on
              your phone for merchants. Cooperative by Kopkad is a full SaaS for running cooperative societies — with
              member wallets, loans, and a branded member portal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={onStartClick}
                className="px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-xl text-base transition-all shadow-lg flex items-center justify-center gap-2"
              >
                Personal Finance App <ArrowRight size={18} />
              </button>
              <button
                onClick={onCoopClick}
                className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl text-base transition-all flex items-center justify-center gap-2"
              >
                Run a Cooperative <ArrowRight size={18} />
              </button>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {highlights.map(({ val, label }) => (
                <div key={label} className="text-center">
                  <div className="text-2xl font-extrabold text-orange-400">{val}</div>
                  <div className="text-xs text-cyan-200 mt-1 whitespace-pre-line">{label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <SavingsIllustration />
          </div>
        </div>
      </section>

      {/* ── Cooperative by Kopkad ─────────────────────────────────────────────── */}
      <section style={{ background: '#431407' }} className="py-20 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 -translate-y-1/2 translate-x-1/3 pointer-events-none" style={{ background: '#f97316' }} />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10 translate-y-1/3 -translate-x-1/4 pointer-events-none" style={{ background: '#f97316' }} />
        <div className="max-w-7xl mx-auto relative z-10">

          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-14">
            <div>
              <span className="inline-block text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider" style={{ background: 'rgba(249,115,22,0.2)', color: '#fbd38d', border: '1px solid rgba(249,115,22,0.3)' }}>
                Cooperative SaaS
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                <CoopLogoMark size={96} color="rgba(255,255,255,0.8)" />
                CoopX by Kopkad
              </h2>
              <p className="mt-3 text-base leading-relaxed max-w-xl" style={{ color: 'rgba(254,215,170,0.8)' }}>
                A complete platform for cooperative societies — member wallets with personal account
                numbers, savings interest, contribution groups, loans, and an optional branded member
                portal. All in one place.
              </p>
            </div>
            <div className="flex-shrink-0 lg:pt-6">
              <button
                onClick={onCoopClick}
                className="px-7 py-3 bg-orange-500 hover:bg-orange-400 text-white font-bold rounded-xl transition-colors inline-flex items-center gap-2 shadow-lg"
              >
                Explore Cooperative by Kopkad <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* 3 core pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
            {[
              {
                icon: Wallet,
                title: 'Member Savings Wallet',
                desc: 'Every member gets a personal cooperative wallet with a 10-digit account number. Funded by bank transfer, earns interest at a rate you set.',
              },
              {
                icon: Users,
                title: 'Thrift Contribution',
                desc: 'Run rotating contribution groups (ajo/esusu). Mark contributions, track schedules, and credit payouts directly to member wallets.',
              },
              {
                icon: HandCoins,
                title: 'Loans',
                desc: 'Issue and track member loans with interest, repayment schedules, and a manager-controlled approval flow.',
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-2xl p-6" style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)' }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: 'rgba(249,115,22,0.25)' }}>
                  <Icon size={22} className="text-orange-400" />
                </div>
                <h3 className="font-bold text-white mb-2">{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(254,215,170,0.65)' }}>{desc}</p>
              </div>
            ))}
          </div>

          {/* Overview of the rest of the catalogue — full detail lives on the coop site */}
          <div className="rounded-2xl p-6" style={{ background: 'rgba(249,115,22,0.12)', border: '1px solid rgba(249,115,22,0.3)' }}>
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(254,215,170,0.8)' }}>
              Also on the menu: custom branding, an AI-generated public website, analytics, and a
              directory listing. Pick only the services you need and pay the sum of their monthly
              prices — every cooperative gets a free{' '}
              <span className="font-mono text-orange-300">yourname.kopkad.ng</span> subdomain at signup.
              See it all on{' '}
              <button onClick={onCoopClick} className="font-semibold text-orange-300 underline hover:text-orange-200">
                cooperative.kopkad.ng
              </button>.
            </p>
          </div>
        </div>
      </section>

      {/* ── Main App ─────────────────────────────────────────────────────────────── */}
      <section id="features" className="py-20 px-4 bg-white scroll-mt-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-cyan-700 text-sm font-semibold uppercase tracking-widest">Personal Finance App</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2">
              For savers, merchants,{' '}
              <br className="hidden sm:block" />and savings collectors
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              The main app at{' '}
              <span className="font-mono text-cyan-700 text-sm">app.kopkad.ng</span>{' '}
              is built for everyday savers, the merchants they buy from, and the agents who collect savings in the market.
            </p>
          </div>

          {/* Merchant POS spotlight */}
          <div id="merchants" className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20 scroll-mt-20">
            <div className="flex justify-center">
              <PosIllustration />
            </div>
            <div>
              <span className="inline-block bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1.5 rounded-full mb-4 uppercase tracking-wide">
                New · Kopkad Pay for Merchants
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight mb-4">
                Your phone is the POS. Your customer doesn&apos;t need one.
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                Shops, market traders, and transport operators (keke, danfo, ride-hailing) take
                payment straight from a customer&apos;s Kopkad wallet. The customer reads out a
                one-time SMS code, so they don&apos;t need a smartphone, data, or a card.
              </p>
              <div className="space-y-3">
                {[
                  { icon: Smartphone,  title: 'Charge Customer',      desc: 'Enter the customer\'s phone number and amount, then type the code they read out. Paid instantly. ₦50,000 or more also needs their security answer.' },
                  { icon: Send,        title: 'To Kopkad',            desc: 'Send money instantly to any Kopkad user by phone number, and see their name before you confirm.' },
                  { icon: Landmark,    title: 'To Bank',              desc: 'Pay out to any Nigerian bank account, protected by your transaction PIN.' },
                  { icon: QrCode,      title: 'One account, one QR',  desc: 'Print your QR sticker once. Anyone can pay you by bank transfer to your permanent account number, with no app needed.' },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex gap-3">
                    <div className="w-9 h-9 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon className="text-orange-600" size={17} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{title}</p>
                      <p className="text-gray-500 text-sm">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button onClick={onMerchantClick} className="mt-7 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-colors inline-flex items-center gap-2 text-sm">
                Become a Merchant <ArrowRight size={15} />
              </button>
            </div>
          </div>

          {/* Locked Savings spotlight */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="order-1 lg:order-2 flex justify-center">
              <InvestmentIllustration />
            </div>
            <div className="order-2 lg:order-1">
              <span className="inline-block bg-indigo-100 text-indigo-700 text-xs font-bold px-3 py-1.5 rounded-full mb-4 uppercase tracking-wide">
                Locked Savings
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight mb-4">
                Lock it. Grow it. Collect a fixed-rate return.
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                Choose an amount, pick a lock period, and see exactly how much you will earn at
                maturity — before committing a single naira. Up to 20% per annum, rate locked at creation.
              </p>
              <div className="space-y-3">
                {[
                  { icon: Lock,       title: "Fixed interest rate",       desc: "Rate locked at creation — never changes for the term." },
                  { icon: LineChart,  title: "Returns calculator",        desc: "See your projected earnings at maturity before you commit." },
                  { icon: Wallet,     title: "Flexible or Fixed Lock",     desc: "Add money any time, or lock a one-off sum. 3, 6, 9 or 12-month terms." },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex gap-3">
                    <div className="w-9 h-9 bg-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon className="text-indigo-700" size={17} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{title}</p>
                      <p className="text-gray-500 text-sm">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button onClick={onStartClick} className="mt-7 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition-colors inline-flex items-center gap-2 text-sm">
                Start Investing <ArrowRight size={15} />
              </button>
            </div>
          </div>

          {/* Feature grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {mainAppFeatures.map(({ icon: Icon, color, title, desc }) => (
              <div key={title} className="group bg-gray-50 border border-gray-100 rounded-2xl p-5 hover:shadow-lg transition-all hover:-translate-y-1">
                <div className={`w-10 h-10 ${color} rounded-xl flex items-center justify-center mb-3`}>
                  <Icon size={18} className="text-white" />
                </div>
                <h3 className="font-bold text-gray-900 text-sm mb-1.5">{title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <button onClick={onStartClick} className="px-8 py-3.5 bg-cyan-800 hover:bg-cyan-900 text-white font-semibold rounded-xl transition-colors shadow-md">
              Get Started Free
            </button>
          </div>
        </div>
      </section>

      {/* ── Field Agents ─────────────────────────────────────────────────────────── */}
      <section id="field-agents" className="py-20 px-4 bg-gray-50 overflow-hidden scroll-mt-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden h-52 shadow-lg bg-[#ecfeff]"><AgentFieldSVG /></div>
                <div className="rounded-2xl overflow-hidden h-36 shadow-lg bg-[#fff7ed]"><MobilePaymentSVG /></div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="rounded-2xl overflow-hidden h-36 shadow-lg bg-[#eef2ff]"><ShopCounterSVG /></div>
                <div className="rounded-2xl overflow-hidden h-52 shadow-lg bg-[#f0fdf4]"><CoopGroupSVG /></div>
              </div>
            </div>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-xl px-5 py-3 flex items-center gap-3 border border-gray-100">
              <div className="w-10 h-10 bg-cyan-700 rounded-xl flex items-center justify-center flex-shrink-0">
                <QrCode size={20} className="text-white" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Savings marked today</p>
                <p className="text-sm font-bold text-gray-900">1,240 transactions</p>
              </div>
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse ml-2" />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <span className="inline-block bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1.5 rounded-full mb-4 uppercase tracking-wide">
              Field Agents
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-5">
              Collect savings in your community and earn commission
            </h2>
            <p className="text-gray-500 text-base leading-relaxed mb-8">
              Register customers, mark their daily savings, and get paid for it. Your commission is
              paid by Kopkad, never deducted from your customers&apos; savings. From street-level ajo
              collectors to market traders, Kopkad works the way Nigerians actually save: in the
              community, face to face, one naira at a time.
            </p>
            <div className="space-y-4">
              {[
                { icon: UserPlus, color: 'bg-cyan-100 text-cyan-700',       title: 'Register customers',            desc: 'Sign up new customers on the spot, or share your referral code and link. Everyone you bring in joins your customer list.' },
                { icon: QrCode,   color: 'bg-orange-100 text-orange-600',   title: 'Mark savings in seconds',       desc: "Scan a customer's QR savings card and record their daily contribution. They get an alert straight away." },
                { icon: Coins,    color: 'bg-emerald-100 text-emerald-700', title: 'Earn commission, paid by Kopkad', desc: 'Earn on the savings you mark, plus streak, milestone and referral bonuses. Kopkad pays you; your customers never pay commission.' },
                { icon: Trophy,   color: 'bg-amber-100 text-amber-700',     title: 'Grow your rank',                desc: 'Climb the tiers from Starter to Champion, top the monthly leaderboard, and see which customers need a follow-up.' },
                { icon: Users,    color: 'bg-indigo-100 text-indigo-700',   title: 'Savings groups', soon: true,    desc: 'Create ajo/esusu savings groups for the customers you register: fixed contributions, rotating payouts, all tracked for you.' },
              ].map(({ icon: Icon, color, title, desc, soon }) => (
                <div key={title} className="flex gap-4">
                  <div className={`w-10 h-10 ${color} rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5`}>
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">
                      {title}
                      {soon && (
                        <span className="ml-2 align-middle bg-indigo-100 text-indigo-700 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
                          Coming soon
                        </span>
                      )}
                    </p>
                    <p className="text-gray-500 text-sm">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <button onClick={onMerchantClick} className="mt-8 px-6 py-3 bg-cyan-700 hover:bg-cyan-800 text-white font-semibold rounded-xl transition-colors inline-flex items-center gap-2 text-sm">
              Become a Field Agent <ArrowRight size={15} />
            </button>
            <p className="text-gray-400 text-xs mt-3">Field agent tools come with every Kopkad merchant account.</p>
          </div>
        </div>
      </section>

      {/* ── How It Works ─────────────────────────────────────────────────────────── */}
      <section id="how-it-works" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-orange-500 text-sm font-semibold uppercase tracking-widest">Getting Started</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2">Up and running in minutes</h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">No training required. If you can use a smartphone, you can use Kopkad.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {steps.map(({ icon, color, title, desc }, i) => (
              <div key={title} className="flex flex-col items-center text-center">
                <StepIcon number={i + 1} icon={icon} color={color} />
                <h3 className="font-bold text-gray-900 mt-6 mb-2 text-lg">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-xs">{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button onClick={onStartClick} className="px-8 py-3.5 bg-cyan-800 hover:bg-cyan-900 text-white font-semibold rounded-xl transition-colors shadow-md">
              Start with the Main App
            </button>
            <button onClick={onCoopClick} className="px-8 py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-colors shadow-md">
              Launch a Cooperative
            </button>
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-orange-500 text-sm font-semibold uppercase tracking-widest">Testimonials</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2">Real users. Real results.</h2>
            <p className="text-gray-500 mt-4 max-w-lg mx-auto">From ajo operators to cooperative managers — stories from across Nigeria.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map(({ name, location, role, initials, avatarBg, quote }) => (
              <div key={name} className="bg-white rounded-2xl p-6 border border-gray-100 flex flex-col shadow-sm">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <span key={i} className="text-orange-400 text-sm">★</span>)}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 italic flex-1">&ldquo;{quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full ${avatarBg} flex items-center justify-center flex-shrink-0 text-white text-sm font-bold`}>
                    {initials}
                  </div>
                  <div>
                    <p className="text-gray-900 font-semibold text-sm">{name}</p>
                    <p className="text-gray-400 text-xs">{role} · {location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────────────────── */}
      <section id="faq" className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-orange-500 text-sm font-semibold uppercase tracking-widest">FAQ</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2">Common questions</h2>
          </div>
          <div className="space-y-3">
            {faqs.map(item => <FaqItem key={item.q} {...item} />)}
          </div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-gradient-to-br from-cyan-900 to-cyan-700 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-400 rounded-full opacity-10 translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full opacity-5 -translate-x-1/2 translate-y-1/2 pointer-events-none" />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Ready to take control of your finances?
          </h2>
          <p className="text-cyan-200 mb-10 text-lg">
            Whether you're saving personally, running a shop, or managing a cooperative
            society — Kopkad has a platform built for you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onStartClick}
              className="px-10 py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-xl text-lg transition-all shadow-xl inline-flex items-center gap-2"
            >
              Personal Finance App <ArrowRight size={20} />
            </button>
            <button
              onClick={onCoopClick}
              className="px-10 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl text-lg transition-all inline-flex items-center gap-2"
            >
              Run a Cooperative <ArrowRight size={20} />
            </button>
          </div>
          <p className="text-cyan-300 text-sm mt-6">Personal finance app is always free · No hidden charges</p>
          <p className="text-white text-sm font-semibold mt-2">No commission on your savings — ever. Your balance earns interest.</p>
        </div>
      </section>

    </div>
  );
};

export default Landing;
