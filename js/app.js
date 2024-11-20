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

// Function to set sections as active
function makeActive() {
    for (section of sections) {
        const sectionId = section.id.slice(7, 8);
        const box = section.getBoundingClientRect();
        if (box.top <= 150 && box.bottom >= 150) {
            section.classList.add('your-active-class');
            navbarListItems[sectionId].classList.add('active-tab');
        } else {
            section.classList.remove('your-active-class');
            navbarListItems[sectionId].classList.remove('active-tab');
        };
    };
};

document.addEventListener('scroll', function() { 
    makeActive();
});

