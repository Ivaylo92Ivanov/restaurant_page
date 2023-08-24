export default function About() {
    const aboutButton = document.querySelector(".about-button")
    aboutButton.classList.add("clicked")

    const content = document.querySelector(".content");
    content.innerHTML = "";

    const menu = document.createElement('div');
    menu.className = "menu"

    menu.innerHTML = '<h1>If you don`t come and get the Gyro...<br>...the Gyro shall come and get to you!</h1>\
    <img src="../src/taster.jpg" class="taster" alt="food taster">\
    <h2> Check out our Pick-up and Delivery options!</h2>\
    <br>\
    <h3>We have the best gyros & corned beef sandwiches, and we deliver from 10am-10pm.</h3>'

    content.appendChild(menu)

}

