import { Matrix, NumberMatrix } from "../types";
import numberOfColumns from "../utils/numberOfColumns";
import numberOfLines from "../utils/numberOfLines";

export type Constraint = {
  maximum: number;
};

const cap =
  ({ maximum }: Constraint) =>
  (n: number): number | "" => {
    if (n <= maximum) {
      return n;
    }
    return "";
  };

const addColumn =
  (constraint: Constraint) =>
  (matrix: NumberMatrix): Matrix => {
    const columns = numberOfColumns(matrix);
    const start = matrix[0][columns - 1] + 1;
    return matrix.map((line, index) => [...line, cap(constraint)(start + index)]);
  };

const addLine =
  (constraint: Constraint) =>
  (matrix: NumberMatrix): Matrix => {
    const lines = numberOfLines(matrix);
    const columns = numberOfColumns(matrix);
    const start = matrix[lines - 1][columns - 1] + 1;
    const additionalLine = [...Array(columns)].map((_, index) => cap(constraint)(start + index)).reverse();
    return [...matrix, additionalLine];
  };

const fill =
  ({ maximum }: Constraint) =>
  (matrix: NumberMatrix): Matrix => {
    const lines = numberOfLines(matrix);
    const columns = numberOfColumns(matrix);

    if (maximum <= matrix[0][columns - 1] + lines) {
      return addColumn({ maximum })(matrix);
    }

    // TODO: improve typings
    return addLine({ maximum })(addColumn({ maximum })(matrix) as NumberMatrix);
  };

export default fill;
