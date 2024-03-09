// dropdown menu
export default function initDropDown() {
  const menuHamburger = document.querySelector('[data-menu="menu-hamburger"]');
  const btnHamburger = document.querySelector(".btn-hamburger");
  const btnFecha = document.querySelector(".close-btn");

  btnHamburger.addEventListener("click", () => {
    menuHamburger.classList.add("active");
  });

  btnFecha.addEventListener("click", () => {
    menuHamburger.classList.remove("active");
  });
}
