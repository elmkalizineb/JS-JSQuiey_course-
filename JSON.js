// ==========================================
//  JSON IN JAVASCRIPT – EXAMPLES
// ==========================================

// 1 JavaScript Object (standard format)
const user = {
  name: "Sara",
  age: 25,
  isAdmin: false
};

// 2 Convert JavaScript Object to JSON string using JSON.stringify()
const jsonString = JSON.stringify(user);
console.log("✅ JSON string from JS object:");
console.log(jsonString);
// Output: {"name":"Sara","age":25,"isAdmin":false}


// 3 Convert JSON string back to JavaScript Object using JSON.parse()
const jsonFromServer = '{"name":"Ali","age":30,"isAdmin":true}';
const parsedObject = JSON.parse(jsonFromServer);

console.log("✅ JavaScript object from JSON string:");
console.log(parsedObject);
// Output: { name: 'Ali', age: 30, isAdmin: true }
console.log("Accessing parsed data:", parsedObject.name); // Ali


// 4 Invalid JSON Example (DON’T DO THIS)
// JSON strings must use double quotes and cannot contain functions
/*
const invalidJSON = `{
  name: "Ali",         ❌ missing quotes around key
  age: 30,
  sayHi: function() {  ❌ functions not allowed
    return "Hello";
  }
}`;
// JSON.parse(invalidJSON); // ❌ This would throw an error
*/


// 5 Real-World Example: Using JSON with Fetch API (simulated)
const fakeApiResponse = `{
  "username": "zineb.dev",
  "skills": ["JavaScript", "Python", "HTML"],
  "active": true
}`;

// Simulate receiving data from server
const dataFromServer = JSON.parse(fakeApiResponse);
console.log("✅ Fetched username:", dataFromServer.username); // zineb.dev
console.log("✅ User's skills:", dataFromServer.skills); // Array of skills


// 6️⃣ JSON.stringify() with nested object
const settings = {
  theme: "dark",
  notifications: {
    email: true,
    sms: false
  }
};

const settingsJSON = JSON.stringify(settings);
console.log("✅ Nested object to JSON string:");
console.log(settingsJSON);
// Output: {"theme":"dark","notifications":{"email":true,"sms":false}}


// 7️⃣ JSON.stringify() with spacing (pretty print)
const prettyJSON = JSON.stringify(settings, null, 2);
console.log("✅ Pretty printed JSON:");
console.log(prettyJSON);
/*
{
  "theme": "dark",
  "notifications": {
    "email": true,
    "sms": false
  }
}
*/