'use client';

import { useTranslations } from 'next-intl';
import { useCookieConsent } from './CookieContext';

export default function CookieBanner() {
  const t = useTranslations('cookie');
  const { consent, acceptAll, acceptEssentialOnly } = useCookieConsent();

  // Don't show if consent already given
  if (consent !== null) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] border-t border-[#F4C857]/30 bg-dennis-dark/95 backdrop-blur-md animate-cookie-slide-up">
      <div className="mx-auto max-w-[1300px] px-4 py-4 sm:px-6 sm:py-5 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
        <p className="text-sm text-white/80 flex-1 text-center sm:text-left">
          {t('message')}
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={acceptEssentialOnly}
            className="px-4 py-2 text-sm font-medium text-white/70 border border-white/20 hover:border-white/40 hover:text-white transition-colors"
          >
            {t('essential_only')}
          </button>
          <button
            onClick={acceptAll}
            className="px-4 py-2 text-sm font-medium bg-[#F4C857] text-black hover:bg-[#F4C857]/90 transition-colors"
          >
            {t('accept_all')}
          </button>
        </div>
      </div>
    </div>
  );
}
