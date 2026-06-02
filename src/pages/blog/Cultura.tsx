// Swiper Slider
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

// UI Components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Images
import img1 from "../../assets/images/news/posts/Cult1.webp";
import img2 from "../../assets/images/news/posts/Cult2.webp";
import img3 from "../../assets/images/news/posts/Cult3.webp";

// Icons
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

// ---------------

function Cultura() {
  return (
    <div
      id="content"
      className="site-content center-relative single single-post"
      style={{ marginBottom: "100px" }}
    >
      <article>
        <div className="single-post-header-content content-1170 center-relative">
          <div className="image-slider-wrapper relative">
            <Swiper
              pagination={{ clickable: true }}
              grabCursor={true}
              loop={true}
              modules={[Pagination]}
              className="portfolio-item-slider"
            >
              <SwiperSlide>
                <img src={img1} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img2} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img3} />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        <div className="post-wrapper content-1170 center-relative">
          <div className="single-content-wrapper center-relative">
            <h1 className="entry-title">Cultura Organizacional</h1>

            <div className="post-info-wrapper">
              <div className="entry-info">
                <div className="cat-links">
                  <ul>
                    <li>
                      <a href="#">Cultura</a>
                    </li>
                    <li>
                      <a href="#">Clima</a>
                    </li>
                  </ul>
                </div>
                <div className="entry-date published">10 Agosto, 2024</div>
                <div className="author-nickname">
                  <a href="#" rel="author">
                    Time Allcance
                  </a>
                </div>
              </div>
            </div>

            <div className="entry-content">
              <p>
                Uma cultura empresarial forte e bem estruturada é a base para o crescimento sustentável, pois alinha valores, propósito
                e comportamento, criando um ambiente de engajamento e alta performance. Negócios com identidade clara atraem talentos,
                fortalecem a marca e aumentam a produtividade, promovendo inovação e resiliência diante dos desafios do mercado.
              </p>
              <br />
              <blockquote>
                <p>
                  Reduza o turn-over e aumente o faturamento com profissionais adaptados e conectados aos verdadeiros valores e compromissos
                  de seu empreendimento. Isto é uma das vantagens de se trabalhar a cultura Organizacional.
                </p>
              </blockquote>
              <br />
              <p>
                Investir no desenvolvimento da cultura organizacional não é um custo, mas um grande diferencial competitivo.
                Empresas com valores sólidos e equipe engajada aumentam a produtividade, fortalecem a marca e impulsionam vendas.
                Em um mercado cada vez mais competitivo, uma cultura bem definida gera retenção de talentos, melhora o clima organizacional e
                impacta diretamente no faturamento, tornando o negócio mais sustentável e preparado para crescer.
              </p>
              <br />
              <p className="video-iframe">
                <iframe src="https://www.youtube.com/embed/qUeYnJlUFJw?si=KUYo5-CFkxv5WVyI"></iframe>
              </p>
              <br />
              <p>
                O próximo passo é rodar uma pesquisa sobre clima dentro de sua empresa, após analisar como está o ambiente de trabalho entre seus
                colaboradores, é projetar um plano de ação contendo COMO os pontos de reclamação podem ser dissolvidos ou melhorados. Entre em contato para podermos lhe ajudar.
              </p>
              <div>
                <p>
                  <a href="https://wa.me/message/FF7M7WFQVQ7OP1" target="_blank">
                    <h5>Clique aqui para falar conosco e transformar seus desafios em resultados.</h5>
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="clear"></div>
        </div>

      </article>



      <div className="nav-links">
        <div className="content-740 center-relative post-nav-links">
          {/* <div className="nav-previous post-navigator">
            <a href="/Disc" className="nav-post-link">
              <FontAwesomeIcon icon={faArrowLeft} className="icon" />
              <p>Perfil comportamental</p>
            </a>

            <div className="cat-links">
              <ul>
                <li>
                  <a href="#">DISC</a>
                </li>
              </ul>
            </div>
          </div> */}

          {/* <div className="nav-next post-navigator">
            <a href="/Nr1" className="nav-post-link">
              <FontAwesomeIcon icon={faArrowRight} className="icon" />
              <p>Impactos da nova NR1 nos negócios</p>
            </a>
            <div className="cat-links">
              <ul>
                <li>
                  <a href="#">NR1</a>
                </li>
                <li>
                  <a href="#">PGR</a>
                </li>
              </ul>
            </div>
          </div> */}

          <div className="clear"></div>
        </div>
      </div>
    </div>
  );
}

export default Cultura;
