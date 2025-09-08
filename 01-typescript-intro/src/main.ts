// import { name, age } from './bases/01-types.ts';
// import { bulbasaur, pokemons } from './bases/02-objects.ts';
// import { charmander } from './bases/03-classes';
// import { charmander } from './bases/04-injection';
// import { charmander } from './bases/05-decorators';
import { charmander } from './bases/06-decorators';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <p>${charmander.name}</p>
  </div>
`;
