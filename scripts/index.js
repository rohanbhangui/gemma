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

  var currentScreen = $("#main-menu li:first-child");

  var currentlyScrolling = false;

  $(window).on("mousewheel", function() {

    $("#main-menu li").removeClass("active");

    if(event.deltaY > 0 && currentScreen.attr("data-link") != "contact")
    {
      if(!currentlyScrolling)
      {
        currentlyScrolling = true;
        $('html, body').stop().animate({
          scrollTop: $("#" + currentScreen.attr("data-link")).offset().top
        }, 1000, function() {
          currentlyScrolling = false;
        });
      }

      currentScreen = currentScreen.next();
    }
    else if (event.deltaY < 0 && currentScreen.attr("data-link") != "splash")
    {
      if(!currentlyScrolling)
      {
        currentlyScrolling = true;
        $('html, body').stop().animate({
          scrollTop: $("#" + currentScreen.attr("data-link")).offset().top
        }, 1000, function() {
          currentlyScrolling = false;
        });
      }

      currentScreen = currentScreen.prev();
    }

    currentScreen.addClass("active");

    console.log(currentScreen.attr("data-link"));
  });

  $("#main-menu li").on("click", function() {
    $("#main-menu li").removeClass("active");
    $(this).addClass("active");
    $('html, body').stop().animate({
        scrollTop: $("#" + $(this).attr("data-link")).offset().top
    }, 1000);
  });
});