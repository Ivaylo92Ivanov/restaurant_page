
export default function Menu() {
    const content = document.querySelector(".content")
    content.innerHTML = "";

    const menuSection = document.createElement("div");
    menuSection.className = "menu";
    menuSection

    const gyroMenuItem = document.createElement("div");
    gyroMenuItem.className = "menu-item";
    gyroMenuItem.innerHTML = '<img src="../src/images/gyro.jpeg" alt="gyro">\
    <div>\
    <h1>Best Gyro in Town!</h1>\
    <br>\
    <ul>\
        <li>Large: $6,99</li>\
        <li>Medium: $5,99</li>\
        <li>Small: $4,99</li>\
    </ul></div>';
    menuSection.appendChild(gyroMenuItem)

    const cornedBeefMenuItem = document.createElement("div");
    cornedBeefMenuItem.className = "menu-item";
    cornedBeefMenuItem.innerHTML = '<img src="../src/images/corned_beef.png" alt="corned beef">\
    <div>\
    <h1>Corned Beef Sammich!</h1>\
    <br>\
    <ul>\
    <li>Footlong: $5,99</li>\
    <li>Both feet long: $8,99</li>\
    </ul>\
    </div>';
    menuSection.appendChild(cornedBeefMenuItem);

    const friesMenuItem = document.createElement("div");
    friesMenuItem.className = "menu-item";
    friesMenuItem.innerHTML = '<img src="../src/images/fries.jpeg" alt="side of fries">\
    <div>\
    <h1>Side of Fries!</h1>\
    <br>\
    <ul>\
        <li>Large: $4,99</li>\
        <li>Medium: $3,99</li>\
        <li>Small: $2,99</li>\
    </ul></div>'
    menuSection.appendChild(friesMenuItem)

    const sodaMenuItem = document.createElement("div");
    sodaMenuItem.classList = "menu-item"
    sodaMenuItem.innerHTML = '<img src="../src/images/soda.jpeg" alt="side of fries">\
    <div>\
    <h1>Soda of choice!</h1>\
    <br>\
    <ul>\
        <li>Large: $4,99</li>\
        <li>Small: $3,99</li>\
    </ul></div>'
    menuSection.appendChild(sodaMenuItem)

    content.appendChild(menuSection)
};