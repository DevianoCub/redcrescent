import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeToggle from './ThemeToggle';

interface Props {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export default function Header({ theme, toggleTheme }: Props) {
  const { t } = useTranslation();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const isLanding = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [location.pathname]);

  const landingNavItems = [
    { href: '#about', label: t('nav.about') },
    { href: '#activities', label: t('nav.activities') },
    { href: '#news', label: t('nav.news') },
    { href: '#contact', label: t('nav.contact') },
  ];

  const pageNavItems = [
    { to: '/', label: t('nav.home') },
    { to: '/live', label: t('nav.live') },
    { to: '/donate', label: t('nav.donate') },
  ];

  return (
    <>
      <header
        className={`fixed top-3 left-3 right-3 z-50 transition-all duration-500 ease-out
          ${scrolled
            ? 'glass shadow-lg shadow-black/5 dark:shadow-black/20 border border-gray-200/60 dark:border-white/10'
            : 'bg-white/70 dark:bg-surface-dark/70 backdrop-blur-xl border border-gray-200/40 dark:border-white/10 shadow-md'}`}
        style={{ borderRadius: scrolled ? '1rem' : '1.5rem' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src="/favicon.png"
                alt="Red Crescent"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover
                  shadow-md shadow-primary/30 group-hover:shadow-lg group-hover:shadow-primary/40 transition-all duration-300"
              />
              <span className="hidden sm:block text-sm font-semibold text-gray-900 dark:text-white leading-tight">
                REDCRESCENT<span className="text-primary">.uz</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {isLanding
                ? landingNavItems.map(item => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="px-3 xl:px-4 py-2 rounded-xl text-sm font-medium
                        text-gray-700 dark:text-gray-200 hover:bg-black/5 dark:hover:bg-white/10
                        transition-all duration-200 active:scale-95"
                    >
                      {item.label}
                    </a>
                  ))
                : pageNavItems.map(item => (
                    <Link
                      key={item.to}
                      to={item.to}
                      className={`px-3 xl:px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 active:scale-95
                        ${location.pathname === item.to
                          ? 'bg-primary/10 text-primary font-semibold'
                          : 'text-gray-700 dark:text-gray-200 hover:bg-black/5 dark:hover:bg-white/10'}`}
                    >
                      {item.label}
                    </Link>
                  ))
              }
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-2">
              <LanguageSwitcher />
              <ThemeToggle theme={theme} toggle={toggleTheme} />
              <Link
                to="/donate"
                className="ml-1 px-5 py-2 rounded-2xl text-sm font-semibold text-white
                  bg-primary hover:bg-primary-light shadow-md shadow-primary/25
                  hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 active:scale-95"
              >
                {t('nav.donate')}
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center gap-2">
              <LanguageSwitcher />
              <ThemeToggle theme={theme} toggle={toggleTheme} />
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="ml-1 w-10 h-10 rounded-xl flex items-center justify-center
                  bg-gray-200/60 dark:bg-white/10 hover:bg-gray-300/60 dark:hover:bg-white/15
                  transition-all duration-200 active:scale-90"
                aria-label="Menu"
              >
                <div className="flex flex-col gap-1.5 items-center">
                  <span className={`w-5 h-0.5 bg-gray-600 dark:bg-gray-200 rounded-full transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-[3.5px]' : ''}`}/>
                  <span className={`w-5 h-0.5 bg-gray-600 dark:bg-gray-200 rounded-full transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-[3.5px]' : ''}`}/>
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500
          ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={() => setMobileOpen(false)}/>
        <div className={`absolute top-20 left-3 right-3 glass rounded-3xl shadow-2xl p-6
          transition-all duration-500 border border-gray-200/60 dark:border-white/10
          ${mobileOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}>
          <nav className="flex flex-col gap-1">
            {isLanding
              ? landingNavItems.map(item => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="px-4 py-3 rounded-2xl text-base font-medium
                      text-gray-700 dark:text-gray-200 hover:bg-black/5 dark:hover:bg-white/10
                      transition-all duration-200 active:scale-98"
                  >
                    {item.label}
                  </a>
                ))
              : pageNavItems.map(item => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setMobileOpen(false)}
                    className={`px-4 py-3 rounded-2xl text-base font-medium transition-all duration-200
                      ${location.pathname === item.to
                        ? 'bg-primary/10 text-primary font-semibold'
                        : 'text-gray-700 dark:text-gray-200 hover:bg-black/5 dark:hover:bg-white/10'}`}
                  >
                    {item.label}
                  </Link>
                ))
            }
          </nav>
          <div className="mt-4 pt-4 border-t border-black/5 dark:border-white/10">
            <Link
              to="/donate"
              onClick={() => setMobileOpen(false)}
              className="block w-full text-center px-5 py-3 rounded-2xl text-sm font-semibold text-white
                bg-primary hover:bg-primary-light shadow-md shadow-primary/25 transition-all duration-300 active:scale-95"
            >
              {t('nav.donate')}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
