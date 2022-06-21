const tabuleiro = document.getElementById("tabuleiro");

const imagens = [
  "img0.png",
  "img1.png",
  "img2.png",
  "img3.png",
  "img4.png",
  "img5.png",
  "img6.png",
  "img7.png",
];

let codigoHTML = "";

imagens.forEach((img) => {
  codigoHTML += `<div class="memory-card" data-card="${img}">
    <img class="frente-carta" src="./assets/img/${img}" alt="carta-frente">
    <img class="fundo-carta" src="./assets/img/cross.png" alt="carta-fundo">
  </div>`;
});

tabuleiro.innerHTML = codigoHTML + codigoHTML;

const cartas = document.querySelectorAll(".memory-card");

let primeira, segunda;
let bloqueio = false;

(function aleatoria() {
  cartas.forEach((carta) => {
    let numero = Math.foor(Math.random() * 16);
    carta.style.order = numero;
  });
})();

// Função que verifica se é iguais
function checar() {
  let ehIgual = primeira.dataset.carta === segunda.dataset.carta ? true : false;

  if (!ehIgual) {
    remover();
  } else {
    reset(ehIgual);
  }
}

function virar() {
  if (bloqueio) return false;
  this.classList.add("virar");

  if (!primeira) {
    primeira = this;
    primeira.removeEventListener("click", virar);
    return false;
  }
  segunda = this;

  checar();
}

// Funcão para atrasar quando a 2º vira
function remover() {
  bloqueio = true;
  setTimeout(() => {
    primeira.classList.remove("virar");
    primeira.addEventListener("click", virar);
    segunda.classLit.remove("virar");
    bloqueio = false;
    primeira = null;
    segunda = null;
  }, 2000);
}

function reset(ehIgual) {
  if (ehIgual) {
    primeira.removeEventListener("click", virar);
    segunda.removeEventListener("click", virar);
    [bloqueio, primeira, segunda] = [false, null, null];
  }
}
cartas.forEach((c) => c.addEventListener("click", virar));
