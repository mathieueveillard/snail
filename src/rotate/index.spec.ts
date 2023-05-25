import rotate, { Matrix } from ".";

describe("Test of rotate()", () => {
  test("180°/Pi rotation", () => {
    // GIVEN
    const matrix: Matrix = [[1]];

    // WHEN
    const actual = rotate(matrix);

    // THEN
    const expected: Matrix = [[1]];
    expect(actual).toEqual(expected);
  });

  test("180°/Pi rotation", () => {
    // GIVEN
    const matrix: Matrix = [[1, 2]];

    // WHEN
    const actual = rotate(matrix);

    // THEN
    const expected: Matrix = [[2, 1]];
    expect(actual).toEqual(expected);
  });

  test("180°/Pi rotation", () => {
    // GIVEN
    const matrix: Matrix = [
      [1, 2],
      [3, 4],
    ];

    // WHEN
    const actual = rotate(matrix);

    // THEN
    const expected: Matrix = [
      [4, 3],
      [2, 1],
    ];
    expect(actual).toEqual(expected);
  });

  test("[Control] 180°/Pi rotation", () => {
    // GIVEN
    const matrix: Matrix = [
      [1, 2],
      [3, 4],
      [5, 6],
    ];

    // WHEN
    const actual = rotate(matrix);

    // THEN
    const expected: Matrix = [
      [6, 5],
      [4, 3],
      [2, 1],
    ];
    expect(actual).toEqual(expected);
  });
});
