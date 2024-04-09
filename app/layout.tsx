import type { Metadata } from 'next';
import { Poppins, Cedarville_Cursive } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Script from 'next/script';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BASE_DOMAIN } from '@/constants';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';

const poppins = Poppins({
  weight: '500',
  subsets: ['latin'],
  variable: '--font-poppins',
});

const cedarville = Cedarville_Cursive({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-cedarville_cursive',
});

export const metadata: Metadata = {
  title: 'ZoomIn Productions',
  description:
    'We at ZoomIn are a creative powerhouse. We embrace challenges and adapt to your needs. We strategize and innovate. We create bespoke content that empowers brands, amplifies digital presence, and enriches your brand value.',
  metadataBase: new URL(BASE_DOMAIN),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    images: ['/images/global/zoomin_logo.png'],
  },
  twitter: {
    images: ['/images/global/zoomin_logo.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <Script id='gtm-script'>{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var 
        f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})
        (window,document,'script','dataLayer','GTM-M379LVK3');`}</Script>
        {/* <Script
          id='twitter-widgets'
          async={true}
          type='module'
          src='https://platform.twitter.com/widgets.js'
        /> */}
      </head>
      <body className={`${poppins.variable} ${cedarville.variable}`}>
        <noscript>
          <iframe
            src='https://www.googletagmanager.com/ns.html?id=GTM-M379LVK3'
            height='0'
            width='0'
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        <Header />
        {children}
        <Footer />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
