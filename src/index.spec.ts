import { isSquareOfEvenNumber, isSquareOfOddNumber, snail, print } from ".";

describe("snail", function () {
  it("snail(1)", function () {
    expect(snail(1)).toEqual([[1]]);
  });

  it("snail(2)", function () {
    expect(snail(2)).toEqual([[1, 2]]);
  });

  it("snail(3)", function () {
    expect(snail(3)).toEqual([
      [1, 2],
      [" ", 3],
    ]);
  });

  it("snail(4)", function () {
    expect(snail(4)).toEqual([
      [1, 2],
      [4, 3],
    ]);
  });

  it("snail(5)", function () {
    expect(snail(5)).toEqual([
      [" ", 1, 2],
      [5, 4, 3],
    ]);
  });

  it("snail(6)", function () {
    expect(snail(6)).toEqual([
      [6, 1, 2],
      [5, 4, 3],
    ]);
  });

  it("snail(7)", function () {
    expect(snail(7)).toEqual([
      [7, " ", " "],
      [6, 1, 2],
      [5, 4, 3],
    ]);
  });

  it("snail(8)", function () {
    expect(snail(8)).toEqual([
      [7, 8, " "],
      [6, 1, 2],
      [5, 4, 3],
    ]);
  });

  it("snail(9)", function () {
    expect(snail(9)).toEqual([
      [7, 8, 9],
      [6, 1, 2],
      [5, 4, 3],
    ]);
  });

  it("snail(10)", function () {
    expect(snail(10)).toEqual([
      [7, 8, 9, 10],
      [6, 1, 2, " "],
      [5, 4, 3, " "],
    ]);
  });

  it("snail(11)", function () {
    expect(snail(11)).toEqual([
      [7, 8, 9, 10],
      [6, 1, 2, 11],
      [5, 4, 3, " "],
    ]);
  });

  it("snail(12)", function () {
    expect(snail(12)).toEqual([
      [7, 8, 9, 10],
      [6, 1, 2, 11],
      [5, 4, 3, 12],
    ]);
  });

  it("snail(13)", function () {
    expect(snail(13)).toEqual([
      [7, 8, 9, 10],
      [6, 1, 2, 11],
      [5, 4, 3, 12],
      [" ", " ", " ", 13],
    ]);
  });

  it("snail(14)", function () {
    expect(snail(14)).toEqual([
      [7, 8, 9, 10],
      [6, 1, 2, 11],
      [5, 4, 3, 12],
      [" ", " ", 14, 13],
    ]);
  });

  it("snail(15)", function () {
    expect(snail(15)).toEqual([
      [7, 8, 9, 10],
      [6, 1, 2, 11],
      [5, 4, 3, 12],
      [" ", 15, 14, 13],
    ]);
  });

  it("snail(16)", function () {
    expect(snail(16)).toEqual([
      [7, 8, 9, 10],
      [6, 1, 2, 11],
      [5, 4, 3, 12],
      [16, 15, 14, 13],
    ]);
  });

  it("snail(17)", function () {
    expect(snail(17)).toEqual([
      [" ", 7, 8, 9, 10],
      [" ", 6, 1, 2, 11],
      [" ", 5, 4, 3, 12],
      [17, 16, 15, 14, 13],
    ]);
  });

  it("snail(18)", function () {
    expect(snail(18)).toEqual([
      [" ", 7, 8, 9, 10],
      [" ", 6, 1, 2, 11],
      [18, 5, 4, 3, 12],
      [17, 16, 15, 14, 13],
    ]);
  });

  it("snail(19)", function () {
    expect(snail(19)).toEqual([
      [" ", 7, 8, 9, 10],
      [19, 6, 1, 2, 11],
      [18, 5, 4, 3, 12],
      [17, 16, 15, 14, 13],
    ]);
  });

  it("snail(20)", function () {
    expect(snail(20)).toEqual([
      [20, 7, 8, 9, 10],
      [19, 6, 1, 2, 11],
      [18, 5, 4, 3, 12],
      [17, 16, 15, 14, 13],
    ]);
  });

  it("snail(21)", function () {
    expect(snail(21)).toEqual([
      [21, " ", " ", " ", " "],
      [20, 7, 8, 9, 10],
      [19, 6, 1, 2, 11],
      [18, 5, 4, 3, 12],
      [17, 16, 15, 14, 13],
    ]);
  });

  it("snail(22)", function () {
    expect(snail(22)).toEqual([
      [21, 22, " ", " ", " "],
      [20, 7, 8, 9, 10],
      [19, 6, 1, 2, 11],
      [18, 5, 4, 3, 12],
      [17, 16, 15, 14, 13],
    ]);
  });

  it("snail(23)", function () {
    expect(snail(23)).toEqual([
      [21, 22, 23, " ", " "],
      [20, 7, 8, 9, 10],
      [19, 6, 1, 2, 11],
      [18, 5, 4, 3, 12],
      [17, 16, 15, 14, 13],
    ]);
  });

  it("snail(24)", function () {
    expect(snail(24)).toEqual([
      [21, 22, 23, 24, " "],
      [20, 7, 8, 9, 10],
      [19, 6, 1, 2, 11],
      [18, 5, 4, 3, 12],
      [17, 16, 15, 14, 13],
    ]);
  });

  it("snail(25)", function () {
    expect(snail(25)).toEqual([
      [21, 22, 23, 24, 25],
      [20, 7, 8, 9, 10],
      [19, 6, 1, 2, 11],
      [18, 5, 4, 3, 12],
      [17, 16, 15, 14, 13],
    ]);
  });

  it("snail(26)", function () {
    expect(snail(26)).toEqual([
      [21, 22, 23, 24, 25, 26],
      [20, 7, 8, 9, 10, " "],
      [19, 6, 1, 2, 11, " "],
      [18, 5, 4, 3, 12, " "],
      [17, 16, 15, 14, 13, " "],
    ]);
  });
});

describe("isSquareOfEvenNumber", function () {
  test("isSquareOfEvenNumber(4)", function () {
    expect(isSquareOfEvenNumber(4)).toEqual(true);
  });

  test("isSquareOfEvenNumber(5)", function () {
    expect(isSquareOfEvenNumber(5)).toEqual(false);
  });

  test("isSquareOfEvenNumber(9)", function () {
    expect(isSquareOfEvenNumber(9)).toEqual(false);
  });
});

describe("isSquareOfOddNumber", function () {
  test("isSquareOfOddNumber(4)", function () {
    expect(isSquareOfOddNumber(4)).toEqual(false);
  });

  test("isSquareOfOddNumber(5)", function () {
    expect(isSquareOfOddNumber(5)).toEqual(false);
  });

  test("isSquareOfOddNumber(9)", function () {
    expect(isSquareOfOddNumber(9)).toEqual(true);
  });
});

describe("print()", function () {
  test("print(snail(1))", function () {
    expect(print(snail(1))).toEqual(`1`);
  });

  test("print(snail(2))", function () {
    expect(print(snail(2))).toEqual(`1 2`);
  });

  test("print(snail(3))", function () {
    expect(print(snail(3))).toEqual(`1 2
  3`);
  });
});
