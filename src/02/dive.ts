/*

  `forward X` -> increases the horizontal position by x units
  `down X`    -> increases the depth by X units
  `up X`      -> decreases the depth by X units

  Input format:

  forward 5
  down 5
  forward 8
  up 3
  down 8
  forward 2

  Start at -> horizontal position and depth 0
*/

export enum Command {
  FORWARD = "forward",
  UP = "up",
  DOWN = "down",
}
export type PuzzleInput = {
  command: Command;
  value: number;
};

export const dive = (input: PuzzleInput[]): number => {
  const position = [0, 0];

  for (const { command, value } of input) {
    if (command === Command.FORWARD) {
      position[0] += value;
    } else {
      if (command === Command.UP) {
        position[1] -= value;
      } else {
        position[1] += value;
      }
    }
  }

  return position[0] * position[1];
};
