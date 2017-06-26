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
