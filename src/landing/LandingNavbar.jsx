import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { goToApp } from '../utils/appNav';

/**
 * Site navigation: only links that go somewhere else. The home page's sections
 * (features, pricing, FAQ…) are reached by scrolling it, and from the footer.
 */
export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Blog', href: '/blog' },
  { label: 'Resources', href: '/resources' },
];

const isActive = (path, href) => (href === '/' ? path === '/' : path === href || path.startsWith(`${href}/`));

const LandingNavbar = ({ onCoopClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // Read after mount so the prerendered HTML and the first client render match.
  const [path, setPath] = useState('');

  useEffect(() => {
    setPath(window.location.pathname);
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const linkClass = (href) => `text-sm font-semibold transition-colors whitespace-nowrap ${isActive(path, href) ? 'text-cyan-700' : 'text-gray-600 hover:text-cyan-700'}`;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div
            className="flex-shrink-0 cursor-pointer"
            onClick={() => (window.location.pathname === '/' ? window.scrollTo({ top: 0, behavior: 'smooth' }) : window.location.assign('/'))}
          >
            <img
              src="/logo.svg"
              alt="Kopkad"
              style={{ width: '120px', height: 'auto', objectFit: 'contain', objectPosition: 'center 48%' }}
            />
          </div>

          <div className="hidden md:flex items-center gap-7 ml-8 mr-auto">
            {NAV_LINKS.map(({ label, href }) => (
              <a key={href} href={href} className={linkClass(href)} aria-current={isActive(path, href) ? 'page' : undefined}>
                {label}
              </a>
            ))}
            {onCoopClick && (
              <button onClick={onCoopClick} className="text-[#d97706] hover:text-[#b45309] text-sm font-semibold transition-colors whitespace-nowrap">
                Cooperative
              </button>
            )}
          </div>

          <div className="hidden md:flex items-center gap-3 flex-shrink-0">
            <button
              onClick={() => goToApp('/login')}
              className="px-4 py-2 text-cyan-700 font-semibold text-sm hover:text-cyan-800 transition-colors whitespace-nowrap"
            >
              Log In
            </button>
            <button
              onClick={() => goToApp('/signup')}
              className="px-5 py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm rounded-lg transition-colors shadow-sm whitespace-nowrap"
            >
              Get Started Free
            </button>
          </div>

          <button
            className="md:hidden p-2 text-gray-600 hover:text-cyan-700"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-1 shadow-lg">
          {NAV_LINKS.map(({ label, href }) => (
            <a key={href} href={href} className={`block w-full py-2.5 ${linkClass(href)}`}>
              {label}
            </a>
          ))}
          {onCoopClick && (
            <button
              onClick={() => { setMenuOpen(false); onCoopClick(); }}
              className="block w-full text-left text-[#d97706] hover:text-[#b45309] py-2.5 text-sm font-semibold"
            >
              Cooperative Portal
            </button>
          )}
          <div className="pt-3 border-t border-gray-100 flex flex-col gap-2">
            <button
              onClick={() => goToApp('/login')}
              className="w-full py-2.5 border border-cyan-700 text-cyan-700 font-semibold text-sm rounded-lg"
            >
              Log In
            </button>
            <button
              onClick={() => goToApp('/signup')}
              className="w-full py-2.5 bg-orange-500 text-white font-semibold text-sm rounded-lg"
            >
              Get Started Free
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default LandingNavbar;
