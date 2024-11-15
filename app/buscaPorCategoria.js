import { renderLivros } from "./exibirLivros.js";

export function filtrarLivros(livros) {
  const botoes = document.querySelectorAll(".btn");
  botoes.forEach((btn) => {
    btn.addEventListener("click", () => {
      const botaoClicado = document.getElementById(btn.id);
      let livrosFiltrados = livros.filter(
        (livro) => livro.categoria === botaoClicado.value
      );
      renderLivros(livrosFiltrados);
    });
  });
}
