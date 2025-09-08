class NewPokemon {
  constructor(
    public readonly id: number,
    public name: string
  ) {};

  scream() {
    console.log(`NO QUIERO!!!`); 
  };

  speak() {
    console.log(`No quiero hablar`); 
  }
}

const MyDecorator = () => {
  return (target: Function) => {
    return NewPokemon;
  };
};

@MyDecorator()
export class Pokemon {
  constructor(
    public readonly id: number,
    public name: string
  ) {};

  scream() {
    console.log(`${this.name.toUpperCase()!!!}`); 
  };

  speak() {
    console.log(`${this.name}, ${this.name}`); 
  }
};

export const charmander = new Pokemon(1, 'Charmander');

charmander.scream();
charmander.speak();

/*
  ------------------------------------- DOCUMENTATION -------------------------------------
  - decorators are just function but we specifically use them because they have total access to the definition of the class/method/object/etc
*/