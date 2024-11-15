export function aplicarDesconto(livros) {
    const desconto = 0.1;
    const livrosComDesconto = livros.map((livro) => {
        return {
            ...livro, preco: livro.preco - (livro.preco * desconto)
        }
    });
    return livrosComDesconto
}