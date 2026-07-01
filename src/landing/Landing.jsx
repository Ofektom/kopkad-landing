import React, { useState } from 'react';
import { goToApp } from '../utils/appNav';
import {
  HiOutlineChartBar, HiOutlineUserGroup, HiOutlineOfficeBuilding,
  HiOutlineShieldCheck, HiOutlineCheck, HiOutlineChevronDown,
  HiOutlineChevronUp, HiArrowRight, HiOutlineDeviceMobile, HiOutlineClipboardList,
  HiOutlineFingerPrint, HiOutlineLightningBolt, HiOutlineTrendingUp,
  HiOutlineCash, HiOutlineCalculator,
} from 'react-icons/hi';
import {
  RiMoneyDollarCircleLine, RiTeamLine, RiBankLine, RiBarChartBoxLine,
  RiHandCoinLine, RiGroupLine, RiQrCodeLine, RiRobot2Line, RiShieldUserLine,
  RiLockLine, RiLineChartLine, RiWalletLine,
} from 'react-icons/ri';
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

const CashFlowIllustration = () => (
  <svg viewBox="0 0 520 420" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-lg">
    {/* Phone frame */}
    <rect x="120" y="10" width="220" height="400" rx="28" fill="#0e4f63" />
    <rect x="128" y="26" width="204" height="368" rx="20" fill="#f8fafc" />
    <rect x="128" y="26" width="204" height="40" rx="20" fill="#155e75" />
    <circle cx="230" cy="46" r="6" fill="#0e4f63" />

    {/* Header */}
    <text x="160" y="52" fontSize="11" fill="#a5f3fc" fontFamily="sans-serif" fontWeight="600">Cash Flow Monitor</text>

    {/* Period tabs */}
    <rect x="136" y="74" width="188" height="24" rx="8" fill="#e2e8f0" />
    <rect x="138" y="76" width="58" height="20" rx="6" fill="#155e75" />
    <text x="152" y="90" fontSize="8" fill="white" fontFamily="sans-serif" fontWeight="600">Today</text>
    <text x="204" y="90" fontSize="8" fill="#64748b" fontFamily="sans-serif">Week</text>
    <text x="248" y="90" fontSize="8" fill="#64748b" fontFamily="sans-serif">Month</text>
    <text x="290" y="90" fontSize="8" fill="#64748b" fontFamily="sans-serif">Year</text>

    {/* Net cash badge */}
    <rect x="148" y="106" width="164" height="44" rx="12" fill="#f0fdf4" />
    <text x="168" y="122" fontSize="9" fill="#166534" fontFamily="sans-serif">Net Cash Flow</text>
    <text x="168" y="140" fontSize="16" fill="#166534" fontWeight="bold" fontFamily="sans-serif">+₦145,000</text>
    <circle cx="300" cy="128" r="10" fill="#dcfce7" />
    <text x="295" y="133" fontSize="12" fill="#16a34a" fontFamily="sans-serif">↑</text>

    {/* Inflow bar */}
    <text x="136" y="166" fontSize="8" fill="#6b7280" fontFamily="sans-serif">Inflow</text>
    <text x="264" y="166" fontSize="8" fill="#0e7490" fontFamily="sans-serif" fontWeight="600">₦320,000</text>
    <rect x="136" y="170" width="188" height="14" rx="7" fill="#e0f2fe" />
    <rect x="136" y="170" width="140" height="14" rx="7" fill="#0e7490" />

    {/* Outflow bar */}
    <text x="136" y="198" fontSize="8" fill="#6b7280" fontFamily="sans-serif">Expenses</text>
    <text x="255" y="198" fontSize="8" fill="#dc2626" fontFamily="sans-serif" fontWeight="600">₦175,000</text>
    <rect x="136" y="202" width="188" height="14" rx="7" fill="#fee2e2" />
    <rect x="136" y="202" width="82" height="14" rx="7" fill="#ef4444" />

    {/* Divider */}
    <line x1="136" y1="226" x2="324" y2="226" stroke="#e2e8f0" strokeWidth="1" />

    {/* Transactions */}
    <text x="136" y="242" fontSize="8" fill="#374151" fontFamily="sans-serif" fontWeight="600">Recent Transactions</text>

    {/* Transaction 1 */}
    <circle cx="148" cy="260" r="9" fill="#dcfce7" />
    <text x="143" y="264" fontSize="10" fill="#16a34a" fontFamily="sans-serif">↑</text>
    <text x="162" y="258" fontSize="8" fill="#111827" fontFamily="sans-serif" fontWeight="600">Salary Credit</text>
    <text x="162" y="268" fontSize="7" fill="#9ca3af" fontFamily="sans-serif">08:30 AM</text>
    <text x="278" y="262" fontSize="9" fill="#16a34a" fontFamily="sans-serif" fontWeight="700">+₦280k</text>

    {/* Transaction 2 */}
    <circle cx="148" cy="285" r="9" fill="#fee2e2" />
    <text x="143" y="289" fontSize="10" fill="#dc2626" fontFamily="sans-serif">↓</text>
    <text x="162" y="283" fontSize="8" fill="#111827" fontFamily="sans-serif" fontWeight="600">Grocery Shopping</text>
    <text x="162" y="293" fontSize="7" fill="#9ca3af" fontFamily="sans-serif">11:45 AM</text>
    <text x="275" y="287" fontSize="9" fill="#dc2626" fontFamily="sans-serif" fontWeight="700">-₦12.5k</text>

    {/* Transaction 3 */}
    <circle cx="148" cy="310" r="9" fill="#fee2e2" />
    <text x="143" y="314" fontSize="10" fill="#dc2626" fontFamily="sans-serif">↓</text>
    <text x="162" y="308" fontSize="8" fill="#111827" fontFamily="sans-serif" fontWeight="600">Fuel & Transport</text>
    <text x="162" y="318" fontSize="7" fill="#9ca3af" fontFamily="sans-serif">02:15 PM</text>
    <text x="278" y="312" fontSize="9" fill="#dc2626" fontFamily="sans-serif" fontWeight="700">-₦8.5k</text>

    {/* Budget progress */}
    <rect x="136" y="330" width="188" height="52" rx="10" fill="#fff7ed" />
    <text x="148" y="345" fontSize="8" fill="#9a3412" fontFamily="sans-serif" fontWeight="600">Monthly Budget</text>
    <text x="274" y="345" fontSize="7" fill="#9a3412" fontFamily="sans-serif">68% used</text>
    <rect x="148" y="350" width="164" height="8" rx="4" fill="#fed7aa" />
    <rect x="148" y="350" width="111" height="8" rx="4" fill="#f97316" />
    <text x="148" y="374" fontSize="7" fill="#6b7280" fontFamily="sans-serif">₦175,000 of ₦260,000</text>

    {/* Floating cards */}
    <rect x="0" y="80" width="110" height="52" rx="12" fill="white" opacity="0.96" />
    <circle cx="20" cy="106" r="12" fill="#dbeafe" />
    <text x="14" y="111" fontSize="11" fill="#2563eb" fontFamily="sans-serif">📊</text>
    <text x="38" y="100" fontSize="7" fill="#6b7280" fontFamily="sans-serif">Statements</text>
    <text x="38" y="112" fontSize="9" fill="#111827" fontFamily="sans-serif" fontWeight="700">3 Reports</text>
    <text x="38" y="123" fontSize="7" fill="#16a34a" fontFamily="sans-serif">Ready to view</text>

    <rect x="350" y="240" width="130" height="56" rx="12" fill="white" opacity="0.96" />
    <circle cx="370" cy="268" r="12" fill="#fef3c7" />
    <text x="364" y="273" fontSize="11" fontFamily="sans-serif">🎯</text>
    <text x="388" y="258" fontSize="7" fill="#6b7280" fontFamily="sans-serif">Budget Goal</text>
    <text x="388" y="270" fontSize="9" fill="#111827" fontFamily="sans-serif" fontWeight="700">Emergency Fund</text>
    <text x="388" y="282" fontSize="7" fill="#d97706" fontFamily="sans-serif">₦50k of ₦200k</text>
    <text x="388" y="292" fontSize="7" fill="#6b7280" fontFamily="sans-serif">25% complete</text>

    <circle cx="30" cy="360" r="8" fill="#f97316" opacity="0.3" />
    <circle cx="470" cy="100" r="10" fill="#155e75" opacity="0.2" />
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
    <text x="108" y="61" fontSize="10" fill="white" fontFamily="sans-serif" fontWeight="600">🔒 Fixed Growth Fund</text>

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
    <text x="10" y="112" fontSize="7" fill="#374151" fontFamily="sans-serif" fontWeight="600">Guaranteed</text>
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

const BudgetPlannerSVG = () => (
  <svg viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect width="320" height="180" fill="#eef2ff" />
    {/* Desk */}
    <rect x="20" y="138" width="200" height="10" rx="5" fill="#c7d2fe" />
    <rect x="40" y="148" width="8" height="24" rx="3" fill="#a5b4fc" />
    <rect x="172" y="148" width="8" height="24" rx="3" fill="#a5b4fc" />
    {/* Chair */}
    <rect x="55" y="120" width="90" height="20" rx="6" fill="#818cf8" />
    <rect x="80" y="140" width="10" height="20" rx="3" fill="#6366f1" />
    <rect x="110" y="140" width="10" height="20" rx="3" fill="#6366f1" />
    {/* Person sitting */}
    {/* Body */}
    <path d="M72 82 C68 82 64 86 64 96 L62 126 C62 130 68 132 100 132 L120 132 C140 130 136 126 134 118 L128 96 C128 86 124 82 120 82 Z" fill="#6366f1" />
    {/* Neck */}
    <rect x="91" y="70" width="10" height="14" rx="5" fill="#fed7aa" />
    {/* Head */}
    <circle cx="96" cy="58" r="20" fill="#fed7aa" />
    {/* Hair */}
    <path d="M76 52 Q96 30 116 52 Q114 42 96 36 Q78 42 76 52 Z" fill="#1c1917" />
    {/* Eyes */}
    <circle cx="90" cy="60" r="2" fill="#44403c" />
    <circle cx="102" cy="60" r="2" fill="#44403c" />
    <path d="M91 67 Q96 71 101 67" stroke="#92400e" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    {/* Arms — reaching to laptop */}
    <path d="M72 98 L48 110 L32 116" stroke="#fed7aa" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <path d="M120 98 L148 108 L180 112" stroke="#fed7aa" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    {/* Laptop */}
    <rect x="20" y="112" width="200" height="28" rx="5" fill="#1e293b" />
    <rect x="24" y="115" width="192" height="22" rx="4" fill="#0f172a" />
    {/* Screen content — mini charts */}
    <rect x="28" y="119" width="50" height="14" rx="2" fill="#155e75" opacity="0.8" />
    <text x="30" y="128" fontSize="5.5" fill="#a5f3fc" fontFamily="sans-serif">Cash Flow ↑</text>
    <rect x="82" y="119" width="40" height="14" rx="2" fill="#4f46e5" opacity="0.8" />
    <text x="84" y="128" fontSize="5.5" fill="#c7d2fe" fontFamily="sans-serif">Budgets</text>
    <rect x="126" y="119" width="36" height="14" rx="2" fill="#059669" opacity="0.8" />
    <text x="128" y="128" fontSize="5.5" fill="#d1fae5" fontFamily="sans-serif">+₦18k</text>
    <rect x="166" y="119" width="44" height="14" rx="2" fill="#b45309" opacity="0.7" />
    <text x="168" y="128" fontSize="5.5" fill="#fef3c7" fontFamily="sans-serif">Expenses</text>
    {/* === Floating chart bars (right side) === */}
    <g>
      <rect x="240" y="80" width="14" height="50" rx="3" fill="#6366f1" opacity="0.5">
        <animate attributeName="height" values="50;64;50" dur="2.4s" repeatCount="indefinite" />
        <animate attributeName="y" values="80;66;80" dur="2.4s" repeatCount="indefinite" />
      </rect>
      <rect x="258" y="68" width="14" height="62" rx="3" fill="#6366f1" opacity="0.7">
        <animate attributeName="height" values="62;74;62" dur="2s" repeatCount="indefinite" />
        <animate attributeName="y" values="68;56;68" dur="2s" repeatCount="indefinite" />
      </rect>
      <rect x="276" y="56" width="14" height="74" rx="3" fill="#6366f1">
        <animate attributeName="height" values="74;86;74" dur="1.8s" repeatCount="indefinite" />
        <animate attributeName="y" values="56;44;56" dur="1.8s" repeatCount="indefinite" />
      </rect>
      <rect x="294" y="70" width="14" height="60" rx="3" fill="#f97316">
        <animate attributeName="height" values="60;72;60" dur="2.2s" repeatCount="indefinite" />
        <animate attributeName="y" values="70;58;70" dur="2.2s" repeatCount="indefinite" />
      </rect>
      <text x="248" y="145" fontSize="7" fill="#6366f1" fontFamily="sans-serif" fontWeight="600">Monthly Budget</text>
    </g>
    {/* Floating goal badge */}
    <g>
      <animateTransform attributeName="transform" type="translate" values="0,0;0,-5;0,0" dur="3s" repeatCount="indefinite" />
      <rect x="228" y="18" width="80" height="30" rx="10" fill="white" opacity="0.95" />
      <text x="236" y="30" fontSize="7" fill="#4338ca" fontFamily="sans-serif" fontWeight="700">🎯 Goal: ₦200k</text>
      <text x="236" y="42" fontSize="6" fill="#6366f1" fontFamily="sans-serif">38% complete</text>
    </g>
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
          ? <HiOutlineChevronUp className="text-cyan-700 flex-shrink-0" size={20} />
          : <HiOutlineChevronDown className="text-gray-400 flex-shrink-0" size={20} />}
      </button>
      {open && (
        <div className="px-6 py-4 text-gray-600 text-sm leading-relaxed bg-gray-50 border-t border-gray-100">{a}</div>
      )}
    </div>
  );
};

