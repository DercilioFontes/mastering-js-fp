
// Arrays
const f = [1, 2, 3];

const g = [4, ...f, 5];
console.log(g); // [ 4, 1, 2, 3, 5 ]

const h = [...f, ...g];
console.log(h); // [ 1, 2, 3, 4, 1, 2, 3, 5 ]


// Objects
const p = {some: 3, data: 5};

const q = {more: 8, ...p };
console.log(q); // { more: 8, some: 3, data: 5 }

// Functions
const numbers = [2, 2, 9, 6, 0, 1, 4, 5, 6];
const minA = Math.min(...numbers);
console.log(minA); // 0

const maxArray = arr => Math.max(...arr);

const maxA = maxArray(numbers);
console.log(maxA); // 9


/*
You can also write the following equation. The .apply() method requires an array of arguments, but .call() expects individual arguments:

someFn.apply(thisArg, someArray) === someFn.call(thisArg, ...someArray);

If you have problems remembering what arguments are required by .apply() and .call(), this mnemonic may help: A is for array, and C is for comma.
*/