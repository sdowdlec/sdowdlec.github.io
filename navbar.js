/* ~~~~~~~~~~~~~~~~~~~ Nav Bar ~~~~~~~~~~~~~~~~~~~ */

const navbar = document.querySelector('nav');
const navbarParent = navbar.parentElement;
const navbarSize = navbar.offsetHeight;
var navPosition = navbar.offsetTop;

// Helper function to determine if the navbar needs to be stickied or not
function stickyNav() {
  if(window.scrollY >= navPosition) {
    navbar.classList.add('sticky-nav');
  }
  else {
    navbar.classList.remove('sticky-nav');
  }
}


// Add a listener to recalculate where the top of the navbar should be on window resizing
$(window).resize(function() {
  navPosition = navbarParent.offsetHeight - navbarSize;
  stickyNav();
});

// Add listener for scrolling and call the function on event
$(window).scroll(function() {
  stickyNav();
});