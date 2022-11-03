class user {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  #speak() {
    return "Hola";
  }
  greeting() {
    return `${this.speak()} ${this.name} con edad de ${this.age} años`;
  }

  get #uAge() {
    return this.age;
  }
  set #uAge(n) {
    this.age = n;
  }
}

const newUser2 = new user("Pedro", 22);
console.log((newUser2.uAge = 20));
console.log(newUser2.greeting());
