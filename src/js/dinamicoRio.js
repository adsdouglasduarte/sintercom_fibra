import logoOficial from "url:../assets/img/LOGO_SITE.png";
import hero1 from "url:../assets/img/HERO-01.png";
import hero2 from "url:../assets/img/HERO-02.png";
import hero3 from "url:../assets/img/HERO-03.png";


class TesteRio extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <!-- Navbar principal -->
      <nav class="nav__geral navbar navbar-expand-lg navbar-light bg-light px-3 fixed-top shadow-sm">
        <div class="container-fluid">
          <a class="navbar-brand fw-bold text-primary d-flex align-items-center" href="#">
              <img src="${logoOficial}" alt="Logo Sintercom" class="logo__img me-2" />
              Rio de Janeiro
            </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Sobre</a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="suporteDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Para Você
                </a>
                <ul class="dropdown-menu" aria-labelledby="suporteDropdown">
                  <li><a class="dropdown-item" href="#">Ineternet residencial</a></li>
                  <li><a class="dropdown-item" href="#">Plano Móvel</a></li>
                </ul>
              </li>
               <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="suporteDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Empresas
                </a>
                <ul class="dropdown-menu" aria-labelledby="suporteDropdown">
                  <li><a class="dropdown-item" href="#">Corporativo</a></li>
                  <li><a class="dropdown-item" href="#">Link Dedicado</a></li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="suporteDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Suporte
                </a>
                <ul class="dropdown-menu" aria-labelledby="suporteDropdown">
                  <li><a class="dropdown-item" href="#">Central do Assinante</a></li>
                  <li><a class="dropdown-item" href="#">Fale com Theo</a></li>
                  <li><a class="dropdown-item" href="#">Apps Tutorial</a></li>
                  <li><a class="dropdown-item" href="#">Contato</a></li>
                </ul>
              </li>
            </ul>
          </div>

          <div class="dropdown ms-auto">
            <button
              class="btn btn-outline-primary dropdown-toggle"
              type="button"
              id="dropdownEstados"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Selecionar Estado
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownEstados">
              <li><a class="dropdown-item estado" data-estado="RJ" href="#">Rio de Janeiro</a></li>
              <li><a class="dropdown-item estado" data-estado="PB" href="#">João Pessoa</a></li>
              <li><a class="dropdown-item estado" data-estado="ES" href="#">Vitória</a></li>
            </ul>
          </div>
        </div>
      </nav>

      <!-- Hero -->
<header class="hero__carousel position-relative text-white">
  <div id="heroCarousel" class="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="3000">
    <div class="carousel-inner">

      <div class="carousel-item active">
        <picture>
          <source media="(max-width: 768px)" srcset="${hero1}">
          <img src="${hero1}" class="d-block w-100 hero__img" alt="Banner 1">
        </picture>
        <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
          <h1 class="display-4 fw-bold">Conecte-se ao Futuro</h1>
          <p class="lead mb-4">Internet rápida e estável para sua casa ou empresa.</p>
          <div>
            <a href="#" class="btn btn-light btn-lg me-2">Assine Agora</a>
            <a href="#" class="btn btn-outline-light btn-lg">Saiba Mais</a>
          </div>
        </div>
      </div>

      <div class="carousel-item">
        <picture>
          <source media="(max-width: 768px)" srcset="${hero2}">
          <img src="${hero2}" class="d-block w-100 hero__img" alt="Banner 2">
        </picture>
        <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
          <h1 class="display-4 fw-bold">Planos Sob Medida</h1>
          <p class="lead mb-4">Escolha o plano perfeito para o seu estilo de vida.</p>
          <div>
            <a href="#" class="btn btn-light btn-lg me-2">Ver Planos</a>
            <a href="#" class="btn btn-outline-light btn-lg">Contato</a>
          </div>
        </div>
      </div>

      <div class="carousel-item">
        <picture>
          <source media="(max-width: 768px)" srcset="${hero3}">
          <img src="${hero3}" class="d-block w-100 hero__img" alt="Banner 3">
        </picture>
        <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
          <h1 class="display-4 fw-bold">Entretenimento Sem Limites</h1>
          <p class="lead mb-4">Assista, jogue e navegue com qualidade máxima.</p>
          <div>
            <a href="#" class="btn btn-light btn-lg me-2">Experimente</a>
            <a href="#" class="btn btn-outline-light btn-lg">Saiba Mais</a>
          </div>
        </div>
      </div>

    </div>

    <!-- Controles -->
    <button class="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Anterior</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Próximo</span>
    </button>
  </div>
