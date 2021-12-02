import * as sut from "../../src/01/sonar_sweep";

describe("sonarSweep", () => {
  test("it returns 0 when input is all the same number", () => {
    const measurements = ["100", "100"];

    const result = sut.sonarSweep(measurements);

    expect(result).toEqual(0);
  });
  test("it returns 7 increases for given input", () => {
    const measurements = [
      "199",
      "200",
      "208",
      "210",
      "200",
      "207",
      "240",
      "269",
      "260",
      "263",
    ];

    const result = sut.sonarSweep(measurements);

    expect(result).toEqual(7);
  });
});

describe("threeWindowSweep", () => {
  test("it returns 5, for given input", () => {
    const measurements = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];

    const result = sut.threeWindowSweep(measurements);

    expect(result).toEqual(5);
  });
});
