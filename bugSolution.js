function foo(a, b) {
  if (a === null || b === null) {
    console.error("Null value encountered in foo function.");
    return NaN; // Or throw an error: throw new Error("Null values are not allowed.");
  } else if (typeof a !== 'number' || typeof b !== 'number') {
    console.error("Non-number type encountered in foo function.");
    return NaN; // Or throw an error
  }
  return a + b;
}

console.log(foo(null, 5)); // Output: Error message and NaN
console.log(foo(5, null)); // Output: Error message and NaN
console.log(foo(5, 5)); // Output: 10
console.log(foo("5",5)); // Output: Error message and NaN
console.log(foo(5,"5")); //Output: Error message and NaN