import Player from './player';
import Board from './board';
import Bug from './bugs';
import { boardDisplays, messageDisplays } from './game-dom';

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

    function playTurn(xInput, yInput) {
        const whoseTurn = players.find((player) => player.isMyTurn);
        console.log(`======= ${whoseTurn.name} attacks! ========`);

        // If whoseTurn is computer, there will be no player input and
        // attack will be random coordinates
        const result = whoseTurn.attack(xInput, yInput);

        if (result[0] !== 'miss') {
            const bug = result[0];
            if (bug.isSwatted()) {
                // this bug is swatted
                console.log(
                    bug.name + ' has been swatted by ' + whoseTurn.name
                );
                messageDisplays.wasABugSwatted.render(
                    bug.name + ' has been swatted by ' + whoseTurn.name
                );

                // check if all bugs are swatted
                if (whoseTurn.enemyBoard.areAllBugsSwatted()) {
                    endGame(whoseTurn);
                    return;
                }
            }
        }

        endTurn(result);
    }

    function endTurn(result) {
        let whoDidAction;
        let whoReceivedAction;
        if (player1.isMyTurn) {
            whoDidAction = player1;
            whoReceivedAction = player2;
        } else {
            whoDidAction = player2;
            whoReceivedAction = player1;
        }

        // update messages
        if (result[0] === 'miss') {
            messageDisplays.previousAction.render(
                `${whoDidAction.name} missed at ${result[1]}`
            );
        } else {
            messageDisplays.previousAction.render(
                `${whoDidAction.name} hit ${whoReceivedAction.name}'s ${result[0].name} at ${result[1]}!`
            );
        }

        player1.switchTurn();
        player2.switchTurn();

        boardDisplays.forEach((boardDisplay) => boardDisplay.render());

        playTurn();
    }

    function endGame(winner) {
        // make sure board renders hit unit
        boardDisplays.forEach((boardDisplay) => boardDisplay.render());
        // declare winner
        console.log(winner.name + ' has won!');
        boardDisplays.forEach((boardDisplay) => boardDisplay.disable());
        // messages.declareWinner
        // messages.appendPlayAgainButton
    }

    return { boards: [board1, board2], players, playTurn };
})();

export default game;
