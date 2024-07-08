let campoPalabra = document.querySelector(".campo__palabra");
campoPalabra.focus();
let textoEncriptado = document.querySelector(".texto__encriptado");
let btnCopiar = document.querySelector(".btn__copiar");
let palabraEncriptada;
let regex = /[áéíóú]/;
let regex2 = new RegExp("[A-Záéíóú]");

// Funcion que realiza la encriptacion del texto
function encriptarPalabra(palabra) {
	let vocales = {
		e: "enter",
		i: "imes",
		a: "ai",
		o: "ober",
		u: "ufat",
	};

	if (campoPalabra.value === "") {
		document.querySelector(".texto__encriptado").style.backgroundImage =
			"url(../img/Muñeco.png)";
		document.querySelector(".alerta__vacia").style.display = "block";

		document.querySelector(".texto__desencriptar").style.visibility = "visible";
		document.querySelector(".ningun__msj").style.visibility = "visible";
		document.querySelector(".alerta__mayuscula").style.display = "none";
		document.querySelector(".alerta__acentos").style.display = "none";
		textoEncriptado.value = "";
	} else if (campoPalabra.value === campoPalabra.value.toUpperCase()) {
		document.querySelector(".alerta__mayuscula").style.display = "block";
		document.querySelector(".alerta__vacia").style.display = "none";
		document.querySelector(".alerta__acentos").style.display = "none";
	} else if (regex2.test(campoPalabra.value)) {
		document.querySelector(".alerta__acentos").style.display = "block";
		document.querySelector(".alerta__vacia").style.display = "none";
		document.querySelector(".alerta__mayuscula").style.display = "none";
	} else {
		palabraEncriptada = campoPalabra.value.replace(/[aeiou]/g, (e) => {
			console.log(e);
			document.querySelector(".alerta__vacia").style.display = "none";
			document.querySelector(".alerta__mayuscula").style.display = "none";
			document.querySelector(".alerta__acentos").style.display = "none";

			document.querySelector(".texto__encriptado").style.backgroundImage =
				"none";

			document.querySelector(".ningun__msj").style.visibility = "hidden";
			document.querySelector(".texto__desencriptar").style.visibility =
				"hidden";
			btnCopiar.style.display = "block";
			return vocales[e];
		});
		console.log(regex2.test(campoPalabra.value));
		console.log(palabraEncriptada);
		textoEncriptado.value = palabraEncriptada;

		campoPalabra.value = "";
	}
	return vocales;
}

//Funcion que realiza la desencriptacion del texto
function desencriptarPalabra() {
	let vocales = {
		enter: "e",
		imes: "i",
		ai: "a",
		ober: "o",
		ufat: "u",
	};
	let palabraDesencriptada = campoPalabra.value.replace(
		/enter|imes|ai|ober|ufat/g,
		(e) => {
			console.log(e);
			return vocales[e];
		}
	);

	console.log(palabraDesencriptada);
	textoEncriptado.value = palabraDesencriptada;
	campoPalabra.value = "";

	btnCopiar.style.display = "block";
}

// Funcion quie copia la plabra encriptada
function copiarPalabra() {
	if (textoEncriptado.value === "") {
		btnCopiar.style.display = "block";
	} else {
		navigator.clipboard.writeText(textoEncriptado.value);
		textoEncriptado.value = "";
		btnCopiar.style.visibility = "hidden";
	}
}
