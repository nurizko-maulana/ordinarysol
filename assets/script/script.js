$(document).ready(function () {
  // var prevScrollpos = window.pageYOffset;
  // window.onscroll = function () {
  //   var currentScrollPos = window.pageYOffset;
  //   if (prevScrollpos > currentScrollPos) {
  //     alert("up");
  //   //   document.getElementById("navbar").style.top = "0";
  //       // $("#navbar").css({ top: '0px' });
  //       // $("#navbar").toggleClass("top-0");
  //   } else {
  //       // $("#navbar").css({ top: '-70px' });
  //       alert("down");
  //       // $("#navbar").toggleClass("top-70");
  //   }
  //   prevScrollpos = currentScrollPos;
  // };


  var prevScrollpos = $('.container').pageYOffset;
  $('.container').onscroll = function () {
    var currentScrollPos = $('.container').pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      alert("up");
    //   document.getElementById("navbar").style.top = "0";
        // $("#navbar").css({ top: '0px' });
        // $("#navbar").toggleClass("top-0");
    } else {
        // $("#navbar").css({ top: '-70px' });
        alert("down");
        // $("#navbar").toggleClass("top-70");
    }
    prevScrollpos = currentScrollPos;
  };

  var acc = document.getElementsByClassName("faq-accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
  
  // $('.container').scroll(function () {
  //   var $nav = $(".nav-container");
  //   if ($(this).scrollTop() > $nav.height()){
  //     // if ($(this).scrollY >= 160){
  //     alert("aaa");
  //     $nav.toggleClass("nav-color");
  //     $nav.toggleClass("nav-transparent");
  //   }
    
    
  // });

  // var lasScrollTop = 0;
  // navbar = document.getElementById("navbar");
  // window.addEventListener(scroll, function () {
  //   var scrollTop = this.window.pageYOffset || this.document.scrollTop;
  //   if (scrollTop > lasScrollTop) {
  //     navbar.style.top = "-70px";
  //   } else {
  //     navbar.style.top = "0px";
  //   }
  // });
});
