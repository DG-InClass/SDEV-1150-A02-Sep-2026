displayHeading('Lesson 05 demo.js has loaded', '=');

function displayHeading(text, marker = '-') { // Note the default value for the second parameter
    console.log(text);
    let underline = marker.repeat(text.length);
    console.log(underline);
    // console.log(''.padEnd(text.length, marker));
    console.log();
}

function calculateBusCount(studentCount, seatsPerBus) {
    //      /--- ceil function called --------\
    //     /         /----  calculation ------\\
    return Math.ceil(studentCount / seatsPerBus);
    //     \_______ expression ________________/
}

function calculateMealCost(studentCount, mealPrice) {
    return studentCount * mealPrice;
}

function formatMoney(amount) {
    return `$ ${amount.toFixed(2)}`;
}

displayHeading('Field Trip Demo');
// BTW, we can declare and/or initialize multiple variables on a single statement
let studentCount = 75, seatsPerBus = 18, mealPrice = 9.75, admissionPrice = 14.5, depositPaid = 50;

let busCount = calculateBusCount(studentCount, seatsPerBus);
let mealCost = calculateMealCost(studentCount, mealPrice);

console.log(`${studentCount} students need ${busCount} buses.`);
console.log(`Meals will cost ${formatMoney(mealCost)}.`);
console.log();

displayHeading('Function expressions');
// The following uses function expression syntax to declare the function
const calculateAdmissionCost = function(studentCount, admissionPrice) {
    let result = studentCount * admissionPrice;
    return result;
}

let admissionCost = calculateAdmissionCost(studentCount, admissionPrice);

console.log(`Admission will cost ${formatMoney(admissionCost)}.`);
console.log(`calculateAdmissionCost is a ${typeof calculateAdmissionCost}`);
// notice that we are NOT calling this function   \____________________/
console.log('Here is the contents of that function:\n', calculateAdmissionCost.toString());


// Passing a Function into another Function
const calculateAmount = function (firstAmount, secondAmount, operation) {
    // Note that I intend to use operation as though it is a function
    // That is, the operation parameter is a Callback Function
    let result = operation(firstAmount, secondAmount);
    return result;
}

const addAmounts = function(first, second) {
    return first + second;
}

const subtractAmount = function(firstValue, secondValue) {
    return firstValue - secondValue;
}

displayHeading('Passing functions into functions');

let tripSubtotal = calculateAmount(mealCost, admissionCost, addAmounts);
let remainingAfterDeposit = calculateAmount(tripSubtotal, depositPaid, subtractAmount);
// Once more, notice that I am not calling subtractAmount here         \____________/
console.log();

// Return a function from a function
displayHeading('Returning a function from a function');

const buildNumberedLogger = function() {
    let currentStep = 1;

    return function(text) {
        console.log(`${currentStep}) ${text}`);
        currentStep++;
    };
};

let logStep = buildNumberedLogger();
displayHeading('Before the field trip...');
logStep(`Confirm ${studentCount} students.`);
logStep(`Reserve ${busCount} buses.`);
logStep(`Collect ${formatMoney(remainingAfterDeposit)} after the deposit.`);
console.log();

console.log('(each numbered logger has it own internal state....)\n');

let morningChecklist = buildNumberedLogger();
let afternoonChecklist = buildNumberedLogger();

displayHeading('Morning Checklist', '~');
morningChecklist('Take attendance.');
morningChecklist('Load lunches.');
morningChecklist('Meet at school entrance.');
morningChecklist('Board buses for trip');
morningChecklist('Offload at Edmonton Science Centre');
console.log();

displayHeading('Afternoon Checklist', '~');
afternoonChecklist('Meet outside for lunch');
afternoonChecklist('Assemble at observatory');
afternoonChecklist('Meet at the buses');
afternoonChecklist('Take attendance');
afternoonChecklist('Board buses for return.');
afternoonChecklist('Return to school.');

export {
    buildNumberedLogger,
    calculateAmount,
    calculateMealCost,
    calculateBusCount,
    calculateAdmissionCost,
    formatMoney
}

