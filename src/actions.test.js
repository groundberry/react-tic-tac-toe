import {
  selectUserOption,
  selectComputerOption,
  selectCell,
  computerSelectCell,
  setWinner,
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

  describe('computerSelectCell', () => {
    it('marks one available position of the grid', () => {
      const prevState = {
        grid: [
          'X', 'O', 'O',
          'O', 'X', 'X',
          'O', 'O', null,
        ],
        computerOption: 'O',
      };

      const newState = {
        grid: [
          'X', 'O', 'O',
          'O', 'X', 'X',
          'O', 'O', 'O',
        ],
      };

      expect(computerSelectCell(prevState)).toEqual(newState);
    });
  });

  describe('setWinner', () => {
    it('sets the current winner if any', () => {
      const prevState = {
        grid: [
          'X', 'X', 'X',
          null, 'O', null,
          null, null, 'O',
        ],
        winner: null,
      };

      const newState = {
        winner: 'X',
      };

      expect(setWinner(prevState)).toEqual(newState);
    });
  });
});
