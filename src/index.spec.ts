import snail from ".";
import { Matrix, NumberMatrix } from "./types";

describe("Test of snail()", () => {
  test("Exact square", () => {
    // GIVEN
    // WHEN
    const actual = snail(1);

    // THEN
    const expected: NumberMatrix = [[1]];
    expect(actual).toEqual(expected);
  });

  test("Exact square", () => {
    // GIVEN
    // WHEN
    const actual = snail(4);

    // THEN
    const expected: NumberMatrix = [
      [1, 2],
      [4, 3],
    ];
    expect(actual).toEqual(expected);
  });

  test("NOT an exact square", () => {
    // GIVEN
    // WHEN
    const actual = snail(5);
    // THEN
    const expected: Matrix = [
      ["", 1, 2],
      [5, 4, 3],
    ];
    expect(actual).toEqual(expected);
  });
});
