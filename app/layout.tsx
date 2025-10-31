import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Liftoff.design — Design that launches startups",
  description: "High-impact product, brand, and motion design for fast-moving startups.",
  metadataBase: new URL("https://liftoff.design/"),
  openGraph: {
    title: "Liftoff.design — Design that launches startups",
    description: "High-impact product, brand, and motion design for fast-moving startups.",
    url: "https://liftoff.design/",
    siteName: "Liftoff.design",
    images: [
      { url: "/og-image.png", width: 1200, height: 630, alt: "Liftoff.design" },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
