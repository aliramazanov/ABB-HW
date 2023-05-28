const mobileOpenBtn = document.querySelector(".mobile-open");
const mobileCloseBtn = document.querySelector(".mobile-close");
const navbar = document.querySelector(".navbar");

mobileOpenBtn.addEventListener("click", () => {
  navbar.classList.add("open");
  mobileCloseBtn.style.display = "block"; // Show the mobile close button
});

mobileCloseBtn.addEventListener("click", () => {
  navbar.classList.remove("open");
  mobileCloseBtn.style.display = "none"; // Hide the mobile close button
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    navbar.classList.remove("open");
    mobileCloseBtn.style.display = "none"; // Hide the mobile close button
  }
});
