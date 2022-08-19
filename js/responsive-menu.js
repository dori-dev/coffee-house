let menuIcon = document.querySelector(".hamburger-icon svg");
let menu = document.querySelector("header nav ul.responsive-navbar");

menuIcon.onclick = function () {
  if (menu.style["right"] == "0px") {
    menu.style.right = "-150px";
  } else {
    menu.style.right = "0";
  }
};
