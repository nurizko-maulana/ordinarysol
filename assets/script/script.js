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

  $(".nav-items").hide();

  $(".close-nav-items").click(function () {
    $('#checkbox-nav').prop('checked', false);
    $(".nav-items").toggle(500);
    $(".menu-toggle");
    // console.log("clicked")
    // if($("#checkbox-nav").is(":checked")) {
    //   console.log("Checked");
    // } else {
    //   console.log("Not checked");
    // }
  });

  $("#top").click(function () {
    window.scrollTo(0, 0);
  });

  $(".nav-item:eq(3)").click(function () {
    $('#checkbox-nav').prop('checked', false);
    $(".nav-items").toggle(500);
    $(".menu-toggle");
  });
  
  $(".menu-toggle").click(function () {
    $(".nav-items").toggle(500);
    $('#checkbox-nav').attr('checked', false);
  });
});
