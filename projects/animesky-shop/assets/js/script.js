




const heroSliderItems = document.querySelectorAll('.hero-slider .slider-item');

let currentSlidePos = 0;

const updateSliderPos = function () {
  heroSliderItems.forEach((item, index) => {
    item.classList.toggle('active', index === currentSlidePos);
  });
};

const slideNext = function () {
  currentSlidePos = (currentSlidePos + 1) % heroSliderItems.length;
  updateSliderPos();
};

if (heroSliderItems.length > 0) {
  updateSliderPos();
  setInterval(slideNext, 7000);
}

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

let lastScrollPos = 0;

const hideHeader = function () {
  const isScrollBottom = lastScrollPos < window.scrollY;
  if (isScrollBottom) {
    header.classList.add("hide");
  } else {
    header.classList.remove("hide");
  }

  lastScrollPos = window.scrollY;
}

window.addEventListener("scroll", function () {
  if (window.scrollY >= 50) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
    hideHeader();
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});