import type { Metadata } from "next";
import "./globals.css";

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
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
