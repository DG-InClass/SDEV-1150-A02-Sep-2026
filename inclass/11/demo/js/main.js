import '@picocss/pico/css/pico.green.min.css';
// the stylesheet above is a Classless CSS Stylesheet

console.log('Lesson 11 main.js loaded');

const courseCode = 'SDEV-1150';
const lessonNumber = 11;

console.log(courseCode);
console.log(`Lesson number: ${lessonNumber}`);

// Let's see what happens when we select (find) Elements in the DOM
// The DOM is the Document Object Model
const pageHeading = document.querySelector('h1');
console.log(pageHeading);
console.log(typeof pageHeading);
console.log(pageHeading.__proto__.constructor.name);

const brandName = document.querySelector('#brand-name');
console.log(brandName);

const firstContainer = document.querySelector('.container');
console.log(firstContainer);

const missingElement = document.querySelector('.missing-card');
console.log(missingElement);

// Search inside a subset of our page
const mainContent = document.querySelector('main');
console.log(mainContent);

const languageList = mainContent.querySelector('ul');
console.log(languageList);

