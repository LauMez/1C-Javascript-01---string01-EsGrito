const palabra = prompt("Escribí una palabra: ");

let letras = 0;
let signos = 0;

function esGrito(palabra) {
    for(let i = 0; i < palabra.length; i++) {
        if(palabra[i] == '!') signos++;
        else letras++;
    }

    document.write("Sentencia: " + palabra + "<br>");
    if(signos > letras) document.write("ESGRITO");
    else document.write("escrito");
}

esGrito(palabra);