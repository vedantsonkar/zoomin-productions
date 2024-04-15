import { BASE_DOMAIN } from "@/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - ZoomIn Productions",
  description:
    "We at ZoomIn are a creative powerhouse. We embrace challenges and adapt to your needs. We strategize and innovate. We create bespoke content that empowers brands, amplifies digital presence, and enriches your brand value.",
  alternates: {
    canonical: "/about-us/",
  },
  keywords: [
    "Zoomin Productions mumbai",
    "Zoomin Productions delhi",
    "video production mumbai",
    "video production delhi",
    "content creation mumbai",
    "content creation delhi",
    "video production services",
    "content creation services",
    "video editing services",
    "social media management services",
    "digital marketing services",
  ],
  robots: "index, follow",
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
