console.log('Lesson 14 main.js loaded'); // sanity check

import '@picocss/pico/css/pico.green.min.css';

// Query the DOM to get references to parts of our page
const pageHeading = document.querySelector('h1');
const mainContent = document.querySelector('main');
const navLinks = document.querySelectorAll('nav a');

console.log(pageHeading);
console.log(mainContent);
console.log(navLinks); // Not an array, but kinda like an array

// extract all the link text in the navbar
//  ... is the spread operator
//  [...navlink]   is the same as
//  [navLinks[0], navLinks[1], navLinks[2], navLinks[n-1]]
//  [...navLinks]   is creating an Array version of the NodeList
//                  so that we can use the Array's .map function
const navLinkLabels = [...navLinks].map((link) => {
    return link.textContent;
});

console.log(navLinkLabels);

const missingPanel = document.querySelector('.announcement-panel');
console.log(missingPanel); // null

// Select from a subtree
const languageList = mainContent.querySelector('ul');
const languageItems = languageList.querySelectorAll('li');

console.log(languageList);
console.log(languageItems);

// Every HTMLElement that I select from the page
// has several properties that allow me to "navigate"
// or "find" closely positioned elements.
const listParent = languageList.parentElement; // what is the parent of the <ul>?
const firstLanguage = languageList.firstElementChild;
const lastLanguage = languageList.lastElementChild;

console.log(listParent);
console.log(firstLanguage);
console.log(lastLanguage);

const paragraphBeforeList = languageList.previousElementSibling;
const ruleAfterList = languageList.nextElementSibling;

console.log(paragraphBeforeList);
console.log(ruleAfterList);

// HOMEWORK: Continue from the DemoInstructions.md to complete this file from
//           the heading "Modify Existing Elements" onward.
