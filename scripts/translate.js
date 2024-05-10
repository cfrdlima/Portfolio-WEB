function consumirAPIMicrosoftTranslateEn() {
  var htmlOriginal = document.documentElement.outerHTML;
  const settings = {
    async: true,
    crossDomain: true,
    url: "https://microsoft-translator-text.p.rapidapi.com/translate?to%5B0%5D=en&api-version=3.0&profanityAction=NoAction&textType=plain",
    method: "POST",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "4be916da71msh3f7f5ae4d20ee74p13049cjsnb3264c00978f",
      "X-RapidAPI-Host": "microsoft-translator-text.p.rapidapi.com",
    },
    processData: false,
    data: JSON.stringify([
      {
        Text: htmlOriginal,
      },
    ]),
  };

  $.ajax(settings)
    .done(function (response) {
      console.log(response);
      var translatedHTML = response[0].translations[0].text;
      document.body.innerHTML = translatedHTML;
    })
    .fail(function (xhr, status, error) {
      console.error("Erro ao fazer a solicitação AJAX:", error);
    });
}
