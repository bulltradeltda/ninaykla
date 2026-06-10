// =======================================
// MARINA & KLAUS
// SCRIPT FINAL
// =======================================

// DATA DE INÍCIO

const dataInicio = new Date("2025-11-17T00:00:00");

// CONTADOR PRINCIPAL

function atualizarContador() {

    const agora = new Date();

    const diferenca = agora - dataInicio;

    const dias = Math.floor(
        diferenca / (1000 * 60 * 60 * 24)
    );

    const contador = document.getElementById("contadorDias");

    if (contador) {
        contador.textContent = dias;
    }

}

atualizarContador();

setInterval(atualizarContador, 60000);


// =======================================
// CHILE
// =======================================

const dataChile = new Date("2026-07-01T00:00:00");

function atualizarChile() {

    const elemento = document.getElementById("diasChile");

    if (!elemento) return;

    const agora = new Date();

    const dias = Math.ceil(
        (dataChile - agora) /
        (1000 * 60 * 60 * 24)
    );

    elemento.textContent = dias > 0 ? dias : 0;

}

atualizarChile();


// =======================================
// RIO
// =======================================

const dataRio = new Date("2026-09-01T00:00:00");

function atualizarRio() {

    const elemento = document.getElementById("diasRio");

    if (!elemento) return;

    const agora = new Date();

    const dias = Math.ceil(
        (dataRio - agora) /
        (1000 * 60 * 60 * 24)
    );

    elemento.textContent = dias > 0 ? dias : 0;

}

atualizarRio();


// =======================================
// ANIMAÇÕES AO ROLAR
// =======================================

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
`
.full-photo,
.travel-text-block,
.polaroid,
.pet-card,
.future-card,
.memory-section,
.timeline,
.letter,
.relationship-stats
`
).forEach(el => {

    el.classList.add("hidden");

    observer.observe(el);

});


// =======================================
// PARALLAX SUAVE HERO
// =======================================

window.addEventListener("scroll", () => {

    const hero = document.querySelector(".hero-image");

    if (!hero) return;

    const scroll = window.pageYOffset;

    hero.style.transform =
        `translateY(${scroll * 0.12}px) scale(1.08)`;

});


// =======================================
// TÍTULO APARECENDO
// =======================================

window.addEventListener("load", () => {

    const subtitle = document.querySelector(".subtitle");

    if (!subtitle) return;

    subtitle.style.opacity = "0";

    setTimeout(() => {

        subtitle.style.transition = "1.5s";

        subtitle.style.opacity = "1";

    }, 400);

});


// =======================================
// PRELOAD
// =======================================

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});


// =======================================
// CONSOLE
// =======================================

console.log(`
Marina & Klaus ❤️

Nosso Primeiro Capítulo

Atualizado continuamente
desde 17/11/2025
`);
