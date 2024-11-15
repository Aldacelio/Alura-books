import { renderLivros } from './exibirLivros.js';
import { aplicarDesconto } from './descontoLivros.js';

let livros = [];

const endpointAPI =
  "https://guilhermeonrails.github.io/casadocodigo/livros.json";

getLivros();

async function getLivros() {
  try {
    const response = await fetch(endpointAPI);
    livros = await response.json();
    //console.table(livros);
    let livrosDesconto = aplicarDesconto(livros);
    console.table(livrosDesconto);
    renderLivros(livrosDesconto);
  } catch (error) {
    console.log("Não conseguiu buscar os livros", error);
  }
}
