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
