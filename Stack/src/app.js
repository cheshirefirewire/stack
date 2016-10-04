"use strict";

class App {
    constructor() {
        this.love = "the most powerful force in the universe.";
    }

    run() {
        console.log(".love> is " + this.love);
        return true; 
    }
}

export default App;


/*

function App() {
  this.love = "the most powerful force in the universe.";
}

App.prototype.run = function() {
};


class Animal {
    constructor (species) {
        this.kingdom = "animal";
        this.species = species;
    }

    breathe() {
        console.log('animal breath');
    }

    walk() {
        console.log('animal walking');
    }
}

cat = new Animal("Felis catus"); //object


class Duck extends Animal {
    walk(){
        console.log('duck walking .. ');
    }
}

let animal = new Animal();

 animal.breathe();
 animal.walk();

let duck = new Duck();

duck.breathe();
duck.walk();
 */