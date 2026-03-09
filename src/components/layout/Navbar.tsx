'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { Link, useRouter, usePathname } from '@/i18n/navigation';
import { locales, localeFlags, type Locale } from '@/i18n/config';
import { Menu, X, ChevronDown } from 'lucide-react';

const navLinks = [
  { key: 'home', href: '/#home', sectionId: 'home' },
  { key: 'about', href: '/#about', sectionId: 'about' },
  { key: 'events', href: '/#events', sectionId: 'events' },
  { key: 'contact', href: '/#contact', sectionId: 'contact' },
  { key: 'impressum', href: '/impressum', sectionId: null },
] as const;

export default function Navbar() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  // Track scroll for shadow effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track active section via IntersectionObserver
  useEffect(() => {
    const sectionIds = ['about', 'events', 'contact'];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: '-40% 0px -40% 0px' }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, [pathname]);

  const handleNavClick = useCallback(
    (e: React.MouseEvent, link: (typeof navLinks)[number]) => {
      setMobileMenuOpen(false);

      // If it's a section link and we're on homepage, smooth scroll
      if (link.sectionId) {
        if (pathname === '/') {
          e.preventDefault();
          const section = document.getElementById(link.sectionId);
          if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    },
    [pathname]
  );

  const isActive = (link: (typeof navLinks)[number]) => {
    if (link.sectionId && pathname === '/') {
      return activeSection === link.sectionId;
    }
    if (link.href === '/' && pathname === '/') {
      return !activeSection;
    }
    if (link.href !== '/' && !link.sectionId) {
      return pathname === link.href;
    }
    return false;
  };

  const switchLocale = (newLocale: Locale) => {
    router.replace(pathname, { locale: newLocale });
    setLangDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Main Header */}
      <nav
        className={`bg-dennis-black transition-shadow duration-300 ${
          scrolled ? 'shadow-lg shadow-black/30' : ''
        }`}
      >
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/dennis_logo.svg"
              alt="Dennis Czekalla"
              width={160}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Nav Links + Language Switcher */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                onClick={(e) => handleNavClick(e, link)}
                className={`text-sm font-medium transition-colors relative ${
                  isActive(link)
                    ? 'text-dennis-gold'
                    : 'text-white hover:text-dennis-gold'
                }`}
              >
                {t(link.key)}
                {isActive(link) && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-dennis-gold rounded-full" />
                )}
              </Link>
            ))}

            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-1.5 text-sm text-white hover:text-dennis-gold transition-colors"
                aria-label="Switch language"
              >
                <span>{localeFlags[locale as Locale]}</span>
                <ChevronDown size={14} className={`transition-transform ${langDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {langDropdownOpen && (
                <>
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => setLangDropdownOpen(false)}
                  />
                  <div className="absolute right-0 top-full mt-2 bg-white text-dennis-dark rounded-lg shadow-lg py-1 z-20 min-w-[140px]">
                    {locales.map((loc) => (
                      <button
                        key={loc}
                        onClick={() => switchLocale(loc)}
                        className={`w-full px-4 py-2 text-left text-sm hover:bg-dennis-bg transition-colors flex items-center gap-2 ${
                          locale === loc ? 'font-semibold bg-dennis-bg' : ''
                        }`}
                      >
                        <span>{localeFlags[loc]}</span>
                        <span>{loc === 'en' ? 'English' : loc === 'de' ? 'Deutsch' : loc === 'pl' ? 'Polski' : 'Francais'}</span>
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white hover:text-dennis-gold transition-colors"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-4 pb-6 pt-2 space-y-1 border-t border-white/10">
            {navLinks.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                onClick={(e) => handleNavClick(e, link)}
                className={`block py-3 px-3 text-sm font-medium rounded-lg transition-colors ${
                  isActive(link)
                    ? 'text-dennis-gold bg-white/5'
                    : 'text-white hover:text-dennis-gold hover:bg-white/5'
                }`}
              >
                {t(link.key)}
              </Link>
            ))}

            {/* Mobile Language Switcher */}
            <div className="pt-3 border-t border-white/10">
              <div className="flex items-center gap-2 px-3">
                {locales.map((loc) => (
                  <button
                    key={loc}
                    onClick={() => switchLocale(loc)}
                    className={`px-3 py-1.5 text-sm rounded-full transition-colors ${
                      locale === loc
                        ? 'bg-dennis-gold text-dennis-black font-semibold'
                        : 'text-white/70 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {localeFlags[loc]}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
