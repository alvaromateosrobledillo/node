const fs = require('fs');

const content = fs.readFileSync('README.md', 'utf-8');
const wordCount = content.split(' ').length;

// case insensitive

function contarPalabrasReact(texto) {
    //convertimos todo el texto en minúsculas para asegurarnos 
    const textoMin = texto.toLowerCase();

    //Usamos una expresión regular para encontrar todas las palabras
    const regex = /\breact\b/g;

    // Usamos el método match para ontener un array con todas las ocurrencias
    const matches = textoMin.match(regex);

    // Si matches es null o undefined, significa que no hay ocurrencias
    if (!matches) {
        return 0;
    }

    return matches.length;
}

console.log('Palabras:', wordCount);
console.log('Palabras React', contarPalabrasReact(content));

