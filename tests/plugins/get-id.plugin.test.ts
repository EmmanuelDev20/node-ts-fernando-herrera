import { getUUID } from '../../src/plugins/get-id.plugin';

describe('plugins/getUUID', () => {
  it('should return a string', () => {
    expect(typeof getUUID()).toBe('string');
  });

  it('should return a string with 36 characters', () => {
    expect(getUUID().length).toBe(36);
  });

  it('should return a string with 36 characters and 4 dashes', () => {
    expect(getUUID().split('-').length).toBe(5);
  });
});