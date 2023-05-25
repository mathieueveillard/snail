export type Matrix = number[][];

const rotate = (matrix: Matrix): Matrix => {
  return matrix.map((row) => [...row].reverse()).reverse();
};

export default rotate;
