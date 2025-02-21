
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Karantina, Comfortaa } from 'next/font/google';

// Load the fonts
const karantina = Karantina({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  display: 'swap',
});



const comfortaa = Comfortaa({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  display: 'swap',
});
export const metadata: Metadata = {
  title: "Hi-End Lighting",
  description: "Hi-End Lighting is a home lighting and curbing design company based in Alberta.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${karantina.className} ${comfortaa.className}`}
        style={{
          '--font-headline-bold': karantina.style.fontFamily,
          '--font-text-book': comfortaa.style.fontFamily,
        } as React.CSSProperties}
      >
        {children}
      </body>
    </html>
  );
}
