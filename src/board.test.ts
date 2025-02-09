import { Piece } from './types.js';
import { Board } from './board.js';

test('set and get', () => {
  const board = Board.empty();
  expect(board.get(0)).toBeUndefined();
  const piece: Piece = { role: 'knight', color: 'black', promoted: false };
  expect(board.set(0, piece)).toBeUndefined();
  expect(board.get(0)).toEqual(piece);
});
