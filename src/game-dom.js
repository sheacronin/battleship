import game from './game';
import events from './events';

const main = document.querySelector('main');

// function updateBoard() {

// }

// function disableBoard() {

// }

function emitAttackInputCoords(x, y) {
    // game object should listen for this event
    console.log(x, y);
    events.emit('unitClicked', [x, y]);
}

function styleAttackedUnit(unitEl) {
    if (unitEl.classList.contains('bug')) {
        unitEl.classList.add('hit');
    } else {
        unitEl.classList.add('miss');
    }
}

function styleUnit(unit, unitEl) {
    if (unit === 'miss') {
        unitEl.classList.add('miss');
    } else if (unit !== null) {
        unitEl.classList.add('bug');
    }
}

function renderBoard(board) {
    const boardEl = document.createElement('div');
    boardEl.classList.add('board');

    board.grid.forEach((row) => {
        let unitIndex = 0;

        row.forEach((unit) => {
            const unitEl = document.createElement('button');
            unitEl.classList.add('unit');

            styleUnit(unit, unitEl);

            const x = unitIndex;
            const y = board.grid.indexOf(row);

            unitEl.addEventListener('click', () => emitAttackInputCoords(x, y));
            unitEl.addEventListener('click', () => styleAttackedUnit(unitEl));

            boardEl.appendChild(unitEl);

            unitIndex++;
        });
    });

    main.appendChild(boardEl);
}

const message = document.createElement('div');
message.textContent = "It is Player 1's turn";
message.id = 'message';
main.appendChild(message);

game.boards.forEach((board) => {
    renderBoard(board);
});

export default main;
