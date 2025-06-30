function greet(name = "Guest"){
    console.log(`hello , ${name}`);
}

greet();
greet("zineb");


function square(n){
    return n * n;
}
let result =square(5);
console.log("square of 5  is ",result);

let divide = (a,b) => a/b;
let q = divide(10,2);
console.log(" 10 / 2 = ",q);

