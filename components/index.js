const hamburgerMenu = document.getElementById("hamburger__menu");

const sideNav = document.querySelector(".sideNav");
const main = document.querySelector("main");
const logo = document.getElementById("logo");
const sideNavBlogs = document
  .querySelector(".sideNav__blog")
  .querySelectorAll("li");
console.log(sideNavBlogs);
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
const removeChildNodes = (parent) => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
};
const render = (i) => {
  removeChildNodes(main);
  const clonePage = document.getElementById(`page${i}`).content.cloneNode(true);
  main.appendChild(clonePage);
};

for (let i = 0; i < sideNavBlogs.length; i++) {
  sideNavBlogs[i].addEventListener("click", () => {
    render(i + 1);
  });
}
logo.addEventListener("click", () => {
  render(0);
});
window.onload = () => {
  render(0);
};
