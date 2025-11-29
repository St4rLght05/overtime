const btn = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu-list");

btn.addEventListener("click", () => {
  menu.classList.toggle("active");
});
