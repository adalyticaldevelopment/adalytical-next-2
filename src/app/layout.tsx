import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

export const metadata: Metadata = {
  metadataBase: undefined,
  title: "Google Ads Agency Trusted by 100+ Brands | Adalytical",
  description:
    "Adalytical is one of the fastest-growing Google Ads agencies in the world, ex-Google team, profit-first management, no lock-in.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU" className={cn("font-sans", inter.variable)}>
      <body>{children}</body>
    </html>
  );
}
