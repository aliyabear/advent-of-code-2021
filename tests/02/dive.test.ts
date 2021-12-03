import * as sut from "../../src/02/dive";
import fs from "fs";

describe("dive", () => {
  test("returns 150 given input", () => {
    const input: sut.PuzzleInput[] = [
      { command: sut.Command.FORWARD, value: 5 },
      { command: sut.Command.DOWN, value: 5 },
      { command: sut.Command.FORWARD, value: 8 },
      { command: sut.Command.UP, value: 3 },
      { command: sut.Command.DOWN, value: 8 },
      { command: sut.Command.FORWARD, value: 2 },
    ];

    const result = sut.dive(input);

    expect(result).toEqual(150);
  });
  test("let's see what it does with sample input", () => {
    const lines = fs.readFileSync("./tests/02/input.txt", "utf8").split("\n");
    const input: sut.PuzzleInput[] = lines.map((line) => {
      const bits = line.split(" ");

      const value = Number(bits[1]);

      let command: sut.Command;

      switch (bits[0]) {
        case "up":
          command = sut.Command.UP;
          break;
        case "down":
          command = sut.Command.DOWN;
          break;
        default:
          command = sut.Command.FORWARD;
          break;
      }

      return {
        command,
        value,
      };
    });

    const result = sut.dive(input);
    // this is done like so we can see the answer without showing the anser ;-)
    expect(result).toBeUndefined();
  });
});

describe("divePartTwo", () => {
  test("returns 900 given input", () => {
    const input: sut.PuzzleInput[] = [
      { command: sut.Command.FORWARD, value: 5 },
      { command: sut.Command.DOWN, value: 5 },
      { command: sut.Command.FORWARD, value: 8 },
      { command: sut.Command.UP, value: 3 },
      { command: sut.Command.DOWN, value: 8 },
      { command: sut.Command.FORWARD, value: 2 },
    ];

    const result = sut.divePartTwo(input);

    expect(result).toEqual(900);
  });

  test("let's see what it does with sample input", () => {
    const lines = fs.readFileSync("./tests/02/input.txt", "utf8").split("\n");
    const input: sut.PuzzleInput[] = lines.map((line) => {
      const bits = line.split(" ");

      const value = Number(bits[1]);

      let command: sut.Command;

      switch (bits[0]) {
        case "up":
          command = sut.Command.UP;
          break;
        case "down":
          command = sut.Command.DOWN;
          break;
        default:
          command = sut.Command.FORWARD;
          break;
      }

      return {
        command,
        value,
      };
    });

    const result = sut.divePartTwo(input);
    // this is done like so we can see the answer without showing the anser ;-)
    expect(result).toBeUndefined();
  });
});
