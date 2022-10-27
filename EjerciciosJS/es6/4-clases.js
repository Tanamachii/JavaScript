//Declarando clase
class User {}

//Instancia de una clase
// const newUser = new User();

class user {
  //metodos
  greeting() {
    return "Hello";
  }
}

const tana = new user();
const developer = new user();

//constructor

class user {
  constructor() {
    console.log("Nuevo usuario");
  }
  greeting() {
    return "Hello!";
  }
}

const david = new user();

//this
class user {
  constructor(name, apellido) {
    this.name = name;
    this.apellido = apellido;
  }
  //metodos
  speak() {
    return "Hola ";
  }
  greeting() {
    return `${this.speak()} ${this.name} ${this.apellido}`;
  }
}

const newUser = new user("Pedro", "Tanamachi");
console.log(newUser.greeting());

//setter getters

class user {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  speak() {
    return "Hola";
  }
  greeting() {
    return `${this.speak()} ${this.name} con edad de ${this.age} años`;
  }

  get uAge() {
    return this.age;
  }
  set uAge(n) {
    this.age = n;
  }
}

const newUser2 = new user("Pedro", 22);
console.log((newUser2.uAge = 20));
console.log(newUser2.greeting());
