/**
 * Adds two numbers together.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} - The sum of both numbers.
 */
function add(a, b) {
    return a + b;
}

let info = 'Utility Functions'; // effectively "private" to this module

/**
 * Information about this utility module.
 * @type {{ name: string }}
 */
let about = {
    name: info
}

// We are doing "named exports" - Anything we export is "public" for others to use
export { add, about }
