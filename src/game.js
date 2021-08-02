import Player from './player';
import Board from './board';

const game = (() => {
    const player1 = new Player();
    const player2 = new Player(true);

    const board1 = new Board();
    const board2 = new Board();

    return { board1, board2 };
})();

export default game;
