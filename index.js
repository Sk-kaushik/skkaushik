$(".burger").click(function () {
  $(this).toggleClass("rotate");
  $(".side-navbar").toggleClass("show");
});
$("a").click(function () {
  $(".burger").toggleClass("rotate");
  $(".side-navbar").toggleClass("show");
});

var filter = "landing-project";
$(".project-card")
  .not("." + filter)
  .hide(200);
$(".project-card")
  .filter("." + filter)
  .show(400);

$(".project-nav li").click(function () {
  $index = $(this).index();
  var filter = $(this).attr("data-filter");

  switch ($index) {
    case 0:
      $(".active-border").css("left", "2.5%");

      break;

    case 1:
      $(".active-border").css("left", "22.5%");

      break;

    case 2:
      $(this).addClass("active");
      $(".active-border").css("left", "42.8%");

      break;

    case 3:
      $(this).addClass("active");
      $(".active-border").css("left", "62.5%");

      break;

    case 4:
      $(this).addClass("active");
      $(".active-border").css("left", "82.5%");

      break;
  }
  $(".project-card")
    .not("." + filter)
    .hide(200);
  $(".project-card")
    .filter("." + filter)
    .show(400);
});

$.scrollify({
  section: "section",
  scrollSpeed: 1000,
});

$(".send-message").click(function () {
  notifier.show(
    "Sorry!",
    "The site is under construction",
    "",
    "./notifier-master/dist/img/high_priority-48.png",
    4000
  );
});
