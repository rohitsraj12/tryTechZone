$(document).ready(function () {
  $("#hamberger").click(function () {
    $(this).toggleClass("is__active");
    $("#header-nav").slideToggle(400);
    $("#header-social").slideToggle(400);
  });

  for (let i = 0; i < document.querySelectorAll(".class").length; i == 3) {
    document.querySelectorAll(".class")[i].style.color = "red";
  }
});
