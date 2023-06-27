const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 100);
});

let menu = document.querySelector("#icon-menu");
let navi = document.querySelector(".navi");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navi.classList.toggle("open");
};
