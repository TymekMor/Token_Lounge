const sideNavHandler = document.querySelector(".dropdown");
const sideNav = document.querySelector(".sideNav");
sideNavHandler.addEventListener("click", () => {
  sideNav.classList.toggle("hidden");
});
