import Player from './player';
import Board from './board';
import Bug from './bugs';
import { BoardDisplay } from './board-dom';
import { displays as messageDisplays } from './messages';

const game = (() => {
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

        const bugCollections = {
            1: [
                new Bug(5, 'Worm'),
                new Bug(4, 'Caterpillar'),
                new Bug(3, 'Ant'),
                new Bug(3, 'Spider'),
                new Bug(2, 'Ladybug'),
            ],

            2: [
                new Bug(5, 'Worm'),
                new Bug(4, 'Caterpillar'),
                new Bug(3, 'Ant'),
                new Bug(3, 'Spider'),
                new Bug(2, 'Ladybug'),
            ],
        };

        for (let i = 0; i < players.length; i++) {
            if (players[i].isComputer) {
                bugCollections[i + 1].forEach((bug) => {
                    boards[i].placeBugRandomly(bug);
                });
            } else {
                // push bugs to the board so they will render in bug pen
                boards[i].bugs = bugCollections[i + 1];
            }
        }

        // add board number for styling class
        let boardN = 1;

        boards.forEach((board) => {
            const owner = players.find((player) => player.enemyBoard !== board);
            const boardDisplay = new BoardDisplay(board, owner);
            boardDisplay.containerEl.classList.add('p' + boardN);
            boardN++;

            boardDisplays.push(boardDisplay);

            // instead of rendering both these board displays here,
            // check to see if players are human / computer
            // if both computer, render
            if (players.every((player) => player.isComputer)) {
                boardDisplay.render();
            } else if (players.every((player) => !player.isComputer)) {
                // if both human, (WILL NEED PASS TO X SCREEN LATER)
                // then show just p1 board
            } else {
                // if just one player is human,
                // show just that player's board to setup
                if (!owner.isComputer) {
                    boardDisplay.render();
                }
            }
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

    return { boards, players, setup, playTurn, endTurn };
})();

export default game;
