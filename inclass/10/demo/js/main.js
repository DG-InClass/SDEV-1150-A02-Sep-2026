console.log('main.js loaded'); // sanity check
import '@picocss/pico/css/pico.green.min.css';
// The PicoCSS stylesheet is a "Classless CSS" stylesheet

// fillCredits is a named export
import { fillCredits } from './credits';
// smartquotes is a default export
import smartquotes from 'smartquotes'; // We're using a 3rd-party library

let message = 'Exploring "dependencies"';
console.log(message);
console.log(smartquotes(message));
smartquotes(); // this "might" not be needed

fillCredits(2026, 'Stew Dent'); // Please use YOUR name
