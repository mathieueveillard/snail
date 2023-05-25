import findNearestSquare from ".";

describe("Test of findNearestSquare()", () => {
  test("1^2", () => {
    expect(findNearestSquare(1 ** 2)).toEqual(1);
  });

  test("2^2", () => {
    expect(findNearestSquare(2 ** 2)).toEqual(2);
  });

  test("2^2-1", () => {
    expect(findNearestSquare(2 ** 2 - 1)).toEqual(2);
  });

  test("[Control] 5^2+3", () => {
    expect(findNearestSquare(5 ** 2 + 3)).toEqual(6);
  });
});
