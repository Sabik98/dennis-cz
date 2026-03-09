'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
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
  Cookie,
} from 'lucide-react';
import { useCookieConsent } from '@/components/layout/CookieContext';

/* ─── Brand Data ─────────────────────────────────────────────── */
const brands = [
  {
    key: 'berghaus' as const,
    logo: '/images/berghaus-logo.png',
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
    logo: '/images/tri2thrive-logo.png',
    logoType: 'image' as const,
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
  'Z4LgCqg1WNM',
  '2UoB0wgb0Xs',
  'Dc83SNX8IGc',
  'mshWIKC9IcI',
];

/* ─── Stat Keys ──────────────────────────────────────────────── */
const statKeys = ['companies', 'countries', 'houses', 'team'] as const;

/* ─── Testimonial Count ─────────────────────────────────────── */
const testimonialCount = 4;

/* ─── Testimonials Stage Component ─────────────────────────── */
function TestimonialsStage({ t, testimonialCount }: { t: ReturnType<typeof useTranslations>; testimonialCount: number }) {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [animKey, setAnimKey] = useState(0);

  const goTo = useCallback((index: number) => {
    setActive(index);
    setAnimKey((k) => k + 1);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActive((prev) => {
        const next = (prev + 1) % testimonialCount;
        setAnimKey((k) => k + 1);
        return next;
      });
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused, testimonialCount]);

  return (
    <section
      className="relative bg-[#0a0a0a] py-24 md:py-32 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Diagonal gold stripe texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(135deg, #F4C857 0px, #F4C857 1px, transparent 1px, transparent 28px)',
        }}
      />

      <div className="relative max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title with gold sweep line */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            {t('testimonials.title')}
          </h2>
          <div className="animate-gold-line w-32 mx-auto mt-4" />
        </div>

        {/* Stage area */}
        <div className="relative max-w-5xl mx-auto">
          {/* Giant decorative quote mark */}
          <div
            className="absolute -top-6 left-4 md:left-8 text-[#F4C857] opacity-[0.07] select-none pointer-events-none leading-none font-serif"
            style={{ fontSize: '280px' }}
          >
            &ldquo;
          </div>

          {/* Featured testimonial — asymmetric layout */}
          <div
            key={animKey}
            className="relative flex flex-col md:flex-row items-start gap-8 md:gap-12 min-h-[220px] testimonial-enter"
          >
            {/* Quote — left 60% */}
            <div className="w-full md:w-[60%] flex items-center">
              <p className="text-white/90 text-lg md:text-xl lg:text-2xl leading-relaxed font-light relative z-10">
                &ldquo;{t(`testimonials.items.${active}.quote`)}&rdquo;
              </p>
            </div>

            {/* Author — right 40% */}
            <div className="w-full md:w-[40%] flex items-center md:justify-end">
              <div className="relative px-8 py-6">
                {/* Gold corner brackets */}
                <span className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-[#F4C857]" />
                <span className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-[#F4C857]" />

                <p className="font-bold text-white text-lg">
                  {t(`testimonials.items.${active}.name`)}
                </p>
                <p className="text-white/40 text-sm mt-1">
                  {t(`testimonials.items.${active}.role`)}
                </p>
                <a
                  href={t(`testimonials.items.${active}.website`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F4C857] text-sm hover:underline mt-2 inline-block"
                >
                  {t(`testimonials.items.${active}.website`)
                    .replace('https://www.', '')
                    .replace('https://', '')
                    .replace(/\/$/, '')}
                </a>
              </div>
            </div>
          </div>

          {/* Progress bar */}
          <div className="mt-10 h-[2px] bg-white/10 rounded-full overflow-hidden max-w-5xl mx-auto">
            <div
              key={`progress-${animKey}`}
              className={`h-full bg-[#F4C857] rounded-full ${isPaused ? 'testimonial-progress-paused' : ''}`}
              style={{ animation: 'testimonial-progress 5s linear forwards' }}
            />
          </div>

          {/* Selector tabs */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-5xl mx-auto">
            {Array.from({ length: testimonialCount }).map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`contact-card-shimmer text-left px-5 py-4 border transition-all duration-300 ${
                  i === active
                    ? 'bg-[#1a1a2e] border-[#F4C857]/40'
                    : 'bg-[#111119] border-white/5 hover:border-white/20'
                }`}
              >
                <p className={`text-sm font-semibold ${i === active ? 'text-white' : 'text-white/60'}`}>
                  {t(`testimonials.items.${i}.name`)}
                </p>
                <p className="text-white/30 text-xs mt-0.5 truncate">
                  {t(`testimonials.items.${i}.role`)}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   HomePageClient — dark, dramatic personal brand aesthetic
   ═══════════════════════════════════════════════════════════════ */
export default function HomePageClient() {
  const t = useTranslations();
  const { hasConsent, acceptAll } = useCookieConsent();

  const partnershipRef = useRef<HTMLElement>(null);
  const adviserRef = useRef<HTMLElement>(null);

  const scrollTo = (ref: React.RefObject<HTMLElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };


  return (
    <>
      {/* ── 1. Hero Section (KEPT AS-IS) ─────────────────────── */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background Video */}
        <video
          ref={(el) => { if (el) el.play().catch(() => {}); }}
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
        <div className="relative z-10 text-center px-4 mt-40 md:mt-52">
          {/* Role Tags */}
          <h1 className="flex flex-wrap items-center justify-center gap-x-3 md:gap-x-5 gap-y-2 text-white text-2xl sm:text-3xl md:text-5xl font-bold tracking-wider uppercase">
            <span className="transition-colors duration-300 hover:text-[#F4C857] cursor-pointer">{t('hero.entrepreneur')}</span>
            <span className="text-[#F4C857] text-lg md:text-2xl font-light" aria-hidden="true">
              |
            </span>
            <span className="transition-colors duration-300 hover:text-[#F4C857] cursor-pointer">{t('hero.adviser')}</span>
            <span className="text-[#F4C857] text-lg md:text-2xl font-light" aria-hidden="true">
              |
            </span>
            <span className="transition-colors duration-300 hover:text-[#F4C857] cursor-pointer">{t('hero.speaker')}</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-white text-sm sm:text-base md:text-lg uppercase tracking-[0.15em] max-w-2xl mx-auto leading-relaxed">
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

      {/* ── 2. Mission Section — Parallax banner ─────────────── */}
      <section
        id="mission"
        className="relative min-h-[80vh] flex items-center bg-fixed bg-cover"
        style={{ backgroundImage: 'url(/images/BanerDennisMisja.jpg)', backgroundPosition: 'center -4px' }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30" />

        <div className="relative z-10 px-6 sm:px-10 lg:px-20 xl:px-32 py-24 md:py-32">
          <div className="max-w-xl text-center lg:text-left">
            {/* Open quote */}
            <span className="block text-white/20 text-[120px] md:text-[160px] leading-none font-serif -mb-16 md:-mb-20 select-none" aria-hidden="true">
              &ldquo;
            </span>

            {/* Title with mixed weight */}
            <h2 className="text-3xl md:text-4xl lg:text-[42px] text-white leading-tight font-light">
              {t('mission.title_before')}{' '}
              <strong className="font-bold">{t('mission.title_bold')}</strong>{' '}
              {t('mission.title_after')}
            </h2>

            {/* Subtitle — italic bold */}
            <p className="mt-8 text-white font-bold italic text-lg md:text-xl leading-relaxed">
              {t('mission.subtitle')}
            </p>

            {/* Close quote */}
            <span className="block text-white/20 text-[120px] md:text-[160px] leading-none font-serif -mt-10 md:-mt-14 text-right select-none" aria-hidden="true">
              &rdquo;
            </span>
          </div>
        </div>
      </section>

      {/* ── 3. "Let's Get to Know Each Other" — DARK bg ──────── */}
      <section
        className="relative pt-24 md:pt-32 pb-56 md:pb-64 bg-cover bg-center overflow-visible z-10"
        style={{ backgroundImage: 'url(/images/background_1.png)' }}
      >
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title + ghost duplicate */}
          <div className="text-center mb-14">
            <h2 className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[56px] xl:text-[64px] font-bold text-white leading-tight whitespace-nowrap">
              {t('intro.title')}
            </h2>
            <p
              className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[56px] xl:text-[64px] font-bold leading-tight mt-1 select-none whitespace-nowrap"
              aria-hidden="true"
              style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)', color: 'transparent' }}
            >
              {t('intro.title')}
            </p>
          </div>

          {/* YouTube Embed */}
          <div className="max-w-3xl mx-auto mb-16">
            <div className="relative w-full pb-[56.25%] overflow-hidden">
              {hasConsent('thirdParty') ? (
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${t('intro.video_id')}`}
                  title="Introduction Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#111111] border border-white/10">
                  <Cookie size={32} className="text-[#F4C857] mb-3" />
                  <p className="text-white/60 text-sm mb-3 text-center px-4">{t('cookie.embed_blocked')}</p>
                  <button onClick={acceptAll} className="px-4 py-2 text-sm font-medium bg-[#F4C857] text-black hover:bg-[#F4C857]/90 transition-colors">
                    {t('cookie.accept_to_view')}
                  </button>
                </div>
              )}
            </div>
          </div>

        </div>

        {/* Cards — positioned at bottom, overlapping into next section */}
        <div className="absolute bottom-8 md:bottom-12 left-0 right-0 translate-y-1/2 z-30 flex flex-col items-center px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-8">
            {t('intro.cards_headline')}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl w-full">
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
      <section ref={partnershipRef} className="relative min-h-[70vh] flex items-center overflow-hidden pt-32 md:pt-40">
        {/* Full-width background image */}
        <Image
          src="/images/partnership-bg.png"
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
        {/* Subtle dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Content — centered on mobile, left on desktop */}
        <div className="relative z-10 w-full px-6 sm:px-10 lg:px-16 py-24 md:py-32">
          <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
            <h2 className="text-white text-xl md:text-2xl lg:text-3xl font-bold leading-tight">
              {t('partnership.subtitle')}
            </h2>
            <h3 className="text-[#F4C857] text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
              {t('partnership.title')}
            </h3>
            <p className="mt-6 text-white/90 text-base md:text-lg leading-relaxed">
              {t('partnership.description')}
            </p>
            <a
              href="https://cal.eu/dennis-czekalla"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center mt-8 rounded-full bg-[#F4C857] hover:bg-[#e0b84e] text-black px-12 py-3.5 font-semibold transition-colors min-w-[220px]"
            >
              {t('partnership.cta')}
            </a>
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
                  src="/images/adviser-bg.png"
                  alt="Dennis Czekalla — Business Adviser"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 320px, 384px"
                />
                {/* Gold corner accent */}
                <div className="absolute -bottom-3 -right-3 w-20 h-20 border-b-2 border-r-2 border-[#F4C857]" />
              </div>
            </div>

            {/* Text — centered on mobile, left on desktop */}
            <div className="order-1 lg:order-2 text-center lg:text-left">
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
                href="https://cal.eu/dennis-czekalla"
                target="_blank"
                rel="noopener noreferrer"
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
              <div className="relative w-full aspect-[4/5] overflow-hidden">
                <Image
                  src="/images/dennis-about.jpeg"
                  alt="Dennis Czekalla"
                  fill
                  className="object-cover object-[center_30%]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="text-center lg:text-left">
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
                    width={400}
                    height={200}
                    className={`${brand.key === 'isella' ? 'h-7 md:h-9' : 'h-10 md:h-14'} w-auto object-contain`}
                  />
                ) : (
                  <span className="text-2xl md:text-3xl font-bold text-white tracking-wide">
                    BECZ.
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

      {/* ── 8. Testimonials — "The Stage" ── */}
      <TestimonialsStage t={t} testimonialCount={testimonialCount} />

      {/* ── 9. Video & Podcast Grid — BLACK bg ──────────────── */}
      <section className="bg-black py-24 md:py-32">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-14">
            {t('media.title')}
          </h2>

          {/* Video Grid — no rounded corners, no shadow */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {videoIds.map((id) => (
              <div
                key={id}
                className="relative w-full pb-[56.25%] overflow-hidden"
              >
                {hasConsent('thirdParty') ? (
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${id}`}
                    title={`YouTube video ${id}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                    loading="lazy"
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#111111] border border-white/10">
                    <Cookie size={32} className="text-[#F4C857] mb-3" />
                    <p className="text-white/60 text-sm mb-3 text-center px-4">{t('cookie.embed_blocked')}</p>
                    <button onClick={acceptAll} className="px-4 py-2 text-sm font-medium bg-[#F4C857] text-black hover:bg-[#F4C857]/90 transition-colors">
                      {t('cookie.accept_to_view')}
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Podcast Section */}
          <div className="mt-20">
            <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-10">
              {t('media.podcasts')}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {/* Spotify - Hausgemacht */}
              <div className="overflow-hidden bg-[#282828]">
                {hasConsent('thirdParty') ? (
                  <iframe
                    src="https://open.spotify.com/embed/show/0SuqGsAj2a5HiTlj62L0Mi?theme=0"
                    width="100%"
                    height="352"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    title={t('media.hausgemacht')}
                    className="border-0"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center h-[352px] bg-[#111111] border border-white/10">
                    <Cookie size={32} className="text-[#F4C857] mb-3" />
                    <p className="text-white/60 text-sm mb-3 text-center px-4">{t('cookie.embed_blocked')}</p>
                    <button onClick={acceptAll} className="px-4 py-2 text-sm font-medium bg-[#F4C857] text-black hover:bg-[#F4C857]/90 transition-colors">
                      {t('cookie.accept_to_view')}
                    </button>
                  </div>
                )}
              </div>

              {/* Spotify - Tri2Thrive */}
              <div className="overflow-hidden bg-[#282828]">
                {hasConsent('thirdParty') ? (
                  <iframe
                    src="https://open.spotify.com/embed/show/3VitQ9rEuYp8NFFIcehYa9?theme=0"
                    width="100%"
                    height="352"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    title={t('media.tri2thrive')}
                    className="border-0"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center h-[352px] bg-[#111111] border border-white/10">
                    <Cookie size={32} className="text-[#F4C857] mb-3" />
                    <p className="text-white/60 text-sm mb-3 text-center px-4">{t('cookie.embed_blocked')}</p>
                    <button onClick={acceptAll} className="px-4 py-2 text-sm font-medium bg-[#F4C857] text-black hover:bg-[#F4C857]/90 transition-colors">
                      {t('cookie.accept_to_view')}
                    </button>
                  </div>
                )}
              </div>

              {/* Spotify - Berghaus */}
              <div className="overflow-hidden bg-[#282828]">
                {hasConsent('thirdParty') ? (
                  <iframe
                    src="https://open.spotify.com/embed/show/0J2b19l9wQ7ABlnmUdqRDW?theme=0"
                    width="100%"
                    height="352"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    title={t('media.berghaus')}
                    className="border-0"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center h-[352px] bg-[#111111] border border-white/10">
                    <Cookie size={32} className="text-[#F4C857] mb-3" />
                    <p className="text-white/60 text-sm mb-3 text-center px-4">{t('cookie.embed_blocked')}</p>
                    <button onClick={acceptAll} className="px-4 py-2 text-sm font-medium bg-[#F4C857] text-black hover:bg-[#F4C857]/90 transition-colors">
                      {t('cookie.accept_to_view')}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 11. Contact — Immersive Split-Screen ────────────── */}
      <section id="contact" className="relative bg-black">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
          {/* Left — Black bg with content */}
          <div className="flex flex-col items-center lg:items-start justify-center px-6 sm:px-10 lg:px-16 xl:px-24 py-20 lg:py-0 order-2 lg:order-1 text-center lg:text-left">
            {/* Massive headline */}
            <h2 className="text-5xl md:text-6xl xl:text-7xl font-bold text-[#F4C857] leading-[0.95] tracking-tight">
              {t('contact.heading')}
            </h2>

            {/* Tagline */}
            <p className="mt-5 text-white/50 text-lg md:text-xl">
              {t('contact.tagline')}
            </p>

            {/* Animated gold line */}
            <div className="animate-gold-line w-full max-w-xs mt-8 mb-10" />

            {/* Contact Cards */}
            <div className="flex flex-col gap-4 max-w-md">
              {/* Email Card */}
              <a
                href="mailto:hallo@dennis.cz"
                className="contact-card-shimmer group flex items-center gap-5 bg-white/[0.04] border border-white/10 hover:border-[#F4C857]/40 px-6 py-5 transition-all duration-300"
              >
                <Mail size={22} className="text-[#F4C857] shrink-0" />
                <div className="flex-1 min-w-0">
                  <span className="block text-white/40 text-xs uppercase tracking-widest mb-1">
                    {t('contact.email_label')}
                  </span>
                  <span className="block text-white font-semibold text-lg truncate">
                    hallo@dennis.cz
                  </span>
                </div>
                <ArrowRight
                  size={18}
                  className="text-white/20 group-hover:text-[#F4C857] group-hover:translate-x-1 transition-all shrink-0"
                />
              </a>

              {/* Phone Poland Card */}
              <a
                href="tel:+48506057041"
                className="contact-card-shimmer group flex items-center gap-5 bg-white/[0.04] border border-white/10 hover:border-[#F4C857]/40 px-6 py-5 transition-all duration-300"
              >
                <Phone size={22} className="text-[#F4C857] shrink-0" />
                <div className="flex-1 min-w-0">
                  <span className="block text-white/40 text-xs uppercase tracking-widest mb-1">
                    {t('contact.phone_pl_label')}
                  </span>
                  <span className="block text-white font-semibold text-lg">
                    +48 506 057 041
                  </span>
                </div>
                <ArrowRight
                  size={18}
                  className="text-white/20 group-hover:text-[#F4C857] group-hover:translate-x-1 transition-all shrink-0"
                />
              </a>

              {/* Phone Germany Card */}
              <a
                href="tel:+4923598092855"
                className="contact-card-shimmer group flex items-center gap-5 bg-white/[0.04] border border-white/10 hover:border-[#F4C857]/40 px-6 py-5 transition-all duration-300"
              >
                <Phone size={22} className="text-[#F4C857] shrink-0" />
                <div className="flex-1 min-w-0">
                  <span className="block text-white/40 text-xs uppercase tracking-widest mb-1">
                    {t('contact.phone_de_label')}
                  </span>
                  <span className="block text-white font-semibold text-lg">
                    +49 2359 809 285 5
                  </span>
                </div>
                <ArrowRight
                  size={18}
                  className="text-white/20 group-hover:text-[#F4C857] group-hover:translate-x-1 transition-all shrink-0"
                />
              </a>
            </div>

            {/* Book an Appointment CTA */}
            <a
              href="https://cal.eu/dennis-czekalla"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 mt-10 bg-[#F4C857] hover:bg-[#e0b84e] text-black px-10 py-4 font-bold text-lg uppercase tracking-wide transition-colors max-w-md"
            >
              <Calendar size={20} />
              {t('contact.book')}
            </a>

            {/* Social Icons — square, gold pulse */}
            <div className="flex items-center justify-center lg:justify-start gap-4 mt-10">
              <a
                href="https://www.linkedin.com/in/czekalla/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-gold-pulse flex items-center justify-center w-12 h-12 border border-white/10 hover:border-[#F4C857]/50 text-white/40 hover:text-[#F4C857] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={22} />
              </a>
              <a
                href="https://instagram.com/dennis.czekalla"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-gold-pulse flex items-center justify-center w-12 h-12 border border-white/10 hover:border-[#F4C857]/50 text-white/40 hover:text-[#F4C857] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={22} />
              </a>
              <a
                href="https://www.youtube.com/@dennisczekalla"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-gold-pulse flex items-center justify-center w-12 h-12 border border-white/10 hover:border-[#F4C857]/50 text-white/40 hover:text-[#F4C857] transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={22} />
              </a>
            </div>
          </div>

          {/* Right — Edge-to-edge Photo */}
          <div className="relative h-[60vh] lg:h-auto order-1 lg:order-2">
            <Image
              src="/images/contact-dennis.png"
              alt="Dennis Czekalla"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Left-edge gradient blending into black */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent hidden lg:block" />
            {/* Bottom gradient for mobile */}
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black to-transparent lg:hidden" />
          </div>
        </div>
      </section>

      {/* ── 11. Events — DARK bg, minimal ─────────────────────── */}
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
                href="https://www.linkedin.com/in/czekalla/"
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
    </>
  );
}
