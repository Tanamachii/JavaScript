import Figura from "./figura.mjs";

class Rectangulo extends Figura {
  constructor(base, altura) {
    super(base, altura);
  }

  calcularArea() {
    return this.base * this.altura;
  }
}

export default Rectangulo;
