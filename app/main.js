let livros = [];

const endpointAPI =
  "https://guilhermeonrails.github.io/casadocodigo/livros.json";

const livrosElemento = document.getElementById("livros");

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

function renderLivros(listaDeLivros) {
  listaDeLivros.forEach((livro) => {
    livrosElemento.innerHTML += `
        <div class="livro">
            <img class="livro__images" src="${livro.imagem}" alt="${livro.alt}" />
            <h2 class="livro__titulo">${livro.titulo}</h2>
            <p class="livro__descricao">${livro.autor}</p>
            <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
            <div class="tags">
                <span class="tag">${livro.categoria}</span>
            </div>
    `;
  });
}
