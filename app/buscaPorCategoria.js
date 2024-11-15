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
      } else {
        let livrosFiltrados = livros.filter(
          (livro) => livro.categoria === botaoClicado.value
        );
        renderLivros(livrosFiltrados);
      }
    });
  });
}
