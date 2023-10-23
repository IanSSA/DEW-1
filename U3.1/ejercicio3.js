let ingredientes = ["tomate", "pescado", "harina", "pepino", "mantequilla"];
function funcionfor(){
    let ingredientes_string = "";
    for (let i = 0; i<ingredientes.length;i++){
        if (ingredientes_string == ""){
            ingredientes_string = ingredientes[i];
        } else{
            ingredientes_string = ingredientes_string + ", " + ingredientes[i];
            if (ingredientes[i] == "harina"){
                break;
            }
        }
    }
    document.getElementById("resultadofor").innerHTML = ingredientes_string;
}

function funcionforeach(){
    let ingredientes_string = "";
    ingredientes.forEach((ingrediente) => {
        if (ingredientes_string == ""){
            ingredientes_string = ingrediente;
        } else{
            ingredientes_string = ingredientes_string + ", " + ingrediente;
        }
    });
    document.getElementById("resultadoforeach").innerHTML = ingredientes_string;
}

function funcionforin(){
    let resultado = "";
    for (let index in ingredientes){
        if (ingredientes[index] == "pescado"){
            resultado = parseInt(index) + 1;
        }
    }
    document.getElementById("resultadoforin").innerHTML = resultado;
}

function funcionforof(){
    let ingredientes_string = "";
    for (let ingrediente of ingredientes){
        if (ingrediente == "pescado"){
            continue;
        }
        if (ingredientes_string == ""){
            ingredientes_string = ingrediente;
        } else{
            ingredientes_string = ingredientes_string + ", " + ingrediente;
        }
    }
    document.getElementById("resultadoforof").innerHTML = ingredientes_string;
}