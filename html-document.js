const docObject = document;

console.log(docObject);

document.title="New title";
document.getElementById("mainHeading").textContent = "Greeting , document"

const newParagraph = document.createElement("p");
const p2=document.createElement("p");

newParagraph.textContent = " a new paragraph has been added ";
p2.textContent="paragraph 2 "
document.body.appendChild(newParagraph);
document.body.appendChild(p2);

const firstparagraph = document.querySelector("p"); // get  the first element that is a descendant of node that matches selectors. 
firstparagraph.style.color ="blue";

document.getElementById("mainHeading").addEventListener(
    "click" , () => {
        alert("Heading Clicked ");
    }

);
