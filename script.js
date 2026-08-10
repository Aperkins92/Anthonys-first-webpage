// Create Dark Mode Toggle Button
const button = document.createElement("button");
button.textContent = "Toggle Dark Mode";
button.classList.add("dark-toggle");
document.body.appendChild(button);

// Toggle Dark Mode
button.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

// Load Saved Theme
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
}
