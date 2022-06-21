// // Carta Verso
// let cartaVerso = "./assets/img/cross.png";
// let imagens = [];
// for (let i = 0; i <= 8; i++) {
//   imagens.push(`http://picsum.photos/id/${i}/80`);
//   // let fundo = `${cartaVerso}`;
//   let fundo = 'https://picsum.photos/80?grayscale'

//   // Estado Tabuleiro
//   let cartas = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];

//   onload = () => {
//     // Carrega Tabuleiro
//     let elemImagens = document.querySelectorAll("#memoria img");
//     elemImagens.forEach((img, i) => {
//       img.src = fundo;
//       img.setAttribute("data-valor", i);
//       img.style.opacity = 0.6;
//     });

//     // Evento botão
//     document.querySelector("#buttonPlay").onClick = iniciaJogo;
//   };
// }

// // Play Game
// const iniciaJogo = () => {
  
//   // Embaralhar as cartas
//   for(let i=0; i<cartas.length; i++){
//     let p = Math.trunc(Math.random() * cartas.length);
//     let aux = cartas[p];
//     cartas[p] = cartas[i];
//     cartas[i] = aux;
//   }

//   // Associar evento às imagens
//   let elemImagens = document.querySelectorAll("#memoria img");
//   elemImagens.forEach((img, i) => {
//       img.onclick = trataCliqueImagem;
//       img.style.opacity = 0.6;
//     })
// };

// const trataCliqueImagem = (e) => {
//   e.target.src = imagens[];
// }



const cards = document.querySelectorAll('.carta');
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

//função para virar carta
function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flip');

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    secondCard = this;
    hasFlippedCard = false;

    checkForMatch();
}

//função que checa se as cartas são iguais
function checkForMatch() {
    if (firstCard.dataset.card === secondCard.dataset.card) {
        disableCards();
        return;
    }
    unflipCards();
}

//função que desabilita as cartas
function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    resetBoard();
}

//funcão que desvira as cartas
function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();
    }, 1500);
}

//função que reseta o tabuleiro
function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

//função que embaralha as cartas
(function shuffle() {
    cards.forEach((card) => {
        let randomPosition = Math.floor(Math.random() * 12);
        card.style.order = randomPosition;
    })
})();

//adiciona evento de clique na carta
cards.forEach((card) => {
    card.addEventListener('click', flipCard);
});

