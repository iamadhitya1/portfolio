export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 grid-bg overflow-hidden">
      {/* Radial glow behind text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-cyan opacity-[0.03] blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Status badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-surface text-xs text-muted font-mono tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse" />
            Rewrite Labs — Personal Studio
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 text-xs text-green-400 font-mono tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Open to opportunities
          </div>
        </div>

        {/* Name */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight leading-none mb-6">
          <span className="text-white">M.</span>{" "}
          <span className="text-cyan glow">Adhitya</span>
        </h1>

        {/* Tagline */}
        <p className="text-lg sm:text-xl text-muted max-w-xl mx-auto mb-10 leading-relaxed font-light">
          8 production AI apps. 7 OSS libraries.{" "}
          <span className="text-white/60">
            Built and shipped solo — open to roles, internships &amp; collaborations.
          </span>
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3 justify-center">
          <a
            href="https://rewritelabs.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-cyan text-bg text-sm font-semibold rounded-lg hover:bg-cyan/90 transition-colors"
          >
            Rewrite Labs →
          </a>
          <a
            href="https://github.com/iamadhitya1"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 border border-border bg-surface text-white text-sm font-medium rounded-lg hover:border-cyan/40 hover:bg-subtle transition-colors"
          >
            GitHub
          </a>
          <a
            href="mailto:muthuadithya999@gmail.com"
            className="px-5 py-2.5 border border-border bg-surface text-white text-sm font-medium rounded-lg hover:border-cyan/40 hover:bg-subtle transition-colors"
          >
            Contact
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted text-xs font-mono">
        <span>scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-muted to-transparent" />
      </div>
    </section>
  );
}
