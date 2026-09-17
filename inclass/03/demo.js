console.log('Lesson 03 demo.js has loaded');
console.log('=============================');
console.log();

console.log('Primitive values');
console.log('----------------');

let workshopTitle = 'Intro to Digital Photography';
let seatsAvailable = 16;
let registrationOpen = true; // boolean     true | false

console.log(`The value "${workshopTitle}" is a ${typeof workshopTitle}.`);
console.log(`The value ${seatsAvailable} is a ${typeof seatsAvailable}.`);
console.log(`The value ${registrationOpen} is a ${typeof registrationOpen}.`);
console.log(); // blank line

console.log('Object literals');
console.log('---------------');

let workshop = {
    title: 'Intro to Digital Photography',
    room: 'Media Lab',
    capacity: 16,
    registered: 11,
    isOnline: false
}

console.log(workshop);
console.log(`The workshop variable is a ${typeof workshop}.`);
console.log(`${workshop.title} meets in the ${workshop.room}.`);
console.log(`${workshop.capacity - workshop.registered} seats are still available.`);

console.log();
console.log('Objects can keep related values together');
console.log('----------------------------------------');

// An object literal syntax encloses all of the object's properties
// inside a pair of curly braces. Inside those curly braces, we have
// a comma-separated list of name:value pairs. The `name` portion is
// the name of a property in the object. The `value` part is the 
// information stored inside that property.
let facilitator = {
    firstName: 'Avery',
    lastName: 'Chen',
    email: 'avery.chen@example.test',
    yearsExperience: 4,
    active: true
}

console.log(`${facilitator.firstName} ${facilitator.lastName} is facilitating.`);
console.log(`\tContact: ${facilitator.email}`);
console.log(`\tActive facilitator: ${facilitator.active}`);
console.log();

console.log('Objects are dynamic');
console.log('-------------------');

workshop.facilitator = `${facilitator.firstName} ${facilitator.lastName}`;
workshop.waitlist = 3;
workshop.registered = workshop.registered + 2;

console.log(`Facilitator added to workshop: ${workshop.facilitator}`);
console.log(`Updated registrations: ${workshop.registered}`);
console.log(`Waitlist count: ${workshop.waitlist}`);
console.log(workshop);
console.log();

// TODO: Next Class - Built-in Objects
console.log('Date objects');
console.log('------------');

let today = new Date(); // an object with the current date and time
//          \_/ \____/
// keyword  |     | Constructor function
let workshopDate = new Date('October 22, 2026 18:30:00');

console.log(`Today is ${today.toDateString()}`);
console.log(`The workshop starts on ${workshopDate.toDateString()}`);
console.log(`The workshop month index is ${workshopDate.getMonth()}`);
console.log(`The workship day of the month is ${workshopDate.getDate()}`);
console.log();

console.log('Changing object state with methods');
console.log('----------------------------------');

let reminderDate = new Date(workshopDate);
reminderDate.setDate(reminderDate.getDate() - 7);
//                   \____________________/
//                           22             -7
//                   \_______________________/

workshop.startsOn = workshopDate;
workshop.reminderOn = reminderDate;

console.log(`Reminder date: ${workshop.reminderOn.toDateString()}`);
console.log(`Workshop date: ${workshop.startsOn.toDateString()}`);
console.log();

console.log('Another built-in object');
console.log('-----------------------');

let signupUrl = new URL('https://library.example.test/workshops/photo-basics?level=beginner');

console.log(`Signup link: ${signupUrl.toString()}`);
console.log(`Protocol: ${signupUrl.protocol}`);
console.log(`Host: ${signupUrl.host}`);
console.log(`Path: ${signupUrl.pathname}`);
console.log(`Level: ${signupUrl.searchParams.get('level')}`);
console.log();

console.log('Final workshop object');
console.log('---------------------');
console.log(workshop);

export { workshop, facilitator, signupUrl }
