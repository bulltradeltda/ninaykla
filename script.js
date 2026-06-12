// =====================================
// ANIMAÇÃO DE ENTRADA DOS CAPÍTULOS
// =====================================

const observer = new IntersectionObserver(

(entries) => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},

{
threshold:0.15
}

);

document.querySelectorAll(
".chapter, .date-page, .polaroid, .travel-stop, .memory-item"
).forEach(el => {

el.classList.add("hidden");

observer.observe(el);

});

// =====================================
// PARALLAX SUAVE DA CAPA
// =====================================

const hero = document.querySelector("#hero img");

window.addEventListener("scroll", () => {

const y = window.scrollY;

if(hero){

hero.style.transform =
`scale(1.05) translateY(${y * 0.15}px)`;

}

});

// =====================================
// CONTAGEM REGRESSIVA
// =====================================

function updateCountdown(id, targetDate){

const el = document.getElementById(id);

if(!el) return;

const now = new Date();

const target = new Date(targetDate);

const diff = target - now;

if(diff <= 0){

el.innerHTML = "Chegou! ✈️";

return;

}

const days =
Math.floor(diff / (1000 * 60 * 60 * 24));

el.innerHTML =
`${days} dias`;

}

function updateAllCountdowns(){

updateCountdown(
"chileCountdown",
"2026-07-16"
);

updateCountdown(
"rioCountdown",
"2026-09-11"
);

updateCountdown(
"carnavalCountdown",
"2027-02-05"
);

updateCountdown(
"equadorCountdown",
"2027-06-13"
);

}

updateAllCountdowns();

setInterval(
updateAllCountdowns,
60000
);

// =====================================
// FINAL CINEMATOGRÁFICO
// =====================================

const finalSection =
document.querySelector("#final");

if(finalSection){

const finalObserver =
new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const lines =
document.querySelectorAll(".final-line");

const heart =
document.querySelector(".heart");

setTimeout(()=>{

lines[0]?.classList.add("visible");

},800);

setTimeout(()=>{

lines[1]?.classList.add("visible");

},2500);

setTimeout(()=>{

heart?.classList.add("visible");

},4500);

}

});

},

{
threshold:0.5
}

);

finalObserver.observe(finalSection);

}

// =====================================
// SCROLL SUAVE
// =====================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener("click", function(e){

e.preventDefault();

document.querySelector(
this.getAttribute("href")
)?.scrollIntoView({

behavior:"smooth"

});

});

});
