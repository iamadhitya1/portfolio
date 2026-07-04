'use client';
import { useEffect, useRef } from 'react';

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringOuterRef = useRef<HTMLDivElement>(null);
  const ringInnerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return;

    const dot = dotRef.current!;
    const ringOuter = ringOuterRef.current!;
    const ringInner = ringInnerRef.current!;

    let mx = 0, my = 0;
    let rx = 0, ry = 0;
    let raf: number;
    let visible = false;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (!visible) {
        visible = true;
        rx = mx;
        ry = my;
        dot.style.opacity = '1';
        ringOuter.style.opacity = '1';
      }
      dot.style.transform = `translate(${mx - 3}px, ${my - 3}px)`;
    };

    const loop = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ringOuter.style.transform = `translate(${rx - 18}px, ${ry - 18}px)`;
      raf = requestAnimationFrame(loop);
    };

    const expand = () => ringInner.classList.add('ring-expanded');
    const collapse = () => ringInner.classList.remove('ring-expanded');

    document.addEventListener('mousemove', onMove, { passive: true });

    const bindHovers = () => {
      document.querySelectorAll('a, button').forEach((el) => {
        el.addEventListener('mouseenter', expand);
        el.addEventListener('mouseleave', collapse);
      });
    };
    bindHovers();

    raf = requestAnimationFrame(loop);

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringOuterRef} className="cursor-ring-outer">
        <div ref={ringInnerRef} className="cursor-ring-inner" />
      </div>
    </>
  );
}
