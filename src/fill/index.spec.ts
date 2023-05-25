import fill from ".";
import { Matrix, NumberMatrix } from "../types";

describe("Test of fill()", () => {
  test("1^2 -> 2^2", () => {
    // GIVEN
    const matrix: NumberMatrix = [[1]];

    // WHEN
    const actual = fill({ maximum: 4 })(matrix);

    // THEN
    const expected: Matrix = [
      [1, 2],
      [4, 3],
    ];
    expect(actual).toEqual(expected);
  });

  test("2^2 rotated -> 3^2", () => {
    // GIVEN
    const matrix: NumberMatrix = [
      [3, 4],
      [2, 1],
    ];

    // WHEN
    const actual = fill({ maximum: 9 })(matrix);

    // THEN
    const expected: Matrix = [
      [3, 4, 5],
      [2, 1, 6],
      [9, 8, 7],
    ];
    expect(actual).toEqual(expected);
  });

  test("With maximum (column)", () => {
    // GIVEN
    const matrix: NumberMatrix = [
      [3, 4],
      [2, 1],
    ];

    // WHEN
    const actual = fill({ maximum: 5 })(matrix);

    // THEN
    const expected: Matrix = [
      [3, 4, 5],
      [2, 1, ""],
    ];
    expect(actual).toEqual(expected);
  });

  test("With maximum (line)", () => {
    // GIVEN
    const matrix: NumberMatrix = [
      [3, 4],
      [2, 1],
    ];

    // WHEN
    const actual = fill({ maximum: 8 })(matrix);

    // THEN
    const expected: Matrix = [
      [3, 4, 5],
      [2, 1, 6],
      ["", 8, 7],
    ];
    expect(actual).toEqual(expected);
  });
});
