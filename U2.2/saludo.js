function calcular(){
    let nombre = document.getElementById("nombre").value;
    let input_respuesta = document.getElementById("respuesta");
    if (nombre == ""){
        alert("No ha introducido ningun nombre");
    }
    else{
        let respuesta = "Hola " + nombre + ", yo soy PENTIUM 4";
        input_respuesta.value = respuesta;
    }
}

