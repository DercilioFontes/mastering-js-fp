/**
 * The value of n! is the number of ways you can order n different elements in a row. For example, if you want to place five books in line, you can pick any of the five for the first place, and then order the other four in every possible way, so 5! = 5x4!. If you continue to work this example, you'll get that 5! = 5x4x3x2x1=120, so n! is the product of all numbers up to n.

 * @param {int} n
 */

function fact(n) {
  if (n === 0) return 1;
  else return n * fact(n - 1);
}

console.log('fact(5)', fact(5));
console.log('fact(10)', fact(10));
console.log('fact(15)', fact(15));
console.log('fact(1)', fact(1));
console.log('fact(7)', fact(7));

/*
With arrow function:

const fact = n => (n === 0 ? 1 : n * fact(n - 1));

*/