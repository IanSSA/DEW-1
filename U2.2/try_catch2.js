function volver_pagina(){
    location.href ='try_catch1.htm';
}

function mensaje() {
    document.getElementById("uno").innerHTML = "Prueba";
    let txt = "";
    if (confirm("Pulsa Aceptar para continuar en la pagina")) {
      txt = "Usted a decidido quedarse en la pagina";
      alert("gewgew");
      document.getElementById("dom").innerHTML = "holaaa";
    } else {
        try{
            volver_pagina();
        }
        catch(error){
            if (confirm("La pagina no se ha encontrado, acepte para recargar la pagina")){
                window.location.reload();
            }
        }
    }
  }

mensaje();