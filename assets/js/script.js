// Carta Verso
let cartaVerso = './assets/img/cross.png'

let cartas = [];

for (let i = 0; i <= 8; i++) {
  cartas.push(`http://picsum.photos/id/${i}/80`);
  let fundo = `${cartaVerso}`;

  onload = () => {
    let elemeCartas = document.querySelectorAll('#memoria img');
    elemeCartas.forEach(
      (img, i) => {
        img.src = fundo;
      }
    )

  }
}
