document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelector(".images");
  const prevButton = document.querySelector(".left");
  const nextButton = document.querySelector(".right");
  const carrousel = document.querySelector(".four-season_container");
  const imageCount = document.querySelectorAll(".images img").length;

  // Tableau de dégradés de fond pour chaque image
  const gradients = [
    "linear-gradient(47deg, rgba(246,246,246,1) 10%, rgba(190,121,146,1) 25%, rgba(191,118,144,1) 32%, rgba(255,255,255,1) 50%, rgba(223,223,223,1) 100%)", // Dégradé pour la première image
    "radial-gradient(circle, rgba(185,142,110,1) 0%, rgba(185,142,110,1) 17%, rgba(255,247,235,1) 44%, rgba(212,183,159,1) 59%, rgba(185,142,110,1) 82%, rgba(255,255,255,1) 95%)", // Dégradé pour la deuxième image
    "linear-gradient(90deg, rgba(238,174,202,1) 0%, rgba(0,0,0,1) 0%, rgba(115,6,6,1) 22%, rgba(117,0,0,1) 25%, rgba(0,0,0,1) 100%)", // Dégradé pour la troisième image
    "linear-gradient(23deg, rgba(143,202,203,1) 0%, rgba(194,253,255,0.8505996148459384) 51%, rgba(255,255,255,1) 100%)", // Dégradé pour la quatrième image
  ];

  let currentIndex = 0;

  function updateCarousel() {
    const offset = -currentIndex * 100;
    images.style.transform = `translateX(${offset}%)`;
    updateBackgroundGradient();
  }

  function updateBackgroundGradient() {
    carrousel.style.background = gradients[currentIndex];
  }

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
