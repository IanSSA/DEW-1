function volver_pagina(){
    location.href ='try_catch1.htm';
}

function mensaje() {
    if (confirm("Pulsa Aceptar para continuar en la pagina")) {
      alert("Te quedas en la pagina 2");
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