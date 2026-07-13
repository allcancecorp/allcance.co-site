// Fase 5 - Secoes Desejo: 5D (Diferenciais) e 5E (Abas por decisor)
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserDoctor,
  faClipboardList,
  faLayerGroup,
  faFileSignature,
} from "@fortawesome/free-solid-svg-icons";

// --- 5D: Diferenciais ---

const DIFFS = [
  {
    icon: faUserDoctor,
    title: "Liderança clínica de verdade.",
    desc: "Consultoria de ponta a ponta liderada por psicólogo com CRP, não por um algoritmo.",
  },
  {
    icon: faClipboardList,
    title: "Metodologia proprietária.",
    desc: "Diagnóstico de riscos psicossociais e protocolo de acolhimento estruturado, replicável e auditável.",
  },
  {
    icon: faLayerGroup,
    title: "Tudo num só fluxo.",
    desc: "Clínica, comportamento e compliance documental integrados no ecossistema Allcare.",
  },
  {
    icon: faFileSignature,
    title: "Assinatura técnica.",
    desc: "Todos os documentos entregues com assinatura de psicólogo (CRP) e técnica de segurança do trabalho (CRT).",
  },
];

function DesireDiferenciais() {
  return (
    <section id="desire-diferenciais" className="section">
      <div className="section-wrapper block content-1170 center-relative desire-diferenciais-wrapper">
        <div className="desire-diferenciais-grid">
          {DIFFS.map((diff, i) => (
            <div key={i} className="desire-diff-card">
              <div className="desire-diff-icon" aria-hidden="true">
                <FontAwesomeIcon icon={diff.icon} />
              </div>
              <h3 className="desire-diff-title">{diff.title}</h3>
              <p className="desire-diff-desc">{diff.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- 5E: Abas por decisor ---

const TABS = [
  {
    id: "tab-rh",
    label: "Sou RH",
    content:
      "Você sente na pele: afastamentos por CID-F, sobrecarga de quem fica, clima pesado e turnover que não para. A Allcance te dá diagnóstico, plano de ação e um acompanhamento que o time realmente adere, mais os indicadores que você precisa para mostrar resultado à diretoria. E a NR-1 fica documentada sem virar mais um abacaxi no seu colo.",
  },
  {
    id: "tab-financeiro",
    label: "Sou do financeiro",
    content:
      "Adoecimento mental é custo invisível: afastamento, presenteísmo, sinistralidade do plano de saúde e reposição de talento, que pode custar de 50% a 200% do salário anual de cada saída, segundo a Robert Half (a SHRM situa cargos técnicos e gerenciais entre 100% e 150%). Do outro lado, a OMS mostrou em estudo publicado no The Lancet Psychiatry que cada US$1 investido em tratamento contra depressão e ansiedade retorna US$4 em saúde e capacidade de trabalho. A Allcance transforma esse gasto difuso em investimento com retorno mensurável, e você leva números para a reunião de diretoria.",
  },
  {
    id: "tab-socio",
    label: "Sou sócio",
    content:
      "Riscos psicossociais mal geridos viram ações trabalhistas, sinistralidade no plano de saúde e dano de reputação, com ou sem fiscalização ativa. A Allcance protege o negócio na origem: cuida do time, blinda a empresa com documentação assinada por profissionais habilitados e transforma o cuidado em vantagem competitiva. Menos risco, mais valor de marca empregadora. Decisão de dono.",
  },
];

function DesireTabs() {
  const [activeTab, setActiveTab] = useState(0);
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const handleTabKeyDown = (
    e: React.KeyboardEvent<HTMLButtonElement>,
    index: number
  ) => {
    if (e.key === "ArrowRight") {
      const next = (index + 1) % TABS.length;
      setActiveTab(next);
      (document.getElementById(`tab-btn-${next}`) as HTMLElement)?.focus();
    } else if (e.key === "ArrowLeft") {
      const prev = (index - 1 + TABS.length) % TABS.length;
      setActiveTab(prev);
      (document.getElementById(`tab-btn-${prev}`) as HTMLElement)?.focus();
    } else if (e.key === "Home") {
      setActiveTab(0);
      (document.getElementById(`tab-btn-0`) as HTMLElement)?.focus();
    } else if (e.key === "End") {
      const last = TABS.length - 1;
      setActiveTab(last);
      (document.getElementById(`tab-btn-${last}`) as HTMLElement)?.focus();
    }
  };

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <section id="desire-tabs" className="section">
      <div className="section-wrapper block content-1170 center-relative desire-tabs-wrapper">
        {/* Desktop tabs */}
        <div className="desire-tabs-desktop">
          <div
            className="desire-tablist"
            role="tablist"
            aria-label="Conteúdo por perfil de decisor"
          >
            {TABS.map((tab, i) => (
              <button
                key={tab.id}
                id={`tab-btn-${i}`}
                role="tab"
                aria-selected={activeTab === i}
                aria-controls={`tabpanel-${i}`}
                tabIndex={activeTab === i ? 0 : -1}
                className={`desire-tab-btn${activeTab === i ? " active" : ""}`}
                onClick={() => setActiveTab(i)}
                onKeyDown={(e) => handleTabKeyDown(e, i)}
              >
                {tab.label}
              </button>
            ))}
          </div>
          {TABS.map((tab, i) => (
            <div
              key={tab.id}
              id={`tabpanel-${i}`}
              role="tabpanel"
              aria-labelledby={`tab-btn-${i}`}
              hidden={activeTab !== i}
              className="desire-tabpanel"
            >
              <p>{tab.content}</p>
            </div>
          ))}
        </div>

        {/* Mobile accordion */}
        <div className="desire-tabs-mobile" aria-label="Conteúdo por perfil de decisor">
          {TABS.map((tab, i) => {
            const isOpen = openAccordion === i;
            return (
              <div key={tab.id} className="desire-accordion-item">
                <button
                  className={`desire-accordion-btn${isOpen ? " active" : ""}`}
                  aria-expanded={isOpen}
                  aria-controls={`accordion-panel-${i}`}
                  onClick={() => toggleAccordion(i)}
                >
                  {tab.label}
                  <span className="desire-accordion-chevron" aria-hidden="true">
                    {isOpen ? "▲" : "▼"}
                  </span>
                </button>
                <div
                  id={`accordion-panel-${i}`}
                  className={`desire-accordion-panel${isOpen ? " open" : ""}`}
                  role="region"
                  aria-labelledby={`accordion-btn-${i}`}
                >
                  <p>{tab.content}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export { DesireDiferenciais, DesireTabs };
