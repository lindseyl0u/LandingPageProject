/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/* Define Global Variables */
const navbarList = document.querySelector('#navbar__list');
const navbarListItems = navbarList.childNodes;
const sections = document.querySelectorAll('section');
const listItems = document.querySelectorAll('li');
/* End Global Variables */


 /* Functions */

// Function to create the navigation bar and set the smooth scroll feature
function createNav() {
    sections.forEach(section => {
        const newLi = document.createElement("li");
        newLi.innerHTML = `<a href="#${section.id}" class="menu__link">${section.dataset.nav}</a>`;
        newLi.addEventListener('click', function(event) {
            event.preventDefault();
            section.scrollIntoView({behavior: "smooth"});
        });
        navbarList.appendChild(newLi);
    });
};
createNav();

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


