import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ORBS - Angel Numbers Guide: Decode Messages from the Universe",
  description: "Discover the spiritual meaning behind angel numbers like 111, 222, 444, 777, and more. Your angels are communicating with you through numbers.",
  keywords: ["angel numbers", "111 meaning", "222 meaning", "444 meaning", "777 meaning", "spiritual numbers", "numerology", "manifestation", "orbs"],
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
  openGraph: {
    title: "ORBS - Angel Numbers Guide",
    description: "Discover the spiritual meaning behind angel numbers. Your angels are communicating with you through repeating number sequences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
