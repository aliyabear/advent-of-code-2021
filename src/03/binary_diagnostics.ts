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

const getOxygenRating = (input: string[]): number => {
  // return getRating(input, (bits: number, total: number, items: string[]) => {});
  // number of values in input
  let count = input.length;

  if (count === 0) {
    return 0;
  }

  // assume all values are the same length
  const size = input[0].length;

  // in the beginning, nothing is filtered!
  let filteredForOxygenRating: string[] = [...input];
  for (let i = 0; i < size; i++) {
    count = filteredForOxygenRating.length;

    if (count === 1) {
      // return this number if only one is left
      break;
    }

    const bits = filteredForOxygenRating
      .map((item) => Number(item[i]))
      .reduce((acc: number, curr: number) => acc + curr, 0);

    if (bits >= Math.ceil(Number(count / 2))) {
      // if we have an equal amount of 1s and 0s, use 1
      // 1 is more common
      filteredForOxygenRating = filteredForOxygenRating.filter(
        (o) => o[i] === "1"
      );
    } else {
      // 0 is more common
      filteredForOxygenRating = filteredForOxygenRating.filter(
        (o) => o[i] === "0"
      );
    }
  }

  return parseInt(filteredForOxygenRating[0], 2);
};

const getC02ScrubberRating = (input: string[]): number => {
  // number of values in input
  let count = input.length;

  if (count === 0) {
    return 0;
  }

  // assume all values are the same length
  const size = input[0].length;

  // in the beginning, nothing is filtered!
  let filtered: string[] = [...input];
  for (let i = 0; i < size; i++) {
    count = filtered.length;

    if (count === 1) {
      // return this number if only one is left
      break;
    }

    const bits = filtered
      .map((item) => Number(item[i]))
      .reduce((acc: number, curr: number) => acc + curr, 0);

    if (bits >= Math.ceil(Number(count / 2))) {
      // if we have an equal amount of 1s and 0s, use 1
      // 1 is more common
      filtered = filtered.filter((o) => o[i] === "0");
    } else {
      // 0 is more common
      filtered = filtered.filter((o) => o[i] === "1");
    }
  }

  return parseInt(filtered[0], 2);
};

// multiplying the oxygen generator rating by the CO2 scrubber rating.
export const getLifeSupportRating = (input: string[]): number => {
  const oxygenRating = getOxygenRating(input);
  const c02ScrubberRating = getC02ScrubberRating(input);

  return oxygenRating * c02ScrubberRating;
};
