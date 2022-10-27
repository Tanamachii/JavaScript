import Figura from "./figura.mjs";

class Cuadrado extends Figura {
  constructor(base, altura) {
    super(base, altura);
  }

  calcularArea() {
    return this.base ** 2;
  }
}

export default Cuadrado;
