




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