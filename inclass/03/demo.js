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
