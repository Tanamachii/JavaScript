class Vehiculo {
  constructor(color, nombre) {
    this.color = color;
    this.nombre = nombre;
  }

  encenderLuces() {
    return `Se encienden las luces para el vehiculo`;
  }
}

export default Vehiculo;
