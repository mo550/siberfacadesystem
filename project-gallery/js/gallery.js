/** Gallery Functionality **/
// In Progress Gallery
const progSliderContainer = document.querySelector('.in-progress .slider-container');
const progSlider = document.querySelector('.in-progress .slider');

let clicked = false;
let xAxis;
let x;

progSliderContainer.addEventListener('mouseup', () => {
    progSliderContainer.style.cursor = `grab`;
}) 
progSliderContainer.addEventListener('mousedown', e => {
    clicked = true
    xAxis = e.offsetX - progSlider.offsetLeft;
    // tells the current position
    progSliderContainer.style.cursor = `grabbing`
})

window.addEventListener('mouseup', () => {
    clicked = false
})

progSliderContainer.addEventListener('mousemove', e => {
    if (!clicked) return;
    e.preventDefault();

    x = e.offsetX;
    progSlider.style.left = `${x - xAxis}px`;
    // but we dont want it to scroll forever

    progCheckSize()
})

function progCheckSize() {
    let progressSliderContainerOut = progSliderContainer.getBoundingClientRect();
    let sliderIn = progSlider.getBoundingClientRect();

    if (parseInt(progSlider.style.left) > 0) {
        progSlider.style.left = `0px`;
    } else if (sliderIn.right < progressSliderContainerOut.right) {
        progSlider.style.left = `-${sliderIn.width - progressSliderContainerOut.width}px`
    }
}
/* ----------------------------------------------------------------------- */