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
   HomePageClient — dark, dramatic personal brand aesthetic
   ═══════════════════════════════════════════════════════════════ */
export default function HomePageClient() {
  const t = useTranslations();

  const partnershipRef = useRef<HTMLElement>(null);
  const adviserRef = useRef<HTMLElement>(null);

  const scrollTo = (ref: React.RefObject<HTMLElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const testimonialCount = 4;

  return (
    <>
      {/* ── 1. Hero Section (KEPT AS-IS) ─────────────────────── */}
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

        {/* Scroll-Down Chevron */}
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

      {/* ── 2. Mission Section — DARK with photo ─────────────── */}
      <section id="mission" className="relative bg-black py-24 md:py-32 overflow-hidden">
        {/* Decorative gold diagonal stripe */}
        <div
          className="absolute top-0 right-0 w-[600px] h-full opacity-[0.07] pointer-events-none"
          style={{
            background:
              'repeating-linear-gradient(135deg, transparent, transparent 40px, #F4C857 40px, #F4C857 42px)',
          }}
        />

        <div className="relative z-10 max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text — left aligned */}
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                {t('mission.title')}
              </h2>
              <p className="mt-8 text-white/70 text-lg md:text-xl leading-relaxed">
                {t('mission.subtitle')}
              </p>
            </div>

            {/* Photo — B&W Dennis */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-80 h-[28rem] md:w-96 md:h-[32rem]">
                <Image
                  src="/images/dennis-czekalla.jpg"
                  alt="Dennis Czekalla"
                  fill
                  className="object-cover grayscale"
                  sizes="(max-width: 1024px) 320px, 384px"
                />
                {/* Gold corner accent */}
                <div className="absolute -bottom-3 -left-3 w-24 h-24 border-b-2 border-l-2 border-[#F4C857]" />
                <div className="absolute -top-3 -right-3 w-24 h-24 border-t-2 border-r-2 border-[#F4C857]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. "Let's Get to Know Each Other" — DARK bg ──────── */}
      <section className="bg-[#0a0a0a] py-24 md:py-32">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-14">
            {t('intro.title')}
          </h2>

          {/* YouTube Embed */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="relative w-full pb-[56.25%] overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/S5a-l5gF4BM"
                title="Introduction Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>

          {/* Navigation Cards — dark with gold border on hover */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <button
              onClick={() => scrollTo(partnershipRef)}
              className="group flex flex-col items-center gap-4 bg-[#111111] border border-white/10 hover:border-[#F4C857] p-8 transition-all duration-300 text-center"
            >
              <Mail size={28} className="text-[#F4C857]" />
              <span className="text-lg font-semibold text-white group-hover:text-[#F4C857] transition-colors">
                {t('intro.partnership')}
              </span>
              <ArrowRight
                size={18}
                className="text-white/40 group-hover:text-[#F4C857] group-hover:translate-x-1 transition-all"
              />
            </button>

            <button
              onClick={() => scrollTo(adviserRef)}
              className="group flex flex-col items-center gap-4 bg-[#111111] border border-white/10 hover:border-[#F4C857] p-8 transition-all duration-300 text-center"
            >
              <ExternalLink size={28} className="text-[#F4C857]" />
              <span className="text-lg font-semibold text-white group-hover:text-[#F4C857] transition-colors">
                {t('intro.adviser')}
              </span>
              <ArrowRight
                size={18}
                className="text-white/40 group-hover:text-[#F4C857] group-hover:translate-x-1 transition-all"
              />
            </button>
          </div>
        </div>
      </section>

      {/* ── 4. Business Partnership — DARK with photo ────────── */}
      <section ref={partnershipRef} className="bg-[#111111] py-24 md:py-32">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text — left aligned */}
            <div>
              <h2 className="text-[#F4C857] text-sm font-semibold uppercase tracking-[0.2em] mb-4">
                {t('partnership.subtitle')}
              </h2>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                {t('partnership.title')}
              </h3>
              <p className="mt-8 text-white/60 text-lg leading-relaxed">
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

            {/* Photo */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-80 h-[28rem] md:w-96 md:h-[32rem]">
                <Image
                  src="/images/contact-dennis.png"
                  alt="Dennis Czekalla"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 320px, 384px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. Business Adviser — DARK bg ────────────────────── */}
      <section ref={adviserRef} className="bg-black py-24 md:py-32">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Photo — left side on desktop */}
            <div className="flex justify-center lg:justify-start order-2 lg:order-1">
              <div className="relative w-80 h-[28rem] md:w-96 md:h-[32rem]">
                <Image
                  src="/images/dennis-czekalla.jpg"
                  alt="Dennis Czekalla — Business Adviser"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 320px, 384px"
                />
                {/* Gold corner accent */}
                <div className="absolute -bottom-3 -right-3 w-20 h-20 border-b-2 border-r-2 border-[#F4C857]" />
              </div>
            </div>

            {/* Text — right side, left aligned */}
            <div className="order-1 lg:order-2">
              <h2 className="text-[#F4C857] text-sm font-semibold uppercase tracking-[0.2em] mb-4">
                {t('adviser.subtitle')}
              </h2>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                {t('adviser.title')}
              </h3>
              <p className="mt-8 text-white/60 text-lg leading-relaxed">
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
          </div>
        </div>
      </section>

      {/* ── 6. About Me — lighter but clean/flat ─────────────── */}
      <section id="about" className="bg-[#f5f5f5] py-24 md:py-32">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Photo — flat, no shadow, no rounded corners */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-72 h-96 md:w-80 md:h-[28rem] overflow-hidden">
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
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#222222] mb-6">
                {t('about.title')}
              </h2>
              <p className="text-[#55555e] text-lg leading-relaxed">
                {t('about.bio')}
              </p>

              {/* Achievement Grid — gold numbers, minimal style */}
              <div className="grid grid-cols-2 gap-8 mt-12">
                {statKeys.map((key) => (
                  <div key={key}>
                    <p className="text-4xl md:text-5xl font-bold text-[#F4C857]">
                      {t(`about.${key}`)}
                    </p>
                    <p className="mt-1 text-[#55555e] text-sm font-medium uppercase tracking-wide">
                      {t(`about.${key}Label`)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. Brand Ecosystem — DARK navy/charcoal ──────────── */}
      <section className="bg-[#0d1117] py-24 md:py-32">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-16">
            {t('brands.title')}
          </h2>

          {/* Logos in a single row — flexbox, larger, flat */}
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16 lg:gap-20">
            {brands.map((brand) => (
              <a
                key={brand.key}
                href={brand.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-4 transition-opacity duration-300 hover:opacity-100 opacity-70"
              >
                {brand.logoType === 'image' && brand.logo ? (
                  <Image
                    src={brand.logo}
                    alt={brand.key}
                    width={200}
                    height={70}
                    className="h-14 md:h-16 w-auto object-contain"
                  />
                ) : (
                  <span className="text-2xl md:text-3xl font-bold text-white tracking-wide">
                    {brand.key === 'tri2thrive' ? 'Tri2Thrive' : 'BECZ'}
                  </span>
                )}
                <p className="text-white/40 text-sm text-center max-w-[200px] group-hover:text-white/60 transition-colors">
                  {t(`brands.${brand.key}`)}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. Testimonials — DARK cards with gold left border ── */}
      <section className="bg-[#0a0a0a] py-24 md:py-32">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-14">
            {t('testimonials.title')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {Array.from({ length: testimonialCount }).map((_, i) => (
              <div
                key={i}
                className="bg-[#1a1a2e] border-l-4 border-[#F4C857] p-8 flex flex-col rounded-lg"
              >
                {/* Quote Text — no italic, no quote icon */}
                <p className="text-white/90 leading-relaxed flex-1 text-base">
                  &ldquo;{t(`testimonials.items.${i}.quote`)}&rdquo;
                </p>

                {/* Author */}
                <div className="mt-6 pt-4 border-t border-white/10">
                  <p className="font-bold text-white">
                    {t(`testimonials.items.${i}.name`)}
                  </p>
                  <p className="text-white/40 text-sm mt-0.5">
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

      {/* ── 9. Events — DARK bg, minimal ─────────────────────── */}
      <section id="events" className="bg-[#111111] py-24 md:py-32">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            {t('events.title')}
          </h2>
          <p className="mt-4 text-white/50 text-lg">
            {t('events.subtitle')}
          </p>

          {/* Placeholder — dark, flat, no shadow */}
          <div className="mt-14 bg-[#1a1a1a] border border-white/10 p-14 max-w-2xl mx-auto">
            <Calendar size={48} className="text-[#F4C857] mx-auto mb-6" />
            <p className="text-white/60 text-lg">
              {t('events.coming_soon')}
            </p>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-6 mt-8">
              <a
                href="https://linkedin.com/in/czekalla/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-[#F4C857] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://instagram.com/dennis.czekalla"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-[#F4C857] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 10. Video & Podcast Grid — BLACK bg ──────────────── */}
      <section className="bg-black py-24 md:py-32">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-14">
            {t('media.title')}
          </h2>

          {/* Video Grid — no rounded corners, no shadow */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {videoIds.map((id) => (
              <div
                key={id}
                className="relative w-full pb-[56.25%] overflow-hidden"
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
          <div className="mt-20">
            <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-10">
              {t('media.podcasts')}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {/* Spotify - Hausgemacht */}
              <div className="overflow-hidden bg-[#282828]">
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

              {/* Tri2Thrive Card — dark, flat */}
              <a
                href="https://tri2thrive.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center justify-center bg-[#111111] border border-white/10 hover:border-[#F4C857] p-8 transition-all duration-300 min-h-[352px]"
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

      {/* ── 11. Contact — lighter section, clean ─────────────── */}
      <section id="contact" className="bg-[#f0f0f0] py-24 md:py-32">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text — left aligned */}
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#222222]">
                {t('contact.title')}
              </h2>
              <p className="mt-4 text-[#55555e] text-lg">
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
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 mt-10">
                <a
                  href="mailto:hallo@dennis.cz"
                  className="inline-flex items-center gap-2 rounded-full bg-[#55555e] hover:bg-[#3f4047] text-white px-8 py-3 font-medium transition-colors"
                >
                  <Mail size={18} />
                  {t('contact.book')}
                </a>
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

              {/* Social Icons */}
              <div className="flex items-center gap-5 mt-10">
                <a
                  href="https://linkedin.com/in/czekalla/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#55555e] hover:text-[#F4C857] transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={28} />
                </a>
                <a
                  href="https://instagram.com/dennis.czekalla"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#55555e] hover:text-[#F4C857] transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={28} />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#55555e] hover:text-[#F4C857] transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube size={28} />
                </a>
              </div>
            </div>

            {/* Photo — right side */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-72 h-96 md:w-80 md:h-[28rem] overflow-hidden">
                <Image
                  src="/images/contact-dennis.png"
                  alt="Dennis Czekalla"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 288px, 320px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
