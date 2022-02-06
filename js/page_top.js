//スクロールした際の動きを関数でまとめる
function PageTopAnime() {
  var scroll = $(window).scrollTop();
  if (scroll >= 160) {
    //上から160pxスクロールしたら
    $(".page_top").removeClass("DownMove"); //page_topについているDownMoveというクラス名を除く
    $(".page_top").addClass("UpMove"); //page_topについているUpMoveというクラス名を付与
  } else {
    if ($(".page_top").hasClass("UpMove")) {
      //すでに.page_topにUpMoveというクラス名がついていたら
      $(".page_top").removeClass("UpMove"); //UpMoveというクラス名を除き
      $(".page_top").addClass("DownMove"); //DownMoveというクラス名を.page_topに付与
    }
  }
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
  PageTopAnime(); /* スクロールした際の動きの関数を呼ぶ*/
});
