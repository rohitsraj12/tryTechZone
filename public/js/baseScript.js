$(document).ready(function () {
  $("#hamberger").click(function () {
    $(this).toggleClass("is__active");
    $("#header-nav").slideToggle(400);
    $("#header-social").slideToggle(400);
  });
});
