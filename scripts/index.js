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

document.addEventListener("DOMContentLoaded", function () {
  var arrowImage = document.getElementById("rotating-arrow-web");
  var infoDiv = document.getElementById("info-div-web");
  arrowImage.addEventListener("click", function () {
    arrowImage.classList.toggle("rotate180-web");
    arrowImage.style.transition = "transform 0.5s ease"; // Adiciona a transição suave
    // Mostra ou esconde a div de informações dependendo do estado atual
    if (infoDiv.style.display === "none") {
      infoDiv.style.display = "block";
    } else {
      infoDiv.style.display = "none";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var arrowImage = document.getElementById("rotating-arrow-mobile");
  var infoDiv = document.getElementById("info-div-mobile");
  arrowImage.addEventListener("click", function () {
    arrowImage.classList.toggle("rotate180-mobile");
    arrowImage.style.transition = "transform 0.5s ease"; // Adiciona a transição suave
    if (infoDiv.style.display === "none") {
      infoDiv.style.display = "block";
    } else {
      infoDiv.style.display = "none";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var arrowImage = document.getElementById("rotating-arrow-games");
  var infoDiv = document.getElementById("info-div-games");
  arrowImage.addEventListener("click", function () {
    arrowImage.classList.toggle("rotate180-games");
    arrowImage.style.transition = "transform 0.5s ease"; // Adiciona a transição suave
    if (infoDiv.style.display === "none") {
      infoDiv.style.display = "block";
    } else {
      infoDiv.style.display = "none";
    }
  });
});
