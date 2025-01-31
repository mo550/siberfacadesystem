/* Slider Functionality */
let slides = document.querySelectorAll('.slide');
let nextBtn = document.getElementById('next');
let prevBtn = document.getElementById('prev');

// Move each slide to left by it's width
slides.forEach(function(slide, index) {
  slide.style.left = `${index * 100}%`;
});

// Next & Prev Btn Function
let counter = 0;
nextBtn.addEventListener('click', function() {
  counter++;
  checker();
});
prevBtn.addEventListener('click', function() {
  counter--;
  checker();
});

// Checker Function
function checker() {
  if(counter === slides.length) {
    counter = 0;
  }
  if(counter < 0){
    counter = slides.length - 1;
  }

  // Moving Each Slide In X Direction by -+100% For Every Click
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}
/* ----------------------------------------------------------------------- */