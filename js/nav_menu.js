$(function () {
  $(".btn, .sp_nav li a").click(function () {
    $(".sp_nav").fadeToggle();
    $(".btn").toggleClass("open");
  });
});
