/* ================= MOBILE MENU ================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }

});


/* ================= CLOSE MOBILE MENU ================= */

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function (item) {

    item.addEventListener("click", function () {

        navLinks.classList.remove("active");
        menuBtn.textContent = "☰";

    });

});


/* ================= TYPING EFFECT ================= */

const typing = document.getElementById("typing");

const words = [
    "JavaScript Developer",
    "Web Developer",
    "Student Developer",
    "Programmer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const word = words[wordIndex];

    if (!deleting) {

        typing.textContent =
            word.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === word.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typing.textContent =
            word.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }
        }
    }

    setTimeout(
        typeEffect,
        deleting ? 60 : 100
    );
}

typeEffect();


/* ================= DARK / LIGHT MODE ================= */

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {

        themeBtn.textContent = "☀️";

        localStorage.setItem(
            "theme",
            "dark"
        );

    } else {

        themeBtn.textContent = "🌙";

        localStorage.setItem(
            "theme",
            "light"
        );
    }

});


/* ================= LOAD THEME ================= */

if (localStorage.getItem("theme") === "dark") {

    document.body.classList.add("dark-mode");

    themeBtn.textContent = "☀️";
}


/* ================= SCROLL REVEAL ================= */

const sections =
    document.querySelectorAll(
        ".section, .hero-content, .hero-image"
    );

const revealObserver =
    new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("reveal");
                    entry.target.classList.add("show");

                }

            });

        },
        {
            threshold: 0.15
        }
    );


sections.forEach(function (section) {
    revealObserver.observe(section);
});


/* ================= SKILL ANIMATION ================= */

const skillSection =
    document.getElementById("skills");

const progressBars =
    document.querySelectorAll(".progress-bar");

const skillObserver =
    new IntersectionObserver(
        function (entries) {

            if (entries[0].isIntersecting) {

                progressBars.forEach(function (bar) {

                    bar.style.width =
                        bar.getAttribute("data-width");

                });

                skillObserver.disconnect();
            }

        },
        {
            threshold: 0.3
        }
    );

skillObserver.observe(skillSection);


/* ================= BACK TO TOP ================= */

const topBtn =
    document.getElementById("topBtn");

window.addEventListener("scroll", function () {

    if (window.scrollY > 400) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});


topBtn.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* ================= ACTIVE NAVIGATION ================= */

const pageSections =
    document.querySelectorAll("section");

window.addEventListener("scroll", function () {

    let current = "";

    pageSections.forEach(function (section) {

        const sectionTop =
            section.offsetTop - 160;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });


    navItems.forEach(function (link) {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {

            link.classList.add("active");

        }

    });

});


/* ================= CONTACT FORM ================= */

const contactForm =
    document.getElementById("contactForm");

contactForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();

        const name =
            document.getElementById("name")
                .value.trim();

        const email =
            document.getElementById("email")
                .value.trim();

        const subject =
            document.getElementById("subject")
                .value.trim();

        const message =
            document.getElementById("message")
                .value.trim();


        if (
            name === "" ||
            email === "" ||
            subject === "" ||
            message === ""
        ) {

            alert(
                "Please fill in all the fields."
            );

            return;
        }


        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (!emailPattern.test(email)) {

            alert(
                "Please enter a valid email address."
            );

            return;
        }


        alert(
            "Thank you, " +
            name +
            "! Your message has been submitted."
        );


        contactForm.reset();

    }
);
