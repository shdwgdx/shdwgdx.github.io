document.querySelector(".second-button").addEventListener("click", function () {
  document.querySelector(".animated-icon2").classList.toggle("open");
});

$(function () {
  var $parallax = $(".parallax");
  $(window).on("scroll", function () {
    var yOffset = window.pageYOffset,
      yStart = $parallax.position().top,
      yEnd = yStart + $parallax.outerHeight(),
      yDelta = (yOffset - yStart) / $parallax.outerHeight(),
      bgPos = "50% " + (130 - yDelta * 52) + "%";
    $parallax.css("background-position", bgPos);
  });
});

const nav = document.querySelector("nav");
const startScroll = window.pageYOffset;
window.addEventListener("scroll", () => {
  if (window.pageYOffset > startScroll) {
    nav.style.background = "#242d3d";
  } else {
    nav.style.background = "";
  }
});
