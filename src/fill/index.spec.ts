import fill from ".";
import { Matrix } from "../types";

describe("Test of fill()", () => {
  test("1^2 -> 2^2", () => {
    // GIVEN
    const matrix: Matrix = [[1]];

    // WHEN
    const actual = fill(matrix);

    // THEN
    const expected: Matrix = [
      [1, 2],
      [4, 3],
    ];
    expect(actual).toEqual(expected);
  });

  test("2^2 rotated -> 3^2", () => {
    // GIVEN
    const matrix: Matrix = [
      [3, 4],
      [2, 1],
    ];

    // WHEN
    const actual = fill(matrix);

    // THEN
    const expected: Matrix = [
      [3, 4, 5],
      [2, 1, 6],
      [9, 8, 7],
    ];
    expect(actual).toEqual(expected);
  });
});
