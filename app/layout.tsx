import type { Metadata } from "next";
import Cursor from "@/components/Cursor";
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
  metadataBase: new URL("https://iamadhitya.vercel.app"),
  title: "M. Adhitya — AI Builder, Engineer & Founder of Rewrite Labs",
  description:
    "M. Adhitya is a software engineer and AI builder — founder of Rewrite Labs, a personal studio with 8 free AI tools and 7 open source libraries. Based in Ahmedabad, India.",
  keywords: [
    "M Adhitya", "M. Adhitya", "Adhitya", "Muthu Adithya",
    "m adhitya ai developer", "m adhitya rewrite labs", "m adhitya engineer",
    "m adhitya iitram", "adhitya ai builder india", "adhitya open source",
    "Rewrite Labs founder", "Rewrite Labs", "AI builder India",
    "indie developer India", "React developer India", "AI engineer India",
    "open source AI libraries", "groq-chain", "fraud-shield", "react-premium-gate",
    "llm-router", "react-macro-rings", "react-toast-native", "react-offline-first",
    "iamadhitya1", "loveadhitya",
  ],
  authors: [{ name: "M. Adhitya", url: "https://iamadhitya.vercel.app" }],
  alternates: { canonical: "https://iamadhitya.vercel.app" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "M. Adhitya — AI Builder & Founder of Rewrite Labs",
    description: "M. Adhitya is a software engineer and AI builder — founder of Rewrite Labs. 8 live AI tools, 7 open source libraries. Solo, bootstrapped, based in India.",
    url: "https://iamadhitya.vercel.app",
    siteName: "M. Adhitya",
    type: "profile",
    images: [{ url: "/photo.jpg", width: 800, height: 800, alt: "M. Adhitya — AI Builder & Founder of Rewrite Labs" }],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@rewritelabshq",
    title: "M. Adhitya — AI Builder & Founder of Rewrite Labs",
    description: "Software engineer and AI builder. Founder of Rewrite Labs — 8 free AI tools, 7 open source libraries. Solo, bootstrapped.",
    images: ["/photo.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://iamadhitya.vercel.app/#person",
        "name": "M. Adhitya",
        "alternateName": ["Adhitya", "M Adhitya", "Muthu Adithya", "iamadhitya1", "loveadhitya"],
        "url": "https://iamadhitya.vercel.app",
        "jobTitle": "Software Engineer & AI Builder",
        "description": "M. Adhitya is a software engineer, AI builder, and founder of Rewrite Labs — a personal studio with 8 free AI tools and 7 open source libraries. Computer Engineering student at IITRAM, Ahmedabad (graduating 2027). Featured by BeerBiceps SkillHouse. 3,000+ engineers reached. Bootstrapped, no VC.",
        "image": {
          "@type": "ImageObject",
          "url": "https://iamadhitya.vercel.app/photo.jpg",
          "width": 800,
          "height": 800,
          "caption": "M. Adhitya — AI Builder & Founder of Rewrite Labs"
        },
        "worksFor": {
          "@type": "Organization",
          "@id": "https://rewritelabs.vercel.app/#organization",
          "name": "Rewrite Labs",
          "url": "https://rewritelabs.vercel.app"
        },
        "alumniOf": {
          "@type": "CollegeOrUniversity",
          "name": "Institute of Infrastructure Technology Research and Management (IITRAM)",
          "url": "https://iitram.ac.in",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Ahmedabad",
            "addressCountry": "IN"
          }
        },
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Ahmedabad",
          "addressCountry": "IN"
        },
        "award": "Featured in BeerBiceps SkillHouse — Creators who explain AI in easy language (September 2025)",
        "sameAs": [
          "https://github.com/iamadhitya1",
          "https://www.linkedin.com/in/loveadhitya/",
          "https://dev.to/iamadhitya",
          "https://medium.com/@m_adhitya_",
          "https://pypi.org/user/iamadhitya1/",
          "https://www.npmjs.com/~iamadhitya1",
          "https://rewritelabs.vercel.app"
        ],
        "knowsAbout": [
          "Artificial Intelligence", "Machine Learning", "React", "Next.js",
          "Python", "Open Source Software", "Product Development",
          "Large Language Models", "Groq API", "TypeScript", "Supabase",
          "Fraud Detection", "LLM Routing", "AI SaaS", "Generative AI",
          "AI Tools for Engineers", "React Component Libraries", "PyPI Packages"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://iamadhitya.vercel.app/#website",
        "url": "https://iamadhitya.vercel.app",
        "name": "M. Adhitya — Portfolio",
        "description": "Personal portfolio of M. Adhitya, AI builder and founder of Rewrite Labs.",
        "author": { "@id": "https://iamadhitya.vercel.app/#person" }
      }
    ]
  };

  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <meta name="google-site-verification" content="O8GX_bTzG_bNXRqlXic9fTHJyArulWLlr5FYW91E3xU" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Cursor />
        {children}
      </body>
    </html>
  );
}
