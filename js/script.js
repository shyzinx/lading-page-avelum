// MENU MOBILE

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {

    if (mobileMenu.style.display === "flex") {
        mobileMenu.style.display = "none";
    } else {
        mobileMenu.style.display = "flex";
    }

});

// FECHAR MENU AO CLICAR EM LINK

document.querySelectorAll(".mobile-menu a").forEach(link => {

    link.addEventListener("click", () => {
        mobileMenu.style.display = "none";
    });

});

// NAVBAR AO ROLAR

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});

// ANIMAÇÃO DE ENTRADA

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll(
    ".service-card, .testimonial-card, .specialist-content, .specialist-image"
).forEach(element => {

    element.classList.add("hidden");
    observer.observe(element);

});
const reveals = document.querySelectorAll(".reveal");
