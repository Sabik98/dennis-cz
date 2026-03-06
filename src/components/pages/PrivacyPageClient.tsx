'use client';

import { useTranslations } from 'next-intl';

export default function PrivacyPageClient() {
  const t = useTranslations('privacy');

  return (
    <div className="pt-[80px] pb-20">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-dennis-dark mt-8 mb-10">
            {t('title')}
          </h1>

          {/* Introduction */}
          <section className="mb-10">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <p className="text-dennis-gray leading-relaxed">
                {t('intro')}
              </p>
            </div>
          </section>

          {/* Responsible Party */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-dennis-dark mb-4">
              {t('responsible_title')}
            </h2>
            <div className="bg-white rounded-xl p-6 shadow-sm space-y-2">
              <p className="text-dennis-gray">Dennis Czekalla</p>
              <p className="text-dennis-gray">ul. Jana Kasprowicza 22/4</p>
              <p className="text-dennis-gray">31-515 Krakow, Poland</p>
              <p className="text-dennis-gray">hallo@dennis.cz</p>
              <p className="text-dennis-gray">+48 506 057 041</p>
            </div>
          </section>

          {/* Data Collection */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-dennis-dark mb-4">
              {t('data_collection_title')}
            </h2>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <p className="text-dennis-gray leading-relaxed">
                {t('data_collection_text')}
              </p>
            </div>
          </section>

          {/* Server Logs */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-dennis-dark mb-4">
              {t('server_logs_title')}
            </h2>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <p className="text-dennis-gray leading-relaxed">
                {t('server_logs_text')}
              </p>
            </div>
          </section>

          {/* Cookies */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-dennis-dark mb-4">
              {t('cookies_title')}
            </h2>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <p className="text-dennis-gray leading-relaxed">
                {t('cookies_text')}
              </p>
            </div>
          </section>

          {/* Contact */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-dennis-dark mb-4">
              {t('contact_title')}
            </h2>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <p className="text-dennis-gray leading-relaxed">
                {t('contact_text')}
              </p>
            </div>
          </section>

          {/* SSL/TLS Encryption */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-dennis-dark mb-4">
              {t('ssl_title')}
            </h2>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <p className="text-dennis-gray leading-relaxed">
                {t('ssl_text')}
              </p>
            </div>
          </section>

          {/* Your Rights */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-dennis-dark mb-4">
              {t('rights_title')}
            </h2>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <p className="text-dennis-gray leading-relaxed">
                {t('rights_text')}
              </p>
            </div>
          </section>

          {/* Supervisory Authority */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-dennis-dark mb-4">
              {t('supervisory_title')}
            </h2>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <p className="text-dennis-gray leading-relaxed">
                {t('supervisory_text')}
              </p>
            </div>
          </section>

          {/* Third Party Services */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-dennis-dark mb-4">
              {t('third_party_title')}
            </h2>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <p className="text-dennis-gray leading-relaxed">
                {t('third_party_text')}
              </p>
            </div>
          </section>

          {/* Data Retention */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-dennis-dark mb-4">
              {t('retention_title')}
            </h2>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <p className="text-dennis-gray leading-relaxed">
                {t('retention_text')}
              </p>
            </div>
          </section>

          {/* Changes to Privacy Policy */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-dennis-dark mb-4">
              {t('changes_title')}
            </h2>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <p className="text-dennis-gray leading-relaxed">
                {t('changes_text')}
              </p>
            </div>
          </section>

          {/* Last Updated */}
          <div className="text-dennis-gray/60 text-sm">
            {t('last_updated')}: 06.03.2026
          </div>
        </div>
      </div>
    </div>
  );
}
