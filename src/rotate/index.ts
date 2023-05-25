import { Line, Matrix } from "../types";

const horizontalReverse = (line: Line): Line => [...line].reverse();

const verticalReverse = (matrix: Matrix): Matrix => [...matrix].reverse();

const rotate = (matrix: Matrix): Matrix => {
  return verticalReverse(matrix.map(horizontalReverse));
};

export default rotate;