// ── Main ──────────────────────────────────────────────────────────────────────
const Landing = ({ onStartClick, onCoopClick }) => {
  /* ── DATA ─────────────────────────────────────────────────────────────────── */

  const coopServices = [
    { icon: RiWalletLine,         name: 'Member Savings',      desc: 'Personal wallet per member with a 10-digit account number for direct bank transfers. Earns savings interest at your configured rate.' },
    { icon: RiGroupLine,          name: 'Thrift Contribution', desc: 'Rotating savings groups (ajo/esusu). Mark contributions, track schedules, and credit payouts to member wallets.' },
    { icon: RiHandCoinLine,       name: 'Loans',               desc: 'Member loan applications, approval flow, interest calculations, and repayment tracking with schedules.' },
    { icon: HiOutlineFingerPrint, name: 'KYC Enablement',      desc: 'Government ID verification, document upload, and guarantor management for loan eligibility.' },
    { icon: RiShieldUserLine,     name: 'Custom Branding',     desc: 'Your logo, brand colours, and typography on every member-facing surface.' },
    { icon: RiRobot2Line,         name: 'AI Website',          desc: 'AI-generated public cooperative website with your branding and content — live in minutes.' },
    { icon: RiBarChartBoxLine,    name: 'Analytics',           desc: 'Member growth, savings trends, loan performance, and financial insights in one dashboard.' },
    { icon: RiTeamLine,           name: 'Directory Listing',   desc: 'Appear on the Kopkad cooperative directory for new member discovery.' },
  ];

  const mainAppFeatures = [
    { icon: HiOutlineClipboardList, color: 'bg-cyan-700',   title: 'AJO Daily Card Marking',    desc: 'The core market savings workflow. QR-linked physical cards let agents mark daily contributions in seconds.' },
    { icon: RiQrCodeLine,           color: 'bg-orange-500', title: 'QR Physical Card System',    desc: 'Print QR savings cards for members. Scan with any smartphone to instantly open their account.' },
    { icon: RiLockLine,             color: 'bg-indigo-600', title: 'Fixed Growth Funds',         desc: 'Lock money for 3–12 months and earn guaranteed interest up to 20% p.a. Rate locked at creation.' },
    { icon: HiOutlineTrendingUp,    color: 'bg-emerald-600',title: 'Cash Flow Monitoring',       desc: 'Real-time inflow and expense tracking with auto-generated income statements and balance sheets.' },
    { icon: HiOutlineCalculator,    color: 'bg-orange-500', title: 'Budget Planner',             desc: 'Create budgets for any purpose and track spending against them in real time.' },
    { icon: HiOutlineCash,          color: 'bg-cyan-700',   title: 'Daily Expense Tracker',      desc: 'Log and categorise every expense. Know exactly where every naira goes with daily breakdowns.' },
    { icon: RiTeamLine,             color: 'bg-emerald-600',title: 'Agent & Sub-Agent Network',  desc: 'Deploy sub-agents with their own dashboards, member lists, and commission earnings tracking.' },
    { icon: HiOutlineLightningBolt, color: 'bg-cyan-700',   title: 'SMS & Email Notifications',  desc: 'Members get instant alerts when savings are marked, payments confirmed, or payouts processed.' },
  ];

  const steps = [
    { icon: HiOutlineUserGroup,      color: 'bg-cyan-700',   title: 'Sign Up & Verify',         desc: 'Create your account, choose your role, and verify your identity to unlock all features.' },
    { icon: HiOutlineClipboardList,  color: 'bg-orange-500', title: 'Set Up Your Operation',    desc: 'Add members or savings goals, configure groups, start tracking contributions, or set up a Fixed Growth Fund.' },
    { icon: RiMoneyDollarCircleLine, color: 'bg-cyan-700',   title: 'Grow, Track & Pay Out',    desc: 'Collect savings, monitor cash flow in real time, and process approved withdrawals with full audit trails.' },
  ];

  const testimonials = [
    {
      name: 'Amaka O.', location: 'Lagos', role: 'Thrift Operator',
      initials: 'AO', avatarBg: 'bg-cyan-700',
      quote: 'I used to carry exercise books everywhere for 60+ customers. Kopkad replaced all that. The cash flow reports show me exactly how my business is doing every single day.',
    },
    {
      name: 'Chukwudi E.', location: 'Enugu', role: 'Cooperative Manager',
      initials: 'CE', avatarBg: 'bg-orange-500',
      quote: 'The cooperative platform is exactly what we needed. Members send money to their own account numbers and we see it land in real time. No more collecting cash manually at meetings.',
    },
    {
      name: 'Fatima B.', location: 'Kano', role: 'Personal Saver',
      initials: 'FB', avatarBg: 'bg-indigo-600',
      quote: 'The budget planner and expense tracker changed how I manage money. I know where every naira goes — and I have a Fixed Growth Fund growing for my daughter\'s education.',
    },
  ];

  const faqs = [
    {
      q: 'What is Kopkad?',
      a: 'Kopkad is a digital financial management platform for Nigeria with two separate products: the main app (app.kopkad.ng) for thrift operators, market savings collectors, and personal finance users — and Cooperative by Kopkad (cooperative.kopkad.ng), a full SaaS platform for managing cooperative societies.',
    },
    {
      q: 'What is the difference between the main app and Cooperative by Kopkad?',
      a: 'The main app is for thrift collectors and personal finance: QR card markings, Fixed Growth Funds, cash flow monitoring, and budget tracking. Cooperative by Kopkad is a standalone platform for running a cooperative society — with personal member wallets, 10-digit account numbers, savings interest, contribution groups, loans, and a branded member portal.',
    },
    {
      q: 'How does Cooperative by Kopkad pricing work?',
      a: 'There are no fixed tiers. You pick only the services you need from our catalogue (Savings, Thrift Contribution, Loans, KYC, Branding, AI Website, Analytics, and more) and pay the sum of their monthly prices. Annual billing saves 15% and 2-year billing saves 25% on the total.',
    },
    {
      q: 'How do member account numbers work in the cooperative?',
      a: 'Every activated cooperative member gets a permanent 10-digit account number. Members transfer from any Nigerian bank directly to that number — no reference or narration needed. The deposit appears in their cooperative wallet within seconds.',
    },
    {
      q: 'What are Fixed Growth Funds?',
      a: 'Fixed Growth Funds let you lock a sum for 3 to 12 months and earn guaranteed interest up to 20% per annum. Your rate is locked at creation and never changes regardless of market conditions. The projected interest at maturity is shown before you commit a single naira.',
    },
    {
      q: 'How does the Cash Flow Monitor work?',
      a: 'The Cash Flow Monitor gives you a real-time view of all money in and out. View an income statement, cash flow report, or balance sheet for any period — today, this week, this month, or this year. Expenses are categorised automatically from your daily entries.',
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
              Personal Finance · Thrift Operations · Cooperative SaaS
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Nigeria's complete{' '}
              <span className="text-orange-400">financial platform</span>
            </h1>
            <p className="text-lg text-cyan-100 mb-10 leading-relaxed max-w-xl">
              The main app handles personal savings, thrift operations, and Fixed Growth Funds.
              Cooperative by Kopkad is a full SaaS for running cooperative societies — with
              member wallets, loans, and a branded member portal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={onStartClick}
                className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl text-base transition-all shadow-lg flex items-center justify-center gap-2"
              >
                Personal Finance App <HiArrowRight size={18} />
              </button>
              <button
                onClick={onCoopClick}
                className="px-8 py-4 text-white font-semibold rounded-xl text-base transition-all border border-white/25 flex items-center justify-center gap-2"
                style={{ background: 'rgba(255,255,255,0.12)' }}
              >
                Run a Cooperative <HiArrowRight size={18} />
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
                Launch your cooperative <HiArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* 3 core pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
            {[
              {
                icon: RiWalletLine,
                title: 'Member Savings Wallet',
                desc: 'Every member gets a personal cooperative wallet funded by bank transfer. Earns savings interest at a rate you set. Withdraw to their bank account any time.',
                tag: 'Personal 10-digit account number',
              },
              {
                icon: RiGroupLine,
                title: 'Thrift Contribution',
                desc: 'Run rotating contribution groups (ajo/esusu). Mark contributions, track schedules, and credit group payouts directly to member wallets.',
                tag: 'Multiple groups simultaneously',
              },
              {
                icon: RiHandCoinLine,
                title: 'Loans',
                desc: 'Issue and track member loans with interest calculations, repayment schedules, and outstanding balances. Manager-controlled approval flow.',
                tag: 'KYC service required',
              },
            ].map(({ icon: Icon, title, desc, tag }) => (
              <div key={title} className="rounded-2xl p-6" style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)' }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: 'rgba(249,115,22,0.25)' }}>
                  <Icon size={22} className="text-orange-400" />
                </div>
                <h3 className="font-bold text-white mb-2">{title}</h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: 'rgba(254,215,170,0.65)' }}>{desc}</p>
                <span className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full" style={{ background: 'rgba(249,115,22,0.18)', color: '#fbd38d' }}>
                  {tag}
                </span>
              </div>
            ))}
          </div>

          {/* Service catalog — buffet model */}
          <div className="mb-10">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-6">
              <div>
                <h3 className="text-xl font-bold text-white">Build your own bundle</h3>
                <p className="text-sm mt-1" style={{ color: 'rgba(254,215,170,0.55)' }}>
                  Pick only the services you need. Pay the sum of their monthly prices.
                </p>
              </div>
              <div className="flex items-center gap-5 text-xs" style={{ color: 'rgba(254,215,170,0.55)' }}>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400 flex-shrink-0" />
                  Annual: <strong className="text-orange-300 ml-0.5">15% off</strong>
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400 flex-shrink-0" />
                  2-Year: <strong className="text-orange-300 ml-0.5">25% off</strong>
                </span>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {coopServices.map(({ icon: Icon, name, desc }) => (
                <div key={name} className="rounded-xl p-4" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.09)' }}>
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(249,115,22,0.18)' }}>
                      <Icon size={15} className="text-orange-400" />
                    </div>
                    <span className="text-sm font-semibold text-white">{name}</span>
                  </div>
                  <p className="text-xs leading-relaxed" style={{ color: 'rgba(254,215,170,0.5)' }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Free subdomain callout */}
          <div className="rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center gap-4 justify-between" style={{ background: 'rgba(249,115,22,0.12)', border: '1px solid rgba(249,115,22,0.3)' }}>
            <div>
              <p className="text-white font-semibold">Every cooperative gets a free subdomain at signup</p>
              <p className="text-sm mt-0.5" style={{ color: 'rgba(254,215,170,0.65)' }}>
                <span className="font-mono text-orange-300">yourname.kopkad.ng</span> — permanent, free, no code needed.
                Upgrade to a custom domain later with the Custom Domain service.
              </p>
            </div>
            <button
              onClick={onCoopClick}
              className="flex-shrink-0 px-5 py-2.5 rounded-xl font-semibold text-sm transition-colors whitespace-nowrap"
              style={{ background: 'rgba(249,115,22,0.28)', color: '#fdba74', border: '1px solid rgba(249,115,22,0.4)' }}
            >
              Get started
            </button>
          </div>
        </div>
      </section>

      {/* ── Main App ─────────────────────────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-cyan-700 text-sm font-semibold uppercase tracking-widest">Personal Finance App</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2">
              For thrift operators, savings collectors,{' '}
              <br className="hidden sm:block" />and personal finance
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              The main app at{' '}
              <span className="font-mono text-cyan-700 text-sm">app.kopkad.ng</span>{' '}
              is built for market savings operators and anyone who wants better control of their personal finances.
            </p>
          </div>

          {/* Cash flow spotlight */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="flex justify-center">
              <CashFlowIllustration />
            </div>
            <div>
              <span className="inline-block bg-emerald-100 text-emerald-700 text-xs font-bold px-3 py-1.5 rounded-full mb-4 uppercase tracking-wide">
                Cash Flow Intelligence
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight mb-4">
                Know exactly where every naira goes
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                Real-time financial monitoring with complete visibility. Track income, log expenses,
                set budgets, and generate professional financial statements — all from your phone.
              </p>
              <div className="space-y-3">
                {[
                  { icon: HiOutlineTrendingUp, title: 'Inflow & Expense Tracking', desc: 'Monitor all money in and out for any period — daily, weekly, monthly, or yearly.' },
                  { icon: HiOutlineCalculator,  title: 'Budget Planner',            desc: 'Set budgets for monthly expenses, projects, education, or emergencies.' },
                  { icon: RiLineChartLine,      title: 'Financial Statements',       desc: 'Auto-generated income statements, cash flow reports, and balance sheets.' },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex gap-3">
                    <div className="w-9 h-9 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon className="text-emerald-700" size={17} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{title}</p>
                      <p className="text-gray-500 text-sm">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button onClick={onStartClick} className="mt-7 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition-colors inline-flex items-center gap-2 text-sm">
                Start Tracking <HiArrowRight size={15} />
              </button>
            </div>
          </div>

          {/* Fixed Growth Funds spotlight */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="order-1 lg:order-2 flex justify-center">
              <InvestmentIllustration />
            </div>
            <div className="order-2 lg:order-1">
              <span className="inline-block bg-indigo-100 text-indigo-700 text-xs font-bold px-3 py-1.5 rounded-full mb-4 uppercase tracking-wide">
                Fixed Growth Funds
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight mb-4">
                Lock it. Grow it. Collect guaranteed returns.
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                Choose an amount, pick a lock period, and see exactly how much you will earn at
                maturity — before committing a single naira. Up to 20% per annum, rate locked at creation.
              </p>
              <div className="space-y-3">
                {[
                  { icon: RiLockLine,       title: 'Guaranteed interest rates', desc: 'Rate locked at creation — never changes regardless of market conditions.' },
                  { icon: RiLineChartLine,  title: 'Returns calculator',        desc: 'See your exact earnings at maturity before investing.' },
                  { icon: RiWalletLine,     title: 'Flexible durations',        desc: '3-month, 6-month, or 12-month lock periods to match your goals.' },
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
                Start Investing <HiArrowRight size={15} />
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

      {/* ── Field Operations ─────────────────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden h-52 shadow-lg bg-[#ecfeff]"><AgentFieldSVG /></div>
                <div className="rounded-2xl overflow-hidden h-36 shadow-lg bg-[#fff7ed]"><MobilePaymentSVG /></div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="rounded-2xl overflow-hidden h-36 shadow-lg bg-[#eef2ff]"><BudgetPlannerSVG /></div>
                <div className="rounded-2xl overflow-hidden h-52 shadow-lg bg-[#f0fdf4]"><CoopGroupSVG /></div>
              </div>
            </div>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-xl px-5 py-3 flex items-center gap-3 border border-gray-100">
              <div className="w-10 h-10 bg-cyan-700 rounded-xl flex items-center justify-center flex-shrink-0">
                <RiQrCodeLine size={20} className="text-white" />
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
              Field Operations
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-5">
              Built for people who collect savings in the field
            </h2>
            <p className="text-gray-500 text-base leading-relaxed mb-8">
              From street-level ajo operators to market thrift collectors,
              Kopkad is designed for how Nigerians actually save money — in the community,
              face to face, one naira at a time.
            </p>
            <div className="space-y-4">
              {[
                { icon: RiQrCodeLine,           color: 'bg-orange-100 text-orange-600', title: 'QR Card Scanning',       desc: "Scan a member's physical card to pull up their account instantly — no searching or typing." },
                { icon: RiTeamLine,             color: 'bg-cyan-100 text-cyan-700',    title: 'Agent Network',           desc: 'Deploy sub-agents with their own dashboards and earnings tracking.' },
                { icon: HiOutlineLightningBolt, color: 'bg-emerald-100 text-emerald-700', title: 'Instant Notifications', desc: 'Members get SMS & email the moment savings are marked or a payout is approved.' },
              ].map(({ icon: Icon, color, title, desc }) => (
                <div key={title} className="flex gap-4">
                  <div className={`w-10 h-10 ${color} rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5`}>
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{title}</p>
                    <p className="text-gray-500 text-sm">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
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
            Whether you're saving personally, running a thrift operation, or managing a
            cooperative society — Kopkad has a platform built for you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onStartClick}
              className="px-10 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl text-lg transition-all shadow-xl inline-flex items-center gap-2"
            >
              Personal Finance App <HiArrowRight size={20} />
            </button>
            <button
              onClick={onCoopClick}
              className="px-10 py-4 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold rounded-xl text-lg transition-all inline-flex items-center gap-2"
            >
              Run a Cooperative <HiArrowRight size={20} />
            </button>
          </div>
          <p className="text-cyan-300 text-sm mt-6">Personal finance app is always free · No hidden charges</p>
        </div>
      </section>

    </div>
  );
};

export default Landing;
