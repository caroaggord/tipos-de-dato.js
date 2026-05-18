const librosLeidos = [];

function agregarLibro(titulo) {
  if (titulo && titulo.trim() !== "") {
    librosLeidos.push(titulo);
    console.log('¡Libro agregado con éxito: "${titulo}"!');
  } else {
    console.log(" Por favor, ingresa un título de libro válido.");
  }

  }

function mostrarLibrosLeidos() {
    if (librosLeidos.length === 0) {
        console.log("Aún no has agragado ningún libro a tu lista.");
        return;

    }
    console.log("--- Libros Leídos ---");
    for (let i = 0; i < librosLeidos.length; i++) {
        console.log('${i + 1}. ${librosLeidos[i]}');
    
    }
    console.log("---------------------");
}

mostrarLibrosLeidos();

agregarLibro("El Principito");
agregarLibro("Don Quijote de la Mancha");
agregarLibro("El Príncipe");

mostrarLibrosLeidos();
