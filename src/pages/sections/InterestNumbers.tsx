const STATS = [
  {
    number: "546.254",
    support:
      "benefícios por incapacidade temporária por transtornos mentais concedidos em 2025, recorde da série e quinto ano consecutivo de alta (15,66% sobre 2024)",
    source: "Ministério da Previdência Social",
  },
  {
    number: "4 para 1",
    support:
      "é o retorno de cada US$1 investido em tratamento de depressão e ansiedade, em saúde e capacidade de trabalho",
    source: "OMS, The Lancet Psychiatry, 2016",
  },
  {
    number: "até 200%",
    support:
      "do salário anual é o que pode custar a reposição de um talento que pediu para sair",
    source: "Robert Half / SHRM",
  },
];

function InterestNumbers() {
  return (
    <section id="interest-numbers" className="section">
      <div className="section-wrapper block content-1170 center-relative interest-numbers-wrapper">
        <p className="interest-numbers-intro">
          O adoecimento mental deixou de ser assunto exclusivo do RH e virou uma
          linha no balanço. Ansiedade, depressão e burnout já estão entre as
          maiores causas de afastamento do trabalho no Brasil. Enquanto isso,
          quem fica absorve a sobrecarga, a entrega cai e os melhores talentos
          vão embora.
        </p>

        <div className="interest-numbers-grid">
          {STATS.map((stat) => (
            <div key={stat.number} className="interest-numbers-card">
              <span className="interest-numbers-stat">{stat.number}</span>
              <p className="interest-numbers-support">{stat.support}</p>
              <p className="interest-numbers-source">{stat.source}</p>
            </div>
          ))}
        </div>

        <p className="interest-numbers-transition">
          A boa notícia: dá para virar esse jogo. E quem estrutura o cuidado
          primeiro colhe primeiro, no clima, no caixa e na segurança documental.
        </p>
      </div>
    </section>
  );
}

export default InterestNumbers;
