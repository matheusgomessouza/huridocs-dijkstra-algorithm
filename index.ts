const labyrinth: string[][] = [
  ["S", "0", "1", "0", "E"],
  ["1", "0", "1", "0", "1"],
  ["1", "0", "0", "0", "0"],
  ["0", "0", "1", "1", "1"],
  ["0", "0", "0", "0", "0"],
];

export function findTheShortestPath(twoDArray: string[][]): number {
  let rows = twoDArray.length;
  let columns = twoDArray[0].length;
  let walls = 0;
  let freePaths = 0;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      // Eliminate walls and the beggining of the labyrinth
      if (twoDArray[i][j] === "1" || twoDArray[i][j] === "S") {
        ++walls;
      } else {
        ++freePaths;
      }
    }
  }

  const actualWalls = walls - 1;
  const shortestPath = freePaths - actualWalls;

  console.log({ walls: walls - 1, freePaths: freePaths });

  return shortestPath;
}

console.log("pathLength", findTheShortestPath(labyrinth));

// switch (twoDArray[i][j]) {
//   case "S":
//     console.log("You entered the labyrinth!", twoDArray[i][j]);
//   case "0":
//     ++pathLength;
//     console.log("Keep going, free path ahead!", twoDArray[i][j]);
//   case "1":
//     --pathLength;
//     console.log("You hit a wall!")
//   case "E":
//     ++pathLength;
//     console.log("You exit the labyrinth!")
//     break;
//   default:
//     return -1;
// }
