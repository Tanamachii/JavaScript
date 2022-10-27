function* iterate(array) {
  for (let value of array) {
    yield value;
  }
}

const it = iterate(["Pedro", "Eduardo", "Ana", "David", "Andrea"]);

console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);

// export function* getId() {
//   let lastId = 1;
//   while (true) {
//     yield lastId++;
//   }
// }

//PARA GENERAR UN ID UNICO CADA VEZ QUE SE LLAME
