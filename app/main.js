let livros = [];

const endpointAPI =
  "https://guilhermeonrails.github.io/casadocodigo/livros.json";

getLivros();

async function getLivros() {
  try {
    const response = await fetch(endpointAPI);
    livros = await response.json();
  } catch (error) {
    console.log("Não conseguiu buscar os livros", error);
  }
}
