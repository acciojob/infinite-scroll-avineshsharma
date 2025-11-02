//your code here!

// Get the ordered list element
const list = document.getElementById("infi-list");

// Keep track of how many items we have added
let itemCount = 0;

// Function to add list items
function addItems(count) {
  for (let i = 0; i < count; i++) {
    itemCount++;
    const li = document.createElement("li");
    li.textContent = `Item ${itemCount}`;
    list.appendChild(li);
  }
}

// Add first 10 items by default
addItems(10);

// Detect when the user scrolls near the bottom of the page
window.addEventListener("scroll", () => {
  // Check if the user reached the bottom
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    addItems(2); // Add 2 more items
  }
});
