import {
  getAvailablePositions,
  getRandomPosition,
  checkWinner,
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

  return {
    grid: newGrid,
  };
}

export function setWinner(prevState) {
  const { grid } = prevState;
  const result = checkWinner(grid);

  if (result != null) {
    return {
      winner: result,
    };
  }
  return null;
}
