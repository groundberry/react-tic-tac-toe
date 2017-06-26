export function getAvailablePositions(grid) {
  const availablePositions = [];

  for (let i = 0; i < grid.length; i += 1) {
    if (grid[i] === null) {
      availablePositions.push(i);
    }
  }

  return availablePositions;
}

export function getRandomPosition(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

export function checkWinner(grid) {
  if (grid[0] === grid[1] && grid[1] === grid[2]) {
    return grid[0];
  } else if (grid[0] === grid[3] && grid[3] === grid[6]) {
    return grid[0];
  } else if (grid[2] === grid[5] && grid[5] === grid[8]) {
    return grid[2];
  } else if (grid[6] === grid[7] && grid[7] === grid[8]) {
    return grid[6];
  } else if (grid[1] === grid[4] && grid[4] === grid[7]) {
    return grid[1];
  } else if (grid[3] === grid[4] && grid[4] === grid[5]) {
    return grid[3];
  } else if (grid[0] === grid[4] && grid[4] === grid[8]) {
    return grid[0];
  } else if (grid[2] === grid[4] && grid[4] === grid[6]) {
    return grid[2];
  }
  return null;
}
