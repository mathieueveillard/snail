import fill, { Constraint } from "../fill";
import rotate from "../rotate";
import { Matrix, NumberMatrix } from "../types";

const snailForSquares =
  (constraint: Constraint) =>
  (square: number): Matrix => {
    if (square === 1) {
      return [[1]];
    }
    if (square % 2 === 1) {
      // TODO: improve typings
      return rotate(fill(constraint)(rotate(snailForSquares(constraint)(square - 1)) as NumberMatrix));
    }
    // TODO: improve typings
    return fill(constraint)(snailForSquares(constraint)(square - 1) as NumberMatrix);
  };

export default snailForSquares;
