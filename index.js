"use strict";

// sample data - expanded Star Wars characters with varied ages
const users = [
  { id: 1, name: "Luke Skywalker", age: 23 },
  { id: 2, age: 45 }, // Removed name: "Darth Vader" to test the exercise 5
  { id: 3, name: "Princess Leia", age: 23 },
  { id: 4, name: "Obi-Wan Kenobi", age: 57 },
  { id: 5, name: "Yoda", age: 900 },
  { id: 6, name: "Han Solo", age: 32 },
  { id: 7, name: "Chewbacca", age: 234 },
  { id: 8, name: "R2-D2", age: 33 },
  { id: 9, name: "C-3PO", age: 112 },
  { id: 10, name: "Padmé Amidala", age: 27 },
];

// broken test data for exercise 6
const brokenUsers = [
  { id: 1, name: "Bob", age: 29 },
  { id: 2, age: 35 },
  { id: 3, name: "Jerry", age: 20 },
  { id: 4, age: 28 },
  { id: 5, name: "Fred", age: 25 },
];

// Utility: render list items
function renderList(array, listId, errorContainerId) {
  const list = document.getElementById(listId);
  const error = errorContainerId ? document.getElementById(errorContainerId) : null;

  list.innerHTML = "";
  if (error) error.innerHTML = "";

  if (!array || array.length === 0) {
    list.innerHTML = `<li class="empty-list">No data available</li>`;
    return;
  }

  array.forEach(obj => {
    if (!obj.name) {
      const msg = `Error: Object with id=${obj.id ?? "?"} is missing a "name" property.`;
      console.error(msg);
      if (error) {
        const div = document.createElement("div");
        div.className = "error-message";
        div.textContent = msg;
        error.appendChild(div);
      }
    } else {
      const li = document.createElement("li");
      li.textContent = obj.name;
      list.appendChild(li);
    }
  });
}

// 1. Print out the names of each character in the console, then render them in the HTML list with id "names-list"
console.log("Exercise 1: All character names");
users.forEach(u => console.log(u.name));
renderList(users, "names-list");

// 2. Print out the names of characters whose age is less than 40 in the console, then render them in the HTML list with id "young-characters-list"
console.log("Exercise 2: Characters younger than 40");
const youngCharacters = users.filter(u => u.age < 40);
youngCharacters.forEach(u => console.log(u.name));
renderList(youngCharacters, "young-characters-list");

// 3. Create a reusable function that takes any array and uses logic to render a list of character names in the HTML. Use this function to populate the list with id "function-list"
console.log("Exercise 3: Using reusable renderList()");
renderList(users, "function-list");

// 4. Create a function that takes an array and an age threshold parameter. The function should only display characters whose age is below the given number. Render results in the list with id "age-filter-list"
function renderByAgeThreshold(array, threshold, listId) {
  const filtered = array.filter(u => u.age < threshold);
  console.log(`Exercise 4: Characters younger than ${threshold}`);
  filtered.forEach(u => console.log(u.name));
  renderList(filtered, listId);
}
renderByAgeThreshold(users, 100, "age-filter-list");

// 5. Add error handling to your functions that will log an error message using console.error() if any object doesn't have a "name" property. Display any error messages in the div with id "error-messages"
console.log("Exercise 5: Testing error handling on main users array");
renderList(users, "error-handling-list", "error-messages");

// 6. Test your error handling by creating a second array that's intentionally broken (missing name properties) and passing it to your functions. Verify that your error handling works correctly and displays errors in the div with id "broken-array-errors"
console.log("Exercise 6: Testing broken array with error handling");
renderList(brokenUsers, "broken-array-list", "broken-array-errors");