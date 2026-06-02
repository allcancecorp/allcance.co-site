// Images
import img1 from '../../../../assets/images/portfolio/items/item3/DHO1.webp';
// import img2 from '../../../../assets/images/portfolio/items/item3/time_allcance.webp';
// import img3 from '../../../../assets/images/portfolio/items/item3/palestraAMOEDO.webp';

// ------------------- DHO

function PortfolioItem3() {
  return (
    <div className="portfolio-content">
      <h1 className="center-text">Departamento Humano Organizacional</h1>
     
      <br />
      <p>
        <img className="aligncenter bottom-50" src={img1} alt="" />
        {/* <img className="aligncenter bottom-50" src={img2} alt="" /> */}
        {/* <img className="aligncenter" src={img3} alt="" /> */}
      </p>
      <h6 className="center-text">Um setor pensado e adaptado às necessidades de seu negócio. Atendimentos, palestras, 
        eventos e ações para fortalecer a cultura e o clima organizacional
      </h6>
      <div className="entry-content">
      O DHO (Desenvolvimento Humano e Organizacional) é a área responsável por potencializar talentos dentro de uma empresa, 
      garantindo que as pessoas estejam alinhadas à cultura organizacional e contribuam para o crescimento do negócio. 
      Ele vai além do RH tradicional, focando no desenvolvimento contínuo dos colaboradores e da empresa como um todo.
      </div>
      <br />
      <div className="entry-content">
      O DHO não foca apenas no "treinar", mas no "desenvolver" pessoas e negócios, garantindo que as estratégias de gestão 
      de pessoas estejam alinhadas aos objetivos da empresa.
      </div>
      <br />
      <div className="button-holder center-text">
        <a href="https://wa.me/message/FF7M7WFQVQ7OP1" className="button" target='_blank'>
          CONTRATE
        </a>
      </div>
      <br />
    </div>
  );
}

export default PortfolioItem3;
