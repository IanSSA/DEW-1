let intentos_rest = 6;

let random_num = Math.floor(Math.random() * 100);
alert(random_num);

function intentos(){
    intentos_rest = intentos_rest - 1;
    if (intentos_rest < 0){
        return false;
    }
    let texto_intetos = "Le quedan " + intentos_rest + " intentos restantes";
    let intentos_input = document.getElementById("intentos");
    intentos_input.innerText = texto_intetos;
    return true;
}

function comprobar_limite(){
    let respuesta = document.getElementById("num").value;
    if (respuesta <= 100 && respuesta >= 0){
        return true;
    }
    else{
        alert("El número debe ser mayor o igual que 0 y menor o igual que 100");
        return false;
    }
 }

function comprobar_resultado(){
    let respuesta = document.getElementById("num").value;
    if (respuesta == random_num){
        let intentos_input = document.getElementById("intentos");
        intentos_input.innerText = "Ha acertado!";
        let intentos = document.getElementById("pista");
        intentos.innerText = "";
        alert("Muy bien hecho!");
    } else if (respuesta > random_num){
        let intentos_input = document.getElementById("pista");
        intentos_input.innerText = "El número es menor";
    } else {
        let intentos_input = document.getElementById("pista");
        intentos_input.innerText = "El número es mayor";
    }
}

function total(){
    comprobar_limite();
    if (intentos()){
        if (comprobar_limite()){
            comprobar_resultado();
        }
    } else {
        alert("Se ha quedado sin intentos");
    }
    

}