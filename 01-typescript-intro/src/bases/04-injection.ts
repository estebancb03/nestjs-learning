import type { Move, PokeapiResponse } from '../interfaces/pokeapi-response.interface';
import type { HttpAdapter } from '../api/pokerApi.adapter';
import { PokeApiAdpater, PokeApiFetchAdapter } from '../api/pokerApi.adapter';

export class Pokemon {
  constructor(
    public readonly id: number,
    public name: string,
    // dependency injection
    private readonly http: HttpAdapter
  ) {}

  get imageUrl(): string {
    return `https://pokemon.com/${this.id}.jpg`;
  };

  scream() {
    console.log(`${this.name.toUpperCase()!!!}`); 
  };

  speak() {
    console.log(`${this.name}, ${this.name}`); 
  }

  async getMoves(): Promise<Move[]> {
    const data = await this.http.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/1');
    return data.moves;
  };
};

const pokeApiAxios = new PokeApiAdpater();
const pokeApiFetch = new PokeApiFetchAdapter();

export const charmander = new Pokemon(1, 'Charmander', pokeApiAxios);
console.log(await charmander.getMoves());

/*
  ------------------------------------- DOCUMENTATION -------------------------------------
  - The Dependency Injection is just to pass a paramether that will be used in the constructor.
  - With this implementation we apply the Liskov Substitution Principle (LSP), so no matter what type of adapter we use, the Pokemon class will not be affected as long as the adapter implements the HttpAdapter interface.
*/