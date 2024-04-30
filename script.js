const palabras = ['html','css', 'javascript', 'python']

const palabraSecreta = palabras[Math.floor(Math.random() * palabras.length)];

let letrasAdivinadas = new Array(palabraSecreta.length).fill("_")

let textoFallo = document.getElementById('fallo');

let textoAcierto = document.getElementById('acierto')

let boton = document.getElementById('adivinar')

document.getElementById('palabraOculta').innerText = letrasAdivinadas.join(" ")


console.log(palabraSecreta)


boton.addEventListener("click", () => {
  let letra = document.getElementById("letra").value.toLowerCase();
  console.log(letra)
  
  if (palabraSecreta.includes(letra)) {
    textoFallo.style.display = 'none'
    textoAcierto.style.display = 'flex'
    for (let i = 0; i < palabraSecreta.length; i++) {
      if (palabraSecreta[i] == letra) {
        letrasAdivinadas[i] = letra;
      }
    }

    document.getElementById('palabraOculta').innerText = letrasAdivinadas.join(' ')

    letra = "";

    if (!letrasAdivinadas.includes("_")) {
      document.getElementById("mensaje").innerHTML =
        "Felicidades! Has adivinado la palabra";
      document.getElementById("letra").disabled = true;
    }
  } else {
    textoFallo.style.display = 'flex'
    textoAcierto.style.display = 'none'
  }
  console.log(letrasAdivinadas);
}
);
















// function adivinarPalabra() {

//     if (palabraSecreta.includes(letra)){
//         textoAcierto.style.display = 'flex'
//     } else {
//         textoFallo.style.display = 'flex'
//     }

// }







