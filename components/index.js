import removeChildNodes from "./help.js";
import renderTokenPage from "./tokens.js";
const hamburgerMenu = document.getElementById("hamburger__menu");
const sideNav = document.querySelector(".sideNav");
const main = document.querySelector("main");

const sideNavBlogs = document
  .querySelector(".sideNav__blog")
  .querySelectorAll("li");
console.log(sideNavBlogs);

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

const renderBlog = (i) => {
  removeChildNodes(main);
  const clonePage = document.getElementById(`page${i}`).content.cloneNode(true);
  main.appendChild(clonePage);
};

for (let i = 0; i < sideNavBlogs.length; i++) {
  sideNavBlogs[i].addEventListener("click", () => {
    renderBlog(i + 1);
    removeSideNav();
  });
}
console.clear();
const logo = document.getElementById("logo");
logo.addEventListener("click", () => {
  renderTokenPage(1, 10);
  removeSideNav();
});
window.onload = () => {
  renderTokenPage(1, 10);
};
