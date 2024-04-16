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
    // Adiciona eventos para a rotação da seta quando o mouse passa sobre divGeral
    divGeral.addEventListener("mouseenter", function () {
      toggleArrowRotation(arrowImage);
    });

    divGeral.addEventListener("mouseleave", function () {
      toggleArrowRotation(arrowImage);
    });

    // Adiciona evento para a exibição da div de informações quando o mouse passa sobre divGeral
    divGeral.addEventListener("mouseenter", function () {
      toggleInfoDiv(infoDiv, "block");
    });

    // Adiciona evento para a ocultação da div de informações quando o mouse sai de divGeral
    divGeral.addEventListener("mouseleave", function () {
      toggleInfoDiv(infoDiv, "none");
    });
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
    if (this.window.scrollY > 0) return navbar.classList.add("active");
    return navbar.classList.remove("active");
  });
});
