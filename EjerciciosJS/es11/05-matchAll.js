const regex = /\b(Apple)+\b/g;
const str = "me gustan las Apple Apple apple";
for (const i of str.matchAll(regex)) {
  console.log(i);
}
