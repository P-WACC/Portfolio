import type { Metadata } from "next";
import "./globals.css";
import { LenisProvider } from "@/components/LenisProvider";

export const metadata: Metadata = {
  title: "WACHIRAWIT | PORTFOLIO | TECHNICAL ARTIST",
  description: "Technical Artist Portfolio showcasing real-time VFX, environments, and animations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,300,400&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        <div className="noise-overlay"></div>
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
