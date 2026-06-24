import { FadeIn } from '@/components/FadeIn';

const apps = [
  {
    name: "Sage",
    desc: "AI health & nutrition coach. Tracks diet, macros, and body health with Groq-powered insights.",
    url: "https://joinsage.vercel.app",
    tag: "Health AI",
  },
  {
    name: "Lectura AI",
    desc: "AI reading companion that summarizes, explains, and quizzes you on any content.",
    url: "https://lectura-rwl.vercel.app",
    tag: "EdTech AI",
  },
  {
    name: "DataPulse",
    desc: "Real-time data analytics dashboard with AI-generated insights and visualisations.",
    url: "https://datapulse-rwl.vercel.app",
    tag: "Analytics",
  },
  {
    name: "FocusVision",
    desc: "Webcam-based focus tracker using computer vision — detects distractions in real time.",
    url: "https://focusvision-rwl.vercel.app",
    tag: "Computer Vision",
  },
  {
    name: "Unclause",
    desc: "Plain-English legal document explainer. Paste any contract, get a clear breakdown.",
    url: "https://unclause-rwl.vercel.app",
    tag: "Legal AI",
  },
  {
    name: "ToneFix",
    desc: "AI tone analyzer that detects and rewrites passive-aggressive, rude, or unclear messages.",
    url: "https://tonefix-rwl.vercel.app",
    tag: "Writing AI",
  },
  {
    name: "Nura",
    desc: "AI companion with persistent memory across conversations — friend, mentor, or study buddy.",
    url: "https://meetnura.vercel.app",
    tag: "Mental Health",
  },
  {
    name: "RewriteOS",
    desc: "Personal OS for builders — goals, tasks, habits, and reflections in one focused space.",
    url: "https://rewriteos-rwl.vercel.app",
    tag: "Productivity",
  },
];

export default function RewriteLabs() {
  return (
    <section id="rewrite-labs" className="py-28 px-6 bg-surface/30 border-y border-border">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <span className="text-xs font-mono text-cyan tracking-widest uppercase block mb-3">
              Personal Studio
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold">Rewrite Labs</h2>
            <p className="text-muted mt-3 max-w-lg text-sm leading-relaxed">
              8 production apps covering LLM integration, computer vision, RAG, data
              analytics, and AI-assisted communication — built and shipped solo.
            </p>
          </div>
          <a
            href="https://rewritelabs.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-4 py-2 border border-cyan/30 text-cyan text-sm rounded-lg hover:bg-cyan/10 transition-colors font-mono"
          >
            rewritelabs.vercel.app →
          </a>
        </div>

        {/* Apps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {apps.map((app, i) => (
            <FadeIn key={app.name} delay={Math.min(i * 60, 300)}>
              <a
                href={app.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-5 rounded-xl border border-border bg-bg card-hover h-full"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-base font-semibold group-hover:text-cyan transition-colors">
                    {app.name}
                  </span>
                  <span className="text-[10px] font-mono text-muted border border-border px-2 py-0.5 rounded-full shrink-0 ml-2">
                    {app.tag}
                  </span>
                </div>
                <p className="text-muted text-xs leading-relaxed">{app.desc}</p>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
