import { renderLivros } from './exibirLivros.js';

let livros = [];

const endpointAPI =
  "https://guilhermeonrails.github.io/casadocodigo/livros.json";

getLivros();

async function getLivros() {
  try {
    const response = await fetch(endpointAPI);
    livros = await response.json();
    console.table(livros);
    renderLivros(livros);
  } catch (error) {
    console.log("Não conseguiu buscar os livros", error);
  }
}
