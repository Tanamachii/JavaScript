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
