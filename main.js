// Initialize Typed.js
var typed = new Typed(".text", {
    strings: ["Software Developer", "Web Developer", "Java Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// Tab functionality
var tablinks = document.querySelectorAll(".tab-links");
var tabcontents = document.querySelectorAll(".tab-contents");

function opentab(event, tabname) {
    tablinks.forEach(tablink => tablink.classList.remove("active-link"));
    tabcontents.forEach(tabcontent => tabcontent.classList.remove("active-tab"));

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// Certificate modal functionality
const certificates = document.querySelectorAll('.certificate');
const modal = document.getElementById('certificateModal');
const modalImage = document.getElementById('modalImage');
const closeBtn = document.querySelector('.close');

certificates.forEach(certificate => {
    certificate.addEventListener('click', () => {
        const fullImageSrc = certificate.getAttribute('data-full');
        modal.style.display = 'block';
        modalImage.src = fullImageSrc;
    });
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Portfolio section load message
document.addEventListener("DOMContentLoaded", () => {
    console.log("Portfolio section loaded successfully.");
});

// Menu toggle functionality
document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.querySelector("#toggle");
    const body = document.body;

    toggle.addEventListener("change", function () {
        body.classList.toggle("menu-expanded", this.checked);
    });
});
