function incrementar(num){
    total = num + 1;
    return total;
}

function calcular(){
    number = document.getElementById("num").value;
    number = parseInt(number);
    total = incrementar(number);
    document.getElementById("resultado").innerHTML = total;
}