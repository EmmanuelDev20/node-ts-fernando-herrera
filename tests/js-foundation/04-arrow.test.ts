import { getUserById } from "../../src/js-foundation/03-callbacks";

describe('js-foundation/04-arrow', () => {
  test('should return user John Doe', () => {
    const id = 1;

    const callback = (err: undefined | string, user: object | undefined) => {
      expect(err).toBeUndefined();
      expect(user).toEqual({ id: 1, name: 'John Doe' })
    }

    getUserById(id, callback)
  })
})