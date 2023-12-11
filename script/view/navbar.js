const navbar = document.getElementById("navbar");
const aAll = document.querySelectorAll(".navbar a");

const showNavbar = () => {
  //   navbar.classList.remove("hidden");
  navbar.classList.toggle("hidden");
};

aAll.forEach((a) => {
  a.addEventListener("click", () => showNavbar());
});

/* scroll smoth navbar */
// Check if the hash exists in the URL and navigate smoothly to the target
document.addEventListener("DOMContentLoaded", function () {
  const targetElement = document.querySelector(window.location.hash);
  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: "smooth",
    });
  }
});

// Add smooth scrolling for internal links
document.addEventListener("click", function (event) {
  const target = event.target;
  if (target.tagName === "A" && target.getAttribute("href").startsWith("#")) {
    const targetElement = document.querySelector(target.getAttribute("href"));
    if (targetElement) {
      event.preventDefault();
      targetElement.scrollIntoView({
        behavior: "smooth",
      });
    }
  }
});
