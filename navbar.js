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

// Determine what section the user is in and return it
function getCurrentSection() {
  const about = document.getElementById('about-me');
  console.log(about.scrollTop);
  return null;
}

// Add a listener to recalculate where the top of the navbar should be on window resizing
$(window).resize(function() {
  // Recalculate where the new position is
  navPosition = navbarParent.offsetHeight - navbarSize;
  // Stick / unstick the nav if the new position needs to
  stickyNav();
});

// Add listener for scrolling and call the function on event
$(window).scroll(function() {
  stickyNav();
})