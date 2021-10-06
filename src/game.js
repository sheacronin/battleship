import Player from './player';
import Board from './board';
import Bug from './bugs';
import { BoardDisplay } from './dom/board-dom';
import messages from './dom/messages';

const game = (() => {
    const boards = {};
    const players = {};
    const boardDisplays = [];

    function setup(playerNames) {
        boards[1] = new Board();
        boards[2] = new Board();

        players[1] = new Player(playerNames[1], boards[2]);
        players[2] = new Player(playerNames[2], boards[1]);

        // Player 1 goes first.
        players[1].switchTurn();

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

        for (let n in players) {
            if (players[n].isComputer) {
                bugCollections[n].forEach((bug) => {
                    boards[n].placeBugRandomly(bug);
                });
            } else {
                // push bugs to the board so they will render in bug pen
                boards[n].bugs = bugCollections[n];
            }
        }

        for (let n in boards) {
            const owner = players[n];
            const boardDisplay = new BoardDisplay(boards[n], owner);
            boardDisplay.containerEl.classList.add('p' + n);

            boardDisplays.push(boardDisplay);

            // instead of rendering both these board displays here,
            // check to see if players are human / computer
            // if both computer, render
            if (players[1].isComputer && players[2].isComputer) {
                boardDisplay.render();
                // after both boards are rendered, play turn
                if (n === '2') setTimeout(playTurn, 2000);
            } else if (!players[1].isComputer && !players[2].isComputer) {
                // if both human, (WILL NEED PASS TO X SCREEN LATER)
                // then show just p1 board
                if (n === '1') boardDisplay.render();
            } else {
                // if just one player is human,
                // show just that player's board to setup
                if (!owner.isComputer) {
                    boardDisplay.render();
                }
            }
        }
    }

    function playTurn(xInput, yInput) {
        let whoseTurn = getWhoseTurn();

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

        messages.render({
            missOrBug: result[0],
            coords: result[1],
            whoDidAction: whoseTurn,
            whoReceivedAction: getNotWhoseTurn(),
            wasABugSwatted,
            shouldGameEnd,
        });

        if (shouldGameEnd) {
            endGame();
        } else {
            endTurn();
        }
    }

    function getWhoseTurn() {
        for (let n in players) {
            if (players[n].isMyTurn) {
                return players[n];
            }
        }
    }

    function getNotWhoseTurn() {
        for (let n in players) {
            if (!players[n].isMyTurn) {
                return players[n];
            }
        }
    }

    function getEnemyPlayer(player) {
        for (let n in players) {
            if (players[n] !== player) return players[n];
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
        for (let n in players) {
            players[n].switchTurn();
        }

        boardDisplays.forEach((boardDisplay) => boardDisplay.render());

        // If it's computer's turn now, it should play without any input
        if (getWhoseTurn().isComputer) {
            setTimeout(playTurn, 2000);
        }
    }

    function endGame() {
        boardDisplays.forEach((boardDisplay) => {
            // make sure board renders hit unit
            boardDisplay.render();
            boardDisplay.disable();
        });
    }

    return { setup, playTurn, endTurn, getWhoseTurn, getEnemyPlayer };
})();

export default game;
