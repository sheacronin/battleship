import Player from './player';
import Board from './board';
import Bug from './bugs';
import events from './events';

const game = (() => {
    // Setup.
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
        let result;

        if (player1.isMyTurn) {
            result = player1.attack(x, y);
        } else {
            result = player2.attack(x, y);
        }
        // get returned value?
        endTurn(result);
    });

    function endTurn(result) {
        player1.switchTurn();
        player2.switchTurn();
        events.emit('turnEnded', result);
    }

    events.on('turnEnded', computerTriesToTakeTurn);

    function computerTriesToTakeTurn() {
        if (player2.isMyTurn) {
            player2.attack();
            endTurn();
        }
    }

    return { boards: [board1, board2], players: [player1, player2] };
})();

export default game;
