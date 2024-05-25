import { BASE_DOMAIN } from "@/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Projects - ZoomIn Productions",
  description:
    "We at ZoomIn are a creative powerhouse. We embrace challenges and adapt to your needs. We strategize and innovate. We create bespoke content that empowers brands, amplifies digital presence, and enriches your brand value.",
  alternates: {
    canonical: "/our-projects/",
  },
  keywords: ["smm mumbai", "smm delhi", "smm zoomin", "smm zoomin productions"],
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
