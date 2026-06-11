/* =====================================
   MARINA & KLAUS
   SCRIPT PREMIUM
===================================== */

/* INTRO CINEMATOGRÁFICA */

window.addEventListener("load", () => {

    const intro = document.getElementById("intro-screen");

    if (!intro) return;

    setTimeout(() => {

        intro.style.opacity = "0";

        setTimeout(() => {

            intro.style.display = "none";

        }, 2000);

    }, 3000);

});

/* =====================================
   BARRA DE PROGRESSO
===================================== */

const progress = document.createElement("div");

progress.id = "reading-progress";

document.body.appendChild(progress);

window.addEventListener("scroll", () => {

    const scrollTop = window.scrollY;

    const docHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const percent =
        (scrollTop / docHeight) * 100;

    progress.style.width = percent + "%";

});

/* =====================================
   SCROLL SUAVE
===================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target =
            document.querySelector(
                this.getAttribute("href")
            );

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});

/* =====================================
   ANIMAÇÕES DE ENTRADA
===================================== */

const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold: 0.15
    }

);

document.querySelectorAll(
    ".chapter,.book-page,.polaroid,.travel-stop,.stamp,.quote-page"
).forEach(el => {

    el.classList.add("hidden");

    observer.observe(el);

});

/* =====================================
   PARALLAX CAPA
===================================== */

window.addEventListener("scroll", () => {

    const hero =
        document.querySelector("#hero img");

    if (!hero) return;

    const offset =
        window.pageYOffset * 0.25;

    hero.style.transform =
        `translateY(${offset}px) scale(1.05)`;

});

/* =====================================
   CONTADORES DE VIAGEM
===================================== */

function countdown(id, dateString) {

    const element =
        document.getElementById(id);

    if (!element) return;

    const targetDate =
        new Date(dateString);

    function update() {

        const now =
            new Date();

        const diff =
            targetDate - now;

        if (diff <= 0) {

            element.innerHTML =
                "Estamos aqui ❤️";

            return;

        }

        const days =
            Math.floor(
                diff / (1000 * 60 * 60 * 24)
            );

        element.innerHTML =
            `${days} dias`;

    }

    update();

    setInterval(update, 60000);

}

countdown(
    "chileCountdown",
    "2026-07-16"
);

countdown(
    "rioCountdown",
    "2026-09-11"
);

countdown(
    "carnavalCountdown",
    "2027-02-05"
);

countdown(
    "equadorCountdown",
    "2027-06-13"
);

/* =====================================
   BOTÃO "ABRIR LIVRO"
===================================== */

const scrollBtn =
    document.querySelector(".scroll-indicator");

if (scrollBtn) {

    scrollBtn.addEventListener(
        "click",
        () => {

            const next =
                document.querySelector(".chapter");

            if (next) {

                next.scrollIntoView({
                    behavior: "smooth"
                });

            }

        }
    );

}

/* =====================================
   DESTAQUE MENU LATERAL
===================================== */

const sections =
    document.querySelectorAll(
        "section[id]"
    );

const navLinks =
    document.querySelectorAll(
        "#chapter-nav a"
    );

window.addEventListener(
    "scroll",
    () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 200;

            if (
                pageYOffset >= sectionTop
            ) {
                current = section.getAttribute("id");
            }

        });

        navLinks.forEach(link => {

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

/* =====================================
   FRASE FINAL
===================================== */

const finalSection =
    document.querySelector("#final");

if (finalSection) {

    const finalObserver =
        new IntersectionObserver(

            (entries) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        finalSection.classList.add(
                            "active"
                        );

                    }

                });

            },

            {
                threshold: 0.5
            }

        );

    finalObserver.observe(
        finalSection
    );

}
