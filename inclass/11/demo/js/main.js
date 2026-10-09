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

// Modify content, attributes, and styles
pageHeading.textContent = 'JavaScript Can Update the DOM';

const brandLabel = brandName.querySelector('strong');
brandLabel.textContent = 'Dynamic DOM';

const threeTrustedLanguages = `
    <li><strong>HTML</strong> gives the page <u>structure</u>.</li>
    <li><strong>CSS</strong> controls how the page <u>looks</u>.</li>
    <li><strong>JavaScript</strong> can <u>updates</u> the live DOM.</li>
`;

languageList.innerHTML = threeTrustedLanguages;

// pageHeading.innerHTML += `<img src=x onerror="alert('DANGER!');" />`;

const asideImage = document.querySelector('aside img');
asideImage.setAttribute('width', '180');
asideImage.setAttribute('alt', 'A person building a website');
asideImage.src = './img/undraw_code-review_jdgp.svg';

languageList.style.borderLeft = '0.4rem solid var(--pico-primary)';
languageList.style.paddingLeft = '1rem';

// TODO: Move the following import statement to the top of this file...
import { fillCredits } from './credits';

fillCredits('2026', 'Stew Dent'); // Use YOUR name

