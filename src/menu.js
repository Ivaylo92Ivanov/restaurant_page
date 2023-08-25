import gyro from "../src/images/gyro.jpeg"
import cornedBeef from "../src/images/corned_beef.png"
import fries from "../src/images/fries.jpeg"
import soda from "../src/images/soda.jpeg"

export default function Menu() {
    const content = document.querySelector(".content")
    content.innerHTML = "";

    const menuSection = document.createElement("div");
    menuSection.className = "menu";

    const menuSectionHeader = document.createElement("h1");
    menuSectionHeader.className = "menu-header"
    menuSectionHeader.innerHTML = "Check out our menu!";
    menuSection.appendChild(menuSectionHeader);

    const menuHolder = document.createElement("div");
    menuHolder.className = "menu-holder";

    const gyroMenuItem = document.createElement("div");
    gyroMenuItem.className = "menu-item";
    gyroMenuItem.innerHTML = `<img src="${gyro}" alt="gyro">\
    <div>\
    <h1>Best Gyro in Town!</h1>\
    <br>\
    <ul>\
        <li>Large: $6,99</li>\
        <li>Medium: $5,99</li>\
        <li>Small: $4,99</li>\
    </ul>\
    </div>`;
    menuHolder.appendChild(gyroMenuItem);

    const cornedBeefMenuItem = document.createElement("div");
    cornedBeefMenuItem.className = "menu-item";
    cornedBeefMenuItem.innerHTML = `<img src="${cornedBeef}" alt="corned beef">\
    <div>\
    <h1>Corned Beef Sammich!</h1>\
    <br>\
    <ul>\
    <li>Footlong: $5,99</li>\
    <li>Both feet long: $8,99</li>\
    </ul>\
    </div>`;
    menuHolder.appendChild(cornedBeefMenuItem);

    const friesMenuItem = document.createElement("div");
    friesMenuItem.className = "menu-item";
    friesMenuItem.innerHTML = `<img src="${fries}" alt="side of fries">\
    <div>\
    <h1>Side of Fries!</h1>\
    <br>\
    <ul>\
        <li>Large: $4,99</li>\
        <li>Medium: $3,99</li>\
        <li>Small: $2,99</li>\
    </ul>\
    </div>`;
    menuHolder.appendChild(friesMenuItem);

    const sodaMenuItem = document.createElement("div");
    sodaMenuItem.classList = "menu-item";
    sodaMenuItem.innerHTML = `<img src="${soda}" alt="soda">\
    <div>\
    <h1>Soda of choice!</h1>\
    <br>\
    <ul>\
        <li>Large: $4,99</li>\
        <li>Small: $3,99</li>\
    </ul>\
    </div>`;
    menuHolder.appendChild(sodaMenuItem);

    menuSection.appendChild(menuHolder);
    content.appendChild(menuSection);
};