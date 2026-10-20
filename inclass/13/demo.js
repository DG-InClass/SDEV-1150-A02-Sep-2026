console.log('Lesson 13 demo.js has loaded');
console.log('===============================');
console.log();

console.log('Manual loop over study minutes');
console.log('------------------------------');

let studyMinutes = [45, 30, 0, 75, 50, 90, 20];
let totalMinutes = 0;
let longestSession = 0; // studyMinutes[0];

for (let index = 0; index < studyMinutes.length; index++) {
    let minutes = studyMinutes[index];
    if (minutes > longestSession){
        longestSession = minutes;
    }
}

console.log(`Longest session: ${longestSession} minutes\n`);

// The loop above can be done with the array's .forEach() function
longestSession = 0; // reset
studyMinutes.forEach(function (minutes) {
    if (minutes > longestSession) {
        longestSession = minutes;
    }
});

console.log(`Longest session: ${longestSession} minutes\n`);

console.log('Map each value into display text');
console.log('--------------------------------');

let dailyLabels = studyMinutes.map((minutes, index) => {
    return `Day ${index + 1}: ${minutes} minutes.`;
});

console.log(dailyLabels);
console.log();

// Resume at http://localhost:4321/instructor-only/inclass/130/#course-task-data

