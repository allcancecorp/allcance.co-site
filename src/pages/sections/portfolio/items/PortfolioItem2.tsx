// Images
import img1 from '../../../../assets/images/portfolio/items/item2/WJ_Disc01.webp';
import img2 from '../../../../assets/images/portfolio/items/item2/WJ_Disc02.webp';
import img3 from '../../../../assets/images/portfolio/items/item2/WJ_Disc03.webp';

// ------------------- DISC

function PortfolioItem2() {
  return (
    <div className="portfolio-content">
      <h1 className="center-text">Análise DISC</h1>
      <br />
      <div className="one_half">
        A metodologia DISC é um modelo de análise comportamental que categoriza os perfis em quatro estilos:
        Dominância (D), Influência (I), Estabilidade (S) e Conformidade (C). No ambiente corporativo,
        o DISC é essencial para melhorar a comunicação, otimizar a liderança e formar equipes mais produtivas.
        A experiência de passar por uma sessão devolutiva é única e transformadora.
      </div>
      <div className="one_half last">
        Com ele, empresas identificam forças e desafios dos colaboradores, promovendo gestão personalizada, maior engajamento
        e melhores resultados organizacionais. Com mais de 200 análises realizadas e sessões de devolutivas, o analista Weber Jatahy
        construiu uma sólida experiência como profissional em comportamento humano e relacionamentos.
      </div>
      <div className="clear"></div>
      <br />
      <div className="margin-0">
        <img src={img1} alt="" />
      </div>
      <div className="one_half margin-0">
        <img src={img2} alt="" />
      </div>
      <div className="one_half last margin-0">
        <img src={img3} alt="" />
      </div>
      <div className="clear"></div>
      <br />
      <div className="button-holder center-text">
        <a href="https://wa.me/message/FF7M7WFQVQ7OP1" className="button" target='_blank'>
          CONTRATE
        </a>
      </div>
    </div>

  );
}

export default PortfolioItem2;
