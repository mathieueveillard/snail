import findNearestSquare from "./findNearestSquare";
import snailForSquares from "./snailForSquares";
import { Matrix } from "./types";

const snail = (n: number): Matrix => {
  return snailForSquares({ maximum: n })(findNearestSquare(n));
};

export default snail;
