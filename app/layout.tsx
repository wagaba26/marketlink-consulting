import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | MarketLink Consulting",
    default: "MarketLink Consulting | Automotive Trade Gateway in Uganda & East Africa",
  },
  description: "Leading automotive trade consulting firm in Uganda and East Africa. Connecting international suppliers with local traders. Expert market entry, compliance, and trade finance solutions.",
  keywords: [
    "Automotive Consulting Uganda",
    "Car Import Uganda",
    "Spare Parts East Africa",
    "Trade Finance Uganda",
    "MarketLink Consulting",
    "Automotive Trade Africa",
    "Vehicle Import Consulting",
    "Auto Parts Suppliers Uganda",
    "East Africa Trade Gateway",
    "Uganda Business Consulting"
  ],
  authors: [{ name: "MarketLink Consulting" }],
  metadataBase: new URL("https://marketlinkconsulting.com"),
  openGraph: {
    title: "MarketLink Consulting | Automotive Trade Gateway",
    description: "Leading automotive trade consulting firm in Uganda and East Africa. Connecting international suppliers with local traders.",
    url: "https://marketlinkconsulting.com",
    siteName: "MarketLink Consulting",
    locale: "en_UG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MarketLink Consulting | Automotive Trade Gateway",
    description: "Leading automotive trade consulting firm in Uganda and East Africa.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "MarketLink Consulting",
              "url": "https://marketlinkconsulting.com",
              "logo": "https://marketlinkconsulting.com/logo.png",
              "description": "Leading automotive trade consulting firm in Uganda and East Africa",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "UG",
                "addressRegion": "Kampala"
              },
              "areaServed": [
                {
                  "@type": "Country",
                  "name": "Uganda"
                },
                {
                  "@type": "Place",
                  "name": "East Africa"
                }
              ],
              "knowsAbout": [
                "Automotive Trade",
                "Import Consulting",
                "Trade Finance",
                "Market Entry Strategy",
                "Compliance Consulting"
              ]
            })
          }}
        />
        <Header />
        <main style={{ minHeight: '80vh' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
