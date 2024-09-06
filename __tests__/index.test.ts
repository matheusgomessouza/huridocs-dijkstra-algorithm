import { describe, it, expectTypeOf,expect } from "vitest";
import { findTheShortestPath, findTheShortestPathThree, findTheShortestPathTwo } from "..";

describe("Shortest Path Test Cases", () => {
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

  it("should return a number given a 2DArray", () => {
    const labyrinth: string[][] = [
      ["S", "0", "1", "0", "E"],
      ["1", "0", "1", "0", "1"],
      ["1", "0", "0", "0", "0"],
      ["0", "0", "1", "1", "1"],
      ["0", "0", "0", "0", "0"],
    ];
    const result = findTheShortestPathTwo(labyrinth);

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
  });

  it("should return eigth given the labyrinth variable", () => {
    const labyrinth: string[][] = [
      ["S", "0", "1", "0", "E"],
      ["1", "0", "1", "0", "1"],
      ["1", "0", "0", "0", "0"],
      ["0", "0", "1", "1", "1"],
      ["0", "0", "0", "0", "0"],
    ];

    const result = findTheShortestPathTwo(labyrinth);

    expect(result).toEqual(8);
  });

  it("should return -1 if there is no free path between the beggining and the end of the labyrinth", () => {
    const noWayOutLabyrinth: string[][] = [
      ["S", "1", "1", "1", "E"],
      ["1", "1", "1", "1", "1"],
      ["1", "1", "1", "1", "1"],
      ["1", "1", "1", "1", "1"],
      ["1", "1", "1", "1", "1"],
    ];

    const result = findTheShortestPathTwo(noWayOutLabyrinth);

    expect(result).toEqual(-1);
  });

  it("should return a number given a 2DArray", () => {
    const labyrinth: string[][] = [
      ["S", "0", "1", "0", "E"],
      ["1", "0", "1", "0", "1"],
      ["1", "0", "0", "0", "0"],
      ["0", "0", "1", "1", "1"],
      ["0", "0", "0", "0", "0"],
    ];
    const result = findTheShortestPathThree(labyrinth);

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

    const result = findTheShortestPathThree(labyrinth);

    expect(result).toEqual(8);
  });
});
