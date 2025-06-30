
// =============================================
//  ITERABLES IN JAVASCRIPT - EXAMPLES
// =============================================

// 1 ARRAY as an Iterable
const arr = [10, 20, 30];

// Using for...of loop to iterate over an array
for (let value of arr) {
  console.log("Array value:", value); // 10, 20, 30
}

// 2 STRING as an Iterable
const str = "ABC";

// Strings can be iterated character by character
for (let char of str) {
  console.log("Character from string:", char); // A, B, C
}

// 3 SPREAD OPERATOR with an Iterable
const nums = [1, 2, 3];

// The spread operator expands elements of an iterable
const copy = [...nums];
console.log("Copied array with spread:", copy); // [1, 2, 3]

// 4 ITERATOR from an Array
const arrIterator = arr[Symbol.iterator]();

console.log("Iterator next():", arrIterator.next()); // { value: 10, done: false }
console.log("Iterator next():", arrIterator.next()); // { value: 20, done: false }
console.log("Iterator next():", arrIterator.next()); // { value: 30, done: false }
console.log("Iterator next():", arrIterator.next()); // { value: undefined, done: true }

// 5 OBJECT is NOT Iterable directly
const obj = { a: 1, b: 2 };

//  This would throw an error:
// for (let item of obj) { ... }

//  Convert object to iterable with Object.entries()
for (let [key, value] of Object.entries(obj)) {
  console.log(`Object entry - ${key}:`, value); // a: 1, b: 2
}

// 6 CUSTOM ITERABLE using Symbol.iterator
const myIterable = {
  // Define the iterable protocol using a generator function
  *[Symbol.iterator]() {
    yield "a";
    yield "b";
    yield "c";
  }
};

for (let val of myIterable) {
  console.log("Custom iterable value:", val); // a, b, c
}

// const iterableArray=[1,2,3,4,5];

// const iterator = iterableArray[Symbol.iterator]();

// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());