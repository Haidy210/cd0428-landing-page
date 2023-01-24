#  Landing Page Project

## Table of Contents
- [Built with](#built-with)
- [Instructions](#instructions)
- [Usabilty](#Usabilty)
- [styling](#styling)
- [HTML Structre](#html-structure)
- [project requirments](#project-requirments)
- [Steps done on project](#steps-done-on-project)
- [Acknowldgement](#acknowldgement)

## Built with
- Semantic HTML5 Markup
- Css styling properties
- JavaScript (JS Version: ES2015/ES6)
- Using Visual Studio Code

## Instructions

on downloading, The project should have a structure like the one shown below. All files shown must be present and the app successfully renders a home page with clear design and functionality added when `index.html` is loaded in the browser. No errors should display in console. 

## *css*
- [`styles.css`]

## *js*
- [`app.js`]
## *HTML*
- [`index.html`]

README.md

## Usabilty

- All features are usable across modern desktop, tablet, and phone browsers.

- A Responsive layout of the landing page is used across all devices.

- The navigation bar is responsive too across all these devices.

- Responsiveness was verified by inspecting the landing page using the Developer Tools option on Google Chrome Browser.

## Styling

- Styling is added for active states.

- CSS class active state is set when the element is in the viewport.

- The active section in the Navbar is highlighted.

## HTML Structure
- There are 4 sections that have been added to the page.

## Project requirments

The starter project has some HTML and CSS styling to display a static version of the Landing Page project which was required to be transformed to an interactive one. As showen in figure below provided by Udacity Classroom.

![Landing page](https://video.udacity-data.com/topher/2021/August/611ac8c6_scroll-to-section/scroll-to-section.gif)

## Steps done on project

- **First**

In `index.html`, a 4th section was added to the reat of the structure.

- **Second**

In `app.js`, I began creating a dynamic **navigation bar** that contains a list of items that links the four  sections in the bar using:
- Declaring variables `sections`, `menu`, & `fragment`.
-  `querySelectorAll()` to select all sections.
- `getElementById()` to get Id of sections and navbar list.
- `createDocumentFragment()` to create a fragment.
- `forEach()` method to loop on each section.
- `createElment()`to create anchor `<a>` element and list item `<li>` element.
- `createTextNode` to set section id in a text node.
- Appending elements to each other by using `AppendChild()`method.
- upon clicking an item from the navigation menu, the link scrolls to the appropriate section using:
```
tag.addEventListener('click', () => {
        section.scrollIntoView({behavior:"smooth",block:"end"});
 ```
 - **Third**

 Adding an active state to navigation items when a section is in the viewport through 2 steps:

 - Detecting the element location relative to the viewport using
  ```
 .getBoundingClientRect().top;
```
when section is near the top of the viewport.

- Using a `forEach()` loop to detect the section location if it is in the viewport then add Active class, if not then it will be removed as follows:
```
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
 ```
 - This will be stored in the function `makeActive()`.

 - Lastly, calling the `makeActive()` function whenever the user scrolls the page.
 ```
 window.addEventListener("scroll", function() { makeActive();});
 ```
## Acknowldgements

- [HTML DOM Document createDocumentFragment()](https://www.w3schools.com/jsref/met_document_createdocumentfragment.asp).
- [HTML DOMTokenList contains()](https://www.w3schools.com/Jsref/met_domtokenlist_contains.asp).
- [HTML DOM Document createTextNode()
](https://www.w3schools.com/jsref/met_document_createtextnode.asp).
- [HTML DOM Element appendChild()](https://www.w3schools.com/jsref/met_node_appendchild.asp).
- [forEach() loop](https://learn.udacity.com/nanodegrees/nd0011-fwd-t2/parts/c7acbd79-f579-4775-8dcc-7dec992196cb/lessons/ls0544/concepts/6d3f2513-37dc-41bd-b231-316278224bf7).
- [addEventListener()](https://www.geeksforgeeks.org/javascript-addeventlistener-with-examples/).

- [HTML DOM Document addEventListener()](https://www.w3schools.com/jsref/met_document_addeventlistener.asp).
- [Element.scrollIntoView()](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView).
- [Element.scrollTo()](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollTo).
- [Adding an anchor link to specific section](https://www.codeunderscored.com/add-anchor-link-scroll-specific-section-page/).
- [Add Active Class to Current Element](https://www.w3schools.com/howto/howto_js_active_element.asp).
- [Add a Class](https://www.w3schools.com/howto/howto_js_add_class.asp).
- [HTML DOM Element getBoundingClientRect()](https://www.w3schools.com/jsref/met_element_getboundingclientrect.asp).
- [Basic Syntax](https://www.markdownguide.org/basic-syntax/#code).
- Aslo I got great help from tutors on "EgFwd" online community and webinar.
- Repository credit to GitHub.
