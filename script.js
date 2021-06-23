var isOpen = false;
window.addEventListener("click", function (e) {
  if (
    e.target !== document.querySelector("nav") &&
    e.target !== document.querySelector(".menu") &&
    isOpen
  ) {
    document.querySelector("nav").style.top = "-100vh";
  }
});
function toggleMenu() {
  document.querySelector("nav").style.top = isOpen ? "-100vh" : "5rem";
  isOpen = !isOpen;
}
