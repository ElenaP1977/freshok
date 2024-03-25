$(function () {

  $(document).mouseup(function (e) {
    var menu = $(".catalog-menu");
    var burger = $(".burger-catalog");

    if (!menu.is(e.target) // если клик был не по нашему блоку
      && menu.has(e.target).length === 0) { // и не по его дочерним элементам
      menu.removeClass('catalog-menu--active');
      burger.removeClass('burger-catalog--active');
    }

    $('.burger-catalog').on('click', function () {
      $('.catalog-menu').toggleClass('catalog-menu--active');
      $('.burger-catalog').toggleClass('burger-catalog--active');
    });
  });

  $('.catalog-menu__link').on('click', function () {
    $('.catalog-menu').toggleClass('catalog-menu--active');
    $('.burger-catalog').toggleClass('burger-catalog--active');
  });



  $('.main-slider__wrapper').slick({
    infinite: false,
    autoplaySpeed: 4500,
    cssEase: 'ease-out',
  });


  $('.brand-slider__items').slick({
    arrows: false,
    dots: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
  });


  $(".star").rateYo({
    starWidth: "16px",
    normalFill: "#FFB800",
    ratedFill: "#FFB800",
    numStars: 1,
    readOnly: true,
  });


  var containerEl1 = document.querySelector('[data-ref="top-products"]');
  var containerEl2 = document.querySelector('[data-ref="promotions"]');

  var config = {
    controls: {
      scope: 'local'
    }
  };

  var mixer1 = mixitup(containerEl1, config);
  var mixer2 = mixitup(containerEl2, config);

});




