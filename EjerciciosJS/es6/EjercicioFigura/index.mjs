import Cuadrado from "./cuadrado.mjs";
import Rectangulo from "./rectangulo.mjs";

const cuadrado = new Cuadrado(4, 4);
const rectangulo = new Rectangulo(10, 4);

console.log(cuadrado.calcularArea());
console.log(rectangulo.calcularArea());
