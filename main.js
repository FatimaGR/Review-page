const body = document.querySelector("body");
const darkMode = document.querySelector("#dark-button");
const menuButton = document.querySelector("#menu-button");
const menu = document.querySelector("#menu");

darkMode.addEventListener("click", e =>{
  body.classList.toggle("dark-mode");
});

menuButton.addEventListener("click", () => {
  menu.classList.toggle("visible");
})