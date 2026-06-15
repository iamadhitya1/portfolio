export default function Footer() {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left">
          <div className="text-sm font-semibold text-white">M. Adhitya</div>
          <div className="text-xs text-muted mt-1">Founder @ Rewrite Labs</div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6">
          {[
            { label: 'GitHub',       href: 'https://github.com/iamadhitya1' },
            { label: 'LinkedIn',     href: 'https://linkedin.com/in/iamadhitya1' },
            { label: 'Twitter',      href: 'https://twitter.com/rewritelabshq' },
            { label: 'Rewrite Labs', href: 'https://rewritelabs.vercel.app' },
            { label: 'Email',        href: 'mailto:muthuadithya999@gmail.com' },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="text-xs text-muted hover:text-cyan transition-colors font-mono"
            >
              {label}
            </a>
          ))}
        </div>

        <div className="text-xs text-muted/50 font-mono">© 2025 M. Adhitya</div>
      </div>
    </footer>
  );
}
