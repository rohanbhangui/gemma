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

  var menuColor = "#fff";

  if($(window).scrollTop()/$(window).height() > 0.5)
  {
    menuColor = "#555";
  }
  else
  {
    menuColor = "#fff";
  }

  $("#main-menu li span.nav-text").css("color", menuColor);
  $("#main-menu li span.nav-icon").css("border", "0px solid " + menuColor);
  $("#main-menu li span.nav-icon").css("background", menuColor);
  $("#main-menu li.active span.nav-icon").css("border", "1px solid " + menuColor);
  $("#main-menu li.active span.nav-icon").css("background", "none");

  var scrollTopAmount = 1;

  $(window).scroll(function() {
    var active = $("#main-menu li:nth-child(" + (1 + Math.floor($(window).scrollTop()/$(window).height())) + ")");
    if(!active.hasClass('active')) {
        $("#main-menu li").removeClass("active");
        active.addClass('active');
    }

    console.log($(window).scrollTop()/$(window).height())

    if($(window).scrollTop()/$(window).height() > 0.5)
    {
      menuColor = "#555";
    }
    else
    {
      menuColor = "#fff";
    }

    $("#main-menu li span.nav-text").css("color", menuColor);
    $("#main-menu li span.nav-icon").css("border", "0px solid " + menuColor);
    $("#main-menu li span.nav-icon").css("background", menuColor);
    $("#main-menu li.active span.nav-icon").css("border", "1px solid " + menuColor);
    $("#main-menu li.active span.nav-icon").css("background", "none");

  });

  $("#main-menu li").on("click", function() {
    $('html, body').stop().animate({
        scrollTop: $("#" + $(this).attr("data-link")).offset().top
    }, 1000);
  });
});