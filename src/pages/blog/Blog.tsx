// UI Components
import { Link as RouterLink } from 'react-router-dom';

// Images
import article1 from '../../assets/images/news/blog_img_01.webp';
import article2 from '../../assets/images/news/blog_img_02.webp';
import article3 from '../../assets/images/news/blog_img_03.webp';

// ---------------

function Blog() {
  /**
   * Returning window to (0 position) when going to single blog page
   */
  const handleClick = () => {
    window.scroll(0, 0);
  };

  return (
    <div
      id="content"
      className="site-content center-relative single single-post"
      style={{ marginTop: '100px', marginBottom: '120px' }}
    >
      <div className="blog-holder block center-relative">
        <article className="relative blog-item-holder center-relative has-post-thumbnail">
          <div className="blog-item-wrapper">
            <div className="post-thumbnail">
              <RouterLink to="/Nr1" onClick={handleClick}>
                <div className="post-thumbnail-image">
                  <img src={article1} alt="" />
                </div>
              </RouterLink>
            </div>
            <div className="entry-holder">
              <h2 className="entry-title">
                <RouterLink to="/Nr1" onClick={handleClick}>
                  Como preparar a sua empresa para a NR1
                </RouterLink>
              </h2>
              <div className="entry-info">
                <div className="entry-info-left">
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
                </div>
                <div className="excerpt">
                  <p>
                  Prepare sua empresa para a NR1 identificando perigos específicos da atividade, criando um Programa de Gerenciamento de Riscos (PGR), realizando treinamentos periódicos, mantendo comunicação clara com a equipe e realizando auditorias frequentes, promovendo uma cultura preventiva eficaz. …
                  </p>
                </div>
              </div>
              <RouterLink className="button" to="/Nr1">
                Leia mais
              </RouterLink>
            </div>
            <div className="clear"></div>
          </div>
        </article>

        <article className="relative blog-item-holder center-relative has-post-thumbnail">
          <div className="blog-item-wrapper">
            <div className="post-thumbnail">
              <RouterLink to="/Disc" onClick={handleClick}>
                <div className="post-thumbnail-image">
                  <img src={article2} alt="" />
                </div>
              </RouterLink>
            </div>
            <div className="entry-holder">
              <h2 className="entry-title">
                <RouterLink to="/Disc" onClick={handleClick}>
                  Saiba qual é o seu perfil comportamental
                </RouterLink>
              </h2>
              <div className="entry-info">
                <div className="entry-info-left">
                  <div className="cat-links">
                    <ul>
                      <li>
                        <a href="">DISC</a>
                      </li>
                      <li>
                        <a href="">Comportamento</a>
                      </li>
                    </ul>
                  </div>
                  <div className="entry-date published">21 Junho, 2023</div>
                </div>
                <div className="excerpt">
                  <p>
                  Conhecer seu perfil comportamental (DISC) permite entender melhor suas forças, limitações e estilo de comunicação, facilitando relacionamentos interpessoais, aprimorando liderança e aumentando sua produtividade e eficácia, resultando em maior satisfação pessoal e profissional.
                  </p>
                </div>
              </div>
              <RouterLink className="button" to="/Disc" onClick={handleClick}>
                Leia mais
              </RouterLink>
            </div>
            <div className="clear"></div>
          </div>
        </article>

        <article className="relative blog-item-holder center-relative has-post-thumbnail">
          <div className="blog-item-wrapper">
            <div className="post-thumbnail">
              <RouterLink to="/Cultura" onClick={handleClick}>
                <div className="post-thumbnail-image">
                  <img src={article3} alt="" />
                </div>
              </RouterLink>
            </div>
            <div className="entry-holder">
              <h2 className="entry-title">
                <RouterLink to="/Cultura" onClick={handleClick}>
                  Como a cultura organizacional impacta no seu negócio
                </RouterLink>
              </h2>
              <div className="entry-info">
                <div className="entry-info-left">
                  <div className="cat-links">
                    <ul>
                      <li>
                        <a href="">Cultura</a>
                      </li>
                    </ul>
                  </div>
                  <div className="entry-date published">10 Agosto, 2024</div>
                </div>
                <div className="excerpt">
                  <p>
                  A cultura organizacional influencia diretamente o sucesso do seu negócio, moldando atitudes, comportamentos e valores das equipes. Uma cultura positiva e alinhada gera maior engajamento, melhora a produtividade e reduz conflitos internos, criando ambientes inovadores e favorecendo resultados sustentáveis.
                  </p>
                </div>
              </div>
              <RouterLink className="button" to="/Cultura" onClick={handleClick}>
                Leia mais
              </RouterLink>
            </div>
            <div className="clear"></div>
          </div>
        </article>
      </div>
    </div>
  );
}

export default Blog;
