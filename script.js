const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');
const slider = document.querySelector('.slider-cards');
const cards = document.querySelectorAll('.card-2');
let currentIndex = 0;

// Function to update the slider position
function updateSliderPosition() {
  slider.style.transition = 'transform 0.3s ease-in-out'; // Smooth transition
  slider.style.transform = `translateX(-${currentIndex * (cards[0].offsetWidth + 10)}px)`; // Move based on current index
}

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex === 0) ? cards.length - 1 : currentIndex - 1;
  updateSliderPosition();
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex === cards.length - 1) ? 0 : currentIndex + 1; 
  updateSliderPosition();
});

setInterval(() => {
  currentIndex = (currentIndex === cards.length - 1) ? 0 : currentIndex + 1;
  updateSliderPosition();
}, 10000); 

slider.addEventListener('transitionend', () => {
  if (currentIndex === cards.length) {
    slider.style.transition = 'none'; 
    currentIndex = 0;
    slider.style.transform = `translateX(0)`; 
    setTimeout(() => {
      slider.style.transition = 'transform 0.3s ease-in-out'; 
    }, 0);
  }
});
