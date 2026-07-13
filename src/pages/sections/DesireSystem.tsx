// Fase 5 - Secoes Desejo: 5A, 5B, 5C

// --- 5A: A solução como sistema ---

function DesireSolution() {
  return (
    <section id="desire-solution" className="section">
      <div className="section-wrapper block content-1170 center-relative desire-solution-wrapper">
        <h2 className="desire-solution-title">
          Saúde mental como sistema, não como evento
        </h2>
        <p className="desire-solution-body">
          A Allcance estrutura a saúde mental da sua empresa como um sistema,
          não como um evento pontual. Começa com o diagnóstico dos riscos
          psicossociais, avança para um plano de ação sob medida e se sustenta
          no acompanhamento clínico contínuo conduzido por psicólogos, com tudo
          documentado de forma auditável no ecossistema Allcare.
        </p>
      </div>
    </section>
  );
}

// --- 5B: Ecossistema Allcare ---

const WA_URL =
  "https://wa.me/5571992905843?text=Quero%20diagnosticar%20minha%20empresa";

function DesireAllcare() {
  return (
    <section id="desire-allcare" className="section desire-allcare-section">
      <div className="section-wrapper block content-1170 center-relative desire-allcare-wrapper">
        <h2 className="desire-allcare-title">Ecossistema Allcare</h2>
        <p className="desire-allcare-subtitle">
          Cuidado que acontece e que fica registrado
        </p>
        <p className="desire-allcare-body">
          O Allcare é o ecossistema proprietário que a Allcance usa para
          monitorar a saúde mental corporativa e sustentar a entrega da
          consultoria: protocolo clínico de acolhimento em 4 sessões conduzido
          por psicólogos, questionários de monitoramento contínuo e um dashboard
          que dá ao RH visão dos indicadores e gera a documentação que comprova
          a gestão de riscos.
        </p>
        <a
          href={WA_URL}
          target="_blank"
          rel="noreferrer"
          className="desire-allcare-cta"
        >
          Quero diagnosticar minha empresa
        </a>
      </div>
    </section>
  );
}

// --- 5C: NR-1 como ativo ---

function DesireNr1() {
  return (
    <section id="desire-nr1" className="section">
      <div className="section-wrapper block content-1170 center-relative desire-nr1-wrapper">
        <h2 className="desire-nr1-title">NR-1: de passivo a ativo</h2>
        <p className="desire-nr1-body">
          Conformidade com a NR-1 não é o que vendemos. É o que sobra quando o
          trabalho é bem feito. Ao cuidar de verdade da saúde mental do time,
          sua empresa mapeia riscos, documenta ações e mantém o PGR em dia,
          independentemente do vaivém regulatório. A NR-1 deixa de ser passivo
          e vira ativo: prova de que a sua empresa é um bom lugar para trabalhar
          e um risco menor para clientes, investidores e auditores. Existe
          inclusive reconhecimento federal para isso: o Certificado Empresa
          Promotora da Saúde Mental (Lei 14.831/2024), que sua marca empregadora
          pode ostentar.
        </p>
      </div>
    </section>
  );
}

export { DesireSolution, DesireAllcare, DesireNr1 };
