$(function () {


  $('.main-slider__wrapper').slick({
    prevArrow: '<button type="button" class="slick-prev"><img src="images/main-slider/arrows/arrow-left.svg" alt="arrow-left"></button>',

    nextArrow: '<button type="button" class="slick-next"><img src="images/main-slider/arrows/arrow-right.svg" alt="arrow-right"></button>',
    autoplay: true,
    autoplaySpeed: 4500,
    // fade: true,
    cssEase: 'ease-out',
  });


  var mixer = mixitup('.top-products__items');

});

