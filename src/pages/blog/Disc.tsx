// Swiper Slider
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

// UI Components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Images
import img1 from "../../assets/images/news/posts/DISC1.webp";
import img2 from "../../assets/images/news/posts/DISC2.webp";
import img3 from "../../assets/images/news/posts/DISC3.webp";

// Icons
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

// ---------------

function Disc() {
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
            <h1 className="entry-title">Conheça o seu perfil comportamental</h1>

            <div className="post-info-wrapper">
              <div className="entry-info">
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
                <div className="entry-date published">21 Junho, 2024</div>
                <div className="author-nickname">
                  <a href="#" rel="author">
                    Weber Jatahy
                  </a>
                </div>
              </div>
            </div>

            <div className="entry-content">
              <p>
                Conhecer seu perfil comportamental pela metodologia DISC é essencial para desenvolver autoconhecimento,
                inteligência emocional e comunicação eficaz. Ao compreender suas forças e desafios, o profissional aprimora sua tomada de decisão,
                liderança e relacionamentos interpessoais. Isso gera maior produtividade, equilíbrio emocional e adaptação às mudanças, impactando
                positivamente sua carreira e vida pessoal, além de fortalecer sua influência e desempenho em equipe.
              </p>
              <br />
              <blockquote>
                <p>
                  Uma vez que saiba qual é a sua tendência comportamental cabe a você decidir
                  quais habilidades (soft skills) irá aprimorar. Este conhecimento lhe é passado
                  por meio de uma sessão devolutiva com até 1h30 de duração onde são abordados mais
                  de 20 indicadores.
                </p>
              </blockquote>
              <br />
              <p>
                O processo da metodologia DISC começa com o envio do teste, que consiste em um questionário estruturado para identificar padrões
                comportamentais. Após a coleta das respostas, os dados são analisados para mapear o perfil do indivíduo com base nos quatro fatores DISC:
                Dominância, Influência, Estabilidade e Conformidade. A seguir, um relatório detalhado é gerado, destacando pontos fortes e desafios. Por fim,
                é agendada a sessão devolutiva (presencial ou online), onde nosso especialista Weber vai lhe detalhar os resultados, e orientar sobre
                aplicações práticas no trabalho e na vida pessoal.
              </p>
              <br />
              <p className="video-iframe">
                <iframe src="https://www.youtube.com/embed/wN4mYgw0XEA?si=rzwyKaPOze-wMrdx"></iframe>
              </p>
              <br />
              <p>
                Mais do apenas um simples teste, a metodologia DISC dá a oportunidade de se autoconhecer e colocar em prática um plano de ação coerente e possível.
                Entre em contato para fazer o seu!
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
            <a href="/Nr1" className="nav-post-link">
              <FontAwesomeIcon icon={faArrowLeft} className="icon" />
              <p>Impacto da nova NR1 nas empresas</p>
            </a>

            <div className="cat-links">
              <ul>
                <li>
                  <a href="#">NR1</a>
                </li>
              </ul>
            </div>
          </div> */}

          {/* <div className="nav-next post-navigator">
            <a href="/Cultura" className="nav-post-link">
              <FontAwesomeIcon icon={faArrowRight} className="icon" />
              <p>Cultura Organizacional</p>
            </a>
            <div className="cat-links">
              <ul>
                <li>
                  <a href="#">Cultura</a>
                </li>
                <li>
                  <a href="#">Organizacaional</a>
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

export default Disc;
