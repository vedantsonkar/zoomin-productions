import { BASE_DOMAIN } from "@/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Team - ZoomIn Productions",
  description:
    "We at ZoomIn are a creative powerhouse. We embrace challenges and adapt to your needs. We strategize and innovate. We create bespoke content that empowers brands, amplifies digital presence, and enriches your brand value.",
  alternates: {
    canonical: "/our-team/",
  },
  robots: "index, follow",
  keywords: [
    "video production team mumbai",
    "video production team delhi",
    "content creation team mumbai",
    "content creation team delhi",
    "social media marketing team mumbai",
    "social media marketing team delhi",
    "experienced video editors mumbai",
    "experienced video editors delhi",
    "experienced content creators mumbai",
    "experienced content creators delhi",
  ],
  openGraph: {
    images: ["/images/global/zoomin_logo.png"],
  },
  twitter: {
    images: ["/images/global/zoomin_logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
