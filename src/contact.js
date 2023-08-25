import locationMap from "../src/images/location.jpg"


export default function Contact() {
    const content = document.querySelector(".content")
    content.innerHTML = "";

    const contactSection = document.createElement("div");
    contactSection.className = "contact"

    contactSection.innerHTML = `\
    <div style="padding-left: 2rem">\
        <h1>For pick-up, deliveries, compliments, rants and complaints... or maybe you just need someone to talk to...</h1>\
        <br>\
        <h1>Contact us:</h1>\
        <br>\
        <ul>\
        <li><strong>Phone:</strong> 1-555-GYROS</li>\
        <li><strong>E-mail:</strong> ThaliaforGyros@genuine.com</li>\
        </ul>\
    </div>\
    <div class="location">\
        <h1>Welcome to our location:</h1>\
        <br>\
        <img src="${locationMap}" alt = "location map">\
        <br>\
        <h3>73348 Port Thaliafort, 11 S. Lloyd Ave</h3>\
    </div>`

    content.appendChild(contactSection)
};