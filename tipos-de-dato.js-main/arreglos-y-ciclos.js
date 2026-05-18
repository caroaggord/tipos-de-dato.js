const frutas = ['manzana', 'pera', 'manzana', 'platano', 'pera', 'manzana', 'uva'];
const conteoFrutas = {};
for (let i = 0; i < frutas.length; i++) {
    let fruta = frutas[i];

    if (conteoFrutas[fruta]) {
        conteoFrutas[fruta]++;
    } else {
        conteoFrutas[fruta] = 1;
    }
}

console.log("Conteo de frutas (ciclo for):", conteoFrutas);

// Usando un ciclo while

const frutas2 = ['manzana', 'pera', 'manzana', 'platano', 'pera', 'manzana', 'uva'];
const conteoFrutasWhile = {};
let index = 0;

while (index < frutas2.length) {
    let fruta = frutas2[index];

    if (conteoFrutasWhile[fruta]) {
        conteoFrutasWhile[fruta]++;
    } else {
        conteoFrutasWhile[fruta] = 1;
    }
    index++;
}


console.log("Conteo de frutas (ciclo while):", conteoFrutasWhile);