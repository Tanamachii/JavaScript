const datos = [
  { id: 1, name: "Iron man", year: 2004 },
  { id: 2, name: "Hulk", year: 2008 },
];

const setTime = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(datos);
    }, 1500);
  });
};

setTime()
  .then((datos) => console.log(datos))
  .catch((err) => console.log("Fallo"));
