import {
  getAvailablePositions,
  getRandomPosition,
} from './utils';

export function selectUserOption(option) {
  return {
    userOption: option,
  };
}

export function selectComputerOption(prevState) {
  const { userOption } = prevState;

  if (userOption === 'X') {
    return {
      computerOption: 'O',
    };
  }

  return {
    computerOption: 'X',
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
