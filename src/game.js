import Player from './player';
import Board from './board';
import Bug from './bugs';

const game = (() => {
    const player1 = new Player();
    const player2 = new Player(true);

    const board1 = new Board();
    const board2 = new Board();

    const worm = new Bug(5, 'Worm');
    const caterpillar = new Bug(4, 'Caterpillar');
    const ant = new Bug(3, 'Ant');
    const spider = new Bug(3, 'Spider');
    const ladybug = new Bug(2, 'Ladybug');
    const bugCollection = [worm, caterpillar, ant, spider, ladybug];

    function placeBugRandomly(board, bug) {
        let x = Math.floor(Math.random() * 10);
        let y = Math.floor(Math.random() * 10);

        // select direction randomly as well
        let shouldDirectionChange = Math.random() < 0.5;
        if (shouldDirectionChange) bug.direction = 'vertical';

        try {
            board.placeBug(bug, x, y);
        } catch {
            // catch thrown error and re-run for bug
            // if there's an error
            placeBugRandomly(board, bug);
        }
    }

    bugCollection.forEach((bug) => {
        placeBugRandomly(board1, bug);
        placeBugRandomly(board2, bug);
    });

    return { board1, board2 };
})();

export default game;
