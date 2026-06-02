// Images
import img1 from '../../../../assets/images/portfolio/items/item4/eloa_cert_01.webp';
import img2 from '../../../../assets/images/portfolio/items/item4/eloa.webp';

// ------------------- Universidade Corporativa

function PortfolioItem4() {
  return (
    <div className="portfolio-content">
      <div className="one_half margin-0">
        <img src={img1} alt="" />
      </div>
      <div className="one_half last margin-0">
        <img src={img2} alt="" />
      </div>
      <div className="clear"></div>
      <br />

      <div className="one_third">
        <br />
        <br />
        <div className="info-code">
          <p className="info-code-title">UNIVERSIDADE</p>
          <p className="info-code-content">Corporativa</p>
        </div>
        <div className="info-code">
          <p className="info-code-title">CLIENTE</p>
          <p className="info-code-content">OK Alimentos</p>
        </div>
        <div className="info-code">
          <p className="info-code-title">DATA</p>
          <p className="info-code-content">2024-2025</p>
        </div>
        <div className="info-code">
          <p className="info-code-title">PROFESSOR</p>
          <p className="info-code-content">Weber Jatahy</p>
        </div>
      </div>
      <div className="two_third last">
        <h1>Universidade Corporativa</h1>
        <p className="small-text">
          Aulas semanais regulares com capacidade de transformar equipes.
        </p>
        <br />
        <p>
          Comunicação, liderança, gestão emocional e organização pessoal estão 
          entre alguns dos temas abordados nas aulas. Todo o conteúdo é acompanhado de 
          apostilas e slides dispostos às turmas. Transforme o seu time pela educação continuada.
        </p>
      </div>
      <div className="button-holder center-text">
        <a href="https://wa.me/message/FF7M7WFQVQ7OP1" className="button" target='_blank'>
          CONTRATE
        </a>
      </div>
      <div className="clear"></div>
    </div>
  );
}

export default PortfolioItem4;
