const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

menuOpenButton.addEventListener("click", () => {
    document.body.classList.toggle("show-mobile-menu");
});

menuCloseButton.addEventListener("click", () => {
    document.body.classList.remove("show-mobile-menu");
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        document.body.classList.remove("show-mobile-menu");
    });
});
