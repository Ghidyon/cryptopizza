// grab the DOM
const menuButton = document.querySelector("#menu-button");
const closeButton = document.querySelector("#x-button");
const sidebar = document.querySelector("#sidebar");
const body = document.querySelector("body");

// add event listener
menuButton.addEventListener("click", () => {
    sidebar.classList.remove("-translate-x-full");
    body.classList.add("overflow-hidden");
    sidebar.classList.add("overlay-effect");
});

closeButton.addEventListener("click", () => {
    sidebar.classList.add("-translate-x-full");
    body.classList.remove("overflow-hidden");
    sidebar.classList.remove("overlay-effect");
});
