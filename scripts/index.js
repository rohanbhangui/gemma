$(document).ready(function () {

  /*$("#main-menu li").on("mouseenter", function() {
    $(this).children("span.nav-text").fadeIn();
  });

  $("#main-menu li").on("mouseleave", function() {
    $("#main-menu li span.nav-text").fadeOut();
  });
*/
  
  $(window).on("load", function() {
    $(window).scrollTop(0);
  });

  $("#main-menu li").on("click", function() {
    $("#main-menu li").removeClass("active");
    $(this).addClass("active");
    $('html, body').stop().animate({
        scrollTop: $("#" + $(this).attr("data-link")).offset().top
    }, 1000);
  });
});