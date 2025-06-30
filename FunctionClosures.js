
//  basic closure 
function outer() {
  let message = "Hello from outer!";

  function inner() {
    console.log(message); // Still has access to outer's variable
  }

  return inner;
}

const greet = outer();  // outer() runs and returns inner()
greet();  // Hello from outer!
 
// count example 
function createCounter(){
    let count = 0; // outer variable 

    return function(){
        count++; console.log("Count : ",count);
    }
}
// each counter has its own private count variable 
const couter1 =createCounter();
couter1();  // Count : 1 
couter1(); // Count : 2

const couter2 =createCounter();
couter2(); // Count : 1



