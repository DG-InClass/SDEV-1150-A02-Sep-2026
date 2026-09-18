// node --watch demo.js
console.log('Lesson 04 demo.js has loaded');
console.log('=============================');
console.log();

console.log('Creating arrays');
console.log('---------------');

let pickupItems = ['bread', 'milk', 'apples', 'coffee'];
let itemPrices = [3.49, 4.25, 5.99, 12.5];
let itemIsFrozen = [false, false, false, false];

console.log(pickupItems);
console.log(`pickupItems is a ${typeof pickupItems}.`);
console.log(`pickupItems has ${pickupItems.length} entries.`);
console.log(`Is pickupItems an array? ${Array.isArray(pickupItems)}`);
console.log();

console.log('Accessing entries by index');
console.log('--------------------------');

console.log(`First item: ${pickupItems[0]}`);
console.log(`Second item: ${pickupItems[1]}`);
console.log(`Last item: ${pickupItems[pickupItems.length - 1]}`);

// TODO: Resume at Accessing Entries by Index, Step 2
