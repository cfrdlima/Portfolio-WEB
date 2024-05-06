// const toggle = document.getElementById("toggle");

// function trocarIdioma(idioma) {
//   fetch(idioma + ".json")
//     .then((response) => response.json())
//     .then((data) => {
//       document.getElementById("inicio").innerText = data.inicio;
//       document.getElementById("sobre").innerText = data.sobre;
//       document.getElementById("skills").innerText = data.skills;
//       document.getElementById("projetos").innerText = data.projetos;
//       document.getElementById("contato").innerText = data.contato;
//     })
//     .catch((error) => console.error("Erro ao carregar traduções:", error));
// }

function consumirAPIGoogleTranslate() {
  var htmlOriginal = document.body.innerHTML;

  // Use a API de Tradução do Google para traduzir o conteúdo HTML
  const settings = {
    async: true,
    crossDomain: true,
    url: "https://google-translate1.p.rapidapi.com/language/translate/v2",
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "X-RapidAPI-Key": "e5a2399fb2msh174450145c0b032p109d5fjsnc6364705946c",
      "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
    },
    data: {
      q: htmlOriginal, // Traduz todo o conteúdo HTML
      target: "en", // Idioma de destino (exemplo: inglês)
      source: "pt", // Idioma de origem (exemplo: português)
    },
  };

  $.ajax(settings).done(function (response) {
    // Atualize o conteúdo HTML traduzido na sua página
    document.body.innerHTML = response.data.translations[0].translatedText;
  });
}
