import { Matrix } from "../types";

const addColumn = (matrix: Matrix): Matrix => {
  const numberOfColumns = matrix[0].length;
  const maximumValue = matrix[0][numberOfColumns - 1];
  const start = maximumValue + 1;
  return matrix.map((line, index) => [...line, start + index]);
};

const addLine = (matrix: Matrix): Matrix => {
  const numberOfLines = matrix.length;
  const numberOfColumns = matrix[0].length;
  const maximumValue = matrix[numberOfLines - 1][numberOfColumns - 1];
  const additionalLine = [...Array(numberOfColumns)].map((_, index) => maximumValue + index + 1).reverse();
  return [...matrix, additionalLine];
};

const fill = (matrix: Matrix): Matrix => {
  return addLine(addColumn(matrix));
};

export default fill;
