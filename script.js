const dataInicio = new Date("2025-11-17T00:00:00");

function atualizarContador() {

    const agora = new Date();

    const diferenca = agora - dataInicio;

    const dias = Math.floor(
        diferenca / (1000 * 60 * 60 * 24)
    );

    const contador = document.getElementById("contadorDias");

    if(contador){
        contador.innerText = dias;
    }

}

atualizarContador();

setInterval(atualizarContador,60000);


// Fade-in das seções

const elementos = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("visible");

        }

    });

},{
    threshold:0.15
});

elementos.forEach(el=>{
    observer.observe(el);
});


// Parallax leve da capa

window.addEventListener("scroll",()=>{

    const heroImage = document.querySelector(".hero-image");

    if(!heroImage) return;

    const scroll = window.pageYOffset;

    heroImage.style.transform =
        `translateY(${scroll * 0.25}px) scale(1.05)`;

});
