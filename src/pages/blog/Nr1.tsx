// Swiper Slider
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

// UI Components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Images
import img1 from "../../assets/images/news/posts/NR1.webp";
import img2 from "../../assets/images/news/posts/NR2.webp";
import img3 from "../../assets/images/news/posts/NR3.webp";

// Icons
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

// ---------------

function Nr1() {
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
            <h1 className="entry-title">A nova NR1 e o impacto nas empresas</h1>

            <div className="post-info-wrapper">
              <div className="entry-info">
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
                <div className="entry-date published">10 Setembro, 2024</div>
                <div className="author-nickname">
                  <a href="#" rel="author">
                    Sandro Cabral
                  </a>
                </div>
              </div>
            </div>

            <div className="entry-content">
              <p>
                A nova NR1 reforça às empresas a obrigação de incluir riscos psicossociais em seus Programas de
                Gerenciamento de Riscos (PGRs). Além de evitar sanções legais, essa medida protege a saúde mental dos colaboradores,
                prevenindo doenças como burnout e ansiedade. Implementar um PGR eficaz é garantir produtividade sustentável,
                compliance trabalhista e um ambiente saudável.
              </p>
              <br />
              <blockquote>
                <p>
                  A partir de 25 de maio de 2025, torna-se obrigatório implementar o PGR conforme a NR1. Empresas precisam agir rapidamente,
                  realizando diagnóstico preciso e estabelecendo ações concretas para gerenciar riscos psicossociais. Adiar essas medidas pode
                  acarretar multas e responsabilizações legais. Antecipar-se é cuidar da saúde emocional dos colaboradores e fortalecer sua reputação no mercado.
                </p>
              </blockquote>
              <br />
              <div>
                <p >
                  <a href="https://forms.gle/36NkGbLZ7GjLYNCT7" target="_blank">
                    <h5>Clique para preencher o formulário de análise da NR1</h5>
                  </a>
                </p>
              </div>
              <p>
                A Allcance Educação é sua parceira estratégica para atender às exigências da nova NR1. Auxiliamos você, empresário, analisando profundamente o
                cenário atual da sua empresa, identificando riscos psicossociais e estruturando planos de ação objetivos e personalizados. Nosso compromisso é garantir
                um PGR eficiente e prático, alinhado às normas legais, fortalecendo o bem-estar de seus colaboradores e protegendo sua empresa de penalidades legais.
              </p>
              <br />
              <p className="video-iframe">
                <iframe src="https://www.youtube.com/embed/ucGqH336xk0?si=O229IlfzhsdFT3Ny"></iframe>
              </p>
              <br />
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
            <a href="/Cultura" className="nav-post-link">
              <FontAwesomeIcon icon={faArrowLeft} className="icon" />
              <p>Como a cultura impacta no seu negócio</p>
            </a>

            <div className="cat-links">
              <ul>
                <li>
                  <a href="#">Cultura</a>
                </li>
              </ul>
            </div>
          </div> */}

          {/* <div className="nav-next post-navigator">
            <a href="/Disc" className="nav-post-link">
              <FontAwesomeIcon icon={faArrowRight} className="icon" />
              <p>Conheça o seu perfil comportamental</p>
            </a>
            <div className="cat-links">
              <ul>
                <li>
                  <a href="#">DISC</a>
                </li>
                <li>
                  <a href="#">Comportamento</a>
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

export default Nr1;
