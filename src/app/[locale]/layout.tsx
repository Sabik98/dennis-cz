import type { Metadata } from 'next';
import { Red_Hat_Display } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales, type Locale } from '@/i18n/config';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import '@/styles/globals.css';

const redHatDisplay = Red_Hat_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '900'],
  display: 'swap',
  variable: '--font-red-hat-display',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://dennis.cz'),
  title: 'Dennis Czekalla - Entrepreneur, Adviser, Speaker',
  description:
    'Dennis Czekalla - Entrepreneur, Adviser, Speaker. Building sustainable businesses across Europe.',
  openGraph: {
    title: 'Dennis Czekalla - Entrepreneur, Adviser, Speaker',
    description:
      'Dennis Czekalla - Entrepreneur, Adviser, Speaker. Building sustainable businesses across Europe.',
    type: 'website',
    url: 'https://dennis.cz',
  },
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className={redHatDisplay.variable}>
      <body className={`${redHatDisplay.className} bg-dennis-bg text-dennis-dark antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
