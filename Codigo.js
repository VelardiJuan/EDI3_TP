window.addEventListener("load", validarBoton);

function validarBoton(){
	var boton = document.querySelector("[type='submit']");
	boton.addEventListener("click", validarUC);
}
function validarUC(event){
	var user = document.querySelector("input[type = 'text']").value;
	var password = document.querySelector("input[type = 'password']").value;
	var texto1 = document.getElementById("error");
  var expresionR=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,12}$/;
  var resultado=expresionR.test(password);
  var cont = 0;
  texto1.innerHTML = "";
			if (user == "" || password==""){
         		texto1.innerHTML += "<p>Los campos no pueden ser vacíos</p>";
                cont = 1;
     		}
     		if (password.indexOf(user) > -1){
        		texto1.innerHTML += "<p>El usuario no puede formar parte de la contraseña</p>";
        		cont = 1;
     		}
     		if (resultado != true){
				texto1.innerHTML += "<p>La clave debe tener un mínimo de 6 caracteres con un número, letra minúscula y letra mayúscula</p>";
				cont=1;
          	}
            if (cont == 1){
                event.preventDefault();
            }

}