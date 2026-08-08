const button = document.createElement("button");
button.textContent = "Toggle Dark Mode";
document.body.appendChild(button);

button.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

/* LOAD SAVED THEME */
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
}