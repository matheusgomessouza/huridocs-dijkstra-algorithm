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

  return shortestPath ? shortestPath : -1;
}

console.log("findTheShortestPath: pathLength", findTheShortestPath(labyrinth));

export function findTheShortestPathTwo(twoDArray: string[][]): number {
  let rows = twoDArray.length;
  let columns = twoDArray[0].length;
  let pathLength = 0;
  const noWayOut = -1;
  // Shortest path route: [0 1] - [1 1] - [2 1] - [2 2] - [2 3] - [1 3] - [0 3] - [0 4]

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      // Add up to pathLength everytime that the correct coordinate and value match
      if (
        (i === 0 && j === 1 && twoDArray[i][j] === "0") ||
        (i === 1 && j === 1 && twoDArray[i][j] === "0") ||
        (i === 2 && j === 1 && twoDArray[i][j] === "0") ||
        (i === 2 && j === 2 && twoDArray[i][j] === "0") ||
        (i === 2 && j === 3 && twoDArray[i][j] === "0") ||
        (i === 1 && j === 3 && twoDArray[i][j] === "0") ||
        (i === 0 && j === 3 && twoDArray[i][j] === "0") ||
        (i === 0 && j === 4 && twoDArray[i][j] === "E")
      ) {
        ++pathLength;
      }
    }
  }

  return pathLength !== 1 ? pathLength : noWayOut;
}

console.log(
  "findTheShortestPathTwo: pathLength",
  findTheShortestPathTwo(labyrinth)
);

export function findTheShortestPathThree(twoDArray: string[][]) {
  let rows = twoDArray.length;
  let columns = twoDArray[0].length;
  let pathLength = 0;
  const noWayOut = -1;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (twoDArray[i][j] === "1") {
        // Go back one column
        // Increase a row
        --j;
        ++i;
      } else if (
        twoDArray[i].length - 1 === twoDArray[i].indexOf(twoDArray[i][j]) &&
        twoDArray[i][j] === "0"
      ) {
        // If reaches the end of the child array and is a open path
        // Go back one column
        // Go back one row
        --j;
        --i;
      } else {
        ++pathLength;
      }
    }
  }

  return pathLength ? pathLength : noWayOut;
}

console.log(
  "findTheShortestPathThree: pathLength",
  findTheShortestPathThree(labyrinth)
);
