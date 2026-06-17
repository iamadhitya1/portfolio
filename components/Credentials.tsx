import { FadeIn } from '@/components/FadeIn';

const creds = [
  // Jun 2026
  { name: 'Discover AI Agents',                                  issuer: 'IBM',          date: 'Jun 2026', color: 'text-blue-400   border-blue-400/20   bg-blue-400/5' },
  { name: 'AI Ethics and Human Skills',                          issuer: 'Accenture',    date: 'Jun 2026', color: 'text-purple-400 border-purple-400/20 bg-purple-400/5' },
  { name: 'AI Analysis – NextGen Alliance',                      issuer: 'Microsoft',    date: 'Jun 2026', color: 'text-sky-400    border-sky-400/20    bg-sky-400/5' },
  { name: 'AI Internship Completion',                            issuer: 'SmartED',      date: 'Jun 2026', color: 'text-cyan-400   border-cyan-400/20   bg-cyan-400/5' },
  // Jan 2026
  { name: 'Artificial Intelligence Internship Training',         issuer: 'SmartED',      date: 'Jan 2026', color: 'text-cyan-400   border-cyan-400/20   bg-cyan-400/5' },
  // May 2025
  { name: 'Generative AI Productivity Skills',                   issuer: 'Microsoft',    date: 'May 2025', color: 'text-sky-400    border-sky-400/20    bg-sky-400/5' },
  // Dec 2024
  { name: 'Career Essentials in Generative AI',                  issuer: 'Microsoft',    date: 'Dec 2024', color: 'text-sky-400    border-sky-400/20    bg-sky-400/5' },
  { name: 'Career Essentials in Software Development',           issuer: 'Microsoft',    date: 'Dec 2024', color: 'text-sky-400    border-sky-400/20    bg-sky-400/5' },
];

export default function Credentials() {
  return (
    <section id="credentials" className="py-28 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-mono text-cyan tracking-widest uppercase block mb-3">
                Credentials
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold">
                Licenses &amp; Certifications
              </h2>
              <p className="text-muted text-sm mt-2">
                8 credentials · Updated Jun 2026
              </p>
            </div>
            <a
              href="https://www.linkedin.com/in/loveadhitya/"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 text-xs font-mono text-muted hover:text-cyan transition-colors"
            >
              View all on LinkedIn →
            </a>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {creds.map((c, i) => (
            <FadeIn key={i} delay={Math.min(i * 40, 300)}>
              <div className="p-4 rounded-xl border border-border bg-surface hover:border-border/80 transition-colors">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className={`text-[10px] font-mono border px-2 py-0.5 rounded-full shrink-0 ${c.color}`}>
                    {c.issuer}
                  </span>
                  <span className="text-[10px] text-muted font-mono shrink-0">{c.date}</span>
                </div>
                <p className="text-sm font-medium text-white leading-snug">{c.name}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
