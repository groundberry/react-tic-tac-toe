import {
  getAvailablePositions,
  getRandomPosition,
  checkWinner,
  isGridFull,
} from './utils';

export function selectUserOption(option) {
  return {
    userOption: option,
    computerOption: option === 'X' ? 'O' : 'X',
  };
}

export function selectCell(index, prevState) {
  const { grid, userOption } = prevState;

  const newGrid = grid.slice();
  newGrid[index] = userOption;

  return {
    grid: newGrid,
  };
}

export function computerSelectCell(prevState) {
  const { grid, computerOption } = prevState;

  const availablePositions = getAvailablePositions(grid);
  const computerPosition = getRandomPosition(availablePositions);

  const newGrid = grid.slice();
  newGrid[computerPosition] = computerOption;

  const result = checkWinner(newGrid);

  if (isGridFull(newGrid) === true && result == null) {
    return {
      grid: newGrid,
      winner: 'DRAW',
    };
  } else if (isGridFull(newGrid) === false && result != null) {
    return {
      grid,
      winner: result,
    };
  }

  return {
    grid: newGrid,
    winner: result,
  };
}

export function startGame() {
  return {
    grid: [
      null, null, null,
      null, null, null,
      null, null, null,
    ],
    userOption: null,
    computerOption: null,
    winner: null,
  };
}
