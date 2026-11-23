// Smooth reveal animation
const sections = document.querySelectorAll(
    ".hero-content, .hero-image, .section, .cta"
);

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, {
    threshold: 0.12
});

sections.forEach((section) => {
    section.classList.add("reveal");
    revealObserver.observe(section);
});

// Active navigation
const currentPage = window.location.pathname.split("/").pop() || "index.html";

document.querySelectorAll("nav a").forEach((link) => {
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
    } else {
        link.classList.remove("active");
    }
});

// Automatic copyright year
const copyright = document.querySelector(".copyright");

if (copyright) {
    copyright.textContent =
        `© ${new Date().getFullYear()} MAHMASA COFFEE - جميع الحقوق محفوظة`;
}

console.log("Welcome to MAHMASA Coffee!");