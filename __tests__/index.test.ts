import { describe, it, expectTypeOf,expect } from "vitest";
import { findTheShortestPath } from "..";

describe("Unit testing case", () => {
  it("should return a number given a 2DArray", () => {
    const labyrinth: string[][] = [
      ["S", "0", "1", "0", "E"],
      ["1", "0", "1", "0", "1"],
      ["1", "0", "0", "0", "0"],
      ["0", "0", "1", "1", "1"],
      ["0", "0", "0", "0", "0"],
    ];
    const result = findTheShortestPath(labyrinth);

    expectTypeOf(result).toBeNumber();
  });

  it("should return eigth given the labyrinth variable", () => {
    const labyrinth: string[][] = [
      ["S", "0", "1", "0", "E"],
      ["1", "0", "1", "0", "1"],
      ["1", "0", "0", "0", "0"],
      ["0", "0", "1", "1", "1"],
      ["0", "0", "0", "0", "0"],
    ];

    const result = findTheShortestPath(labyrinth);

    expect(result).toEqual(8);
  })
});
