import { useState, useEffect, useRef, useCallback } from "react";

// Images
import dots from "../../assets/images/dots.png";
import iconLogo from "../../assets/images/icon_logo.png";
import heroImg1 from "../../assets/images/home/hero-01.jpg";
import heroImg2 from "../../assets/images/home/hero-02.jpg";
import heroImg3 from "../../assets/images/home/hero-03.jpg";
import heroImg4 from "../../assets/images/home/hero-04.jpg";
import heroImg5 from "../../assets/images/home/hero-05.jpg";

const HERO_IMAGES = [heroImg1, heroImg2, heroImg3, heroImg4, heroImg5];

const H1_PHRASES = [
  "Saúde mental que vira retorno auditável, não passivo.",
  "Transforme o cuidado com o seu time em resultado mensurável. NR-1 em dias.",
  "Menos afastamento, mais produtividade, documentação que resiste a auditoria.",
];

const SLIDE_INTERVAL_MS = 5000;
const SLIDE_DURATION_MS = 600;
const H1_INTERVAL_MS = 7000;
const FADE_MS = 300;

const SUBHEADLINE =
  "Somos uma consultoria para estruturar a saúde mental da sua empresa de ponta a ponta: diagnóstico dos riscos psicossociais, planos de ação, acompanhamento clínico por psicólogos e toda documentação auditável.";

const TRUST_BAR =
  "Consultoria em saúde mental corporativa. Diagnóstico, plano de ação, acompanhamento clínico e documentação auditável, num só fluxo.";

const WA_HREF =
  "https://wa.me/5571992905843?text=Quero%20diagnosticar%20minha%20empresa";

function Home() {
  // H1 rotation state
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [h1Visible, setH1Visible] = useState(true);
  const outerTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const innerTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hoveredRef = useRef(false);

  // Carousel state
  const [slideIndex, setSlideIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState<number | null>(null);
  const [sliding, setSliding] = useState(false);
  const slideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const slideTransitionRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // H1 rotation
  const scheduleNext = useCallback(() => {
    if (prefersReducedMotion) return;
    outerTimerRef.current = setTimeout(() => {
      if (hoveredRef.current) return;
      setH1Visible(false);
      innerTimerRef.current = setTimeout(() => {
        setPhraseIndex((i) => (i + 1) % H1_PHRASES.length);
        setH1Visible(true);
        scheduleNext();
      }, FADE_MS);
    }, H1_INTERVAL_MS);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;
    scheduleNext();
    return () => {
      if (outerTimerRef.current) clearTimeout(outerTimerRef.current);
      if (innerTimerRef.current) clearTimeout(innerTimerRef.current);
    };
  }, [scheduleNext]);

  // Image carousel
  const advanceSlide = useCallback(() => {
    if (prefersReducedMotion) return;
    slideTimerRef.current = setTimeout(() => {
      const next = (slideIndex + 1) % HERO_IMAGES.length;
      setNextIndex(next);
      setSliding(true);
      slideTransitionRef.current = setTimeout(() => {
        setSlideIndex(next);
        setNextIndex(null);
        setSliding(false);
      }, SLIDE_DURATION_MS);
    }, SLIDE_INTERVAL_MS);
  }, [slideIndex]);

  useEffect(() => {
    advanceSlide();
    return () => {
      if (slideTimerRef.current) clearTimeout(slideTimerRef.current);
      if (slideTransitionRef.current) clearTimeout(slideTransitionRef.current);
    };
  }, [advanceSlide]);

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
    <section id="home" className="section no-page-title">
      <div className="section-wrapper block content-1170 center-relative">
        <div className="content-wrapper hero-text-wrapper">
          {/* H1 rotativo */}
          <div
            className="hero-h1-wrapper"
            aria-live="polite"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <h1
              className="entry-title big-title hero-h1"
              style={{ opacity: h1Visible ? 1 : 0 }}
            >
              {H1_PHRASES[phraseIndex]}
            </h1>
          </div>

          {/* Subheadline fixa */}
          <p className="site-description hero-subheadline">{SUBHEADLINE}</p>
        </div>
      </div>

      {/* Carrossel de imagens */}
      <div className="home-full-width hero-carousel">
        {/* Clip isolado apenas para os slides — não corta botão nem bolinhas */}
        <div className="hero-slides-clip" aria-hidden="true">
          <div
            className="hero-slide hero-slide--current"
            style={{
              backgroundImage: `url(${HERO_IMAGES[slideIndex]})`,
              transform: sliding ? "translateX(-100%)" : "translateX(0)",
              transition: sliding ? `transform ${SLIDE_DURATION_MS}ms ease-in-out` : "none",
            }}
          />
          {nextIndex !== null && (
            <div
              className="hero-slide hero-slide--next"
              style={{
                backgroundImage: `url(${HERO_IMAGES[nextIndex]})`,
                transform: sliding ? "translateX(0)" : "translateX(100%)",
                transition: sliding ? `transform ${SLIDE_DURATION_MS}ms ease-in-out` : "none",
              }}
            />
          )}
        </div>

        {/* Estes ficam fora do clip para não serem cortados */}
        <img className="dots" src={dots} alt="" />
        <a
          href={WA_HREF}
          target="_blank"
          rel="noopener noreferrer"
          className="button home-button"
        >
          Contratar agora
        </a>
        <div className="home-full-width-background">
          <img className="logo-icon" src={iconLogo} alt="Allcance Ícone" />
        </div>
      </div>

      {/* Barra de confiança */}
      <div className="hero-trust-bar">
        <p>{TRUST_BAR}</p>
      </div>
    </section>
  );
}

export default Home;
