    var swiper = new Swiper(".testimonials-content", {
      slidesPerView: 3,
      spaceBetween: 30,
      freeMode: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

import initDropDown from "./modules/header.js";
import initMobile from "./modules/mobile.js";

initDropDown();
initMobile();