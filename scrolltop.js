$(document).ready(function() {
  var topbtn = document.getElementById("top-btn");
  window.onscroll = function() {scrollFunction()};
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      topbtn.style.display = "block";
    } else {
      topbtn.style.display = "none";
    }
  }
});