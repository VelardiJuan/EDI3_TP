window.addEventListener('load',AgregarEvento);

function AgregarEvento(){
	var btn = document.querySelector("input[type='button']");
	btn.addEventListener("click",Validar);
}

	function Validar(event){
		var texto = document.getElementById('mensajeNuevo').value;
		var etiqueta = document.querySelector("input[type='text']").value;
		var incompleto = document.getElementById('incompleto');
		var cont = 0;
		incompleto.innerHTML = "";
		if (texto == "" || etiqueta == ""){
			incompleto.innerHTML += "<p>Los campos están vacíos</p>";
		}
		else {
			if (texto.length > 255){
				incompleto.innerHTML += "<p>El mensaje ingresado supera los 255 caracteres. Ingrese un mensaje más corto</p>";
				cont = 1;
			}
			for (var i = 0; i < etiqueta.length; i++) {
				if (etiqueta[i] == " "){
					cont = 2;
				}
			}
			if (cont == 2 || etiqueta.length > 50){
					incompleto.innerHTML += "<p>La etiqueta no puede contener espacio en blanco o no debe superar los 50 caracteres</p>";
					cont = 1;
			}
		}
			if (cont == 1){
				event.preventDefault();
			}
	}
