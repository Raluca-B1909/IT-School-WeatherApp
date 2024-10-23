const scrollToTopButton = document.querySelector(".scroll-to-top");
const viewportHeight = window.innerHeight;

function handleScroll() {
  if (window.scrollY > viewportHeight / 2) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
}

function handleScrollButtonClick() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.addEventListener("scroll", handleScroll);
scrollToTopButton.addEventListener("click", handleScrollButtonClick);
