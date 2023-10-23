let imagenes=new Array(

    ['monedas/cara.jpg'],

    ['monedas/cruz.jpg']

);
let contador=0;

 function random() {
    return Math.floor((Math.random() * (7 - 6 + 1)) + 6);
}

function rotarImagenes(){
    contador = contador + 1;
    document.getElementById("imagen").src=imagenes[contador%imagenes.length][0];
    numero_aleatorio = random();
    if (contador >  numero_aleatorio) {
        clearInterval(intervalo);
        const label = document.querySelector("label");
        if (contador == 7){
            label.innerHTML = 'CRUZ';
        }
        if (contador == 8){
            label.innerHTML = 'CARA';
        }
        contador = 0;
        document.getElementById('mostrar').style.display = 'block';
    }
}
function rotar(){
    rotarImagenes();
    intervalo = setInterval(rotarImagenes,500);
}
function mostrar(){
    rotar();
    document.getElementById('mostrar').style.display = 'none';
}
