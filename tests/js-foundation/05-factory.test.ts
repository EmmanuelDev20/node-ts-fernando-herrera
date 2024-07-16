import { buildMakePerson } from '../../src/js-foundation/05-factory'

describe('js-foundation/05-factory', () => {
  const getUUID = () => '1234';
  const getAge = (birthdate: string) => 35;

  test('buildMakePerson should be a function', () => {
    const makePerson = buildMakePerson({ getUUID, getAge });

    expect(typeof makePerson).toBe('function');
  })

  test('makePerson should return an object with id, name, birthdate and age', () => {
    const makePerson = buildMakePerson({ getUUID, getAge });
    const johnDoe = makePerson({ name: 'John Doe', birthdate: '1985-10-21' });

    expect(johnDoe).toEqual({
      id: '1234',
      name: 'John Doe',
      birthdate: '1985-10-21',
      age: 35
    })
  })
})