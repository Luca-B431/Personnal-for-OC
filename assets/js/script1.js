document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelector(".images");
  const prevButton = document.querySelector(".left");
  const nextButton = document.querySelector(".right");
  const imageCount = document.querySelectorAll(".images img").length;

  let currentIndex = 0;

  function updateCarousel() {
    const offset = -currentIndex * 100;
    images.style.transform = `translateX(${offset}%)`;
    updateBackgroundGradient();
  }

  function updateBackgroundGradient() {}

  function showNextImage() {
    currentIndex = (currentIndex + 1) % imageCount;
    updateCarousel();
  }

  function showPrevImage() {
    currentIndex = (currentIndex - 1 + imageCount) % imageCount;
    updateCarousel();
  }

  nextButton.addEventListener("click", showNextImage);
  prevButton.addEventListener("click", showPrevImage);

  // Initial background gradient
  updateBackgroundGradient();
});