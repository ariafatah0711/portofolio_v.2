// navbar
const navbar = document.getElementById("navbar");
const aAll = document.querySelectorAll(".navbar a");

const showNavbar = () => {
  //   navbar.classList.remove("hidden");
  navbar.classList.toggle("hidden");
};

aAll.forEach((a) => {
  a.addEventListener("click", () => showNavbar());
});
