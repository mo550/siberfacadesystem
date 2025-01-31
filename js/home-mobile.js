/** Possibilities Box Functionality **/
let possibelHeading = document.querySelectorAll('.possibilities h2');

possibelHeading.forEach((h2) => {
  h2.addEventListener('click', (e) => {
    h2.parentElement.classList.toggle('active');
  });
});
/* ----------------------------------------------------------------------- */