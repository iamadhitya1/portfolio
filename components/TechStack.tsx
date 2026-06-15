import { FadeIn } from '@/components/FadeIn';

const stack = [
  { name: 'TypeScript',  color: 'text-blue-400   border-blue-400/20   bg-blue-400/5' },
  { name: 'Python',      color: 'text-yellow-400 border-yellow-400/20 bg-yellow-400/5' },
  { name: 'JavaScript',  color: 'text-yellow-300 border-yellow-300/20 bg-yellow-300/5' },
  { name: 'React',       color: 'text-cyan-400   border-cyan-400/20   bg-cyan-400/5' },
  { name: 'Next.js',     color: 'text-white      border-white/20      bg-white/5' },
  { name: 'Vite',        color: 'text-purple-400 border-purple-400/20 bg-purple-400/5' },
  { name: 'Tailwind CSS',color: 'text-sky-400    border-sky-400/20    bg-sky-400/5' },
  { name: 'Supabase',    color: 'text-green-400  border-green-400/20  bg-green-400/5' },
  { name: 'Groq',        color: 'text-orange-400 border-orange-400/20 bg-orange-400/5' },
  { name: 'Clerk',       color: 'text-violet-400 border-violet-400/20 bg-violet-400/5' },
  { name: 'Razorpay',    color: 'text-blue-300   border-blue-300/20   bg-blue-300/5' },
  { name: 'Vercel',      color: 'text-white      border-white/20      bg-white/5' },
];

export default function TechStack() {
  return (
    <section className="py-16 px-6 border-y border-border">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <p className="text-xs font-mono text-muted tracking-widest uppercase text-center mb-8">
            Tech Stack
          </p>
        </FadeIn>
        <FadeIn delay={100}>
          <div className="flex flex-wrap justify-center gap-2.5">
            {stack.map(({ name, color }) => (
              <span
                key={name}
                className={`text-xs font-mono px-3 py-1.5 rounded-full border ${color}`}
              >
                {name}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
