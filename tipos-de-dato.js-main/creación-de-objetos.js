const libro = {
    titulo: "El Principito", 
    autor: "Antoine de Saint-Exupéry",
    anio: 1943,
    estado: "disponible",
    capitulos: [
        "Capítulo 1: El encuentro con el aviador", 
        "Capítulo 2: El planeta del rey", 
        "Capítulo 3: El planeta del vanidoso", 
        "Capítulo 4: El planeta del bebedor", 
        "Capítulo 5: El planeta del farolero", 
        "Capítulo 6: El planeta del geógrafo", 
        "Capítulo 7: La Tierra"
    ],

    describirLibro: function() {
        console.log(`Libro titulado "${this.titulo}", escrito por ${this.autor} en el año ${this.anio}. El estado actual es: ${this.estado}.`);
    },

    agregarCapitulo: function(nuevoCapitulo) {
        if (nuevoCapitulo && nuevoCapitulo.trim() !== "") {
            this.capitulos.push(nuevoCapitulo);
            console.log(`¡Capítulo "${nuevoCapitulo}" agregado con éxito!`);
        }
    },

    eliminarCapitulo: function(nombreCapitulo) {
        const indice = this.capitulos.indexOf(nombreCapitulo);

        if (indice !== -1) {
            this.capitulos.splice(indice, 1);
            console.log(`¡Capítulo "${nombreCapitulo}" eliminado con éxito!`);
        } else {
            console.log(`No se encontró el capítulo "${nombreCapitulo}" en la lista.`);
        }
    },

    mostrarCapitulos: function() {
        console.log(`--- Capítulos actuales ---`);
        this.capitulos.forEach((cap) => console.log(cap));
        console.log(`--------------------------`);
    }
};

// --- Pruebas de funcionamiento ---
libro.describirLibro();
libro.mostrarCapitulos();

libro.agregarCapitulo("Capítulo 8: El encuentro con el zorro");
libro.mostrarCapitulos();

libro.eliminarCapitulo("Capítulo 3: El planeta del vanidoso");
libro.mostrarCapitulos();

libro.estado = "prestado";
libro.describirLibro();