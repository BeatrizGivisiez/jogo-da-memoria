const tabuleiro = document.getElementById("tabuleiro");

const baralho = [
  {
    nome: "android",
    img: "./assets/img/img0.png",
  },
  {
    nome: "chrome",
    img: "./assets/img/img1.png",
  },
  {
    nome: "facebook",
    img: "./assets/img/img2.png",
  },
  {
    nome: "firefox",
    img: "./assets/img/img3.png",
  },
  {
    nome: "google",
    img: "./assets/img/img4.png",
  },
  {
    nome: "html",
    img: "./assets/img/img5.png",
  },
  {
    nome: "twitter",
    img: "./assets/img/img6.png",
  },
  {
    nome: "windows",
    img: "./assets/img/img7.png",
  },
  {
    nome: "android",
    img: "./assets/img/img0.png",
  },
  {
    nome: "chrome",
    img: "./assets/img/img1.png",
  },
  {
    nome: "facebook",
    img: "./assets/img/img2.png",
  },
  {
    nome: "firefox",
    img: "./assets/img/img3.png",
  },
  {
    nome: "google",
    img: "./assets/img/img4.png",
  },
  {
    nome: "html",
    img: "./assets/img/img5.png",
  },
  {
    nome: "twitter",
    img: "./assets/img/img6.png",
  },
  {
    nome: "windows",
    img: "./assets/img/img7.png",
  },
];

baralho.sort(()=>{
  return 0.5 - Math.random();
})

const grade = document.querySelector("#tabuleiro");
let escolhidas = [];

function criarGrade() {
  for (let i = 0; i < baralho.length; i++) {
    let carta = document.createElement("img");
    carta.id = i;
    carta.nome = baralho[i].nome;
    carta.src = "./assets/img/cross.png";
    carta.addEventListener("click", escolherCarta);
    grade.appendChild(carta);
  }
}

function escolherCarta() {
  let carta = this;
  carta.src = baralho[carta.id].img;
  escolhidas.push(carta);

  if (escolhidas.length == 2) {
    setTimeout(() => {
      let carta1 = escolhidas[0];
      let carta2 = escolhidas[0];

      if (carta1.name == carta2.name) {
        carta1.src = "branco.jpg"; //uma img branca para dar sensação de que sumiu a carta
        carta2.src = "branco.jpg";

        carta1.removeEventListener("click",escolherCarta)
        carta2.removeEventListener("click",escolherCarta)

      } else {
        carta1.src = "./assets/img/cross.png";
        carta2.src = "./assets/img/cross.png";
      }

      escolhidas = [];
    }, 2000);
  }
}
// https://www.youtube.com/watch?v=nDrYuilcukM