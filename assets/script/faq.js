var acc = document.getElementsByClassName("faq-card");

$(document).ready(function () {
  $('.answer').addClass('hide');


for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.children[1].classList.toggle("hide");
  });
}

});
