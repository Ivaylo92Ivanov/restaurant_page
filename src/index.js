import "./style.css";
import About from "./about.js"
import Contact from "./contact.js"
import Menu from "./menu.js"

About();

function underlineClickedButton (buttonClass) {
    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => button.classList.remove("clicked"));
    let currentButton = document.querySelector(`.${buttonClass}-button`);
    currentButton.classList.add("clicked");
};

document.querySelector(".about-button").addEventListener("click", () => {
    About();
    underlineClickedButton("about");
});

document.querySelector(".contact-button").addEventListener("click", () => {
    Contact();
    underlineClickedButton("contact");
});

document.querySelector(".menu-button").addEventListener("click", () => {
    Menu();
    underlineClickedButton("menu");
});
