$(document).ready(function () {
  $(".more-text").hide();
  $("a").click(function () {
    let list = this.parentNode;
    if (list.children[3].innerHTML === "Read More") {
      $(list.children[2].lastElementChild).show(1000);
      $(list).addClass("li-read-more");
      $(list.children[3]).addClass("read-less");
      list.children[3].innerHTML ="Read Less"
    } else {
      $(list.children[2].lastElementChild).hide(1000);
      $(list).removeClass("li-read-more");
      $(list.children[3]).removeClass("read-less");
      list.children[3].innerHTML ="Read More"
    }
  });
});
