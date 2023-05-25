import { Cell, Line, Matrix } from "../types";

const printCell = (cell: Cell): string => {
  if (cell === "") {
    return "   ";
  }
  if (cell < 10) {
    return `  ${cell}`;
  }
  return ` ${cell}`;
};

const printLine = (line: Line): string => {
  return line.map(printCell).join(" ");
};

const print = (matrix: Matrix): string => {
  const padding = "\n\n";
  const result = matrix.map(printLine).join("\n\n");
  return `${padding}${result}${padding}`;
};

export default print;
