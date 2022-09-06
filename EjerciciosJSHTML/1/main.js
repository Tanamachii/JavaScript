const title = document.querySelector("h1");
const p = document.querySelector("p");
const parrafo = document.querySelector(".parrafo");
const pid = document.querySelector("#p-id");
const input = document.querySelector("input");
const form = document.querySelector("#formulario");

const input1 = document.querySelector("#calculo");
const input2 = document.querySelector("#calculo2");
const btnCalcular = document.querySelector("#btn-calcular");
const div = document.querySelector(".subtitulo");

//Metodo, click y mouseover para ejecutar la función declarada ahi :-)
btnCalcular.addEventListener("mouseover", sumarInput);

function sumarInput(event) {
  // event.preventDefault();
  const subtitulo = document.createElement("h2");
  const suma = Number(input1.value) + Number(input2.value);
  subtitulo.innerHTML = "<p> Resultado: " + suma + "</p>";
  div.append(subtitulo);
}
