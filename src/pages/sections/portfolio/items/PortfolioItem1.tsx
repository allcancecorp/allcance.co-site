// Swiper Slider
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

// Images
import item1 from '../../../../assets/images/portfolio/items/item1/SC_palestra01.webp';
import item2 from '../../../../assets/images/portfolio/items/item1/SC_palestra02.webp';
import item3 from '../../../../assets/images/portfolio/items/item1/SC_palestra04.webp';

// ------------------- Palestras

function PortfolioItem1() {
  return (
    <div className="portfolio-content">
      <div className="image-slider-wrapper relative">
        <Swiper
          pagination={{ clickable: true }}
          loop={true}
          modules={[Pagination]}
          className="portfolio-item-slider"
        >
          <SwiperSlide>
            <img src={item1} alt="portfolio item 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={item2} alt="portfolio item 2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={item3} alt="portfolio item 3" />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="two_third">
        <h1>Palestras Corporativas</h1>
        <p className="small-text">
          Com larga experiência, há mais de 15 anos Sandro Cabral ministra palestras e treinamentos com foco
          em desenvolvimento humano, autoconhecimento e gestão emocional. 
        </p>
        <p>
        Com mais de 15 anos de experiência como palestrante, impactei milhares de pessoas por meio de conteúdos voltados ao autodesenvolvimento. 
        As palestras despertam reflexões profundas, fortalecem habilidades e geram transformações reais, ajudando profissionais e empresas a 
        alcançarem mais equilíbrio, performance e propósito em suas jornadas.
          <br />
        </p>
      </div>
      <div className="one_third last">
        <br />
        <div className="info-code">
          <p className="info-code-title">PALESTRAS</p>
          <p className="info-code-content">Corporativas</p>
        </div>
        <div className="info-code">
          <p className="info-code-title">CLIENTES</p>
          <p className="info-code-content">OK Alimentos | AMOEDO | MaxPlast | SICOOB | Receita Federal | 12o Cartório | Estácio | UNIME | </p>
        </div>
        <div className="info-code">
          <p className="info-code-title">PERÍODO</p>
          <p className="info-code-content">Desde 2010</p>
        </div>
        <div className="info-code">
          <p className="info-code-title">ÁREAS</p>
          <p className="info-code-content">Autoconhecimento | Gestão Emocional | Comunicação</p>
        </div>
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

export default PortfolioItem1;
