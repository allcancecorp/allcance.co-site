import { useState, useEffect, useRef, useCallback } from "react";

const PHRASES = [
  "Transforme clima pesado e afastamento em indicadores que você apresenta com orgulho à diretoria.",
  "Transforme obrigação regulatória em documentação que sustenta a empresa em qualquer auditoria.",
  "Transforme custo invisível de adoecimento em investimento com retorno de até 4 para 1.",
];

const INTERVAL_MS = 7000;
const FADE_MS = 300;

function TransformBlock() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const outerTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const innerTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hoveredRef = useRef(false);

  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const scheduleNext = useCallback(() => {
    if (prefersReducedMotion) return;
    outerTimerRef.current = setTimeout(() => {
      if (hoveredRef.current) return;
      setVisible(false);
      innerTimerRef.current = setTimeout(() => {
        setPhraseIndex((i) => (i + 1) % PHRASES.length);
        setVisible(true);
        scheduleNext();
      }, FADE_MS);
    }, INTERVAL_MS);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;
    scheduleNext();
    return () => {
      if (outerTimerRef.current) clearTimeout(outerTimerRef.current);
      if (innerTimerRef.current) clearTimeout(innerTimerRef.current);
    };
  }, [scheduleNext]);

  const handleMouseEnter = () => {
    hoveredRef.current = true;
    if (outerTimerRef.current) clearTimeout(outerTimerRef.current);
    if (innerTimerRef.current) clearTimeout(innerTimerRef.current);
  };

  const handleMouseLeave = () => {
    hoveredRef.current = false;
    scheduleNext();
  };

  return (
    <section id="transform-block" className="section">
      <div className="section-wrapper block content-1170 center-relative transform-block-wrapper">
        <div
          className="transform-block-headline-container"
          aria-live="polite"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <p
            className="transform-block-headline"
            style={{
              opacity: visible ? 1 : 0,
              transition: `opacity ${FADE_MS}ms ease-in-out`,
            }}
          >
            {PHRASES[phraseIndex]}
          </p>
        </div>
      </div>
    </section>
  );
}

export default TransformBlock;
