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

/*  if(Math.floor($(window).scrollTop()/$(window).height()) == 0)
  {
    $("#main-menu li span.nav-text").css("color", "#fff");
    $("#main-menu li span.nav-icon").css("border", "0px solid #fff");
    $("#main-menu li span.nav-icon").css("background", "#fff");
    $("#main-menu li.active span.nav-icon").css("border", "1px solid #fff");
    $("#main-menu li.active span.nav-icon").css("background", "none");
  }*/

  var scrollTopAmount = 1;

  $(window).scroll(function() {
    var active = $("#main-menu li:nth-child(" + (1 + Math.floor($(window).scrollTop()/$(window).height())) + ")");
    if(!active.hasClass('active')) {
        $("#main-menu li").removeClass("active");
        active.addClass('active');
    }

/*    if(Math.floor($(window).scrollTop()/$(window).height()) == 0)
    {
      $("#main-menu li span.nav-text").css("color", "#fff");
      $("#main-menu li span.nav-icon").css("border", "0px solid #fff");
      $("#main-menu li span.nav-icon").css("background", "#fff");
      $("#main-menu li.active span.nav-icon").css("border", "1px solid #fff");
      $("#main-menu li.active span.nav-icon").css("background", "none");
    }
    else
    {
      $("#main-menu li span.nav-text").css("color", "#999");
      $("#main-menu li span.nav-icon").css("border", "0px solid #999");
      $("#main-menu li span.nav-icon").css("background", "#999");
      $("#main-menu li.active span.nav-icon").css("border", "1px solid #999");
      $("#main-menu li.active span.nav-icon").css("background", "none");
    }*/

  });

  $("#main-menu li").on("click", function() {
    $('html, body').stop().animate({
        scrollTop: $("#" + $(this).attr("data-link")).offset().top
    }, 1000);
  });
});