import "./style.css";
import About from "./about.js"
import Contact from "./contact.js"
import Menu from "./menu.js"


document.querySelector(".about-button").addEventListener("click", () => About())
document.querySelector(".contact-button").addEventListener("click", () => Contact())
document.querySelector(".menu-button").addEventListener("click", () => Menu())
// Contact();


console.log("whatever..")