'use client';

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react';

interface CookieConsent {
  essential: boolean;
  thirdParty: boolean;
}

interface CookieConsentContextValue {
  consent: CookieConsent | null;
  hasConsent: (category: 'essential' | 'thirdParty') => boolean;
  acceptAll: () => void;
  acceptEssentialOnly: () => void;
}

const CookieConsentContext = createContext<CookieConsentContextValue | null>(null);

const STORAGE_KEY = 'cookie-consent';

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [consent, setConsent] = useState<CookieConsent | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setConsent(JSON.parse(stored));
      } catch {
        // Invalid data, will show banner
      }
    }
  }, []);

  const saveConsent = useCallback((value: CookieConsent) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
    setConsent(value);
  }, []);

  const acceptAll = useCallback(() => {
    saveConsent({ essential: true, thirdParty: true });
  }, [saveConsent]);

  const acceptEssentialOnly = useCallback(() => {
    saveConsent({ essential: true, thirdParty: false });
  }, [saveConsent]);

  const hasConsent = useCallback(
    (category: 'essential' | 'thirdParty') => {
      if (category === 'essential') return true;
      return consent?.thirdParty === true;
    },
    [consent]
  );

  return (
    <CookieConsentContext.Provider value={{ consent, hasConsent, acceptAll, acceptEssentialOnly }}>
      {children}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent() {
  const context = useContext(CookieConsentContext);
  if (!context) {
    throw new Error('useCookieConsent must be used within CookieConsentProvider');
  }
  return context;
}
