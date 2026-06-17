import { FadeIn } from '@/components/FadeIn';

const experiences = [
  {
    role: 'Founder',
    company: 'Rewrite Labs',
    period: 'Dec 2025 – Present',
    type: 'Startup',
    typeColor: 'text-cyan border-cyan/20 bg-cyan/5',
    bullets: [
      'Built and shipped 7 live AI products — Sage, Lectura AI, DataPulse, FocusVision, Unclause, Nura, RewriteOS',
      'Open-sourced 7 production-extracted libraries across TypeScript and Python, all MIT licensed',
      'Grew to 8,600 LinkedIn followers and 3,200 newsletter subscribers as a solo founder',
      'Authored and published The Rewrite — a book on starting over and building things that matter',
    ],
    tech: ['React', 'Next.js', 'Python', 'Groq', 'Supabase', 'Vercel'],
  },
  {
    role: 'AI Intern',
    company: 'SmartED Innovations',
    period: 'Dec 2025 – Jan 2026',
    type: 'Internship',
    typeColor: 'text-purple-400 border-purple-400/20 bg-purple-400/5',
    bullets: [
      'Built a customer segmentation pipeline using K-Means clustering — identified 5 distinct buyer personas from a 200-customer retail dataset using Elbow Method and K-Means++ initialisation',
      'Implemented A* pathfinding from scratch on a 10×10 grid with Manhattan distance heuristic, min-heap priority queue, and Matplotlib visualisation',
    ],
    tech: ['Python', 'scikit-learn', 'pandas', 'matplotlib', 'seaborn'],
  },
];

const education = {
  degree: 'B.Tech, Computer Engineering',
  institution: 'Institute of Infrastructure Technology Research and Management (IITRAM)',
  period: '2023 – 2027',
  location: 'Ahmedabad, India',
};

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <span className="text-xs font-mono text-cyan tracking-widest uppercase block mb-3">
            Experience
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-14">
            Where I've worked.
          </h2>
        </FadeIn>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-2 bottom-2 w-px bg-border hidden sm:block" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <FadeIn key={exp.company} delay={i * 100}>
                <div className="sm:pl-8 relative">
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-cyan -translate-x-[3px] hidden sm:block" />

                  <div className="p-6 rounded-xl border border-border bg-surface">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="font-semibold text-white text-base">{exp.role}</h3>
                          <span className="text-muted text-sm">·</span>
                          <span className="text-cyan text-sm font-medium">{exp.company}</span>
                          <span className={`text-[10px] font-mono border px-2 py-0.5 rounded-full ${exp.typeColor}`}>
                            {exp.type}
                          </span>
                        </div>
                        <p className="text-xs text-muted font-mono mt-1">{exp.period}</p>
                      </div>
                    </div>

                    {/* Bullets */}
                    <ul className="space-y-2 mb-5">
                      {exp.bullets.map((b, j) => (
                        <li key={j} className="flex gap-2.5 text-sm text-muted leading-relaxed">
                          <span className="text-cyan mt-1 shrink-0">→</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((t) => (
                        <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded-full border border-border text-muted">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Education */}
        <FadeIn delay={250}>
          <div className="mt-14 pt-10 border-t border-border">
            <span className="text-xs font-mono text-cyan tracking-widest uppercase block mb-6">
              Education
            </span>
            <div className="sm:pl-8 relative">
              <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-cyan/40 -translate-x-[3px] hidden sm:block" />
              <div className="p-6 rounded-xl border border-border bg-surface">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="font-semibold text-white text-base">{education.degree}</h3>
                    <p className="text-cyan text-sm font-medium mt-0.5">{education.institution}</p>
                    <p className="text-xs text-muted font-mono mt-1">{education.location}</p>
                  </div>
                  <span className="text-xs font-mono text-muted shrink-0">{education.period}</span>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
