const libs = [
  {
    name: "react-premium-gate",
    desc: "Razorpay subscription paywall components + usePro hook + Vercel serverless templates. Drop-in monetisation for React apps.",
    lang: "TypeScript",
    url: "https://github.com/iamadhitya1/react-premium-gate",
  },
  {
    name: "react-macro-rings",
    desc: "Animated SVG nutrition and macro progress rings. Extracted from Sage. Zero dependencies.",
    lang: "TypeScript",
    url: "https://github.com/iamadhitya1/react-macro-rings",
  },
  {
    name: "react-toast-native",
    desc: "Lightweight toast notification system for React. 4 types, fully customisable, zero runtime deps.",
    lang: "TypeScript",
    url: "https://github.com/iamadhitya1/react-toast-native",
  },
  {
    name: "groq-chain",
    desc: "Python library for chaining Groq LLM calls with a clean .step() builder API. No LangChain required.",
    lang: "Python",
    url: "https://github.com/iamadhitya1/groq-chain",
  },
  {
    name: "fraud-shield",
    desc: "Pip-installable fraud detection using Random Forest. Extracted from a real ML project.",
    lang: "Python",
    url: "https://github.com/iamadhitya1/fraud-shield",
  },
  {
    name: "llm-router",
    desc: "Routes prompts to the right LLM (Groq / OpenAI / Anthropic) by complexity and cost. Save money, keep quality.",
    lang: "Python",
    url: "https://github.com/iamadhitya1/llm-router",
  },
  {
    name: "react-offline-first",
    desc: "React + Vite offline-first template with IndexedDB, service worker, and a background sync engine.",
    lang: "TypeScript",
    url: "https://github.com/iamadhitya1/react-offline-first",
  },
];

const langColor: Record<string, string> = {
  TypeScript: "text-blue-400 border-blue-400/30 bg-blue-400/5",
  Python:     "text-yellow-400 border-yellow-400/30 bg-yellow-400/5",
};

export default function OpenSource() {
  return (
    <section id="open-source" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <span className="text-xs font-mono text-cyan tracking-widest uppercase block mb-3">
            Open Source
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            7 Libraries. All MIT.
          </h2>
          <p className="text-muted text-sm max-w-lg leading-relaxed">
            Every library was extracted from a real product. Battle-tested in
            production before it was open-sourced.
          </p>
        </div>

        {/* Library grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {libs.map((lib) => (
            <a
              key={lib.name}
              href={lib.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-5 rounded-xl border border-border bg-surface card-hover"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <span className="font-mono text-sm font-medium text-white group-hover:text-cyan transition-colors break-all">
                  {lib.name}
                </span>
                <span
                  className={`text-[10px] font-mono border px-2 py-0.5 rounded-full shrink-0 ${langColor[lib.lang]}`}
                >
                  {lib.lang}
                </span>
              </div>
              <p className="text-muted text-xs leading-relaxed">{lib.desc}</p>
              <div className="mt-4 flex items-center gap-1 text-[11px] text-muted/60 font-mono">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                </svg>
                github.com/iamadhitya1/{lib.name}
              </div>
            </a>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="mt-10 text-center">
          <a
            href="https://github.com/iamadhitya1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-cyan transition-colors font-mono"
          >
            View all repos on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}
