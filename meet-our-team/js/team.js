/** Team Card Functionality **/
let teamBox = document.querySelectorAll('.team-box');

teamBox.forEach((card) => {
  card.addEventListener('click', () => {
    // teamBox.forEach((el) => {
    //   el.classList.remove('flipped');
    // });
    card.classList.toggle('flipped');
  });
});