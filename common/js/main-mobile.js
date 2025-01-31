/** Header Functionality **/
let header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  if(window.scrollY > 20) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  }
});
/* ----------------------------------------------------------------------- */

/** Navbar & Submenu Functionality **/
let navLinks = document.querySelectorAll('.navLinks > li');

navLinks.forEach((li) => {
  li.addEventListener('click', (e) => {
    navLinks.forEach((li) => {
      li.classList.remove('active');
    });
    e.currentTarget.classList.add('active');
  });
});
/* ----------------------------------------------------------------------- */

/* Toggle Menu Functionality */
const toggleBar = document.getElementById('toggleBar');
const navbar = document.querySelector('.header .navLinks');
 
toggleBar.addEventListener('click', () => {
  navbar.classList.toggle('show');
  toggleBar.classList.toggle('active');
});
/* ----------------------------------------------------------------------- */

/** scrollToTop **/
let scrollToTop = document.getElementById('scrollToTop');

scrollToTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
});
/* ----------------------------------------------------------------------- */

/* Preloader Functionality */
let preLoader = document.getElementById("preloader");

window.onload = () => preLoader.style.display = "none";
/* ----------------------------------------------------------------------- */

/** Changing Page Depends on screen width **/
window.onresize = function() {
  var href = window.location.href.split("/");
  var html_location = href[href.length-1];
  
  if (window.innerWidth >= 768 && html_location !== "index.html") {
    // Refreshing page automatically when viewport size change
    document.location.reload(true);
    window.location = "index.html";
  }
}
/* ----------------------------------------------------------------------- */