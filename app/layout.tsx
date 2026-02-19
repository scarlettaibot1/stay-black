import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "STAY BLACK — Healthy Fabrics That Never Fade",
  description:
    "Premium men's basics made from bamboo, organic cotton, and merino wool. No polyester. No microplastics. Black that actually stays black.",
  openGraph: {
    title: "STAY BLACK — Healthy Fabrics That Never Fade",
    description:
      "Premium men's basics. No polyester. No microplastics. Black that stays black.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}
