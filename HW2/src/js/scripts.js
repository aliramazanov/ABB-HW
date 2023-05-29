const mobileOpenBtn = document.querySelector(".mobile-open");
const mobileCloseBtn = document.querySelector(".mobile-close");
const navbar = document.querySelector(".navbar");

mobileOpenBtn.addEventListener("click", () => {
  navbar.classList.add("open");
  mobileCloseBtn.style.display = "block"; // 
});

mobileCloseBtn.addEventListener("click", () => {
  navbar.classList.remove("open");
  mobileCloseBtn.style.display = "none"; 
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    navbar.classList.remove("open");
    mobileCloseBtn.style.display = "none"; 
  }
});
