function pesquisar() {
  // Seleciona a seção HTML com o ID "resultados-pesquisa" onde os resultados serão exibidos.
  let section = document.getElementById("resultados-pesquisa");

  let campoPesquisa = document.getElementById("campo-pesquisa").value
  console.log(campoPesquisa);

  // se campoPesquisa for uma string vazia
   if (!campoPesquisa) {
    section.innerHTML = "<p>Filme não encontrado. Digite algo no campo de busca.</p>"
           return
   }

   campoPesquisa = campoPesquisa.toLowerCase()

  // Inicializa uma string vazia para armazenar os resultados da pesquisa.
  let resultados = "";
  let titulo = "";
  let sinopse = "";
  let tags = "";

  // Itera sobre cada filme no array "filmes2000".
  for (let filme of filmes2000) {
    titulo = filme.titulo.toLowerCase()
    sinopse = filme.sinopse.toLowerCase()
    tags = filme.tags.toLowerCase()

    //se titulo incluí campoPesquisa
    if (titulo.includes(campoPesquisa) || sinopse.includes(campoPesquisa) || tags.includes(campoPesquisa)) {

      //cria um novo elemento
      resultados += `
      <div class="item-resultado">
        <h2>
          <a href="#" target="_blank">${filme.titulo}</a>
        </h2>
        <p class="descricao-meta">${filme.sinopse}</p>
        <a href=${filme.link} target="_blank">Mais Informaçoes</a>
      </div>
    `;
    }
   }
//nao existe no banco de dados
   if (!resultados) {
            resultados = "<p>Filme indisponível.</p>";

   }
  // Atribui o conteúdo HTML completo da string "resultados" à seção.
  section.innerHTML = resultados;
}