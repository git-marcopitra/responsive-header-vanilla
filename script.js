var nav;
var isOpen = false;

function clickOutside(e) {
  if (
    e.target !== document.querySelector("nav") &&
    e.target !== document.querySelector(".menu") &&
    isOpen
  )
    nav.style.top = "-100vh";
}

function addClickOutside() {
  // console.log("added!");
  window.removeEventListener("click", clickOutside);
  window.addEventListener("click", clickOutside);
}

function removeClickOutside() {
  // console.log("removed!");
  window.removeEventListener("click", clickOutside);
  isOpen && toggleMenu();
}

function toggleMenu() {
  // console.log(`toggle menu to ${!isOpen}`);
  nav.style.top = isOpen ? "-100vh" : "5rem";
  isOpen = !isOpen;
}

function checkClickOutside() {
  if (window.matchMedia("(min-width: 40em)").matches) removeClickOutside();
  else addClickOutside();
}

window.onload = function() {
  // console.log("loaded!")
  nav = document.querySelector("nav");
  checkClickOutside();
}

window.onresize = function() {
  // console.log("resize!");
  checkClickOutside();
}
