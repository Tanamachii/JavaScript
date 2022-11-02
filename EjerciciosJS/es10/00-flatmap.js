const arr = [1, 5, 3, 2, [1, 3, 4, 5, [1, 4, 2, 3]]];

console.log(arr.flat(3));

//flatmap

const array2 = [1, 2, 3, 4, 5];
console.log(array2.flatMap((v) => [v ** 2]));
// console.log(array2.map((v) => v ** 2));
