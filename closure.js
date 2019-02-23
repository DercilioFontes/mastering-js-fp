/**
 * Closures are a way to implement data hiding (with private variables), which leads to modules and other nice features. The key concept is that when you define a function, it can refer to not only its own local variables, but also to everything outside of the context of the function:
 */
function newCounter() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}

const nc = newCounter();
console.log('1st nc() call: ', nc());
console.log('2nd nc() call: ', nc());
console.log('3rd nc() call: ', nc());
console.log('4th nc() call: ', nc());
console.log('5th nc() call: ', nc());
