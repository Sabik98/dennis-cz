'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import {
  ChevronDown,
  ArrowRight,
  Mail,
  Phone,
  ExternalLink,
  Quote,
  Instagram,
  Linkedin,
  Youtube,
  Calendar,
} from 'lucide-react';

/* ─── Brand Data ─────────────────────────────────────────────── */
const brands = [
  {
    key: 'berghaus' as const,
    logo: '/images/berghaus-logo-white.svg',
    logoType: 'image' as const,
    href: 'https://berghaus.house',
  },
  {
    key: 'isella' as const,
    logo: '/images/isella-logo.png',
    logoType: 'image' as const,
    href: 'https://isella-group.com',
  },
  {
    key: 'tri2thrive' as const,
    logo: null,
    logoType: 'text' as const,
    href: 'https://tri2thrive.com',
  },
  {
    key: 'becz' as const,
    logo: null,
    logoType: 'text' as const,
    href: 'https://becz.eu',
  },
];

/* ─── Video IDs ──────────────────────────────────────────────── */
const videoIds = [
  'S5a-l5gF4BM',
  'Z4LgCqg1WNM',
  '3v1HcQJZ-Ec',
  'Nm76gxutgs8',
  'Gj04oW0ODdk',
  'e03Aw7oXMcI',
  '2UoB0wgb0Xs',
  'Dc83SNX8IGc',
];

/* ─── Stat Keys ──────────────────────────────────────────────── */
const statKeys = ['companies', 'countries', 'houses', 'team'] as const;

/* ═══════════════════════════════════════════════════════════════
   HomePageClient — all homepage sections inline
   ═══════════════════════════════════════════════════════════════ */
