$(document).ready(function () {
    // var prevScrollpos = window.pageYOffset;
    // window.onscroll = function () {
    //   var currentScrollPos = window.pageYOffset;
    //   if (prevScrollpos > currentScrollPos) {
    //   //   document.getElementById("navbar").style.top = "0";
    //       $("#navbar").css({ top: '0px' });
    //   } else {
    //       $("#navbar").css({ top: '-70px' });
    //   }
    //   prevScrollpos = currentScrollPos;
    // };
  var lasScrollTop = 0;
  navbar = document.getElementById("navbar");
  window.addEventListener(scroll, function () {
    var scrollTop = this.window.pageYOffset || this.docume.scrollTop;
    if (scrollTop > lasScrollTop) {
      navbar.style.top = "-70px";
    } else {
      navbar.style.top = "0px";
    }
  });
});
