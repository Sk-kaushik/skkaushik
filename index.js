$(".burger").click(function () {
  $(this).toggleClass("rotate");
  $(".side-navbar").toggleClass("show");
});
$(".side-navbar li a").click(function () {
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

$(".loader").hide();

$(".send-message").click(function () {
  var fullName = document.querySelector("#name");
  var email = document.querySelector("#email");
  var phone = document.querySelector("#phone");
  var message = document.querySelector("#message");

  $(".loader").show();
  $(this).hide();
  $(".btn-overlay").hide();

  emailjs.init("user_YLXoqLuzwFQqcYblzLF9u");

  if (!fullName.value || !email.value || !phone.value || !message.value) {
    $("body").overhang({
      type: "error",
      message: "Please fill the form",
    });

    $(".loader").hide();
    $(this).show();
    $(".btn-overlay").show();
  } else {
    var templateParams = {
      name: fullName.value,
      email: email.value,
      phoneNumber: email.value,
      message: message.value,
    };
    emailjs.send("default_service", "template_tuQJznDZ", templateParams).then(
      (res) => {
        $("body").overhang({
          type: "success",
          message: "Thank you for contacting me",
        });

        resetData();
      },
      (err) => {
        $("body").overhang({
          type: "error",
          message: "Sorry! Please try again later",
        });
        resetData();
      }
    );
  }
});

function resetData() {
  $(".loader").hide();
  $(".send-message").show();
  $(".btn-overlay").show();
}
