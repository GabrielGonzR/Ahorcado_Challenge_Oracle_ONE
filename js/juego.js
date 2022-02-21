var palabras = ["hola", "ahorcado", "challenge", "javascript", "programacion", "videojuegos", "desarrollo", "mexico", "internet", "alura"];

function AgregarPalabra(){

    var palabra = document.getElementById("palabra_nueva").value;
    var mensaje = document.getElementById("mensaje_palabra_nueva");

    for(var i = 0; i < palabra.length; i++){
        if(!ValidarCaracteres(palabra.charCodeAt(i))){
            mensaje.innerHTML = "Solo se pueden introducir letras sin acentos";
            return null;
        }
        else if(i+1==palabra.length){
            palabras.push(palabra);
            mensaje.innerHTML = "La palabra "+palabra+" fue agregada exitosamente al juego";
        }
    }
    
}

function ValidarCaracteres(valor){

    if((valor > 96 && valor < 123)||(valor > 64 && valor <91)||valor==32||valor==241||valor==209){
        
        return true;
    }
    else{
        return false;
    }
}


function IniciarJuego(){

    
}