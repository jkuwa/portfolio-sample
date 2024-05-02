'use strict'

$(function() {
  // ハンバーガーメニュー
  $(".js-hamburger").on('click', function() {
    $(this).toggleClass("is-open");
    $(".js-nav").toggleClass("is-open");

    if ($(this).text() === 'メニューを開く') {
      $(".js-hamburgerBar").text('メニューを閉じる');
    } else {
      $(".js-hamburgerBar").text('メニューを開く');
    }

    // aria-hidden 切り替え
    const ariaHidden = $(".js-nav").attr('aria-hidden');
    if ( ariaHidden === 'true' ) {
      $(".js-nav").attr('aria-hidden', 'false');
    } else {
      $(".js-nav").attr('aria-hidden', 'true');
    }
  });

  // aria-hidden の定義
  const bp = 960;
  const width = $(this).width();
  if (width < bp) {
    $(".js-nav").attr('aria-hidden', 'true');
  } else {
    $(".js-nav").attr('aria-hidden', 'false');
  }

  // リサイズでメニュー閉じる
  $(window).on('resize', function() {
    if (width < bp && $(".js-hamburger").hasClass("is-open")) {
      $(".js-hamburger").removeClass("is-open");
      $(".js-nav").removeClass("is-open").attr('aria-hidden', 'true');
      $(".js-hamburgerBar").text('メニューを開く');
    }
  });

  // スライダー
  $(".p-mv__slider").slick({
    dots: true,
    appendArrows: '.p-slider__arrow',
    prevArrow: '<button type="button" class="slick-prev">前の画像へ</button>',
    nextArrow: '<button type="button" class="slick-next">次の画像へ</button>'
  });

  // タブ切り替え
  $(".js-archiveTab").on('click', function() {
    // 選択中のタブを外す
    $(".is-current").removeClass('is-current').attr({
      'aria-selected': 'false',
      'tabindex': '-1'
    });
    $(".is-open").removeClass('is-open');

    // クリックしたタブにcurrentクラスを付与
    $(this).children().addClass('is-current');
    // 関連するコンテンツを表示
    const index = $(this).index();
    $(".js-archiveList").eq(index).addClass('is-open');

    // aria-selected を切り替える
    $(this).children().attr({
      'aria-selected': 'true',
      'tabindex': '0'
    });
  });
});