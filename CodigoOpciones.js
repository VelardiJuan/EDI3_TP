window.addEventListener("load", validarBtn);

function validarBtn(){
	var boton = document.querySelector("[type='submit']");
	boton.addEventListener("click", validar);
}
	function validar(event){
		var usuario = document.querySelector("input[type = 'text']").value;
		var pass = document.querySelectorAll("input[type = 'password']");
		var text = document.getElementById("incompleto");
		var mail = document.querySelector("input[type='email']").value;
		var cont = 0;
	  var expresion=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,12}$/;
	  var resultado=expresion.test(pass[0].value);
	  var emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
	  var resultadoE = emailRegex.test(mail);
	  text.innerHTML = "";
			if (usuario == "" || pass[0].value=="" || pass[1].value=="" || mail==""){
         		text.innerHTML += "<p>Los campos no pueden ser vacíos</p>";
                cont = 1;
     		}
     		for (var i = 0; i < usuario.length; i++) {
     			if (usuario[i] == " ") {
     				cont = 2;
     			}
     		}
        if (cont == 2){
          text.innerHTML +="<p>El usuario no puede contener espacio en blanco</p>";
          cont = 1;
        }
     		if (pass[0].value.indexOf(usuario) > -1){
        		text.innerHTML += "<p>El usuario no puede formar parte de la contraseña</p>";
        		cont = 1;
     		}
     		if (resultado != true){
				text.innerHTML += "<p>La clave debe tener un mínimo de 6 caracteres con un número, letra minúscula y letra mayúscula</p>";
				cont=1;
          	}
          	if (pass[0].value != pass[1].value){
          		text.innerHTML += "<p>Los campos Clave y Confirmar Clave son distintos. Para registrarse los campos tiene que tener el mismo valor</p>";
          		cont = 1;
          	}
          	if (resultadoE != true){
          		text.innerHTML += "<p>El Email ingresado es invalido</p>";
          		cont=1;
          	}
            if (cont == 1){
                event.preventDefault();
            }
}
