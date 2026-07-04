import { FadeIn } from '@/components/FadeIn';

const items = [
  {
    date: 'Sep 2025',
    source: 'BeerBiceps SkillHouse',
    quote: '"M Adhitya simplifies complex AI topics and shares their human impact with a wide audience."',
    cta: { label: 'View feature →', href: 'https://www.beerbicepsskillhouse.in/post/creators-who-explain-ai-in-easy-language' },
  },
  {
    date: 'Dec 2025',
    source: 'Published Author',
    quote: 'The Rewrite — sold independently, reached 3,000+ engineers and builders without a publisher or launch campaign.',
    cta: { label: 'Get the book →', href: 'https://topmate.io/m_adhitya/1868094' },
  },
];

export default function Recognition() {
  return (
    <section id="recognition" className="py-20 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <span className="text-xs font-mono text-cyan tracking-widest uppercase block mb-3">
            Recognition
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-10">
            Press &amp; milestones.
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {items.map((item, i) => (
            <FadeIn key={item.source} delay={i * 100}>
              <div className="p-6 rounded-xl border border-border bg-surface h-full flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-mono text-muted px-2 py-0.5 rounded-full border border-border">
                    {item.date}
                  </span>
                  <span className="text-xs font-semibold text-white">{item.source}</span>
                </div>
                <p className="text-muted text-sm leading-relaxed italic flex-1">{item.quote}</p>
                <a
                  href={item.cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-5 text-xs text-cyan font-mono hover:underline"
                >
                  {item.cta.label}
                </a>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
