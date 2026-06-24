import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "M. Adhitya — AI Builder & Engineer",
  description:
    "M. Adhitya builds AI-powered web apps and open source libraries (React + Python). Runs Rewrite Labs, a personal studio. 8 live tools, 7 OSS libraries.",
  keywords: [
    "M Adhitya", "Adhitya", "Rewrite Labs", "AI builder India",
    "indie developer India", "React developer India",
    "open source AI libraries", "groq-chain", "fraud-shield", "react-premium-gate",
    "llm-router", "react-macro-rings", "react-toast-native", "react-offline-first",
  ],
  authors: [{ name: "M. Adhitya", url: "https://iamadhitya.vercel.app" }],
  robots: { index: true, follow: true },
  openGraph: {
    title: "M. Adhitya — AI Builder & Engineer",
    description: "M. Adhitya builds AI-powered web apps and open source libraries. Runs Rewrite Labs personal studio. 8 live AI tools, 7 open source libraries.",
    url: "https://iamadhitya.vercel.app",
    siteName: "M. Adhitya",
    type: "profile",
    images: [{ url: "https://iamadhitya.vercel.app/photo.jpg", width: 800, height: 800, alt: "M. Adhitya" }],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@rewritelabshq",
    title: "M. Adhitya — AI Builder & Engineer",
    description: "AI builder running Rewrite Labs personal studio. 8 live AI tools, 7 open source libraries. Bootstrapped, solo.",
    images: ["https://iamadhitya.vercel.app/photo.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "M. Adhitya",
    "alternateName": ["Adhitya", "M Adhitya", "iamadhitya1"],
    "url": "https://iamadhitya.vercel.app",
    "jobTitle": "AI Builder & Engineer",
    "description": "M. Adhitya runs Rewrite Labs, a personal AI tools studio based in India. He has built 8 live AI web applications and 7 open source libraries for developers. Known for building silently and shipping publicly — solo, no VC.",
    "image": "https://iamadhitya.vercel.app/photo.jpg",
    "worksFor": {
      "@type": "Organization",
      "name": "Rewrite Labs",
      "url": "https://rewritelabs.vercel.app",
      "description": "Personal AI tools studio — 8 free AI tools for engineers and builders"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ahmedabad",
      "addressCountry": "IN"
    },
    "sameAs": [
      "https://github.com/iamadhitya1",
      "https://www.linkedin.com/in/loveadhitya/",
      "https://twitter.com/rewritelabshq",
      "https://dev.to/iamadhitya",
      "https://medium.com/@m_adhitya_",
      "https://pypi.org/user/iamadhitya1/",
      "https://www.npmjs.com/~iamadhitya1"
    ],
    "knowsAbout": [
      "Artificial Intelligence", "Machine Learning", "React", "Next.js",
      "Python", "Open Source Software", "Product Development",
      "Large Language Models", "Groq API", "Razorpay Integration",
      "TypeScript", "Supabase", "Vercel", "Fraud Detection",
      "LLM Routing", "Indie Hacking", "Bootstrapped Development",
      "AI Tools for Engineers", "React Component Libraries", "PyPI Packages"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Software Engineer & Builder",
      "occupationLocation": { "@type": "Country", "name": "India" }
    }
  };

  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
