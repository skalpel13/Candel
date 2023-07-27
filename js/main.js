const menuBtn = document.querySelector(".menu-btn");
const menuMobile = document.querySelector(".header__menu-list");

menuBtn.addEventListener("click", () => {
  menuMobile.classList.toggle("menu--open");
});

const swiperOne = new Swiper(".feadback__slider", {
  // Optional parameters

  loop: false,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },
});

const swiperTwo = new Swiper(".certificates_slider", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    360: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
});

const accordeon = document.querySelector(".accordeon");
const accordeonTitles = document.querySelectorAll(".accordeon__title");

accordeonTitles.forEach.call(accordeonTitles, function (accordeonTitle) {
  accordeonTitle.addEventListener("click", function () {
    const currentText =
      accordeonTitle.parentElement.querySelector(".accordeon__text");

    accordeonTitle.classList.toggle("accordeon__title--active");
    currentText.classList.toggle("accordeon__text--visible");

    if (currentText.classList.contains("accordeon__text--visible")) {
      currentText.style.maxHeight = currentText.scrollHeight + "px";
    } else {
      currentText.style.maxHeight = null;
    }
  });
});
