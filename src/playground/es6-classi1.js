class Persona {
  constructor(nome = 'Anonymous', eta = 0) {
    this.nome = nome;
    this.eta = eta;
  }
  getGreeting() {
    return `Hi, I am ${this.nome}!`;
  }
  getDescription() {
    return `${this.nome} is ${this.eta} year(s) old.`;
  }
}

class Studente extends Persona {
  constructor(nome, eta, laurea) {
    super(nome, eta);
    this.laurea = laurea;
  }
  hasMajor() {
    return !!this.laurea;
  }
  getDescription(){
    let description = super.getDescription();
    if(this.hasMajor()) {
      description += ` Their major is ${this.laurea}`;
    }
    return description;
  }
}

class Traveler extends Persona {
  constructor(nome, eta, homeLocation) {
    super(nome, eta);
    this.homeLocation = homeLocation;
  }
  getGreeting() {
    let greeting = super.getGreeting();
    if(this.homeLocation) {
      greeting += ` I\'m visiting from ${this.homeLocation}.`;
    }
    return greeting;
  }
}

const me = new Traveler('Andrew Mead', 26, 'Philadelphia');

console.log(me.getGreeting());

const altro = new Traveler();

console.log(altro.getGreeting());
