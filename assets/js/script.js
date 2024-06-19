$(document).ready(function () {
  $(".more-text").hide();
  $("a").click(function () {
    let list = this.parentNode;
    if (list.children[3].innerHTML === "Read More") {
      $(list).addClass("li-read-more");
      $(list.children[3]).addClass("read-less");
      $(list.children[3]).removeClass("a-padding");
      list.children[3].innerHTML ="Read Less"
      $(list.children[2].lastElementChild).show(1000);
      $('.dots').hide(1000)
    } else {
      $(list).removeClass("li-read-more");
      $(list.children[3]).removeClass("read-less");
      $(list.children[3]).addClass("a-padding");
      list.children[3].innerHTML ="Read More"
      $(list.children[2].lastElementChild).hide(1000);
      $('.dots').show(1000)
    }
  });
});
