const scrollBtn = document.querySelector(".scroll-top");

// показать кнопку при прокрутке
window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    scrollBtn.classList.add("show");
  } else {
    scrollBtn.classList.remove("show");
  }
});

// плавный скролл вверх
scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});