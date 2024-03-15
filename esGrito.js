const palabra = prompt("Escribí una palabra: ");

let letras = 0;
let signos = 0;

function esGrito(palabra) {
    for(let i = 0; i < palabra.length; i++) {
        if(palabra[i] == '!') signos++;
        else letras++;
    }
    
    if(signos > letras) return true;
}

document.write("Sentencia: " + palabra + "<br>");
if(esGrito(palabra)) {
    document.write("ESGRITO");
} else {
    document.write("Escrito");
}
