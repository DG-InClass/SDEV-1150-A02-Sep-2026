/* Dan Gilleland - Sep 10, 2026
   1) Make sure I have the terminal window open in THIS folder
   2) node --watch demo.js
*/
// Single-line comments begin with a double-slash
console.log('Lesson 02 demo.js has loaded');
console.log('=============================');
console.log(); // Prints a blank line

// create a variable and give it a value
let report = 'Community Event Planning Demo';
report += '\n-----------------------------';

let eventName = 'Neighbourhood Game Night';
let roomName = 'Learning Commons';
let guestCount = 18;

report += `\nEvent: ${eventName}`;
report += `\nRoom: ${roomName}`;
report += `\nExpected guests: ${guestCount}`;

let tablesNeeded;
let seatsPerTable = 6;

tablesNeeded = guestCount / seatsPerTable;

report += '\n';
report += `\nTables needed: ${tablesNeeded}`;

console.log(report);