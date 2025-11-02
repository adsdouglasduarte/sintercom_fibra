// carregamentoDinamico.js

const container = document.querySelector(".container-geral");

// Verifica estado salvo
let estadoSelecionado = localStorage.getItem("estadoSelecionado");

// Função que troca conteúdo
function carregarEstado(estado) {
  container.innerHTML = "";

  switch (estado) {
    case "RJ":
      container.innerHTML = `<teste-rio></teste-rio>`;
      break;
    case "PB":
      container.innerHTML = `<teste-joaopessoa></teste-joaopessoa>`;
      break;
    case "ES":
      container.innerHTML = `<teste-vitoria></teste-vitoria>`;
      break;
    default:
      container.innerHTML = `<teste-rio></teste-rio>`;
      break;
  }

  // Salva seleção
  localStorage.setItem("estadoSelecionado", estado);
}

// Carrega o último estado (ou RJ por padrão)
carregarEstado(estadoSelecionado || "RJ");
