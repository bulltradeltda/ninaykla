const inicio = new Date("2025-11-17T00:00:00");

function atualizar() {

const agora = new Date();

const diferenca = agora - inicio;

const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));

const horas = Math.floor(
(diferenca / (1000 * 60 * 60)) % 24
);

const minutos = Math.floor(
(diferenca / (1000 * 60)) % 60
);

document.getElementById("contador").innerHTML = `
<div class="contador-box">
${dias} dias
<br>
${horas} horas
<br>
${minutos} minutos
</div>
`;

}

atualizar();
setInterval(atualizar,1000);