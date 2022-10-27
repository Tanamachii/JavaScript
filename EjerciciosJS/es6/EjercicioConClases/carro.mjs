import Vehiculo from "./vehiculo.mjs";

class Carro extends Vehiculo {
  constructor(color, nombre, puertas, traccion) {
    super(color, nombre);
    this.puertas = puertas;
    this.traccion = traccion;
  }

  quemarLlanta() {
    return `Si puede quemar llanta ${this.color}`;
  }

  encenderLuces() {
    return `Se encienden las luces para el carro`;
  }
}

export default Carro;
