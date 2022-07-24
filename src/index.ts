let menoresDe21: number = 0;
let mayoresDe21: number = 0;
let personaEdad: number = 0;
let indice: number = 1;

function aleatorio(menorValor: number, mayorValor: number) {
   for (indice = 1; indice <= 270; indice++) {
    personaEdad = Math.floor(
      Math.random() * (mayorValor - menorValor) + menorValor
    );
    if (personaEdad < 21) {
      menoresDe21++;
    } else {
      mayoresDe21++;
    }
  }
  console.log("La cantidad de personas menores a 21 son " + menoresDe21);
  console.log("La cantidad de personas mayores a 21 son " + mayoresDe21);
  console.log("La cantidad de personas totales son " + (menoresDe21+mayoresDe21));
};

aleatorio(19, 40);