export default function HomePageClient() {
  const t = useTranslations();

  const partnershipRef = useRef<HTMLElement>(null);
  const adviserRef = useRef<HTMLElement>(null);

  const scrollTo = (ref: React.RefObject<HTMLElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  /* helper: raw access to the testimonial array */
  const testimonialCount = 4;

  return (
    <>
      {/* ── 1. Hero Section ──────────────────────────────────── */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/hero-poster.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/dennis-hero-bg.mp4" type="video/mp4" />
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Content */}
        <div className="relative z-10 text-center px-4">
          {/* Role Tags */}
          <h1 className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-white text-2xl sm:text-3xl md:text-5xl font-bold tracking-wider uppercase">
            <span>{t('hero.entrepreneur')}</span>
            <span className="text-[#F4C857] text-lg md:text-2xl" aria-hidden="true">
              &bull;
            </span>
            <span>{t('hero.adviser')}</span>
            <span className="text-[#F4C857] text-lg md:text-2xl" aria-hidden="true">
              &bull;
            </span>
            <span>{t('hero.speaker')}</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-white/80 text-xs sm:text-sm md:text-base uppercase tracking-[0.15em] max-w-2xl mx-auto leading-relaxed">
            {t('hero.subtitle')}
          </p>
        </div>

        {/* Scroll‐Down Chevron */}
        <button
          onClick={() => {
            const missionEl = document.getElementById('mission');
            missionEl?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/70 hover:text-white transition-colors animate-bounce"
          aria-label="Scroll down"
        >
          <ChevronDown size={36} />
        </button>
      </section>

      {/* ── 2. Mission Section ───────────────────────────────── */}
      <section id="mission" className="bg-white py-20 md:py-28">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-dennis-dark leading-tight max-w-3xl mx-auto">
            {t('mission.title')}
          </h2>
          <p className="mt-6 text-dennis-gray text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            {t('mission.subtitle')}
          </p>
        </div>
      </section>

      {/* ── 3. "Let's Get to Know Each Other" Section ─────── */}
      <section className="bg-[#f0f0f0] py-20 md:py-28">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-dennis-dark text-center mb-12">
            {t('intro.title')}
          </h2>

          {/* YouTube Embed */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="relative w-full pb-[56.25%] rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/S5a-l5gF4BM"
                title="Introduction Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>

          {/* Navigation Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <button
              onClick={() => scrollTo(partnershipRef)}
              className="group flex items-center justify-between bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 text-left"
            >
              <span className="text-lg font-semibold text-dennis-dark group-hover:text-[#F4C857] transition-colors">
                {t('intro.partnership')}
              </span>
              <ArrowRight
                size={20}
                className="text-dennis-gray group-hover:text-[#F4C857] group-hover:translate-x-1 transition-all"
              />
            </button>

            <button
              onClick={() => scrollTo(adviserRef)}
              className="group flex items-center justify-between bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 text-left"
            >
              <span className="text-lg font-semibold text-dennis-dark group-hover:text-[#F4C857] transition-colors">
                {t('intro.adviser')}
              </span>
              <ArrowRight
                size={20}
                className="text-dennis-gray group-hover:text-[#F4C857] group-hover:translate-x-1 transition-all"
              />
            </button>
          </div>
        </div>
      </section>

      {/* ── 4. Business Partnership Section ──────────────── */}
      <section ref={partnershipRef} className="bg-white py-20 md:py-28">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-dennis-dark">
            {t('partnership.title')}
          </h2>
          <p className="mt-3 text-[#F4C857] text-lg md:text-xl font-medium">
            {t('partnership.subtitle')}
          </p>
          <p className="mt-6 text-dennis-gray text-lg max-w-2xl mx-auto leading-relaxed">
            {t('partnership.description')}
          </p>
          <a
            href="mailto:hallo@dennis.cz"
            className="inline-flex items-center gap-2 mt-10 rounded-full bg-[#55555e] hover:bg-[#3f4047] text-white px-8 py-3 font-medium transition-colors"
          >
            <Mail size={18} />
            {t('partnership.cta')}
          </a>
        </div>
      </section>

      {/* ── 5. Business Adviser Section ─────────────────── */}
      <section ref={adviserRef} className="bg-[#f7f8f9] py-20 md:py-28">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-dennis-dark">
            {t('adviser.title')}
          </h2>
          <p className="mt-3 text-[#F4C857] text-lg md:text-xl font-medium">
            {t('adviser.subtitle')}
          </p>
          <p className="mt-6 text-dennis-gray text-lg max-w-2xl mx-auto leading-relaxed">
            {t('adviser.description')}
          </p>
          <a
            href="mailto:hallo@dennis.cz"
            className="inline-flex items-center gap-2 mt-10 rounded-full bg-[#55555e] hover:bg-[#3f4047] text-white px-8 py-3 font-medium transition-colors"
          >
            <Mail size={18} />
            {t('adviser.cta')}
          </a>
        </div>
      </section>

      {/* ── 6. About Me Section ──────────────────────────── */}
      <section id="about" className="bg-white py-20 md:py-28">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Photo */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-72 h-96 md:w-80 md:h-[28rem] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/dennis-czekalla.jpg"
                  alt="Dennis Czekalla"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 288px, 320px"
                />
              </div>
            </div>

            {/* Text Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-dennis-dark mb-6">
                {t('about.title')}
              </h2>
              <p className="text-dennis-gray text-lg leading-relaxed">
                {t('about.bio')}
              </p>

              {/* Achievement Grid */}
              <div className="grid grid-cols-2 gap-8 mt-10">
                {statKeys.map((key) => (
                  <div key={key}>
                    <p className="text-4xl font-bold text-[#F4C857]">
                      {t(`about.${key}`)}
                    </p>
                    <p className="mt-1 text-dennis-gray text-sm font-medium">
                      {t(`about.${key}Label`)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. Brand Ecosystem Section ───────────────────── */}
      <section className="bg-[#f0f0f0] py-20 md:py-28">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-dennis-dark text-center mb-12">
            {t('brands.title')}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {brands.map((brand) => (
              <a
                key={brand.key}
                href={brand.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-[#222222] rounded-xl p-8 flex flex-col items-center justify-center min-h-[200px] hover:scale-[1.03] transition-transform duration-300 shadow-lg"
              >
                {/* External link icon */}
                <ExternalLink
                  size={16}
                  className="absolute top-4 right-4 text-white/30 group-hover:text-[#F4C857] transition-colors"
                />

                {/* Logo or Text */}
                {brand.logoType === 'image' && brand.logo ? (
                  <Image
                    src={brand.logo}
                    alt={brand.key}
                    width={180}
                    height={60}
                    className="h-12 w-auto object-contain"
                  />
                ) : (
                  <span className="text-2xl font-bold text-white">
                    {brand.key === 'tri2thrive' ? 'Tri2Thrive' : 'BECZ'}
                  </span>
                )}

                {/* Description */}
                <p className="mt-4 text-white/60 text-sm text-center">
                  {t(`brands.${brand.key}`)}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. Testimonials Section ──────────────────────── */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-dennis-dark text-center mb-12">
            {t('testimonials.title')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {Array.from({ length: testimonialCount }).map((_, i) => (
              <div
                key={i}
                className="bg-white shadow-lg rounded-xl p-8 flex flex-col"
              >
                {/* Quote Icon */}
                <Quote size={28} className="text-[#F4C857] mb-4 flex-shrink-0" />

                {/* Quote Text */}
                <p className="text-dennis-gray italic leading-relaxed flex-1">
                  &ldquo;{t(`testimonials.items.${i}.quote`)}&rdquo;
                </p>

                {/* Author */}
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <p className="font-bold text-dennis-dark">
                    {t(`testimonials.items.${i}.name`)}
                  </p>
                  <p className="text-dennis-gray text-sm mt-0.5">
                    {t(`testimonials.items.${i}.role`)}
                  </p>
                  <a
                    href={t(`testimonials.items.${i}.website`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#F4C857] text-sm hover:underline mt-1 inline-block"
                  >
                    {t(`testimonials.items.${i}.website`)
                      .replace('https://www.', '')
                      .replace('https://', '')
                      .replace(/\/$/, '')}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. Events Section ────────────────────────────── */}
      <section id="events" className="bg-[#f7f8f9] py-20 md:py-28">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-dennis-dark">
            {t('events.title')}
          </h2>
          <p className="mt-3 text-dennis-gray text-lg">
            {t('events.subtitle')}
          </p>

          {/* Placeholder */}
          <div className="mt-12 bg-white rounded-xl p-12 shadow-md max-w-2xl mx-auto">
            <Calendar size={48} className="text-[#F4C857] mx-auto mb-6" />
            <p className="text-dennis-gray text-lg">
              {t('events.coming_soon')}
            </p>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-6 mt-8">
              <a
                href="https://linkedin.com/in/czekalla/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dennis-gray hover:text-[#F4C857] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://instagram.com/dennis.czekalla"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dennis-gray hover:text-[#F4C857] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 10. Video & Podcast Grid Section ─────────────── */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-dennis-dark text-center mb-12">
            {t('media.title')}
          </h2>

          {/* Video Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {videoIds.map((id) => (
              <div
                key={id}
                className="relative w-full pb-[56.25%] rounded-xl overflow-hidden shadow-md"
              >
                <iframe
                  src={`https://www.youtube.com/embed/${id}`}
                  title={`YouTube video ${id}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Podcast Section */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-dennis-dark text-center mb-8">
              {t('media.podcasts')}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {/* Spotify - Hausgemacht */}
              <div className="rounded-xl overflow-hidden shadow-md bg-[#282828]">
                <iframe
                  src="https://open.spotify.com/embed/show/0SuqGsAj2a5HiTlj62L0Mi?theme=0"
                  width="100%"
                  height="352"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  title={t('media.hausgemacht')}
                  className="border-0"
                />
              </div>

              {/* Tri2Thrive Card */}
              <a
                href="https://tri2thrive.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center justify-center bg-[#222222] rounded-xl p-8 shadow-md hover:scale-[1.02] transition-transform duration-300 min-h-[352px]"
              >
                <Youtube size={48} className="text-[#F4C857] mb-4" />
                <span className="text-2xl font-bold text-white">
                  {t('media.tri2thrive')}
                </span>
                <ExternalLink
                  size={16}
                  className="mt-4 text-white/30 group-hover:text-[#F4C857] transition-colors"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 11. Contact Section ──────────────────────────── */}
      <section id="contact" className="bg-[#f0f0f0] py-20 md:py-28">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-dennis-dark">
            {t('contact.title')}
          </h2>
          <p className="mt-4 text-dennis-gray text-lg">
            {t('contact.subtitle')}
          </p>

          {/* Email */}
          <a
            href="mailto:hallo@dennis.cz"
            className="inline-block mt-6 text-[#F4C857] text-xl font-semibold hover:underline"
          >
            {t('contact.email_address')}
          </a>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <a
              href="mailto:hallo@dennis.cz"
              className="inline-flex items-center gap-2 rounded-full bg-[#55555e] hover:bg-[#3f4047] text-white px-8 py-3 font-medium transition-colors"
            >
              <Mail size={18} />
              {t('contact.book')}
            </a>
            <div className="flex flex-col sm:flex-row items-center gap-2">
              <a
                href="tel:+48506057041"
                className="inline-flex items-center gap-2 rounded-full bg-[#55555e] hover:bg-[#3f4047] text-white px-8 py-3 font-medium transition-colors"
              >
                <Phone size={18} />
                +48 506 057 041
              </a>
              <a
                href="tel:+4923598092855"
                className="inline-flex items-center gap-2 rounded-full bg-[#55555e] hover:bg-[#3f4047] text-white px-8 py-3 font-medium transition-colors"
              >
                <Phone size={18} />
                +49 02359/809 285 5
              </a>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center justify-center gap-6 mt-10">
            <a
              href="https://linkedin.com/in/czekalla/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dennis-gray hover:text-[#F4C857] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="https://instagram.com/dennis.czekalla"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dennis-gray hover:text-[#F4C857] transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={28} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dennis-gray hover:text-[#F4C857] transition-colors"
              aria-label="YouTube"
            >
              <Youtube size={28} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
