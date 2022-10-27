const list = new Set();

list.add("item 1").add("item 2").add("item 3");

console.log(list);

const listaDuplicados = [1, 4, 4, 5, 5, 3, 2, 3, 1, 4, 7, 8, 6, 6, 6, 10, 11];

//Se conviwerw de un array duplicado normal a un SET que hace que no se permitan elementos iguales,funciona tanto con numbers y con strings
const sinDuplicados = [...new Set(listaDuplicados)];
console.log(sinDuplicados);
