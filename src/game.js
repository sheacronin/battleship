import Player from './player';
import Board from './board';
import Bug from './bugs';
import { BoardDisplay, nextTurnBtn } from './dom/board-dom';
import { messages, passToPlayerNScreen } from './dom/messages';

const game = (() => {
    const boards = {};
    const players = {};
    const boardDisplays = {};

    function setup(playerNames) {
        boards[1] = new Board();
        boards[2] = new Board();

        players[1] = new Player(playerNames[1], boards[2]);
        players[2] = new Player(playerNames[2], boards[1]);

        // Player 1 goes first.
        players[1].switchTurn();

        for (let n in boards) {
            const owner = players[n];
            const boardDisplay = new BoardDisplay(boards[n], owner);
            boardDisplay.containerEl.classList.add('p' + n);
            boardDisplays[n] = boardDisplay;
        }

        boards[1].bugs = [
            new Bug(5, 'Worm'),
            new Bug(4, 'Caterpillar'),
            new Bug(3, 'Ant'),
            new Bug(3, 'Spider'),
            new Bug(2, 'Ladybug'),
        ];

        boards[2].bugs = [
            new Bug(5, 'Worm'),
            new Bug(4, 'Caterpillar'),
            new Bug(3, 'Ant'),
            new Bug(3, 'Spider'),
            new Bug(2, 'Ladybug'),
        ];

        for (let n in players) {
            if (players[n].isComputer) {
                boards[n].bugs.forEach((bug) => {
                    boards[n].placeBugRandomly(bug);
                });
            }
        }

        if (players[1].isComputer && players[2].isComputer) {
            setupFirstTurn(boardDisplays);
        } else if (!players[1].isComputer && !players[2].isComputer) {
            placeBugsFromPen(players[1]);
        } else {
            for (let n in players) {
                if (!players[n].isComputer) {
                    placeBugsFromPen(players[n]);
                }
            }
        }
    }

    function placeBugsFromPen(player) {
        const n = player === players[1] ? 1 : 2;
        const otherPlayerN = n === 1 ? 2 : 1;

        if (boardDisplays[n].bugPen.areWePlacingBugs()) {
            if (n === 2) {
                switchBothPlayersTurn();
            }

            messages.render({
                action: 'placeBugs',
                whoDidAction: player.name,
            });

            boardDisplays[otherPlayerN].containerEl.remove();
            boardDisplays[n].render();
        } else {
            throw new Error('bugs have already been placed');
        }
    }

    function setupFirstTurn() {
        for (let n in boardDisplays) {
            // make active immediately on the first turn
            if (players[n] === getNotWhoseTurn()) {
                boardDisplays[n].containerEl.classList.add('active');
            }
            boardDisplays[n].render();
        }

        messages.render({
            action: 'firstTurn',
            whoDidAction: getWhoseTurn().name,
            whoReceivedAction: getNotWhoseTurn().name,
        });

        if (getWhoseTurn().isComputer) {
            setTimeout(playTurn, 2000);
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

        let shouldGameEnd;
        if (wasABugSwatted) {
            shouldGameEnd = checkIfGameShouldEnd(whoseTurn.enemyBoard);
        }

        const action = result[0] === 'miss' ? 'miss' : 'hit';

        messages.render({
            action: action,
            coords: result[1],
            whoDidAction: whoseTurn.name,
            whoReceivedAction: getNotWhoseTurn().name,
            hitBug: action === 'hit' ? result[0].name : null,
            wasABugSwatted,
            shouldGameEnd,
        });

        for (let n in boardDisplays) {
            boardDisplays[n].render();
        }

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

    function shouldShowBugs(boardOwner) {
        if (
            (boardOwner.isMyTurn && !boardOwner.isComputer) ||
            getEnemyPlayer(boardOwner).isComputer
        ) {
            return true;
        } else {
            return false;
        }
    }

    function checkIfGameShouldEnd(boardBeingAttacked) {
        if (boardBeingAttacked.areAllBugsSwatted()) {
            return true;
        } else {
            return false;
        }
    }

    async function endTurn() {
        nextTurnBtn.remove();

        const renderedPromises = [];

        for (let n in boardDisplays) {
            renderedPromises.push(boardDisplays[n].render());

            // Disable units so that player can't attack twice in a row
            boardDisplays[n].boardEl.childNodes.forEach((unit) => {
                unit.disabled = true;
                unit.style.opacity = '100';
            });
        }

        Promise.all(renderedPromises)
            .then(() => {
                if (!players[1].isComputer && !players[2].isComputer) {
                    passToPlayerNScreen.render(getNotWhoseTurn().name);
                }
            })
            .then(() => {
                switchBothPlayersTurn();

                for (let n in boardDisplays) {
                    console.log('rendering after switched turn');
                    boardDisplays[n].render();
                }

                // If it's computer's turn now, it should play without any input
                if (getWhoseTurn().isComputer) {
                    setTimeout(playTurn, 3000);
                }
            });
    }

    function endGame() {
        for (let n in boardDisplays) {
            boardDisplays[n].render();
            boardDisplays[n].disable();
        }
    }

    function switchBothPlayersTurn() {
        for (let n in players) {
            players[n].switchTurn();
        }
    }

    return {
        setup,
        playTurn,
        endTurn,
        getWhoseTurn,
        getEnemyPlayer,
        placeBugsFromPen,
        setupFirstTurn,
        shouldShowBugs,
        switchBothPlayersTurn,
    };
})();

export default game;
