import removeChildNodes from "./help.js";
import renderTokenPage from "./tokens.js";
const hamburgerMenu = document.getElementById("hamburger__menu");
const sideNav = document.querySelector(".sideNav");
const main = document.querySelector("main");

const sideNavBlogs = document
  .querySelector(".sideNav__blog")
  .querySelectorAll("li");

const removeSideNav = () => {
  hamburgerMenu.classList.remove("open");
  document.body.classList.remove("disable__scrolling");
  sideNav.classList.add("hidden");
};
const toggleSideNav = () => {
  hamburgerMenu.classList.toggle("open");
  document.body.classList.toggle("disable__scrolling");
  sideNav.classList.toggle("hidden");
};
hamburgerMenu.addEventListener("click", () => {
  window.scrollTo(0, 0);
  toggleSideNav();
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 900) {
    sideNav.classList.add("hidden");
    document.body.classList.remove("disable__scrolling");
    hamburgerMenu.classList.remove("open");
  }
});

const fileName = location.pathname.split("/").slice(-1);

if (fileName == "index.html") {
  window.onload = () => {
    fetch("./components/data.json")
      .then((response) => response.json())
      .then((data) => renderTokenPage(1, 20, data));
  };
}
