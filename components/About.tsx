import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-28 px-6 max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row gap-16 items-start">
        {/* Photo + label column */}
        <div className="md:w-48 shrink-0 flex flex-col items-center md:items-start gap-6">
          <span className="text-xs font-mono text-cyan tracking-widest uppercase">
            About
          </span>
          {/* Avatar */}
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-cyan/20 blur-lg" />
            <div className="relative w-36 h-36 rounded-full border-2 border-cyan/30 overflow-hidden bg-white">
              <Image
                src="/photo.jpg"
                alt="M. Adhitya"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
            I build products at the{" "}
            <span className="text-cyan">intersection of AI and utility.</span>
          </h2>

          <p className="text-muted leading-relaxed text-base">
            I&apos;m the founder of Rewrite Labs — a suite of AI-powered tools
            built to solve real problems. Everything I ship starts as something
            I personally needed. If the tool doesn&apos;t work for me, it
            doesn&apos;t ship.
          </p>

          <p className="text-muted leading-relaxed text-base">
            When I build something reusable, I open source it. That&apos;s
            where the 7 libraries came from — extracted from real products,
            battle-tested in production, zero runtime dependencies.
          </p>

          <p className="text-muted leading-relaxed text-base">
            I also wrote{" "}
            <span className="text-white font-medium italic">The Rewrite</span>{" "}
            — a book about starting over and building things that matter.
          </p>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border">
            {[
              { value: "7", label: "Live products" },
              { value: "7", label: "OSS libraries" },
              { value: "MIT", label: "All open source" },
            ].map(({ value, label }) => (
              <div key={label}>
                <div className="text-2xl font-bold text-cyan">{value}</div>
                <div className="text-xs text-muted mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
