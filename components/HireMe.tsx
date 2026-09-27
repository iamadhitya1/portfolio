import { FadeIn } from '@/components/FadeIn';

export default function HireMe() {
  return (
    <section id="hire" className="py-24 px-6 border-t border-border bg-surface/20">
      <div className="max-w-3xl mx-auto text-center">
        <FadeIn>
          <span className="inline-flex items-center gap-2 text-xs font-mono text-green-400 tracking-widest uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Available now
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Looking for my next opportunity.
          </h2>
          <p className="text-muted text-base leading-relaxed max-w-xl mx-auto mb-10">
            Final-year CS student (2023–2027) open to internships, full-time roles, freelance projects,
            and collaborations. I build fast, ship real products, and work well without hand-holding.
            Remote or Ahmedabad-based.
          </p>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {[
              'AI / ML Engineering',
              'Full-Stack Development',
              'Product Engineering',
              'Developer Relations',
              'Freelance / Contract',
              'Research Collaboration',
            ].map((role) => (
              <span
                key={role}
                className="text-xs font-mono px-3 py-1.5 rounded-full border border-border text-muted"
              >
                {role}
              </span>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={150}>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:adhitya5119@gmail.com"
              className="px-6 py-2.5 bg-cyan text-bg text-sm font-semibold rounded-lg hover:bg-cyan/90 transition-colors"
            >
              Email me →
            </a>
            <a
              href="https://www.linkedin.com/in/iamadhitya/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 border border-border bg-surface text-white text-sm font-medium rounded-lg hover:border-cyan/40 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
