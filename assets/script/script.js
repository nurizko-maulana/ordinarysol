$(document).ready(function () {
  // Hide navbar when scrolling down

  var lastScrollTop = 0;
  $(".container").on("scroll", function (event) {
    var st = $(this).scrollTop();
    if (st > lastScrollTop) {
      // downscroll code
      $("#navbar").css({ top: "-90px" });
    } else {
      // upscroll code
      $("#navbar").css({ top: "0px" });
    }
    lastScrollTop = st;
  });

  $(".close-nav-items").click(function () {
    $(".nav-items").toggle(500);
    $(".menu-toggle");
  });

  $(".menu-toggle").click(function () {
    $(".nav-items").toggle(500);
  });
});
