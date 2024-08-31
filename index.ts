const labyrinth: string[][] = [
  ["S", "0", "1", "0", "E"],
  ["1", "0", "1", "0", "1"],
  ["1", "0", "0", "0", "0"],
  ["0", "0", "1", "1", "1"],
  ["0", "0", "0", "0", "0"],
];

export function findTheShortestPath(twoDArray: string[][]): number {
  let pathLength: number = 0;

  for (let i = 0; i < twoDArray.length; i++) {
    for (let j = 0; j < twoDArray[i].length; j++) {
      switch (twoDArray[i][j]) {
        case "S":
        case "0":
          pathLength++;
        case "1":
        case "E":
          pathLength++;
          break;
        default:
          return -1;
      }
    }
  }
  return pathLength;
}

findTheShortestPath(labyrinth);
