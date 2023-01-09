$(document).ready(function ($) {
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 45) {
      $("nav.site-nav").addClass("stickytop");
    } else {
      $("nav.site-nav").removeClass("stickytop");
    }
  });

  $(".fa-bars").click(function () {
    $(".menu-navigation").toggleClass("active");
  });
  $(".menu-navigation li").click(function () {
    $(".menu-navigation").removeClass("active");
  });

  $(window).on("scroll", function () {
    if ($(window).scrollTop()) {
      $("header").addClass("sticky");
    } else {
      $("header").removeClass("sticky");
    }
  });
  $(".down-button").click(function () {
    $("html, body").animate(
      {
        scrollTop: $("#usluge").offset().top,
      },
      "slow"
    );
  });

  $(".acc__title").click(function (j) {
    var dropDown = $(this).closest(".acc__card").find(".acc__panel");
    $(this).closest(".acc").find(".acc__panel").not(dropDown).slideUp();
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
    } else {
      $(this).closest(".acc").find(".acc__title.active").removeClass("active");
      $(this).addClass("active");
    }
    dropDown.stop(false, true).slideToggle();
    j.preventDefault();
  });

  if (screen.width < 769) {
    $(".landing-services-box").slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      arrows: false,
      dots: false,
    });
  }
});
