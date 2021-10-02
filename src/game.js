import Player from './player';
import Board from './board';
import Bug from './bugs';
import { BoardDisplay, BugPen, messageDisplays } from './game-dom';

const game = (() => {
    console.log('playing game!');

    const boards = [];
    const players = [];
    const boardDisplays = [];

    // Setup.
    function setup(playerNames) {
        // clear previous boards and players
        boards.splice(0, 2);
        players.splice(0, 2);
        boardDisplays.splice(0, 2);

        const board1 = new Board();
        const board2 = new Board();
        boards.push(board1, board2);

        const player1 = new Player(playerNames['1'], board2);
        const player2 = new Player(playerNames['2'], board1);
        players.push(player1, player2);

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

        if (player1.isComputer) {
            bugCollection1.forEach((bug) => {
                board1.placeBugRandomly(bug);
            });
        } else {
            // const coords = prompt(
            //     `Where would you like to place your ${bugCollection1[0].name}?`
            // );
            // const [strX, strY] = coords.split(',');
            // const x = parseInt(strX);
            // const y = parseInt(strY);
            // board1.placeBug(bugCollection1[0], x, y);
        }

        // BUG PEN CODE
        const bugPen = new BugPen(bugCollection1);
        bugPen.render();
        // END CODE

        if (player2.isComputer) {
            bugCollection2.forEach((bug) => {
                board2.placeBugRandomly(bug);
            });
        }

        boards.forEach((board) => {
            const boardDisplay = new BoardDisplay(
                board,
                players.find((player) => player.enemyBoard !== board)
            );
            boardDisplays.push(boardDisplay);
            boardDisplay.render();
        });
    }

    function playTurn(xInput, yInput) {
        const whoseTurn = players.find((player) => player.isMyTurn);
        console.log(`======= ${whoseTurn.name} attacks! ========`);

        // If whoseTurn is computer, there will be no player input and
        // attack will be random coordinates
        let result;
        try {
            result = whoseTurn.attack(xInput, yInput);
        } catch {
            // If computer throws an error, run the function again
            console.log("you've already attacked here!");
            if (whoseTurn.isComputer) playTurn();
            return;
        }

        const wasABugSwatted = result[0] !== 'miss' && result[0].isSwatted();
        console.log('swatted? ' + wasABugSwatted);

        let shouldGameEnd;
        if (wasABugSwatted) {
            shouldGameEnd = checkIfGameShouldEnd(whoseTurn.enemyBoard);
        }

        for (let message in messageDisplays) {
            messageDisplays[message].render({
                missOrBug: result[0],
                coords: result[1],
                whoDidAction: whoseTurn,
                whoReceivedAction: players.find((player) => !player.isMyTurn),
                wasABugSwatted,
                shouldGameEnd,
            });
        }

        if (shouldGameEnd) {
            endGame();
        } else {
            endTurn();
        }
    }

    function checkIfGameShouldEnd(boardBeingAttacked) {
        // check if all bugs are swatted
        if (boardBeingAttacked.areAllBugsSwatted()) {
            return true;
        } else {
            return false;
        }
    }

    function endTurn() {
        players.forEach((player) => player.switchTurn());

        const whoseTurnNext = players.find((player) => player.isMyTurn);

        boardDisplays.forEach((boardDisplay) => boardDisplay.render());

        // If it's computer's turn now, it should play without any input
        if (whoseTurnNext.isComputer) {
            setTimeout(playTurn, 2000);
        }
    }

    function endGame() {
        // make sure board renders hit unit
        boardDisplays.forEach((boardDisplay) => boardDisplay.render());
        boardDisplays.forEach((boardDisplay) => boardDisplay.disable());
    }

    return { boards, players, setup, playTurn };
})();

export default game;
