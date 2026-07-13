import { useState, useEffect, useRef } from "react";

// Images
import dots from "../../assets/images/dots.png";
import iconLogo from "../../assets/images/icon_logo.png";
// import mainImage01 from "../../assets/images/home/main_img_01.png";
// TODO: trocar por imagem corporativa (reunião/escritório, tom escuro) — microfone atual pode ir para seção de palestras
import mainImage01 from "../../assets/images/home/main_home.webp";

const H1_PHRASES = [
  "Saúde mental que vira retorno auditável, não passivo.",
  "Transforme o cuidado com o seu time em resultado mensurável. A NR-1 em dia vem como consequência.",
  "Menos afastamento, mais produtividade, documentação que resiste a auditoria.",
];

const INTERVAL_MS = 7000;
const FADE_MS = 300;

const SUBHEADLINE =
  "A Allcance é a consultoria que estrutura a saúde mental da sua empresa de ponta a ponta: diagnóstico de riscos psicossociais, plano de ação, acompanhamento clínico conduzido por psicólogos e documentação auditável, tudo sustentado pelo ecossistema Allcare.";

const TRUST_BAR =
  "Consultoria em saúde mental corporativa. Diagnóstico, plano de ação, acompanhamento clínico e documentação auditável, num só fluxo.";

const WA_HREF =
  "https://wa.me/5571992905843?text=Quero%20diagnosticar%20minha%20empresa";

function Home() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hoveredRef = useRef(false);

  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const scheduleNext = () => {
    if (prefersReducedMotion) return;
    timerRef.current = setTimeout(() => {
      if (hoveredRef.current) return;
      // fade out
      setVisible(false);
      setTimeout(() => {
        setPhraseIndex((i) => (i + 1) % H1_PHRASES.length);
        setVisible(true);
        scheduleNext();
      }, FADE_MS);
    }, INTERVAL_MS);
  };

  useEffect(() => {
    if (prefersReducedMotion) return;
    scheduleNext();
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleMouseEnter = () => {
    hoveredRef.current = true;
    if (timerRef.current) clearTimeout(timerRef.current);
  };

  const handleMouseLeave = () => {
    hoveredRef.current = false;
    scheduleNext();
  };

  return (
    <section id="home" className="section no-page-title">
      <div className="section-wrapper block content-1170 center-relative">
        <div className="content-wrapper">
          {/* H1 rotativo */}
          <div
            className="hero-h1-wrapper"
            aria-live="polite"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <h1
              className="entry-title big-title hero-h1"
              style={{ opacity: visible ? 1 : 0 }}
            >
              {H1_PHRASES[phraseIndex]}
            </h1>
          </div>

          {/* Subheadline fixa */}
          <p className="site-description hero-subheadline">{SUBHEADLINE}</p>

          {/* CTA */}
          <div className="hero-cta-wrapper">
            <a
              href={WA_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="button hero-cta-button"
            >
              Quero diagnosticar minha empresa
            </a>
            <p className="hero-microcopy">
              Conversa inicial sem compromisso. Resposta em até 1 dia útil.
            </p>
          </div>
        </div>
      </div>

      {/* Imagem de fundo */}
      <div
        className="home-full-width"
        style={{
          backgroundImage: `url(${mainImage01})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          height: "100vh",
        }}
      >
        <img className="dots" src={dots} alt="Dots" />
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
