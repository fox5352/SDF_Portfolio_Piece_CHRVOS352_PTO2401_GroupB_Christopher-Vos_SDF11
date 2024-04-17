const navBtn = document.getElementById("nav-toggle-btn");
const navMenu = document.getElementById("nav-toggle-menu");

// ------------ mobile nav button ------------
navBtn.addEventListener("click", function () {
  navMenu.classList.toggle("hidden");
  navMenu.classList.toggle("flex");
});

