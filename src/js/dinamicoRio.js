class TesteRio extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <!-- Navbar principal -->
      <nav class="nav__geral navbar navbar-expand-lg navbar-light bg-light px-3 fixed-top shadow-sm">
        <div class="container-fluid">
          <a class="navbar-brand fw-bold text-primary" href="#">Sintercom RJ</a>
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
      <header class="header__geral d-flex align-items-center text-white" >
        <div class="container text-center">
          <h1 class="display-4 fw-bold">Seu Título Impressionante</h1>
          <p class="lead mb-4">Uma descrição curta e envolvente do seu produto ou serviço.</p>
          <a href="#" class="btn btn-light btn-lg me-2">Ação Principal</a>
          <a href="#" class="btn btn-outline-light btn-lg">Ação Secundária</a>
        </div>
      </header>

      <!-- Conteúdo principal -->
      <main class="conteudo__geral--rio">
        <section class="py-5 bg-white text-center">
          <div class="container">
            <h2>Planos Residenciais</h2>
          </div>
        </section>

        <!-- outras seções -->
      </main>
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
