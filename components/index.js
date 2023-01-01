const hamburgerMenu = document.getElementById("hamburger__menu");

const sideNav = document.querySelector(".sideNav");

hamburgerMenu.addEventListener("click", () => {
  window.scrollTo(0, 0);
  hamburgerMenu.classList.toggle("open");
  document.body.classList.toggle("disable__scrolling");
  sideNav.classList.toggle("hidden");
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 900) {
    sideNav.classList.add("hidden");
    document.body.classList.remove("disable__scrolling");
    hamburgerMenu.classList.remove("open");
  }
});
