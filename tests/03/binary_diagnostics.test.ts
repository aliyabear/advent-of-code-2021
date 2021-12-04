import fs from "fs";
import * as sut from "../../src/03/binary_diagnostics";

describe("getPowerConsumption", () => {
  test("returns 198 for given input", () => {
    const input = [
      "00100",
      "11110",
      "10110",
      "10111",
      "10101",
      "01111",
      "00111",
      "11100",
      "10000",
      "11001",
      "00010",
      "01010",
    ];

    const result = sut.getPowerConsumption(input);

    expect(result).toEqual(198);
  });
  test("let's see what happens with sample input", () => {
    const input = fs.readFileSync("./tests/03/input.txt", "utf8").split("\n");

    const result = sut.getPowerConsumption(input);

    // this is done so we can see the answer without showing the answer ;-)
    expect(result).toBeUndefined();
  });
});

describe("getLifeSupportRating", () => {
  test("returns 230 for given input", () => {
    const input = [
      "00100",
      "11110",
      "10110",
      "10111",
      "10101",
      "01111",
      "00111",
      "11100",
      "10000",
      "11001",
      "00010",
      "01010",
    ];

    const result = sut.getLifeSupportRating(input);

    expect(result).toEqual(230);
  });

  test("let's see what happens with sample input", () => {
    const input = fs.readFileSync("./tests/03/input.txt", "utf8").split("\n");

    const result = sut.getLifeSupportRating(input);

    // this is done so we can see the answer without showing the answer ;-)
    expect(result).toBeUndefined();
  });
});
