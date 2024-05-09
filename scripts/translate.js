function consumirAPIGoogleTranslateEn(translate) {
  var htmlOriginal = document.documentElement.outerHTML;

  if (translate) {
    const settings = {
      async: true,
      crossDomain: true,
      url: "https://microsoft-translator-text.p.rapidapi.com/translate?to%5B0%5D=en&api-version=3.0&profanityAction=NoAction&textType=html",
      method: "POST",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "a9d943913bmsh4f69fdea2f8f4aap1fa5e1jsnb8c5d72de41f",
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
  } else {
    var htmlTranslate = document.documentElement.outerHTML;
    const settings = {
      async: true,
      crossDomain: true,
      url: "https://microsoft-translator-text.p.rapidapi.com/translate?to%5B0%5D=pt&api-version=3.0&profanityAction=NoAction&textType=html",
      method: "POST",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "a9d943913bmsh4f69fdea2f8f4aap1fa5e1jsnb8c5d72de41f",
        "X-RapidAPI-Host": "microsoft-translator-text.p.rapidapi.com",
      },
      processData: false,
      data: JSON.stringify([
        {
          Text: htmlTranslate,
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
}
