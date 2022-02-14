$(function () {
  // ファーストビュー
  $(".slider").slick({
    arrows: false,
    autoplay: true,
    dots: true,
    pauseOnHover: false, //ホバーしたときにスライドを一時停止しない
  });

  // ギャラリー
  $(".gallery").slick({
    autoplay: true,
    pauseOnHover: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slideToScroll: 1,
        },
      },
    ],
  });
});
