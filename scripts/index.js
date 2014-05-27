$(document).ready(function () {

  var navArr = [];
  $("#main-menu li").each(function(index) {
    navArr.push($(this).text());
    $(this).text("");
  });

  console.log(navArr);

  $("#main-menu li").on("hover", function() {
    console.log($(this));
    $("#main-menu li").text("");
    $(this).text(navArr[$(this).index()]);
  });

  $("#main-menu").on("mouseleave", function() {
    $("#main-menu li").text("");
  });

});