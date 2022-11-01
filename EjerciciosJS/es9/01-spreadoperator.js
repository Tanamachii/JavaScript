const user = { username: "tanamachi", age: 22, country: "MX" };
const { username, ...values } = user;
console.log(username);
console.log(values);
