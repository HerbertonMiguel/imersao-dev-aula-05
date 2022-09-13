



function adicionarFilme() {
  const filmeFavorito = document.getElementById("filme").value;
  if (filmeFavorito.endsWith(".jpg")) {
    listarFilmesNaTela(filmeFavorito)
  } else {
    console.error("Endereço de filme Invalido")
  }

  document.getElementById("filme").value = ""

}

function listarFilmesNaTela(filmeFavorito){
  const elementoFilmeFavorito = "<img src=" + filmeFavorito + ">";
  const elementoListaFilmes = document.getElementById("listaFilmes");
  elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + elementoFilmeFavorito;

}
