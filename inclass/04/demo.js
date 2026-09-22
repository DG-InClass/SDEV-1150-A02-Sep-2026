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
console.log(`Item at index 10: ${pickupItems[10]}`);
console.log(`Item at index -1: ${pickupItems[-1]}`);
console.log();


console.log('Updating array entries');
console.log('----------------------');

// Updating existing entries in our arrays
pickupItems[1] = 'oat milk';
itemPrices[1] = 5.15;
// Adding an entry to the end of each array
pickupItems[pickupItems.length] = 'frozen peas';
itemPrices[itemPrices.length] = 3.75;
itemIsFrozen[itemIsFrozen.length] = true;
//           \_________________/

console.table(pickupItems);
console.table(itemPrices);
console.table(itemIsFrozen);
console.log();

// Exploring....
// itemPrices[10] = 12.99;
// console.table(itemPrices);
// console.log(`There are ${itemPrices.length} items in the array`);

console.log("Related arrays need matching indexes");
console.log("------------------------------------");
// You - the programmer - must work to keep parallel arrays "in alignment"

let firstItem = pickupItems[0];
let firstPrice = itemPrices[0];
let firstFrozenStatus = itemIsFrozen[0];

console.log(`${firstItem} costs $ ${firstPrice.toFixed(2)}`);
console.log(`Frozen item? ${firstFrozenStatus}`);

let lastIndex = pickupItems.length - 1;
let lastItem = pickupItems[lastIndex];
let lastPrice = itemPrices[lastIndex];
let lastFrozenStatus = itemIsFrozen[lastIndex];

console.log(`${lastItem} costs $ ${lastPrice.toFixed(2)}`);
console.log(`Frozen item? ${ lastFrozenStatus }`);
// Parallel arrays are one way to manage related data,
// but it's also the most "fragile" way - so it's not recommended.

console.clear(); // clears the screen
// comment out the line above if you want to see the prior output

console.log('Arrays compared with objects');
console.log('----------------------------');

let store = {
    name: 'Corner Market',
    aisleCount: 9,
    pickupAvailable: true
}

console.log(`Is store an array? ${Array.isArray(store)}`);
console.log(`Is itemPrices an array? ${Array.isArray(itemPrices)}`);

console.log(`Store name with dot notation: ${store.name}`);
console.log(`Store name with bracket notation: ${store['name']}`);
// Notice how the propery names can be used (as strings) in the square brackets. This acts a lot like a Dictionary.
console.log(`Array entry with bracket notation: ${pickupItems[2]}`);


// Understanding the ability to use array/bracket notation with objects
// will be helpful when we get into using JavaScript with HTML...
console.log('Property names that need bracket notation');
console.log('-----------------------------------------');

let pickupDetails = {
    'order number': 'GM-2048',
//  \____________/  we needed quotes because of the space
    'customer name': 'Riley Morgan',
// just because we can, doesn't mean we should....
    status: 'ready'
};

console.log(`Order number: ${pickupDetails['order number']}`);
console.log(`Customer: ${pickupDetails['customer name']}`);
console.log(`Status: ${pickupDetails.status}`);

console.log('Objects inside an array');
console.log('-----------------------');

let cart = [
    { name: 'bread', price: 3.49, quantity: 1 },
    { name: 'oat milk', price: 5.15, quantity: 2 },
    { name: 'frozen peas', price: 3.75, quantity: 1 }
];

console.table(cart); // arrays of objects are easier to manage than parallel arrays
console.log(`We can isolate a single object in the array:\n`, cart[0]);
console.log('We can isolate a single property from an object in the array:');
console.log(`The second item is ${cart[1].name}`);
//                                \__/ |
//                           array |   |
//                                cart[1]
//                                \_____/
//         an element in the array  |
//                                cart[1].name
//                                \__________/ a property of the object
//                                 'oat milk'
console.log(`Second cart item subtotal: $${(cart[1].price * cart[1].quantity).toFixed(2)}`);
console.log();

console.log('Final boundary reminder');
console.log('-----------------------');
console.log(`First valid index: 0`);
console.log(`Last valid index: ${cart.length - 1}`);
console.log(`cart[cart.length] gives ${cart[cart.length]}`);
// What happens if we "drill down" on an item that is `undefined`?
// console.log(`cart[cart.length].price gives ${cart[cart.length].price}`);
// 🐞 The code above produces a TypeError.

export { cart, pickupItems, itemPrices, itemIsFrozen }

