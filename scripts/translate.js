function consumirAPIGoogleTranslate() {
  var htmlOriginal = document.innerHTML;
  var idiomaOrigem = "pt";
  var idiomaDestino = "en";
  var formato = "html";

  const settings = {
    async: true,
    crossDomain: true,
    url: "https://deep-translate1.p.rapidapi.com/language/translate/v2",
    method: "POST",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "a9d943913bmsh4f69fdea2f8f4aap1fa5e1jsnb8c5d72de41f",
      "X-RapidAPI-Host": "deep-translate1.p.rapidapi.com",
    },
    processData: false,
    data: JSON.stringify({
      q: htmlOriginal,
      source: idiomaOrigem,
      target: idiomaDestino,
      format: formato,
    }),
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
    var translatedText = response.data.translations.translatedText;
    document.body.innerHTML = translatedText;
  });
}
