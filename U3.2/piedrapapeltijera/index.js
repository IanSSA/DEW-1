let imagenes=new Array(

    ['imagenes/piedra.jpg'],

    ['imagenes/papel.jpg'],

    ['imagenes/tijera.jpg']

);

function random(){
    let random_num = Math.floor(Math.random() * 3);
    return random_num;
}

function mostrar_imagen(random_num){
    let imagen = document.getElementById("imagen");
    if (random_num == 0){
        imagen.src = "imagenes/piedra.png";
    } else if (random_num == 1){
        imagen.src = "imagenes/papel.png"; 
    } else{
        imagen.src = "imagenes/tijera.png";
    }
}

function get_foto(num){
    if (num == 0){
        return "piedra";
    } else if (num == 1){
        return "papel";
    } else {
        return "tijera";
    }
}

function calcular_resultado(){
    let random_num = random();
    mostrar_imagen(random_num);
    let respuesta_escogida = document.querySelector('input[name="respuesta"]:checked');
    respuesta = respuesta_escogida.value;
    let respuesta_maquina = get_foto(random_num);
    if (respuesta_maquina == respuesta){
        document.getElementById("resultado").innerHTML = "¡Empate!";
    } else if (respuesta == "piedra"){
        if (respuesta_maquina == "papel"){
            document.getElementById("resultado").innerHTML = "¡Perdiste!";
        } else {
            document.getElementById("resultado").innerHTML = "¡Ganaste!";
        }
    } else if (respuesta == "papel"){
        if (respuesta_maquina == "tijera"){
            document.getElementById("resultado").innerHTML = "¡Perdiste!";
        } else {
            document.getElementById("resultado").innerHTML = "¡Ganaste!";
        }
    } else if (respuesta == "tijera"){
        if (respuesta_maquina == "piedra"){
            document.getElementById("resultado").innerHTML = "¡Perdiste!";
        } else {
            document.getElementById("resultado").innerHTML = "¡Ganaste!";
        }
    }
}