import snailForSquares from ".";
import { NumberMatrix } from "../types";

describe("Test of snailForSquares()", () => {
  test("Square = 1", () => {
    // GIVEN
    // WHEN
    const actual = snailForSquares({ maximum: 1 ** 2 })(1);

    // THEN
    const expected: NumberMatrix = [[1]];
    expect(actual).toEqual(expected);
  });

  test("Square = 2", () => {
    // GIVEN
    // WHEN
    const actual = snailForSquares({ maximum: 2 ** 2 })(2);

    // THEN
    const expected: NumberMatrix = [
      [1, 2],
      [4, 3],
    ];
    expect(actual).toEqual(expected);
  });

  test("Square = 3", () => {
    // GIVEN
    // WHEN
    const actual = snailForSquares({ maximum: 3 ** 2 })(3);

    // THEN
    const expected: NumberMatrix = [
      [7, 8, 9],
      [6, 1, 2],
      [5, 4, 3],
    ];
    expect(actual).toEqual(expected);
  });

  test("Square = 4", () => {
    // GIVEN
    // WHEN
    const actual = snailForSquares({ maximum: 4 ** 2 })(4);

    // THEN
    const expected: NumberMatrix = [
      [7, 8, 9, 10],
      [6, 1, 2, 11],
      [5, 4, 3, 12],
      [16, 15, 14, 13],
    ];
    expect(actual).toEqual(expected);
  });
});
