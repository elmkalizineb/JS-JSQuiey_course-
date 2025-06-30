//  get elements from html page 

const heading = document.getElementById("mainHeading"); // element it self
console.log(heading);
const ps = document.getElementsByClassName("paragraph"); // collection 
console.log(ps);
const AllPs= document.querySelectorAll("p");// Nodelist 
console.log(AllPs);
const firstp = document.querySelector("p"); // select the first paragraph 
console.log(firstp);

// create  elements 

const newp = document.createElement("p");
newp.textContent =" A new paragraph has been added ";
newp.style.color = "blue";
document.body.appendChild(newp);


