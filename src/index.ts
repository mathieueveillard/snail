type Point = number | " ";

type Line = Point[];

type Snail = Line[];

export function snail(size: number): Snail {
  if (size === 1) {
    return [[1]];
  }

  const previous = snail(size - 1);

  if (isTopRightCorner(size)) {
    const [first, ...rest] = appendEmptyColumn(previous);
    return [append(size)(first), ...rest];
  }

  if (isBottomLeftCorner(size)) {
    const shiftedPrevious = prependEmptyColumn(previous);
    const [rest, last] = restAndLast(shiftedPrevious);
    return [...rest, prepend(size)(last)];
  }

  // 3 = (2 + 4) / 2
  // 13 = (10 + 16) / 2

  if (size === 3 || size === 13) {
    const length = computeLength(previous);
    return [...previous, newBottomLine(size)(length)];
  }

  // Bottom
  if (size === 4 || size === 14 || size === 15 || size === 16) {
    const [rest, last] = restAndLast(previous);
    return [...rest, prepend(size)(last)];
  }

  // Left
  if (size === 6) {
    return [prepend(size)(previous[0]), previous[1]];
  }
  if (size === 18) {
    return [previous[0], previous[1], prepend(size)(previous[2]), previous[3]];
  }
  if (size === 19) {
    return [previous[0], prepend(size)(previous[1]), previous[2], previous[3]];
  }
  if (size === 20) {
    return [prepend(size)(previous[0]), previous[1], previous[2], previous[3]];
  }

  // Top left corner
  if (size === 7 || size === 21) {
    const length = computeLength(previous);
    return [newTopLine(size)(length), ...previous];
  }

  // Top
  if (size === 8 || size === 9 || size === 22 || size === 23 || size === 24 || size === 25) {
    const [first, rest] = firstAndRest(previous);
    return [append(size)(first), ...rest];
  }

  // Right
  if (size === 11) {
    return [previous[0], append(size)(previous[1]), previous[2]];
  }
  if (size === 12) {
    return [previous[0], previous[1], append(size)(previous[2])];
  }
}

const prependEmptyColumn = (snail: Snail): Snail => snail.map((line) => [" ", ...line]);

const appendEmptyColumn = (snail: Snail): Snail => snail.map((line) => [...line, " "]);

const newTopLine =
  (value: number) =>
  (length: number): Line => {
    const spaces = Array(length - 1).fill(" ");
    return [value, ...spaces];
  };

const newBottomLine =
  (value: number) =>
  (length: number): Line => {
    const spaces = Array(length - 1).fill(" ");
    return [...spaces, value];
  };

const prepend =
  (value: number) =>
  (line: Line): Line => {
    const length = line.length;
    const values = [value, ...line.filter(isNumber)];
    const spaces = Array(length - values.length).fill(" ");
    return [...spaces, ...values];
  };

const append =
  (value: number) =>
  (line: Line): Line => {
    const length = line.length;
    const values = [...line.filter(isNumber), value];
    const spaces = Array(length - values.length).fill(" ");
    return [...values, ...spaces];
  };

const isNumber = (point: Point): boolean => point !== " ";

const computeLength = (snail: Snail): number => snail[0].length;

const restAndLast = <T>(array: T[]): [T[], T] => {
  const [last, ...reversedRest] = [...array].reverse();
  const rest = [...reversedRest].reverse();
  return [rest, last];
};

const firstAndRest = <T>(array: T[]): [T, T[]] => {
  const [first, ...rest] = array;
  return [first, rest];
};

const isTopRightCorner = (n: number): boolean => isSquareOfOddNumber(n - 1);

const isBottomLeftCorner = (n: number): boolean => isSquareOfEvenNumber(n - 1);

export const isSquareOfEvenNumber = (n: number): boolean => {
  const q = Math.floor(Math.sqrt(n));
  return isEven(q) && q ** 2 === n;
};

export const isSquareOfOddNumber = (n: number): boolean => {
  const q = Math.floor(Math.sqrt(n));
  return isOdd(q) && q ** 2 === n;
};

const isEven = (n: number): boolean => n % 2 === 0;

const isOdd = (n: number): boolean => n % 2 === 1;

export function print(snail: Snail): string {
  return snail.map((line) => line.join(" ")).join("\n");
}
