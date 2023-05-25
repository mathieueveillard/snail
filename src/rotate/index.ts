import { Matrix } from "../types";

const rotate = (matrix: Matrix): Matrix => {
  return matrix.map((line) => [...line].reverse()).reverse();
};

export default rotate;
