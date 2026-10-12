// ===============================
// 01. NAVBAR SCROLL EFFECT
// ===============================

const header = document.querySelector(".siteHeader");

window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});


// ===============================
// 02. REVEAL ON SCROLL
// ===============================

const revealElements = document.querySelectorAll(
    ".hero, .projectShowcase, .workSection, .experienceSection, .skillsSection, .contactCTA, .pageHero, .projectsPageGrid, .resumeLayout, .contactLayout"
);

revealElements.forEach(element => {
    element.classList.add("reveal");
});

const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.15
});

revealElements.forEach(element => {
    revealObserver.observe(element);
});