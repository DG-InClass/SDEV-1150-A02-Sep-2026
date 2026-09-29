displayHeading('Lesson 07 demo.js has loaded', "=");
console.log();

/**
 * Display a heading in the console with a leading blank line.
 * @param {string} text The heading text
 * @param {string?} marker The underline character (defaults to `-`)
 */
function displayHeading(text, marker = "-") {
  console.log(); // Blank line before the heading
  console.log(text);
  console.log(marker.repeat(text.length));
}

// Begin Lesson 07
displayHeading('Basic if statement');

let batteryPercent = 64;
let lowBatteryWarning = 20;

function checkBattery() {
  if (batteryPercent > lowBatteryWarning) {
    console.log('Battery level is acceptable');
    console.log('The device can keep running');
  }

  console.log(`Battery percent: ${batteryPercent}%`);
  console.log();
}

checkBattery();

batteryPercent = 12;
checkBattery(); // this time, you do not get a message that it's acceptable

/*
if(conditionalExpression)
  statementOrStatementBlock // true side
else
  statementOrStatementBlock // false side
*/

displayHeading('Basic if-else statement');

function bookSeats(seats) {
  let fee = 0;
  if (theatreSeats >= reservedSeats + seats) {
    console.log('Booking confirmed.');
    reservedSeats += seats;
    fee = seats * 12.50;
    console.log(`${seats} seats booked for $ ${fee.toFixed(2)}`);
  } else {
    console.log('Booking declined');
    console.log(`Unable to book ${seats} seats; not enough seats available.`);
  }
  console.log();
  return fee;
}

let theatreSeats = 25, reservedSeats = 5, groupAFee, groupBFee;

groupAFee = bookSeats(7); // What number is returned?
groupBFee = bookSeats(20); // What number is returned?

if (groupBFee == 0) {
  console.log('Not enough room for all 20 people in this group');
  groupBFee = bookSeats(10); // Half of you can't come.. 😢
}

console.log(`${theatreSeats - reservedSeats} seats are still available.`);
console.log();

console.log('"5" == 5 ', "5" == 5);
//                       \______/  An expression that will get evaluated
// JavaScript tries to "reconcile" the data types before making a comparison
// by converting the values to a common data type.

console.log('"7" === 7', "7" === 7); // false
// Because the data types do not match, a STRICT comparison will return false

displayHeading('Booleans and "Truthy"/"Falsey" Conditions');

let isEmpty = true; // isEmpty will be a boolean variable
// A boolean value can only be true/false

// Notice that I did not have to say  
// (isEmpty == true)
if (isEmpty) { // Conditional expressions must always resolve to a boolean
  console.log('Play cancelled - no reservations');
} else {
  console.log('The play is on!');
}

// JavaScript will recognize certain non-boolean data types as
// "equivalent" to a false value
// - Empty strings
// - The number zero
// - null
// - undefined
// - An empty object {}
// All other non-boolean values are treated as equivalent to true

function announcePlayStatus() {
  if (reservedSeats)  // Notice how reservedSeats is a 'number' data type
    console.log(`The play is on! ${reservedSeats} in the audience.`);
  else
    console.log('Play cancelled - no reservations');
}

announcePlayStatus(); // Should say the play is on.

// The year 2020 has come....
reservedSeats = 0; // everybody cancelled
announcePlayStatus(); // Should say it's cancelled.
console.log();

// 📍 BONUS: In VS Code, we can create collapsible regions with special comments
// #region Nested If/Else
displayHeading('Nested If-Else');

function reportTriangle(base, height, diagonol) {
  let triangleType;
  // It only has to be close for our purposes
  let hypotenuse = Math.round(Math.hypot(base, height) * 1000) / 1000;

  if (diagonol == hypotenuse) {
    triangleType = 'right-angle';
  } else {
    if ( diagonol > hypotenuse) {
      triangleType = 'acute';
    } else {
      triangleType = 'obtuse';
    }
  }

  console.log(`The triangle has side lengths of ${base}, ${height} and ${diagonol}`);
  console.log(`Classification: ${triangleType} triangle`);
  console.log();
}

reportTriangle(12, 35, 17);
reportTriangle(7, 5, 17);
reportTriangle(5, 7, 8);
// #endregion

export { checkBattery, bookSeats, announcePlayStatus, reportTriangle }
