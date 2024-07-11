import {characters} from '../../src/js-foundation/02-destructuring';

describe('js-foundation/02-destructuring.ts', () => {
  test('characters should contain flash, superman', () => {
    expect(characters).toContain('Flash');
    expect(characters).toContain('Superman');
  })

  test('first character should be flash and second Superman', () => {
    const [flash, superman] = characters;
    const [ , , ,batman ] = characters;

    expect(flash).toBe('Flash');
    expect(superman).toBe('Superman');
  })
})