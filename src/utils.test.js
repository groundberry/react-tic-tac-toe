import {
  getAvailablePositions,
  getRandomPosition,
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
});
