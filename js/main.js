document.querySelector(".second-button").addEventListener("click", function () {
  document.querySelector(".animated-icon2").classList.toggle("open");
});

const button = document.querySelector(".navbar-toggler");
const content = document.querySelector(".navbar-brand");
const navigation = document.querySelector(".navigation");
// button.addEventListener("click", function () {
//   content.style.display =
//     content.style.display == "none" ? "inline-block" : "none";
// });
const nav = document.querySelector(".navbar-collapse");
const startScroll = window.pageYOffset;
// window.addEventListener("scroll", () => {
//   if (window.innerWidth < 992) {
//     if (window.pageYOffset > startScroll) {
//       nav.style.background = "#00aaff";
//       content.style.visibility = "hidden";
//       navigation.style.position = "fixed";
//     } else {
//       nav.style.background = "";
//       content.style.visibility = "visible";
//       navigation.style.position = "static";
//     }
//   }
// });
// if (window.innerWidth < 992) {
//   nav.style.background = "#00aaff";
//   content.style.visibility = "hidden";
//   navigation.style.position = "fixed";
// }
