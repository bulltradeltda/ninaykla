```javascript id="9rv3pk"
// =====================================
// MARINA & KLAUS
// VERSÃO PREMIUM
// =====================================

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
        contador.innerText = dias;
    }

}

atualizarContador();

setInterval(atualizarContador, 60000);


// =====================================
// CONTADOR CHILE
// =====================================

const dataChile = new Date("2026-07-01T00:00:00");

function atualizarChile() {

    const agora = new Date();

    const diferenca = dataChile - agora;

    const dias = Math.ceil(
        diferenca / (1000 * 60 * 60 * 24)
    );

    const chile = document.getElementById("diasChile");

    if (chile && dias > 0) {
        chile.innerText = dias;
    }

}

atualizarChile();


// =====================================
// CONTADOR RIO
// =====================================

const dataRio = new Date("2026-09-01T00:00:00");

function atualizarRio() {

    const agora = new Date();

    const diferenca = dataRio - agora;

    const dias = Math.ceil(
        diferenca / (1000 * 60 * 60 * 24)
    );

    const rio = document.getElementById("diasRio");

    if (rio && dias > 0) {
        rio.innerText = dias;
    }

}

atualizarRio();


// =====================================
// FADE SUAVE DAS IMAGENS
// =====================================

const observer = new IntersectionObserver(

(entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

},

{
    threshold: 0.15
}

);

document
.querySelectorAll(
".full-photo, .travel-text-block, .polaroid, .pet-card, .future-card"
)
.forEach((el) => {

    el.classList.add("hidden");

    observer.observe(el);

});


// =====================================
// EFEITO PARALLAX SUAVE HERO
// =====================================

window.addEventListener("scroll", () => {

    const hero = document.querySelector(".hero-image");

    if (!hero) return;

    const scroll = window.pageYOffset;

    hero.style.transform =
        `translateY(${scroll * 0.15}px) scale(1.08)`;

});


// =====================================
// SCROLL SUAVE
// =====================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function (e) {

        e.preventDefault();

        document
            .querySelector(this.getAttribute('href'))
            .scrollIntoView({
                behavior: 'smooth'
            });

    });

});


// =====================================
// EFEITO DIGITAÇÃO
// =====================================

const titulo = document.querySelector(".subtitle");

if (titulo) {

    titulo.style.opacity = 0;

    setTimeout(() => {

        titulo.style.transition = "1.2s";

        titulo.style.opacity = 1;

    }, 500);

}


// =====================================
// PRELOAD DAS IMAGENS
// =====================================

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});


// =====================================
// CONSOLE MESSAGE
// =====================================

console.log(
`
Marina & Klaus

Nosso Primeiro Capítulo

Atualizado continuamente desde
17 de novembro de 2025 ❤️
`
);
```

