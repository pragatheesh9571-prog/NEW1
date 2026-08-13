/* =========================================
   PRAGA PORTFOLIO JAVASCRIPT
========================================= */


/* TYPING EFFECT */

const typing = document.getElementById("typing");

const words = [
    "DEVELOPER",
    "DESIGNER",
    "PROBLEM SOLVER",
    "CREATOR"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeWriter() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typing.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeWriter, 1400);

            return;
        }

    } else {

        typing.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            wordIndex =
                (wordIndex + 1) % words.length;
        }
    }

    setTimeout(
        typeWriter,
        deleting ? 55 : 100
    );
}

typeWriter();


/* =========================================
   CUSTOM CURSOR
========================================= */

const cursor =
    document.querySelector(".cursor");

const cursorDot =
    document.querySelector(".cursor-dot");

document.addEventListener("mousemove", e => {

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

    cursorDot.style.left = e.clientX + "px";
    cursorDot.style.top = e.clientY + "px";

});


document
    .querySelectorAll("a, button, .skill-card, .project")
    .forEach(element => {

        element.addEventListener("mouseenter", () => {

            cursor.style.width = "55px";
            cursor.style.height = "55px";

        });

        element.addEventListener("mouseleave", () => {

            cursor.style.width = "35px";
            cursor.style.height = "35px";

        });

    });


/* =========================================
   MOBILE MENU
========================================= */

const menuBtn =
    document.querySelector(".menu-btn");

const navLinks =
    document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("mobile-open");

});


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements =
    document.querySelectorAll(
        ".section, .skill-card, .project, .contact-section"
    );

const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    element.classList.add("reveal");

    observer.observe(element);

});


/* =========================================
   PROJECT CARD TILT
========================================= */

document
    .querySelectorAll(".skill-card, .project")
    .forEach(card => {

        card.addEventListener(
            "mousemove",
            event => {

                if (window.innerWidth < 800)
                    return;

                const rect =
                    card.getBoundingClientRect();

                const x =
                    event.clientX - rect.left;

                const y =
                    event.clientY - rect.top;

                const centerX =
                    rect.width / 2;

                const centerY =
                    rect.height / 2;

                const rotateX =
                    (y - centerY) / 25;

                const rotateY =
                    (centerX - x) / 25;

                card.style.transform =
                    `
                    perspective(900px)
                    rotateX(${rotateX}deg)
                    rotateY(${rotateY}deg)
                    translateY(-5px)
                    `;
            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                card.style.transform = "";

            }
        );

    });


/* =========================================
   MOUSE BACKGROUND EFFECT
========================================= */

document.addEventListener(
    "mousemove",
    event => {

        const x =
            (event.clientX / window.innerWidth) * 100;

        const y =
            (event.clientY / window.innerHeight) * 100;

        document.body.style.setProperty(
            "--mouse-x",
            x + "%"
        );

        document.body.style.setProperty(
            "--mouse-y",
            y + "%"
        );

    }
);


/* =========================================
   ACTIVE NAVIGATION
========================================= */

const sections =
    document.querySelectorAll("section[id]");

const navItems =
    document.querySelectorAll(".nav-links a");

window.addEventListener(
    "scroll",
    () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 200;

            if (
                window.scrollY >= sectionTop
            ) {

                current =
                    section.getAttribute("id");

            }

        });


        navItems.forEach(link => {

            link.classList.remove("active");

            if (
                link.getAttribute("href") ===
                "#" + current
            ) {

                link.classList.add("active");

            }

        });

    }
);


/* =========================================
   SMOOTH CLOSE MOBILE MENU
========================================= */

navItems.forEach(link => {

    link.addEventListener(
        "click",
        () => {

            navLinks.classList.remove(
                "mobile-open"
            );

        }
    );

});


/* =========================================
   PAGE LOAD
========================================= */

window.addEventListener(
    "load",
    () => {

        document.body.classList.add(
            "loaded"
        );

    }
);