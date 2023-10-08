function comprobar_num(){
    let x = document.getElementById("num").value;
    const message = document.getElementById("respuesta");
    message.innerHTML = "";
    try { 
        if(x.trim() == "")  throw "esta vacio";
        if(isNaN(x)) throw "no es un número";
        x = Number(x);
        if(x < 5)  throw "es menor de 5";
        if(x > 10)   throw "es mayor de 10";
    }
    catch(err) {
        message.innerHTML = "El Input " + err;
    }
}