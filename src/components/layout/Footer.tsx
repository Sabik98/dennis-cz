'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Instagram, Linkedin, Youtube, Mail, Phone } from 'lucide-react';

export default function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="bg-dennis-dark text-white">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {/* Column 1: Logo & About */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/images/dennis_logo.svg"
                alt="Dennis Czekalla"
                width={180}
                height={45}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Entrepreneur, Adviser, Speaker
            </p>
          </div>

          {/* Column 2: Contact */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-dennis-gold">
              {t('contact')}
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hallo@dennis.cz"
                  className="flex items-center gap-2.5 text-white/80 hover:text-dennis-gold transition-colors text-sm"
                >
                  <Mail size={16} className="flex-shrink-0" />
                  <span>hallo@dennis.cz</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+48506057041"
                  className="flex items-center gap-2.5 text-white/80 hover:text-dennis-gold transition-colors text-sm"
                >
                  <Phone size={16} className="flex-shrink-0" />
                  <span>+48 506 057 041</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+4923598092855"
                  className="flex items-center gap-2.5 text-white/80 hover:text-dennis-gold transition-colors text-sm"
                >
                  <Phone size={16} className="flex-shrink-0" />
                  <span>+49 02359/809 285 5</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Social & Legal */}
          <div className="space-y-6">
            {/* Social */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-dennis-gold">
                {t('social')}
              </h3>
              <div className="flex items-center gap-4">
                <a
                  href="https://linkedin.com/in/czekalla/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-dennis-gold transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://instagram.com/dennis.czekalla"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-dennis-gold transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://www.youtube.com/@dennisczekalla"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-dennis-gold transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube size={20} />
                </a>
              </div>
            </div>

            {/* Legal */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-dennis-gold">
                {t('legal')}
              </h3>
              <div className="flex flex-col gap-2">
                <Link
                  href="/impressum"
                  className="text-white/80 hover:text-dennis-gold transition-colors text-sm"
                >
                  {t('impressum')}
                </Link>
                <Link
                  href="/privacy-policy"
                  className="text-white/80 hover:text-dennis-gold transition-colors text-sm"
                >
                  {t('privacy')}
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-white/10 text-center">
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} Dennis Czekalla. {t('rights')}
          </p>
        </div>
      </div>
    </footer>
  );
}
