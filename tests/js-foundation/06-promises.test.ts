import { getPokemonById } from '../../src/js-foundation/06-promises';

describe('js-foundation/06-promises', () => {
  test('should return a promise that resolves to the sum of two numbers', () => {
    const id = 1;

    const pokemon = getPokemonById(id);

    expect(pokemon).toBeInstanceOf(Promise);
  })

  test('should return the pokemon with id 1', async() => {
    const id = 1;

    const pokemon = await getPokemonById(id);

    expect(pokemon).toBe('bulbasaur');
  })

  test('should return an error if pokemon does not exist', async() => {
    const id = 1000000;

    try {
      const pokemonName = await getPokemonById(id);
      expect(true).toBe(false);
    } catch (error) {
      // expect(error).toBeInstanceOf(Error);
      expect(error).toBe(`Pokemon not found with id ${ id }`);
    }
  })
})