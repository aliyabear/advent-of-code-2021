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

export const doSweep = (file: string): void => {
  const lines = fs.readFileSync(file, "utf8").split("\n");

  const result = sonarSweep(lines);

  console.log(result);
};
