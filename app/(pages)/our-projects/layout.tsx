import { BASE_DOMAIN } from '@/constants';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Projects - ZoomIn Productions',
  description:
    'We at ZoomIn are a creative powerhouse. We embrace challenges and adapt to your needs. We strategize and innovate. We create bespoke content that empowers brands, amplifies digital presence, and enriches your brand value.',
  alternates: {
    canonical: '/our-projects/',
  },
  keywords: [
    'smm mumbai',
    'smm delhi',
    'smm zoomin',
    'smm zoomin productions',
    'social media managment',
    'production house',
    'production',
    'social media',
    'editing',
    'video editing',
    'video production',
    'content creation',
    'content',
    'content creators',
    'content creation team',
    'content creation team mumbai',
    'content creation team delhi',
    'content creation team zoomin',
    'content creation team zoomin productions',
    'content creation team india',
    'content creation team mumbai india',
  ],
  robots: 'index, follow',
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
  return <div>{children}</div>;
}
