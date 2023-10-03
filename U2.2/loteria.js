let nums = [];

function comprobar(compr){
    resultado = nums.indexOf(compr);
    return resultado;
}
function generar(){
    nums = [];
    for (num = 0; num < 6; num++){
        let random_num = Math.floor(Math.random() * 100);
        compr = comprobar(random_num);
        if (compr == -1){
            nums.push(random_num);
        } else {
            num = num -1;
        }
    }
    let respuesta = "Sus numeros son ";
function resultado(num, index){
    if (index == 0){
        respuesta += " " + num;
    } else{
        respuesta += ", " + num;
    }
}
    nums.forEach(resultado);
    document.getElementById("resultado").innerHTML = respuesta;
}