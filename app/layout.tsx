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
  title: "M. Adhitya — Builder & Founder",
  description:
    "Founder of Rewrite Labs. Building AI tools and open source libraries.",
  openGraph: {
    title: "M. Adhitya — Builder & Founder",
    description: "Founder of Rewrite Labs. Building AI tools and open source libraries.",
    url: "https://iamadhitya.vercel.app",
    siteName: "M. Adhitya",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@rewritelabshq",
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
    "url": "https://iamadhitya.vercel.app",
    "jobTitle": "Founder",
    "description": "Final-year B.Tech student at IITRAM Ahmedabad and Founder of Rewrite Labs — building AI-powered products and open source libraries.",
    "worksFor": {
      "@type": "Organization",
      "name": "Rewrite Labs",
      "url": "https://rewritelabs.vercel.app"
    },
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "Institute of Infrastructure Technology Research and Management",
      "alternateName": "IITRAM",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Ahmedabad",
        "addressCountry": "IN"
      }
    },
    "sameAs": [
      "https://github.com/iamadhitya1",
      "https://www.linkedin.com/in/loveadhitya/"
    ],
    "knowsAbout": [
      "Artificial Intelligence", "Machine Learning", "React", "Next.js",
      "Python", "Open Source Software", "Product Development",
      "Large Language Models", "Groq API", "Razorpay Integration",
      "TypeScript", "Supabase", "Vercel"
    ]
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
