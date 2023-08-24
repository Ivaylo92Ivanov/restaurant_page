
export default function Contact() {
    const content = document.querySelector(".content")
    content.innerHTML = "";

    const contactSection = document.createElement("div");
    contactSection.className = "contact"

    contactSection.innerHTML = '\
    <div>\
        <h1>For pick-up, deliveries, compliments, rants and complaints... or maybe you just need someone to talk to...</h1>\
        <br>\
        <h1>Contact us:</h1>\
        <br>\
        <ul>\
        <li><strong>Phone:</strong> 1-555-GYROS</li>\
        <li><strong>E-mail:</strong> ThaliaforGyros@genuinemail.com</li>\
        </ul>\
    </div>\
    <div>\
        <h1 style="text-align: center">Welcome to our location:</h1>\
        <br>\
        <img src="../src/images/location.jpg" alt = "location map">\
        <br><br>\
        <h3 style="text-align: center">73348 Port Thaliafort, 11 S. Lloyd Ave</h3>\
    </div>'

    content.appendChild(contactSection)
};