</header>


      <!-- Conteúdo principal -->
      <main class="conteudo__geral--rio">
      <!-- Seção de Planos Residenciais -->
        <section class="py-5 bg-white text-center">
          <div class="container">
            <h2>Planos Residenciais</h2>
            <p class="mb-4">Escolha o plano que melhor se adapta às suas necessidades.</p>
            <div class="row">
              <div class="col-md-4 mb-4">
                <div class="card h-100">
                  <div class="card-body">
                    <h5 class="card-title">Plano Básico</h5>
                    <p class="card-text">Descrição do plano básico.</p>
                    <p class="card-text fw-bold">R$ 99,90/mês</p>
                    <a href="#" class="btn btn-primary">Assinar Agora</a>
                  </div>
                </div>
              </div>
              <div class="col-md-4 mb-4">
                <div class="card h-100">
                  <div class="card-body">
                    <h5 class="card-title">Plano Intermediário</h5>
                    <p class="card-text">Descrição do plano intermediário.</p>
                    <p class="card-text fw-bold">R$ 149,90/mês</p>
                    <a href="#" class="btn btn-primary">Assinar Agora</a>
                  </div>
                </div>
              </div>
              <div class="col-md-4 mb-4">
                <div class="card h-100">
                  <div class="card-body">
                    <h5 class="card-title">Plano Avançado</h5>
                    <p class="card-text">Descrição do plano avançado.</p>
                    <p class="card-text fw-bold">R$ 199,90/mês</p>
                    <a href="#" class="btn btn-primary">Assinar Agora</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--cards mostrando o que Todos os planos tem iguais em relação a APPs-->
          <div class="container mt-5">
            <h3>Todos os planos incluem:</h3>
            <div class="row">
              <div class="col-md-3 mb-3">
                <div class="card h-100 text-center">
                  <div class="card-body">
                    <i class="bi bi-phone-fill display-4 text-primary"></i>
                    <h5 class="card-title mt-3">App Mobile</h5>
                    <p class="card-text">Acesse seus serviços de qualquer lugar.</p>
                  </div>
                </div>
              </div>
              <div class="col-md-3 mb-3">
                <div class="card h-100 text-center">
                  <div class="card-body">
                    <i class="bi bi-shield-lock-fill display-4 text-primary"></i>
                    <h5 class="card-title mt-3">Segurança</h5>
                    <p class="card-text">Proteção avançada para sua conexão.</p>
                  </div>
                </div>
              </div>
              <div class="col-md-3 mb-3">
                <div class="card h-100 text-center">
                  <div class="card-body">
                    <i class="bi bi-speedometer2 display-4 text-primary"></i>
                    <h5 class="card-title mt-3">Alta Velocidade</h5>
                    <p class="card-text">Navegue sem interrupções.</p>
                  </div>
                </div>
              </div>
              <div class="col-md-3 mb-3">
                <div class="card h-100 text-center">
                  <div class="card-body">
                    <i class="bi bi-headset display-4 text-primary"></i>
                    <h5 class="card-title mt-3">Suporte 24/7</h5>
                    <p class="card-text">Estamos aqui para ajudar a qualquer hora.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--Call Action grande para guiar o usuario ja decidido a compra -->
          <div class="container mt-5">
            <div class="p-5 bg-primary text-white rounded text-center">
              <h3 class="mb-4">Pronto para começar?</h3>
              <a href="#" class="btn btn-light btn-lg">Assine Agora e Aproveite!</a>
            </div>
          </div>
        </section>
        <!criar seção de hup de Apps standard e Premium>
        <section class="py-5 bg-light text-center">
          <div class="container">
            <h2>Apps Standard e Premium</h2>
            <p class="mb-4">Descubra os aplicativos incríveis que oferecemos.</p>
            <div class="row">
              <div class="col-md-6 mb-4">
                <div class="card h-100">
                  <div class="card-body">
                    <h5 class="card-title">Apps Standard</h5>
                    <ul class="list-unstyled">
                      <li>App 1: Descrição do App 1.</li>
                      <li>App 2: Descrição do App 2.</li>
                      <li>App 3: Descrição do App 3.</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-md-6 mb-4">
                <div class="card h-100">
                  <div class="card-body">
                    <h5 class="card-title">Apps Premium</h5>
                    <ul class="list-unstyled">
                      <li>App A: Descrição do App A.</li>
                      <li>App B: Descrição do App B.</li>
                      <li>App C: Descrição do App C.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!--Seção onde usuario ver banner com um botão de ação, 
        sera a seção tutorial de como ativar o App no seu plano 
        o butão sera um redirecionamento para um link o target deve ser _blank-->
        <section class="py-5 bg-white text-center">
          <div class="container">
            <div class="p-5 bg-secondary text-white rounded">
              <h3 class="mb-4">Ative seus Apps agora mesmo!</h3>
              <p class="mb-4">Siga nosso tutorial simples para começar a usar seus aplicativos favoritos.</p>
              <a href="https://example.com/tutorial" target="_blank" class="btn btn-light btn-lg">Ver Tutorial</a>
            </div>
          </div>
        </section>
        <!--Seção do plano móvel apenas dois cards mostrando os dois planos: 15 Giga 39,90/mês e 40 Giga 59,90/mês-->
        <section class="py-5 bg-light text-center">
          <div class="container">
            <h2>Planos Móveis</h2>
            <p class="mb-4">Conecte-se em qualquer lugar com nossos planos móveis.</p>
            <div class="row justify-content-center">
              <div class="col-md-4 mb-4">
                <div class="card h-100">
                  <div class="card-body">
                    <h5 class="card-title">Plano 15 Giga</h5>
                    <p class="card-text">Navegação rápida e eficiente.</p>
                    <p class="card-text fw-bold">R$ 39,90/mês</p>
                    <a href="#" class="btn btn-primary">Assinar Agora</a>
                  </div>
                </div>
              </div>
              <div class="col-md-4 mb-4">
                <div class="card h-100">
                  <div class="card-body">
                    <h5 class="card-title">Plano 40 Giga</h5>
                    <p class="card-text">Mais dados para suas necessidades.</p>
                    <p class="card-text fw-bold">R$ 59,90/mês</p>
                    <a href="#" class="btn btn-primary">Assinar Agora</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!--Aqui sera a seção empresarial
        usuario verá um carousel com 3 banners
        com um leve overlay ao passar o mouse
        vai aparecer a lista de serviços que e oferecido
        abaixo do carousel um call action direcionando a falar com consultor-->
        <section class="py-5 bg-light text-center">
          <div class="container">
            <h2>Planos Empresariais</h2>
            <p class="mb-4">Soluções personalizadas para o seu negócio.</p>
            <div id="carouselEmpresarial" class="carousel slide mb-4" data-bs-ride="carousel" >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="https://placehold.co/600x400" class="d-block w-100" alt="Empresa 1">
                  <div class="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-3">
                    <h5>Serviço 1</h5>
                    <p>Descrição do serviço 1.</p>
                  </div>
                </div>
                <div class="carousel-item">
                  <img src="https://placehold.co/600x400" class="d-block w-100" alt="Empresa 2">
                  <div class="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-3">
                    <h5>Serviço 2</h5>
                    <p>Descrição do serviço 2.</p>
                  </div>
                </div>
                <div class="carousel-item">
                  <img src="https://placehold.co/600x400" class="d-block w-100" alt="Empresa 3">
                  <div class="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-3">
                    <h5>Serviço 3</h5>
                    <p>Descrição do serviço 3.</p>
                  </div>
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselEmpresarial" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselEmpresarial" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
            <a href="#" class="btn btn-primary btn-lg">Fale com um Consultor</a>
          </div>
          <!--casos de sucesso, o usuario vera um carousel moderno com logos em formato circular passando
          automatica e ao usuario interar com hover parar o carousel ao retirar o mouse de cima volta 
          o carousel e como uma linha de logos uma ao lado da outra com um gap espaçando-->
          <div class="container mt-5">
            <h3>Casos de Sucesso</h3>
            <div id="carouselLogos" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner d-flex align-items-center">
                <div class="carousel-item active">
                  <div class="d-flex justify-content-center gap-4">
                    <img src="https://placehold.co/100x100" class="rounded-circle" alt="Cliente 1">
                    <img src="https://placehold.co/100x100" class="rounded-circle" alt="Cliente 2">
                    <img src="https://placehold.co/100x100" class="rounded-circle" alt="Cliente 3">
                    <img src="https://placehold.co/100x100" class="rounded-circle" alt="Cliente 4">
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="d-flex justify-content-center gap-4">
                    <img src="https://placehold.co/100x100" class="rounded-circle" alt="Cliente 5">
                    <img src="https://placehold.co/100x100" class="rounded-circle" alt="Cliente 6">
                    <img src="https://placehold.co/100x100" class="rounded-circle" alt="Cliente 7">
                    <img src="https://placehold.co/100x100" class="rounded-circle" alt="Cliente 8">
                  </div>
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselLogos" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselLogos" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </section>
        <!--Seção do autoatendimento
        usuario vera um banner com dois btns para call action
        pelo whatsApp o outro Via WEB
        redirecionamento com target _blank-->
        <section class="py-5 bg-white text-center">
          <div class="container">
            <div class="p-5 bg-primary text-white rounded">
              <h3 class="mb-4">Precisa de Ajuda?</h3>
              <p class="mb-4">Acesse nosso autoatendimento ou fale conosco pelo WhatsApp.</p>
              <a href="https://wa.me/5599999999999" target="_blank" class="btn btn-light btn-lg me-2">Falar pelo WhatsApp</a>
              <a href="https://example.com/autoatendimento" target="_blank" class="btn btn-outline-light btn-lg">Acessar Autoatendimento</a>
            </div>
          </div>
        </section>
        <!--fomulário de contato simples
        usuario vera um formulário simples com nome, email, telefone e mensagem
        abaixo do formulário um btn de enviar
        o formulário não precisa de funcionalidade real  apenas o layout mas irei colocar o envio pelo formspree-->
        <section class="py-5 bg-light text-center">
          <div class="container">
            <h2>Contato</h2>
            <p class="mb-4">Envie-nos uma mensagem e entraremos em contato com você.</p>
            <form action="https://formspree.io/f/yourformid" method="POST" class="mx-auto" style="max-width: 600px;">
              <div class="mb-3 text-start">
                <label for="nome" class="form-label">Nome</label>
                <input type="text" class="form-control" id="nome" name="nome" required>
              </div>
              <div class="mb-3 text-start">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="email" name="email" required>
              </div>
              <div class="mb-3 text-start">
                <label for="telefone" class="form-label">Telefone</label>
                <input type="tel" class="form-control" id="telefone" name="telefone" required>
              </div>
              <div class="mb-3 text-start">
                <label for="mensagem" class="form-label">Mensagem</label>
                <textarea class="form-control" id="mensagem" name="mensagem" rows="4" required></textarea>
              </div>
              <button type="submit" class="btn btn-primary btn-lg">Enviar Mensagem</button>
            </form>
          </div>
        </section>
        <!--faq com perguntas recorrentes e breves explicações-->
        <section class="py-5 bg-white text-center">
          <div class="container">
            <h2>Perguntas Frequentes</h2>
            <div class="accordion mt-4" id="faqAccordion">
              <div class="accordion-item">
                <h2 class="accordion-header" id="faqHeadingOne">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapseOne" aria-expanded="true" aria-controls="faqCollapseOne">
                    Como faço para assinar um plano?
                  </button>
                </h2>
                <div id="faqCollapseOne" class="accordion-collapse collapse show" aria-labelledby="faqHeadingOne" data-bs-parent="#faqAccordion">
                  <div class="accordion-body">
                    Você pode assinar um plano clicando no botão "Assinar Agora" na seção de planos.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class=" accordion-header" id="faqHeadingTwo">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapseTwo" aria-expanded="false" aria-controls="faqCollapseTwo">
                    Quais métodos de pagamento são aceitos?
                  </button>
                </h2>
                <div id="faqCollapseTwo" class="accordion-collapse collapse" aria-labelledby="faqHeadingTwo" data-bs-parent="#faqAccordion">
                  <div class="accordion-body">
                    Aceitamos diversos métodos de pagamento, incluindo cartão de crédito, débito e boleto bancário.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="faqHeadingThree">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapseThree" aria-expanded="false" aria-controls="faqCollapseThree">
                    Como posso ativar os aplicativos incluídos no meu plano?
                  </button>
                </h2>
                <div id="faqCollapseThree" class="accordion-collapse collapse" aria-labelledby="faqHeadingThree" data-bs-parent="#faqAccordion">
                  <div class="accordion-body">
                    Você pode ativar os aplicativos seguindo o tutorial na seção "Ative seus Apps agora mesmo!".
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <!-- Footer -->
      <footer class="footer__geral bg-dark text-white text-center py-4">
        <div class="container">
          <p class="mb-0">&copy; 2024 Sintercom RJ. Todos os direitos reservados.</p>
        </div>
      </footer>
    `;

    // Reativar os eventos do dropdown
    this.querySelectorAll(".dropdown-item.estado").forEach((item) => {
      item.addEventListener("click", (e) => {
        e.preventDefault();
        const novoEstado = e.target.dataset.estado;
        localStorage.setItem("estadoSelecionado", novoEstado);
        location.reload(); // recarrega para aplicar o novo componente
      });
    });
  }
}

customElements.define("teste-rio", TesteRio);
