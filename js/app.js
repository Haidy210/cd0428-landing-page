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

/**
 * Define Global Variables
 * 
*/
const sections = document.querySelectorAll('section'); // set variable for selecting a section
const menu = document.getElementById('navbar__list'); // set variable for the navbar
const fragment =document.createDocumentFragment();   // set variable for a fragment needed for appending sections in the navbar


/**
 * End Global Variables
 * Start Helper Functions
 * Build the Navigation bar
*/
    sections.forEach(section => {
      let sectionName = section.getAttribute('data-nav'); // set section data nav
      let textLink = document.createTextNode(sectionName); //create text node for each section
      let tag = document.createElement('a'); //create anchor for each section
      let listItem = document.createElement('li'); //create listItem for each section
      listItem.classList = ('menu__link');        //set style to navbar and its links
      tag.appendChild(textLink);                 //append text node to 'a' 
      listItem.appendChild(tag);                 //append 'a' to 'li'
      fragment.appendChild(listItem);             //append 'li' to fragment

      tag.addEventListener('click', () => {
        section.scrollIntoView({behavior:"smooth",block:"end"}); // Scroll to section on click
      });
    });
menu.appendChild(fragment);            //Append fragment to 'navbar__list 


//styling the section in active class (in viewport)

//on scrolling to a certain section
window.addEventListener('scroll', (makeActive) => {
      // get all sections on the page
      const sections = document.querySelectorAll('section');
      // loop through each section
      sections.forEach( section => {
        // get px distance from top
        const top = section.getBoundingClientRect().top;
        // if the distance to the top is between 0-150px
        if (top > 0 && top < 150) {
        //add the class 'active' to the section near top pf viewport
         section.classList.add('your-active-class');
        // otherwise, remove the class
        } else {
         section.classList.remove('your-active-class');
        }
        });
      });
