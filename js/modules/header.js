// dropdown menu
export default function initDropDown() {
  const hamburgerMenu = document.querySelector("[data-hamburger]");
  const headerMenu = document.querySelectorAll(".header-icons");

  window.addEventListener("resize", function () {
    const larguraDaPagina = window.innerWidth;
    if (larguraDaPagina <= 930) {
      hamburgerMenu.classList.add("hamburger");
    }
  });
}
