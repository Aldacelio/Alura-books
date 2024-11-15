import { renderLivros } from "./exibirLivros.js";
import { aplicarDesconto } from "./descontoLivros.js";
import { filtrarLivros } from "./buscaPorCategoria.js";

let livros = [];

const endpointAPI =
  "https://guilhermeonrails.github.io/casadocodigo/livros.json";

getLivros();

async function getLivros() {
  try {
    const response = await fetch(endpointAPI);
    livros = await response.json();
    let livrosDesconto = aplicarDesconto(livros);
    renderLivros(livrosDesconto);
    filtrarLivros(livrosDesconto);
  } catch (error) {
    console.log("Não conseguiu buscar os livros", error);
  }
}

