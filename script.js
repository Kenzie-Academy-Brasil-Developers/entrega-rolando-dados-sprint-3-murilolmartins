function dado() {
    let numero = 0;
    for (; numero < 1 || numero > 6;) {
        numero = Math.floor(Math.random() * 10 );
    
    }
    return numero;
}
let contador = [0,0,0,0,0,0,0,0,0,0,0,0];
   

for (let i = 0; i < 1000; i++) {
    let dado1 = dado();
    let dado2 = dado();
    let soma = dado1 + dado2;
    contador[soma - 2] += 1;

}


for (i = 2; i <= 12; i++) {
    const paragrafo = document.createElement("p");
    const barra = document.createElement("div");
    const div1 = document.querySelector(".contador");
    const div2 = document.querySelector(".barras");
    barra.classList.add("barra");
    barra.style.width = contador[i - 2] + "px";
    paragrafo.innerText = i + " : " + contador[i - 2];

    div1.appendChild(paragrafo);
    div2.appendChild(barra);
}


