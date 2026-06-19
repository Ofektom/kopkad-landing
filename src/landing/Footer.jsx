import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { goToApp } from '../utils/appNav';

const Footer = () => {

  const links = {
    Product: [
      { label: 'Features',     action: () => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' }) },
      { label: 'How It Works', action: () => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' }) },
      { label: 'Pricing',      action: () => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' }) },
      { label: 'FAQ',          action: () => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' }) },
    ],
    Platform: [
      { label: 'For Agents',       action: () => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' }) },
      { label: 'For Cooperatives', action: () => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' }) },
      { label: 'For Individuals',  action: () => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' }) },
    ],
    Account: [
      { label: 'Sign Up', action: () => goToApp('/signup') },
      { label: 'Log In',  action: () => goToApp('/login') },
    ],
    Contact: [
      { label: 'Address', action: () => {}, isAddress: true },
      { label: 'Phone',   action: () => {}, isPhone: true },
      { label: 'Email',   action: () => {}, isEmail: true },
    ],
  };

  const socials = [
    { icon: FaTwitter,    href: '#' },
    { icon: FaFacebookF,  href: '#' },
    { icon: FaInstagram,  href: '#' },
    { icon: FaLinkedinIn, href: '#' },
  ];

  const legal = [
    { label: 'Terms of Use',              to: '/terms' },
    { label: 'Cooperative Member Terms',  to: '/coop-member-terms' },
    { label: 'Platform Operator Terms',   to: '/coop-platform-terms' },
    { label: 'Cooperative Bye-Laws',      to: '/bylaws' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-xl inline-block px-4 py-2.5 mb-4">
              <img
                src="/logo.svg"
                alt="Kopkad"
                style={{ width: '110px', height: '38px', objectFit: 'contain', objectPosition: 'center 48%' }}
              />
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Smart savings management for thrift businesses, cooperatives, and personal savers across Nigeria.
            </p>
            <div className="flex gap-3 mt-5">
              {socials.map(({ icon: Icon, href }, idx) => (
                <a key={idx} href={href} className="w-8 h-8 rounded-lg bg-gray-800 hover:bg-cyan-700 flex items-center justify-center transition-colors">
                  <Icon size={14} className="text-gray-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <h4 className="text-white text-sm font-semibold mb-4">{group}</h4>
              <ul className="space-y-2">
                {items.map(({ label, action, isAddress, isPhone, isEmail }) => (
                  <li key={label}>
                    {isAddress ? (
                      <div className="flex items-start gap-2 text-sm">
                        <FaMapMarkerAlt className="text-cyan-400 mt-1 flex-shrink-0" size={12} />
                        <span className="leading-relaxed">
                          4A Akpabio Street,<br />
                          Uyo, Akwa Ibom State
                        </span>
                      </div>
                    ) : isPhone ? (
                      <div className="flex items-center gap-2 text-sm">
                        <FaPhone className="text-cyan-400" size={12} />
                        <a href="tel:+2349079095259" className="hover:text-cyan-400 transition-colors">
                          09079095259
                        </a>
                      </div>
                    ) : isEmail ? (
                      <div className="flex items-center gap-2 text-sm">
                        <FaEnvelope className="text-cyan-400" size={12} />
                        <a href="mailto:support@kopkad.ng" className="hover:text-cyan-400 transition-colors">
                          support@kopkad.ng
                        </a>
                      </div>
                    ) : (
                      <button onClick={action} className="text-sm hover:text-cyan-400 transition-colors text-left">
                        {label}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Legal links */}
        <div className="border-t border-gray-800 pt-6 pb-4">
          <h4 className="text-white text-xs font-semibold uppercase tracking-widest mb-3">Legal</h4>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {legal.map(({ label, to }) => (
              <Link key={to} to={to} className="text-xs text-gray-500 hover:text-cyan-400 transition-colors">
                {label}
              </Link>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-800 pt-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <p>© {new Date().getFullYear()} Kopkad. All rights reserved.</p>
          <p>
            Powered by{' '}
            <a href="https://ofektomtechnologies.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              Ofektom Technologies
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
