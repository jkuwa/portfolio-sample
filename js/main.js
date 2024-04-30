'use strict'

$(function() {
  $(".js-hamburger").on('click', function() {
    $(this).toggleClass("is-open");
    $(".js-nav").toggleClass("is-open");

    if ($(this).text() === 'メニューを開く') {
      $(".js-hamburgerBar").text('メニューを閉じる');
    } else {
      $(".js-hamburgerBar").text('メニューを開く');
    }
  });

  $(window).on('resize', function() {
    const bp = 960;
    const width = $(this).width();
  
    if (width < bp && $(".js-hamburger").hasClass("is-open")) {
      $(".js-hamburger").removeClass("is-open");
      $(".js-nav").removeClass("is-open");
      $(".js-hamburgerBar").text('メニューを開く');
    }
  });

  $('.p-mv__slider').slick({
    dots: true,
    appendArrows: ".p-title__wrapper",
  });
});