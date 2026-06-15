import Image from 'next/image';
import { FadeIn } from '@/components/FadeIn';

export default function Book() {
  return (
    <section id="book" className="py-28 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-14 items-center">
          {/* Book cover */}
          <FadeIn className="shrink-0">
            <div className="relative w-52 mx-auto">
              <div className="absolute -inset-4 bg-cyan/10 blur-2xl rounded-full" />
              <div className="relative rounded-lg overflow-hidden shadow-2xl shadow-black/60">
                <Image
                  src="/book.jpg"
                  alt="The Rewrite by M Adhitya"
                  width={208}
                  height={312}
                  className="object-cover w-full"
                />
              </div>
            </div>
          </FadeIn>

          {/* Content */}
          <div className="flex-1">
            <FadeIn>
              <span className="text-xs font-mono text-cyan tracking-widest uppercase block mb-4">
                Book
              </span>
            </FadeIn>
            <FadeIn delay={100}>
              <h2 className="text-3xl sm:text-4xl font-bold mb-2">
                The Rewrite
              </h2>
              <p className="text-muted text-sm font-mono mb-6">
                12 Lives That Escaped the Script
              </p>
            </FadeIn>
            <FadeIn delay={200}>
              <p className="text-muted leading-relaxed text-base mb-8 max-w-lg">
                A collection of 12 real stories about people who rewrote the
                path everyone expected them to follow. Part narrative, part
                manifesto — for anyone building something outside the script.
              </p>
            </FadeIn>
            <FadeIn delay={300}>
              <a
                href="https://topmate.io/m_adhitya/1868094"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-cyan text-bg text-sm font-semibold rounded-lg hover:bg-cyan/90 transition-colors"
              >
                Get the book →
              </a>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
