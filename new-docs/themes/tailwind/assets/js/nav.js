// Basic navigation functionality

const navContent = document.getElementById('nav-content');
const navButton = document.getElementById('nav-toggle');
const navToggleOpen = document.getElementById('nav-toggle-open');
const navToggleClosed = document.getElementById('nav-toggle-closed');
navButton.addEventListener("click", () => {
    navContent.classList.toggle("hidden");
    navToggleOpen.classList.toggle("hidden");
    navToggleClosed.classList.toggle("hidden");
});

const menuContent = document.getElementById('menu-content');
const menuButton = document.getElementById('menu-toggle');
const toggleMenu = () => menuContent.classList.toggle("hidden");
menuButton.addEventListener("click", toggleMenu);