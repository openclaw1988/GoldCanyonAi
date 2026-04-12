import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Gold Canyon AI — Intelligent Business Solutions",
    template: "%s | Gold Canyon AI",
  },
  description:
    "Custom AI development and ready-to-deploy business solutions. From cross-listing tools for resellers to manufacturing ERP and healthcare apps.",
  keywords: [
    "AI solutions",
    "custom AI development",
    "cross-listing tool",
    "resale toolkit",
    "manufacturing ERP",
    "business automation",
    "Gold Canyon AI",
  ],
  openGraph: {
    title: "Gold Canyon AI — Intelligent Business Solutions",
    description:
      "Custom AI development and ready-to-deploy business solutions.",
    url: "https://www.goldcanyonai.com",
    siteName: "Gold Canyon AI",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
