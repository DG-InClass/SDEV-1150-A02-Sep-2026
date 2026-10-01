// Note: Because there is no "module resolver",
//       we have to specify the file extension.
//       We only need to do so in this lesson;
//       later node projects will not require
//       the .js extension.
import { displayHeading } from './display.js';
import { add, about } from './utils.js';
import { Shape, supportedShapes } from './shapes.js';

displayHeading("Lesson 09 demo.js has loaded", "=");
console.log("\t🎵 Code is spread across multiple files");
console.log();

console.log(`Module name: ${about.name}`);
console.log(`2 + 3 = ${add(2, 3)}`);
console.log();
// you cannot import items that are not exported
// import { info } from './utils.js';
// console.log(info);

displayHeading('Shape module');
console.log(`Supported shapes: ${supportedShapes.join(', ')}`);
console.log();

