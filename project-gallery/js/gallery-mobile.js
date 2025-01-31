/* Slider Functionality */
let inProgSlides = document.querySelectorAll('.in-progress .slide');
let inProgNextBtn = document.querySelector('.in-progress .nextBtn');
let inProgPrevBtn = document.querySelector('.in-progress .prevBtn');

let finishSlides = document.querySelectorAll('.finished .slide');
let finishNextBtn = document.querySelector('.finished .nextBtn');
let finishPrevBtn = document.querySelector('.finished .prevBtn');

// Slider Function
function slider(slides, nextBtn, prevBtn) {
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
}

window.addEventListener('load', () => {
  slider(inProgSlides, inProgNextBtn, inProgPrevBtn);
  slider(finishSlides, finishNextBtn, finishPrevBtn);
});