document.addEventListener("DOMContentLoaded", function () {
  // Função para lidar com a rotação da seta
  function toggleArrowRotation(arrowImage) {
    arrowImage.classList.toggle("rotate180-web"); // Use a classe correta aqui
  }

  // Função para lidar com a exibição/ocultação da div de informações
  function toggleInfoDiv(infoDiv, displayValue) {
    infoDiv.style.display = displayValue;
  }

  function addEvents(divGeral, arrowImage, infoDiv) {
    if (window.matchMedia("(max-width: 768px)").matches) {
      // Se a largura da tela for igual ou menor que 768 pixels, use o evento de clique
      divGeral.addEventListener("click", function () {
        toggleArrowRotation(arrowImage);
        toggleInfoDiv(
          infoDiv,
          infoDiv.style.display === "block" ? "none" : "block"
        );
      });
    } else {
      // Caso contrário, use os eventos de mouseenter e mouseleave
      divGeral.addEventListener("mouseenter", function () {
        toggleArrowRotation(arrowImage);
        toggleInfoDiv(infoDiv, "block");
      });

      divGeral.addEventListener("mouseleave", function () {
        toggleArrowRotation(arrowImage);
        toggleInfoDiv(infoDiv, "none");
      });
    }
  }

  const divGeralWeb = document.querySelector(".skills__item-web");
  const arrowImageWeb = document.getElementById("rotating-arrow-web");
  const infoDivWeb = document.getElementById("info-div-web");
  addEvents(divGeralWeb, arrowImageWeb, infoDivWeb);

  const divGeralMobile = document.querySelector(".skills__item-mobile");
  const arrowImageMobile = document.getElementById("rotating-arrow-mobile");
  const infoDivMobile = document.getElementById("info-div-mobile");
  addEvents(divGeralMobile, arrowImageMobile, infoDivMobile);

  const divGeralGames = document.querySelector(".skills__item-games");
  const arrowImageGames = document.getElementById("rotating-arrow-games");
  const infoDivGames = document.getElementById("info-div-games");
  addEvents(divGeralGames, arrowImageGames, infoDivGames);

  // Adiciona eventos para a barra de navegação e o botão de menu
  const navbar = document.querySelector(".navbar");
  const mobileNavbar = document.querySelector(".navbar__mobile");
  const button = document.querySelector(".burguer");

  button.addEventListener("click", function () {
    mobileNavbar.classList.toggle("active");
  });

  window.addEventListener("scroll", function () {
    if (this.window.scrollY > 200) return navbar.classList.add("active");
    return navbar.classList.remove("active");
  });
});
