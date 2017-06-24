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
