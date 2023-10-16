function verificar(respuesta){
    if (respuesta == 20){
        return true;
    } else{
        return false;
    }
}

function recibir(){
    let respuesta = document.getElementById("num").value;
    if (verificar(respuesta)){
        alert("El resultado es correcto");
    } else{
        alert("El resultado no es correcto");
    }
}