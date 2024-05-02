const toggle = document.getElementById("toggle");

function trocarIdioma(idioma) {
  fetch(idioma + ".json")
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("inicio").innerText = data.inicio;
      document.getElementById("sobre").innerText = data.sobre;
      document.getElementById("skills").innerText = data.skills;
      document.getElementById("projetos").innerText = data.projetos;
      document.getElementById("contato").innerText = data.contato;
    })
    .catch((error) => console.error("Erro ao carregar traduções:", error));
}
