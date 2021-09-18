import Player from './player';
import Board from './board';
import Bug from './bugs';
import events from './events';

const game = (() => {
    const board1 = new Board();
    const board2 = new Board();

    const player1 = new Player('Sarah', board2);
    const player2 = new Player('Computer', board1);

    // Player 1 goes first.
    player1.switchTurn();

    const bugCollection = [
        new Bug(5, 'Worm'),
        new Bug(4, 'Caterpillar'),
        new Bug(3, 'Ant'),
        new Bug(3, 'Spider'),
        new Bug(2, 'Ladybug'),
    ];

    bugCollection.forEach((bug) => {
        board1.placeBugRandomly(bug);
        board2.placeBugRandomly(bug);
    });

    // listen for events.
    events.on('unitClicked', ([x, y]) => {
        if (player1.isMyTurn) {
            player1.attack(x, y);
        } else {
            player2.attack(x, y);
        }
        // get returned value?
        player1.switchTurn();
        player2.switchTurn();
    });

    return { boards: [board1, board2] };
})();

export default game;
