const hello = () => {
  console.log("Heloo");
};

try {
  hello();
} catch (error) {
  console.log(error);
}

try {
  aaa();
} catch {
  console.log("wtf");
}
