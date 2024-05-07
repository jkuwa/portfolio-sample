'use strict'

$(function() {
  // ハンバーガーメニュー
  $(".js-hamburger").on('click', function() {
    $(this).toggleClass('is-open');
    $(".js-nav").toggleClass('is-open');
    $("body").toggleClass('is-open')

    if ($(this).text() === 'メニューを開く') {
      $(".js-hamburgerBar").text('メニューを閉じる');
      $(".js-hamburger").attr('aria-expanded', 'true');
    } else {
      $(".js-hamburgerBar").text('メニューを開く');
      $(".js-hamburger").attr('aria-expanded', 'false');
    }
  });

  // 最後の項目の後ハンバーガーボタンに戻る
  $(".js-focusTrap").on('focus', function() {
    if ( $(".js-hamburger").hasClass('is-open') ) {
    $(".js-hamburger").focus();
    }
  });

  const bp = 960;
  const width = $(this).width();

  if ( width >= bp ) {
    $(".js-focusTrap").attr('tabindex', '-1');
  }

  // Escキーでメニュー閉じる
  $(document).keydown( function(e) {
    if ( e.keyCode == 27 && $(".js-hamburger").hasClass('is-open') ) {
      $(".js-hamburger").removeClass('is-open').attr('aria-expanded', 'false');
      $(".js-nav").removeClass('is-open');
      $("body").removeClass('is-open');
      $(".js-hamburgerBar").text('メニューを開く');
    }
  });

  // リサイズでメニュー閉じる、tabindex切り替え
  $(window).on('resize', function() {
    const width = $(this).width();

    if ( $(".js-hamburger").hasClass('is-open') ) {
      $(".js-hamburger").removeClass('is-open').attr('aria-expanded', 'false');
      $(".js-nav").removeClass('is-open');
      $("body").removeClass('is-open');
      $(".js-hamburgerBar").text('メニューを開く');
    } else if ( width >= bp ) {
      $(".js-focusTrap").attr('tabindex', '-1');
    } else if ( width < bp ) {
      $(".js-focusTrap").attr('tabindex', '0');
    }
  });

  // ページ内リンクでメニューを閉じる
  $(".p-nav__list a").on('click', function() {
    $(".js-hamburger").removeClass('is-open').attr('aria-expanded', 'false');
    $(".js-nav").removeClass('is-open');
    $("body").removeClass('is-open');
    $(".js-hamburgerBar").text('メニューを開く');
  });

  // スライダー
  $(".p-mv__slider").slick({
    dots: true,
    appendArrows: '.p-slider__arrow',
    prevArrow: '<button type="button" class="slick-prev">前の画像へ</button>',
    nextArrow: '<button type="button" class="slick-next">次の画像へ</button>'
  });

  // タブボタンでコンテンツ切り替え
  $(".js-archiveTab").on('click', function() {
    // 選択中のタブを外す
    if ( $(this).children().hasClass('is-current') ) {
      return;
    }
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

  // カードのテンプレート化
  const card = $("#card").html();
  for (let i = 0; i < 4; i++) {
    $("#cardList-static").append(card);
  }

  const cardDynamic = card.replace(/静的/g, '動的');
   // '静的'だと１番目しか置換されないため文字列をパターン化（/ /）し、修飾子（g）で２番目以降も置換されるようにする。
  for (let i = 0; i < 4; i++) {
    $("#cardList-dynamic").append(cardDynamic);
  }
});