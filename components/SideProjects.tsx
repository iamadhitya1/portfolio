import { FadeIn } from '@/components/FadeIn';

const projects = [
  {
    name: 'Last Stand',
    desc: 'A browser-based top-down wave survival shooter. WASD + mouse aim, 3 enemy types, 7 powerups including Nuke and Freeze. Built with Phaser 3.',
    url: 'https://last-stand-adhitya.vercel.app',
    tag: 'Game',
    color: 'text-cyan border-cyan/20 bg-cyan/5',
  },
];

export default function SideProjects() {
  return (
    <section className="py-16 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="text-xs font-mono text-cyan tracking-widest uppercase block mb-3">
                Side Projects
              </span>
              <h2 className="text-2xl font-bold">Just for fun.</h2>
            </div>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {projects.map((p) => (
            <FadeIn key={p.name} delay={100}>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-5 rounded-xl border border-border bg-surface card-hover"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <span className="font-semibold text-sm group-hover:text-cyan transition-colors">
                    {p.name}
                  </span>
                  <span className={`text-[10px] font-mono border px-2 py-0.5 rounded-full shrink-0 ${p.color}`}>
                    {p.tag}
                  </span>
                </div>
                <p className="text-muted text-xs leading-relaxed">{p.desc}</p>
                <div className="mt-4 text-[11px] font-mono text-cyan/60 group-hover:text-cyan transition-colors">
                  Play now →
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
