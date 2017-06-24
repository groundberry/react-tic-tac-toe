import {
  selectUserOption,
  selectComputerOption,
} from './actions';

describe('actions', () => {
  describe('selectUserOption', () => {
    it('sets the state with the user option "X"', () => {
      const prevState = {
        userOption: null,
      };

      const newState = {
        userOption: 'X',
      };

      expect(selectUserOption('X', prevState)).toEqual(newState);
    });
  });

  describe('selectComputerOption', () => {
    it('sets the state with the computer option "O"', () => {
      const prevState = {
        userOption: 'X',
        computerOption: null,
      };

      const newState = {
        computerOption: 'O',

      };

      expect(selectComputerOption(prevState)).toEqual(newState);
    });
  });
});
