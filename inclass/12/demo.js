console.log('Lesson 12 demo.js has loaded');
console.log('===============================');
console.log();

console.log('Saving toward a purchase');
console.log('------------------------');
const log = console.log;
let laptopCost = 950;
let savingsBalance = 320;
let monthlyDeposit = 135;
let month = 0;

while (savingsBalance < laptopCost) {
    month = month + 1; // month++
    savingsBalance = savingsBalance + monthlyDeposit; // savingsBalance += monthlyBalance
    log(`Month ${month}: $${savingsBalance}`);    
}
log(`Goal reached after ${month} months.`);
log();

log('Study session totals');
log('--------------------');

let studyMinutes = [45, 30, 0, 75, 50, 90, 20];
let totalMinutes = 0;
let completedSession = 0;

for (let index = 0; index < studyMinutes.length; index++) {
//   \____________/ \_ condional expression ___/ \_____/
//   initialization                               incrementing (each time at the end
//                                                  of the loop)
    let minutes = studyMinutes[index];

    if (minutes > 0) {
        completedSession++;
        totalMinutes += minutes;
        log(`Session ${index + 1}: ${minutes} minutes`);
    } else {
        log(`Session ${index + 1}: missed`);
    }

    if (minutes >= 75) {
        log('  Long study session');
    }
}

let averageMinutes = totalMinutes / completedSession; // 👀 What could go wrong?

log(`Completed sessions: ${completedSession}`);
log(`Total minutes: ${totalMinutes}`);
log(`Average minutes: ${averageMinutes.toFixed(1)}`);
log();

log('First study target');
log('------------------');

let targetMinutes = 150;
let targetDay = undefined;

for (let runningTotal = 0, index = 0; index < studyMinutes.length; index++) {
    runningTotal += studyMinutes[index];

    if (runningTotal >= targetMinutes) {
        targetDay = index + 1;
        break;
    }
}

if (targetDay) {
    log(`The target was reached on day ${targetDay}.`);
} else {
    log('The target was not reached this week.')
}
log();

log('Weekly habit tracker');
log('--------------------');

let habits = ['Read', 'Code', 'Review'];
let days = ['Mon', 'Tue', 'Wed', 'Thu'];

for (let habitIndex = 0; habitIndex < habits.length; habitIndex++) {
    let line = `${habits[habitIndex]}:`;

    for (let dayIndex = 0; dayIndex < days.length; dayIndex++) {
        line += `\t ${days[dayIndex]}=[ ]`;
    }

    console.log(line);
}
log();
// do {} while();

let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

// for..in statement where the variable you declare gives you the index
for (let i in daysOfWeek) {
    log(i);
}
log();

// for..of statement
for (let d of daysOfWeek) {
    log(d);
}

