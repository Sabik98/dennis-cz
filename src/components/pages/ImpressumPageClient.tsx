'use client';

import { useTranslations } from 'next-intl';
import { Mail, Phone } from 'lucide-react';

export default function ImpressumPageClient() {
  const t = useTranslations('impressum');

  return (
    <div className="pt-[100px] pb-20">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-dennis-dark mt-8 mb-10">
            {t('title')}
          </h1>

          {/* Legal Basis */}
          <section className="mb-10">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <p className="text-dennis-gray leading-relaxed">
                {t('legal_basis')}
              </p>
            </div>
          </section>

          {/* Contact Information */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-dennis-dark mb-4">
              {t('contact_info')}
            </h2>
            <div className="bg-white rounded-xl p-6 shadow-sm space-y-3">
              <p className="text-dennis-dark font-semibold text-lg">Dennis Czekalla</p>
              <div className="text-dennis-gray space-y-1">
                <p>ul. Jana Kasprowicza 22/4</p>
                <p>31-515 Krakow</p>
                <p>Poland</p>
              </div>
              <div className="pt-3 space-y-2">
                <a
                  href="mailto:hallo@dennis.cz"
                  className="flex items-center gap-2 text-dennis-gray hover:text-dennis-gold transition-colors"
                >
                  <Mail size={16} />
                  <span>hallo@dennis.cz</span>
                </a>
                <a
                  href="tel:+48506057041"
                  className="flex items-center gap-2 text-dennis-gray hover:text-dennis-gold transition-colors"
                >
                  <Phone size={16} />
                  <span>+48 506 057 041</span>
                </a>
                <a
                  href="tel:+4923598092855"
                  className="flex items-center gap-2 text-dennis-gray hover:text-dennis-gold transition-colors"
                >
                  <Phone size={16} />
                  <span>+49 2359 809 285 5</span>
                </a>
              </div>
            </div>
          </section>

          {/* Responsible for Content */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-dennis-dark mb-4">
              {t('responsible_title')}
            </h2>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <p className="text-dennis-gray">Dennis Czekalla</p>
              <p className="text-dennis-gray">ul. Jana Kasprowicza 22/4</p>
              <p className="text-dennis-gray">31-515 Krakow, Poland</p>
            </div>
          </section>

          {/* Dispute Resolution */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-dennis-dark mb-4">
              {t('dispute_title')}
            </h2>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <p className="text-dennis-gray leading-relaxed">
                {t('dispute_text')}
              </p>
              <p className="text-dennis-gray mt-3">
                <a
                  href="https://ec.europa.eu/consumers/odr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dennis-gold hover:underline"
                >
                  https://ec.europa.eu/consumers/odr
                </a>
              </p>
            </div>
          </section>

          {/* Liability for Content */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-dennis-dark mb-4">
              {t('liability_content_title')}
            </h2>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <p className="text-dennis-gray leading-relaxed">
                {t('liability_content_text')}
              </p>
            </div>
          </section>

          {/* Liability for Links */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-dennis-dark mb-4">
              {t('liability_links_title')}
            </h2>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <p className="text-dennis-gray leading-relaxed">
                {t('liability_links_text')}
              </p>
            </div>
          </section>

          {/* Copyright */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-dennis-dark mb-4">
              {t('copyright_title')}
            </h2>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <p className="text-dennis-gray leading-relaxed">
                {t('copyright_text')}
              </p>
            </div>
          </section>

          {/* Last Updated */}
          <div className="text-center text-dennis-gray/60 text-sm">
            {t('last_updated')}: 06.03.2026
          </div>
        </div>
      </div>
    </div>
  );
}
