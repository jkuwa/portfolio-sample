'use strict'

$(function() {
  /* ---------- ハンバーガーメニュー ---------- */

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

  // Escキーでメニュー閉じる
  $(document).keydown( function(e) {
    if ( e.which === 27 && $(".js-hamburger").hasClass('is-open') ) {
      e.preventDefault();
      $(".js-hamburger").removeClass('is-open').attr('aria-expanded', 'false');
      $(".js-nav").removeClass('is-open');
      $("body").removeClass('is-open');
      $(".js-hamburgerBar").text('メニューを開く');
    }
  });

  // リサイズでメニュー閉じる
  $(window).on('resize', function() {
    if ( $(".js-hamburger").hasClass('is-open') ) {
      $(".js-hamburger").removeClass('is-open').attr('aria-expanded', 'false');
      $(".js-nav").removeClass('is-open');
      $("body").removeClass('is-open');
      $(".js-hamburgerBar").text('メニューを開く');
    }
  });

  // ページ内リンクでメニューを閉じる
  $(".p-nav__list a").on('click', function() {
    $(".js-hamburger").removeClass('is-open').attr('aria-expanded', 'false');
    $(".js-nav").removeClass('is-open');
    $("body").removeClass('is-open');
    $(".js-hamburgerBar").text('メニューを開く');
  });


  /* ---------- スライダー ---------- */

  $(".p-mv__slider").slick({
    dots: true,
    appendArrows: '.p-slider__arrow',
    prevArrow: '<button type="button" class="slick-prev">前の画像へ</button>',
    nextArrow: '<button type="button" class="slick-next">次の画像へ</button>'
  });


  /* ---------- タブボタンでコンテンツ切り替え ---------- */

  $(".js-archiveTab").on('click', function() {
    // 選択中のタブを外す
    if ( $(this).hasClass('is-current') ) {
      return;
    }
    $(".is-current").removeClass('is-current').attr({
      'aria-selected': 'false',
      'tabindex': '-1',
    });
    $(".js-archiveList").removeClass('is-open');

    // クリックしたタブにcurrentクラスを付与
    $(this).addClass('is-current');
    // 関連するコンテンツを表示
    const index = $(this).index();
    $(".js-archiveList").eq(index).addClass('is-open');

    // aria-selected を切り替える
    $(this).attr({
      'aria-selected': 'true',
      'tabindex': '0'
    });
  });

  // キーボード操作
  $( ".js-archiveTab").keydown(function(e) {    
    if ( e.which === 37 ) {           // ←を押したら
      e.preventDefault();
      const $prevTab = $(this).prev('.js-archiveTab');

      if ( $prevTab.length ) {
        $prevTab.focus();
      }
    } else if ( e.which === 39 ) {    // →を押したら
      e.preventDefault();
      const $nextTab = $(this).next('.js-archiveTab');

      if ( $nextTab.length ) {
        $nextTab.focus();
      }
    }
  });


  /* ---------- テンプレート ---------- */

  const card = $(".js-card").html();
  for (let i = 0; i < 4; i++) {
    $(".js-static").append(card);
  }
  // 静的→動的に書き換え
  const cardDynamic = card.replace(/静的/g, '動的');
  for (let i = 0; i < 4; i++) {
    $(".js-dynamic").append(cardDynamic);
  }
});