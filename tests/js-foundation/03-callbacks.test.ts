import { getUserById } from '../../src/js-foundation/03-callbacks'

describe('js-foundation/03-callbacks', () => {
  test('should return user John Doe', () => {
    const id = 1;
    getUserById(id, (err, user) => {
      expect(err).toBeUndefined();
      expect(user).toEqual({ id: 1, name: 'John Doe' })
    })
  })

  test('should return error with id !== of 1 and 2', (done) => {
    const id = 10;

    getUserById(id, (err, user) => {
      expect(err).toBe(`User not found with id ${id}`);
      expect(user).toBeUndefined();

      done();
    })
  })
})