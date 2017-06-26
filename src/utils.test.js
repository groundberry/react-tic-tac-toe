import {
  getAvailablePositions,
  getRandomPosition,
  checkWinner,
} from './utils';

describe('utils', () => {
  describe('getAvailablePositions', () => {
    it('returns the available positions in the grid', () => {
      const grid = [
        'X', null, null,
        null, null, null,
        null, null, null,
      ];
      expect(getAvailablePositions(grid)).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
    });
  });

  describe('getRandomPosition', () => {
    it('returns a random number from a given array', () => {
      const arr = [1, 2, 3, 4, 5, 6, 7, 8];
      expect(getRandomPosition(arr)).toEqual(expect.any(Number));
    });
  });

  describe('checkWinner', () => {
    it('returns the winner of the game', () => {
      const grid = [
        'X', 'X', 'X',
        null, 'O', null,
        null, null, 'O',
      ];
      expect(checkWinner(grid)).toEqual('X');
    });

    it('returns the winner of the game', () => {
      const grid = [
        'O', 'X', 'X',
        null, 'O', null,
        null, null, 'O',
      ];
      expect(checkWinner(grid)).toEqual('O');
    });

    it('returns the winner of the game', () => {
      const grid = [
        'O', 'X', 'X',
        'X', 'O', 'O',
        'X', 'O', 'X',
      ];
      expect(checkWinner(grid)).toEqual(null);
    });
  });
});
