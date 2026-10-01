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

let circle = new Shape('circle'); // We have instantiated a new Shape object
circle.assignDimensions({ radius: 5 });
//                      \__object __/
console.log(`Circle area: ${circle.area().toFixed(2)}`);
console.log(circle);

let square = new Shape('square');
square.assignDimensions({ length: 8 });
console.log(`Square area: ${square.area().toFixed(2)}`);

let triangle = new Shape('triangle');
triangle.assignDimensions({ base: 10, height: 6 });
console.log(`Triangle area: ${triangle.area().toFixed(2)}`);
console.log();

let capitalTriangle = new Shape('Triangle');
capitalTriangle.assignDimensions({ base: 12, height: 5 });
console.log(`Capital triangle area: ${capitalTriangle.area()}`);
console.log();

let mystery = new Shape('circle');
mystery.assignDimensions({ length: 12 }); // What do you think will happen??
console.log(`Mystery area: ${mystery.area()}`); // What happens here??

