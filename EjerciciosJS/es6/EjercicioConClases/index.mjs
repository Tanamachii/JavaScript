import Carro from "./carro.mjs";
import Vehiculo from "./vehiculo.mjs";

const carroNew = new Carro("rojo", "vehiculo", 4, "trasera");
console.log(carroNew.encenderLuces());

const vehiculoNuevo = new Vehiculo("rojo", "Avion");
console.log(vehiculoNuevo.encenderLuces());
