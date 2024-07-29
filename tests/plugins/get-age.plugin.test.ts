import { getAge } from "../../src/plugins";

describe('plugins/get-age.plugin', () => {
  test('getAge() should return the age of a person', () => {
    const birthdate = '1995-09-20';

    const age = getAge(birthdate);
    expect(typeof age).toBe('number');

    expect(age).toBe(29);
  })

  test('getAge should return 0 years', () => {
    const spy = jest.spyOn(Date.prototype, 'getFullYear').mockReturnValue(2021);

    const birthdate = '1995-10-21';
    const age = getAge(birthdate);

    // console.log({ age })
    expect( age ).toBe(0);
    expect( spy ).toHaveBeenCalledWith();
    // const birthdate = '2021-09-20';
    // const age = getAge(birthdate);
    // expect(age).toBe(0);
  })
})