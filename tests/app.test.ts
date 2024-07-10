describe('Test in the app file', () => {

  // This can be it or test
  test('should be 30', () => {
    // expect(true).toBe(true);

    // 1. Arrange
    const num1 = 10;
    const num2 = 20;

    // 2. Act
    const result = num1 + num2;

    // 3. Assert
    expect(result).toBeGreaterThan(20);

  })

})