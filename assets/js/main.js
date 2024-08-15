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
const contactForm = document.getElementById('contact-form');
const contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Send the form using EmailJS
    emailjs.sendForm('service_zb8t6o8', 'template_527ikwp', '#contact-form', 'u8QOlOncE_ppnubeq')
        .then((response) => {
            // Show success message
            contactMessage.textContent = 'Message sent successfully ✅';
            console.log('SUCCESS!', response.status, response.text);
            
            // Clear the success message after 5 seconds
            setTimeout(() => {
                contactMessage.textContent = '';
            }, 5000);

            // Reset the form
            contactForm.reset();
        })
        .catch((error) => {
            // Show error message
            contactMessage.textContent = 'Failed to send message. Please try again.';
            console.error('FAILED...', error);
            
            // Clear the error message after 5 seconds
            setTimeout(() => {
                contactMessage.textContent = '';
            }, 5000);
        });
};

// Attach the submit event listener to the form
contactForm.addEventListener('submit', sendEmail);


/*=============== SHOW SCROLL UP ===============*/ 

// Add event listener for form submission
contactForm.addEventListener('submit', sendEmail);

// Function to show or hide the scroll-up button based on scroll position
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 350 viewport height, add the show-scroll class
    this.scrollY >= 350 
        ? scrollUp.classList.add('show-scroll') 
        : scrollUp.classList.remove('show-scroll');
};

// Add event listener for scroll events
window.addEventListener('scroll', scrollUp);


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

// Select all sections that have an id attribute
const sections = document.querySelectorAll('section[id]');

// Function to highlight the active section in the navigation menu
const scrollActive = () => {
    const scrollDown = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute('id');
        const sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link');
        } else {
            sectionsClass.classList.remove('active-link');
        }
    });
};

// Add event listener for scroll events
window.addEventListener('scroll', scrollActive);

/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = scrollReveal({
    origin:'top',
    distance:'60px',
    duration:2500,
    delay:400,
    // reset:true
})

sr.reveal('.home__data, .experience, .skills, .contact__container');
sr.reveal('.home__img', { delay: 600 });
sr.reveal('.home__scroll', { delay: 800 });
sr.reveal('.work__card, .services__card', { interval: 100 });
sr.reveal('.about__content', { origin: 'right' });
sr.reveal('.about__img', { origin: 'left' });
