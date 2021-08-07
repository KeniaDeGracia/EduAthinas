var pf = {

	entradas: document.querySelectorAll("input.validar"),

	valor: null,

	expresionRegular: null,

	validarUsuario: false,

	validarEmail: false,

}


var mf = {

	inicioFormulario() {

		for (var i = 0; i < pf.entradas.length; i++) {

			pf.entradas[i].addEventListener("focus", mf.enFoco);

			pf.entradas[i].addEventListener("blur", mf.fueraFoco);

			pf.entradas[i].addEventListener("change", mf.cambioEntrada);

		}

	},



	enFoco: function(input) {

		pf.valor = input.target.value;



		if (pf.valor == "") {

			document.querySelector("[for=" + input.target.id + "] .obligatorio").style.opacity = 1;

			document.querySelector("#" + input.target.id).style.background = "skyblue";

		}


		document.querySelector("[for="+input.target.id+"]").appendChild(document.createElement("DIV")).setAttribute("class","error")

	},


	fueraFoco: function(input){

		document.querySelector("#"+input.target.id).style.background = "white";

		document.querySelector("[for="+input.target.id+"] .obligatorio").style.opacity = 0;

	},


	cambioEntrada: function(input){

		pf.valor = input.target.value;

		if(pf.valor != ""){

			switch(input.target.id){

				case "nombre":

					if(pf.valor.length < 2){

						document.querySelector("[for="+input.target.id+"] .error").innerHTML = '<span style="color:red">*Error al ingresar los datos: '+input.target.placeholder+'</span>';

						pf.validarUsuario = false;

					}else{

						document.querySelector("[for="+input.target.id+"] .error").parentNode.removeChild(document.querySelector("[for="+input.target.id+"] .error"))

						pf.validarUsuario = true;

					}

				break;

				case "email":

					pf.expresionRegular = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

						if(!pf.expresionRegular.test(pf.valor)){

							document.querySelector("[for="+input.target.id+"] .error").innerHTML = '<span style="color:red">*Error al ingresar los datos: '+input.target.placeholder+'</span>';

							pf.validarEmail = false;

						}else{

							document.querySelector("[for="+input.target.id+"] .error").parentNode.removeChild(document.querySelector("[for="+input.target.id+"] .error"))

							pf.validarEmail = true;
						}

				break;

			}

		}else{

			document.querySelector("[for="+input.target.id+"] .error").parentNode.removeChild(document.querySelector("[for="+input.target.id+"] .error"))

		}

	},


	validarFormulario: function() {



		if (!pf.validarUsuario || !pf.validarEmail) {



			console.log("hola")



			return false;



		} else {



			return true;

		}

	}



}



mf.inicioFormulario();