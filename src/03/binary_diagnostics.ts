export const getPowerConsumption = (input: string[]): number => {
  const gamma: number[] = [];
  const epsilon: number[] = [];

  const count = input.length;

  if (count === 0) {
    return 0;
  }

  // assume all items are the same length
  const size = input[0].length;

  for (let i = 0; i < size; i++) {
    const bits = input
      .map((item) => Number(item[i]))
      .reduce((acc: number, curr: number) => acc + curr, 0);

    if (bits > Number(count / 2)) {
      gamma.push(1);
      epsilon.push(0);
    } else {
      gamma.push(0);
      epsilon.push(1);
    }
  }

  return parseInt(gamma.join(""), 2) * parseInt(epsilon.join(""), 2);
};
