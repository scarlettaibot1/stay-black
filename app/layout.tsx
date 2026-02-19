import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VERO — True Materials. Nothing Synthetic.",
  description:
    "Premium men's basics made from bamboo, organic cotton, and merino wool. No polyester. No microplastics. True materials for your body.",
  openGraph: {
    title: "VERO — True Materials. Nothing Synthetic.",
    description:
      "Premium men's basics. No polyester. No microplastics. True to your body.",
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
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
