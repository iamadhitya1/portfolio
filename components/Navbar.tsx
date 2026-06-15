'use client';
import { useEffect, useState } from 'react';

const links = [
  { label: 'About',       href: '#about' },
  { label: 'Work',        href: '#rewrite-labs' },
  { label: 'Open Source', href: '#open-source' },
  { label: 'Book',        href: '#book' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-bg/90 backdrop-blur border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-mono text-sm font-semibold text-white hover:text-cyan transition-colors">
          M. Adhitya
        </a>

        {/* Desktop links */}
        <nav className="hidden sm:flex items-center gap-7">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-xs text-muted hover:text-white transition-colors font-mono tracking-wide"
            >
              {label}
            </a>
          ))}
          <a
            href="https://rewritelabs.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs px-3 py-1.5 border border-cyan/30 text-cyan rounded-lg hover:bg-cyan/10 transition-colors font-mono"
          >
            Rewrite Labs →
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="sm:hidden text-muted hover:text-white transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="sm:hidden bg-bg/95 backdrop-blur border-b border-border px-6 py-4 flex flex-col gap-4">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setOpen(false)}
              className="text-sm text-muted hover:text-white transition-colors font-mono"
            >
              {label}
            </a>
          ))}
          <a
            href="https://rewritelabs.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-cyan font-mono"
          >
            Rewrite Labs →
          </a>
        </div>
      )}
    </header>
  );
}
