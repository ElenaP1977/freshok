$(function () {

  $('.main-slider__wrapper').slick({
    prevArrow: '<button type="button" class="slick-prev"><img src="images/main-slider/arrows/arrow-left.svg" alt="arrow-left"></button>',

    nextArrow: '<button type="button" class="slick-next"><img src="images/main-slider/arrows/arrow-right.svg" alt="arrow-right"></button>',
    autoplay: true,
    autoplaySpeed: 4500,
    // fade: true,
    cssEase: 'ease-out',
  });

  $(".star").rateYo({
    starWidth: "16px",
    normalFill: "#FFB800",
    ratedFill: "#FFB800",
    numStars: 1,
    readOnly: true,

    // onChange: function (rating, rateYoInstance) {

    //   $(this).next().text(rating);
    // }

  });




  var containerEl1 = document.querySelector('[data-ref="container-1"]');
  var containerEl2 = document.querySelector('[data-ref="container-2"]');

  var config = {
    controls: {
      scope: 'local'
    }
  };

  var mixer1 = mixitup(containerEl1, config);
  var mixer2 = mixitup(containerEl2, config);

});

