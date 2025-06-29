// Get the outer container by ID
const mainContainer = document.getElementById("container");

// Get the <h1> element inside the container
const heading = mainContainer.querySelector("h1");
console.log("Heading:", heading.textContent);  // DOM Navigation

// Get all <li> items inside the <ul>
const listItems = mainContainer.querySelectorAll("ul li");
listItems.forEach((li, index) => {
  console.log(`List item ${index + 1}:`, li.textContent);
});

// Access the inner <div class="container">
const innerContainer = mainContainer.querySelector("div.container");

// Get the <p> inside the inner container
const paragraph = innerContainer.querySelector("p");
console.log("Paragraph:", paragraph.textContent);  // Welcome to our website
