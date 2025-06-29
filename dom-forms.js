const form= document.getElementById("MyForm");
const usernameInput = document.getElementById("username");
const psdInput = document.getElementById("password");
const submit = document.querySelector("button");


// console.log("from element : ",form);
// console.log(" username : ",usernameInput);
// console.log("from element : ",psdInput);


form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent actual form submission

  const usernameValue = usernameInput.value;
  const passwordValue = psdInput.value;

  console.log("Username:", usernameValue);
  console.log("Password:", passwordValue);
});
