// For sticking the navbar
const navbar = document.querySelector('nav');
const navbarParent = navbar.parentElement;
const navbarSize = navbar.offsetHeight;
var navPosition = navbar.offsetTop;
// For changing navbar colors based on scroll position
var headerSize = $('header').outerHeight();
var aboutmeSize = $('#about-me').outerHeight();
var educationSize = $('#education').outerHeight();
var experienceSize = $('#experience').outerHeight();
var projectSize = $('#projects').outerHeight();


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
  headerSize = $('header').outerHeight();
  aboutmeSize = $('#about-me').outerHeight();
  educationSize = $('#education').outerHeight();
  experienceSize = $('#experience').outerHeight();
  projectSize = $('#projects').outerHeight();
});

// Add listener for scrolling and call the function on event
$(window).scroll(function() {
  stickyNav();

  // Now detect where the user is on the page so we can dynamically change the color of the navbar text
  var midOfScreen = Math.floor($(window).height() / 2);
  var scrollPosition = window.scrollY + midOfScreen;

  var navAboutText = document.getElementById('nav-about');
  var navEduText = document.getElementById('nav-edu');
  var navExpText = document.getElementById('nav-exp');
  var navProjText = document.getElementById('nav-proj');

  if(scrollPosition >= headerSize && scrollPosition < headerSize + aboutmeSize)
  {
    // In About Me section
    navAboutText.setAttribute('style', 'color: white;');
    navEduText.setAttribute('style', 'color: rgb(172, 172, 172);');
  }
  else if(scrollPosition >= headerSize + aboutmeSize && scrollPosition < headerSize + aboutmeSize + educationSize)
  {
    // In Education section
    navAboutText.setAttribute('style', 'color: rgb(172, 172, 172);');
    navEduText.setAttribute('style', 'color: white;');
    navExpText.setAttribute('style', 'color: rgb(172, 172, 172);');
  }
  else if(scrollPosition >= headerSize + aboutmeSize + educationSize 
          && scrollPosition < headerSize + aboutmeSize + educationSize + experienceSize)
  {
    // In Experience section
    navEduText.setAttribute('style', 'color: rgb(172, 172, 172);');
    navExpText.setAttribute('style', 'color: white;');
    navProjText.setAttribute('style', 'color: rgb(172, 172, 172);');
  }
  else if(scrollPosition >= headerSize + aboutmeSize + educationSize + experienceSize
          && scrollPosition < headerSize + aboutmeSize + educationSize + experienceSize + projectSize)
  {
    // In Projects section
    navExpText.setAttribute('style', 'color: rgb(172, 172, 172);');
    navProjText.setAttribute('style', 'color: white;');
  }
  else
  {
    navAboutText.setAttribute('style', 'color: rgb(172, 172, 172);');
  }
});