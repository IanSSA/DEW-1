function incremento(num){
    new_num = num + 1;
    return new_num;
}

function comprobacion(num1, num2){
    if (num1 > num2){
        alert("Error");
    } else{
        resultado = num1 + num2;
        return resultado;
    }
}

function calcnum(primNum, segunNum){
    if (primNum > segunNum){
        alert("El primer numero es mayor que es segundo");
        return "";
    } else{
        total = primNum + segunNum;
        return total;
    }
    }

function resultado(){
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    if (num1 == "" || num2 == ""){
        alert("Debe rellenar todos los parámetros");
    } else{
        total = calcnum(num1, num2);
        if (total != ""){
            document.getElementById("resultado").innerHTML = total;
        }
    }
    
}