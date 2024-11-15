import { renderLivros } from "./exibirLivros.js";

export function filtrarLivros(livros) {
  const botoes = document.querySelectorAll(".btn");
  botoes.forEach((btn) => {
    btn.addEventListener("click", () => {
      const botaoClicado = document.getElementById(btn.id);
      if(botaoClicado.value === "preco"){
        let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco);
        renderLivros(livrosOrdenados);
      } else if (botaoClicado.value === "disponivel") {
        let livrosFiltrados = livros.filter(
          (livro) => livro.quantidade > 0
        );
        renderLivros(livrosFiltrados);
        somaLivrosDisponiveis(livrosFiltrados);
      } else {
        let livrosFiltrados = livros.filter(
          (livro) => livro.categoria === botaoClicado.value
        );
        renderLivros(livrosFiltrados);
      }
    });
  });
}

function somaLivrosDisponiveis(livros) {
  let soma = 0;
  livros.forEach((livro) => {
    soma += livro.preco;
  });
  const valorElemento = document.getElementById("valor_total_livros_disponiveis");
  valorElemento.innerHTML = `
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${soma.toFixed(2)}</span></p>
    </div>
  `
}