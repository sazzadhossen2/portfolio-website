/*=============== SHOW MENU ===============*/

const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

/* Menu show */
if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

// Menu hidden
if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

/*=============== REMOVE MENU MOBILE ===============*/

// Select all elements with the class 'nav__link'
const navLink = document.querySelectorAll('.nav__link');

// Function to handle the click event
const linkAction = () => {
    // Select the element with the id 'nav-menu'
    const navMenu = document.getElementById('nav-menu');
    // Remove the class 'show-menu' from the navMenu element
    navMenu.classList.remove('show-menu');
}

// Add a click event listener to each 'nav__link' element
navLink.forEach(n => n.addEventListener('click', linkAction));

/*=============== ADD BLUR HEADER ===============*/

const blurHeader = () => {
    const header = document.getElementById('header');
    // Add a class if the vertical scroll position is greater than or equal to 50
    window.scrollY >= 50 ? header.classList.add('blur-header')
     : header.classList.remove('blur-header');
  };
  
  window.addEventListener('scroll', blurHeader);
  
/*=============== EMAIL JS ===============*/


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
