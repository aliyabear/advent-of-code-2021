import fs from "fs";

export const sonarSweep = (measurements: string[]): number => {
  if (measurements?.length === 0) {
    return 0;
  }

  let numIncreases = 0;

  let [previous, ...rest] = measurements;

  for (const x of rest) {
    if (parseInt(x) > parseInt(previous)) {
      numIncreases++;
    }

    previous = x;
  }

  return numIncreases;
};

export const threeWindowSweep = (measurements: number[]): number => {
  if (measurements?.length <= 3) {
    return 0;
  }

  let numIncreases = 0;

  let [first, second, third, ...rest] = measurements;
  let previousSum: number = first + second + third;

  for (const x of rest) {
    const sum = second + third + x;

    if (sum > previousSum) {
      numIncreases++;
    }

    first = second;
    second = third;
    third = x;

    previousSum = sum;
  }

  return numIncreases;
};

export const doSweep = (file: string): void => {
  const lines = fs.readFileSync(file, "utf8").split("\n");

  const result = sonarSweep(lines);

  console.log("Part 1:" + result);

  const partTwo = threeWindowSweep(lines.map(Number));

  console.log("Part 2:" + partTwo);
};
