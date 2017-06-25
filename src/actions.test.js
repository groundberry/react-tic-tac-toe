import {
  selectUserOption,
  selectComputerOption,
  selectCell,
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

  describe('selectCell', () => {
    it('marks the cell that has been selected by the user', () => {
      const prevState = {
        grid: [
          null, null, null,
          null, null, null,
          null, null, null,
        ],
        userOption: 'X',
      };

      const newState = {
        grid: [
          'X', null, null,
          null, null, null,
          null, null, null,
        ],

      };

      expect(selectCell(0, prevState)).toEqual(newState);
    });
  });
});
