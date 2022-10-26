const anotherFuncion = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("Hey!!");
    } else {
      reject("Whooooops!");
    }
  });
};

anotherFuncion()
  .then((response) => console.log(response))
  .catch((err) => console.log(err));
