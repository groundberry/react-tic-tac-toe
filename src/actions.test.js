import {
  selectUserOption,
  selectCell,
  computerSelectCell,
} from './actions';

describe('actions', () => {
  describe('selectUserOption', () => {
    it('sets the state with the user option "X"', () => {
      const prevState = {
        userOption: null,
        computerOption: null,
      };

      const newState = {
        userOption: 'X',
        computerOption: 'O',
      };

      expect(selectUserOption('X', prevState)).toEqual(newState);
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
        winner: null,
      };

      const newState = {
        grid: [
          'X', 'O', 'O',
          'O', 'X', 'X',
          'O', 'O', 'O',
        ],
        winner: 'O',
      };

      expect(computerSelectCell(prevState)).toEqual(newState);
    });

    it('changes the state of the winner if there is one', () => {
      const prevState = {
        grid: [
          'X', 'O', 'O',
          'O', 'X', 'X',
          'O', 'O', null,
        ],
        computerOption: 'O',
        winner: null,
      };

      const newState = {
        grid: [
          'X', 'O', 'O',
          'O', 'X', 'X',
          'O', 'O', 'O',
        ],
        winner: 'O',
      };

      expect(computerSelectCell(prevState)).toEqual(newState);
    });
  });
});
