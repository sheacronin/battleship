import Player from './player';
import Board from './board';
import Bug from './bugs';
import events from './events';
import { boardDisplays } from './game-dom';

const game = (() => {
    // Setup.
    const board1 = new Board();
    const board2 = new Board();

    const player1 = new Player('Sarah', board2);
    const player2 = new Player('Computer', board1);

    const players = [player1, player2];

    // Player 1 goes first.
    player1.switchTurn();

    const bugCollection1 = [
        new Bug(5, 'Worm'),
        new Bug(4, 'Caterpillar'),
        new Bug(3, 'Ant'),
        new Bug(3, 'Spider'),
        new Bug(2, 'Ladybug'),
    ];

    const bugCollection2 = [
        new Bug(5, 'Worm'),
        new Bug(4, 'Caterpillar'),
        new Bug(3, 'Ant'),
        new Bug(3, 'Spider'),
        new Bug(2, 'Ladybug'),
    ];

    bugCollection1.forEach((bug) => {
        board1.placeBugRandomly(bug);
    });

    bugCollection2.forEach((bug) => {
        board2.placeBugRandomly(bug);
    });

    // listen for events.
    events.on('unitClicked', ([x, y]) => {
        if (player1.isMyTurn) {
            humanPlayerTakesTurn(player1, [x, y]);
        } else {
            humanPlayerTakesTurn(player2, [x, y]);
        }
    });

    function humanPlayerTakesTurn(player, [x, y]) {
        console.log(`======= ${player.name} attacks! ========`);
        const result = player.attack(x, y);
        // if the result isn't a miss, check if hit bug is swatted
        if (result[0] !== 'miss') {
            const bug = result[0];
            if (bug.isSwatted()) {
                // this bug is swatted
                console.log(bug.name + ' has been swatted by ' + player.name);
                // add styles to all of its units in game-dom

                // check if all bugs are swatted
                if (player.enemyBoard.areAllBugsSwatted()) {
                    // end game
                    // declare winner
                    endGame(player);
                }
            }
        }

        endTurn(result);
    }

    function endTurn(result) {
        player1.switchTurn();
        player2.switchTurn();
        //events.off('unitClicked');
        events.emit('turnEnded', result);
        boardDisplays.forEach((boardDisplay) => boardDisplay.render());
    }

    function endGame(winner) {
        console.log(winner.name + ' has won!');
        // DOMBoard.disable
        // messages.declareWinner
        // messages.appendPlayAgainButton
    }

    events.on('turnEnded', () => setTimeout(computerTriesToTakeTurn, 2000));

    function computerTriesToTakeTurn() {
        if (player2.isMyTurn) {
            console.log(`======= ${player2.name} attacks! ========`);
            const result = player2.attack();
            endTurn(result);
        }
    }

    return { boards: [board1, board2], players };
})();

export default game;
