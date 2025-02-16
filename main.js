$(document).ready(function () {
var featureProjectTwoSlider = new Swiper(
    ".featured-project-two-slider-container",
    {
      slidesPerView: 3,
      loop: true,
      speed: 1000,
      autoplay: true,
      watchSlidesVisibility: true,
      pagination: {
        el: ".swiper-pagination-2",
        type: "bullets",
        clickable: true
      },
      navigation: {
        nextEl: ".ht-swiper-button-next-1",
        prevEl: ".ht-swiper-button-prev-1"
      },
      // Responsive breakpoints
      breakpoints: {
        1499: {
          slidesPerView: 3
        },

        991: {
          slidesPerView: 2
        },

        768: {
          slidesPerView: 2
        },

        575: {
          slidesPerView: 1,
          spaceBetween: 30
        }
      }
    }
  );
});



