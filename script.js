// document.addEventListener('contextmenu', event => event.preventDefault());

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");

    menu.classList.toggle("open")
    icon.classList.toggle("open")
    event.stopPropagation();
}

// Close toggle on menu item click
const menuToggler = document.querySelector('.hamburger-icon');
const body = document.body;
const navItems = document.querySelectorAll(".nav-item");

Array.from(navItems).map(el => {
    el.addEventListener('click', function () {
        body.classList.remove('open');
    });
});

// Close toggle on outside click if menu is open
document.addEventListener('click', function (event) {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");

    if (menu.classList.contains('open')) {
        menu.classList.remove('open');
        icon.classList.remove('open');
    }
});