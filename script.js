/* ==================================================
   MARINA & KLAUS
   SCRIPT PREMIUM
================================================== */

/* ==========================
   CONTADOR DE LEITURA
========================== */

const progressBar = document.createElement("div");

progressBar.id = "reading-progress";

document.body.appendChild(progressBar);

window.addEventListener("scroll", () => {

    const scrollTop =
        window.scrollY;

    const docHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const progress =
        (scrollTop / docHeight) * 100;

    progressBar.style.width =
        progress + "%";

});

/* ==========================
   FADE AO ENTRAR NA TELA
========================== */

const observer =
new IntersectionObserver(

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

document
.querySelectorAll(
".chapter, .date-page, .polaroid, .stamp, .location-card"
)
.forEach(el => {

    el.classList.add("hidden");

    observer.observe(el);

});

/* ==========================
   PARALLAX CAPA
========================== */

window.addEventListener("scroll", () => {

    const hero =
    document.querySelector("#hero img");

    if(!hero) return;

    const scroll =
    window.pageYOffset;

    hero.style.transform =
    `translateY(${scroll * 0.25}px) scale(1.05)`;

});

/* ==========================
   PARALLAX EPÍLOGO
========================== */

window.addEventListener("scroll", () => {

    const epilogue =
    document.querySelector("#epilogue img");

    if(!epilogue) return;

    const rect =
    epilogue.getBoundingClientRect();

    const offset =
    rect.top * -0.08;

    epilogue.style.transform =
    `translateY(${offset}px) scale(1.08)`;

});

/* ==========================
   CONTADORES DE VIAGEM
========================== */

function countdown(id, dateString){

    const el =
    document.getElementById(id);

    if(!el) return;

    const future =
    new Date(dateString);

    function update(){

        const now =
        new Date();

        const diff =
        future - now;

        if(diff <= 0){

            el.innerHTML =
            "Estamos aqui ❤️";

            return;
        }

        const days =
        Math.floor(
            diff / (1000 * 60 * 60 * 24)
        );

        el.innerHTML =
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

/* ==========================
   SCROLL SUAVE DA CAPA
========================== */

const scrollButton =
document.querySelector(
".scroll-indicator"
);

if(scrollButton){

scrollButton.addEventListener(
"click",
() => {

    const nextSection =
    document.querySelector(
    ".prologue"
    );

    if(nextSection){

        nextSection.scrollIntoView({
            behavior:"smooth"
        });

    }

});

}

/* ==========================
   MÚSICAS DOS CAPÍTULOS
========================== */

const songs = {

cap1:{
title:"Carta de abertura",
artist:"Instrumental",
src:"audio/instrumental.mp3"
},

cap2:{
title:"So Easy",
artist:"Olivia Dean",
src:"audio/soeasy.mp3"
},

cap3:{
title:"Un Año",
artist:"Sebastián Yatra",
src:"audio/unano.mp3"
},

cap4:{
title:"I've Seen It",
artist:"Olivia Dean",
src:"audio/iveseenit.mp3"
},

cap5:{
title:"Clone",
artist:"Luan Santana",
src:"audio/clone.mp3"
},

cap6:{
title:"Baile Inolvidable",
artist:"Bad Bunny",
src:"audio/baileinolvidable.mp3"
},

cap7:{
title:"Good Bad Ugly",
artist:"Giveon",
src:"audio/goodbadugly.mp3"
},

cap8:{
title:"Viajando Por El Mundo",
artist:"Karol G",
src:"audio/viajando.mp3"
},

final:{
title:"Que Nem Maré",
artist:"Jorge Vercillo",
src:"audio/quenimmare.mp3"
}

};

/* ==========================
   TROCA DE MÚSICA
========================== */

const audio =
document.getElementById(
"audio-player"
);

const songTitle =
document.getElementById(
"song-title"
);

const songArtist =
document.getElementById(
"song-artist"
);

function changeSong(key){

if(!songs[key]) return;

songTitle.textContent =
songs[key].title;

songArtist.textContent =
songs[key].artist;

audio.src =
songs[key].src;

}

/* ==========================
   OBSERVAR CAPÍTULOS
========================== */

const chapterObserver =
new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(!entry.isIntersecting)
return;

const id =
entry.target.id;

if(id){

changeSong(id);

}

});

},

{
threshold:0.5
}

);

/*
IMPORTANTE:

No HTML adicione:

id="cap1"
id="cap2"
id="cap3"
id="cap4"
id="cap5"
id="cap6"
id="cap7"
id="cap8"
id="final"

nos capítulos correspondentes.
*/

document
.querySelectorAll(
"#cap1,#cap2,#cap3,#cap4,#cap5,#cap6,#cap7,#cap8,#final"
)
.forEach(section => {

chapterObserver.observe(
section
);

});

/* ==========================
   MENSAGEM FINAL
========================== */

const ending =
document.querySelector(
"#ending"
);

if(ending){

ending.addEventListener(
"mouseenter",
() => {

changeSong("final");

});

}
