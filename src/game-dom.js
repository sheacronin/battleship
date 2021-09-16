import game from './game';
import events from './events';

const main = document.querySelector('main');

const boardDisplay = (() => {
    function _createBoard() {
        const boardEl = document.createElement('div');
        boardEl.classList.add('board');

        return boardEl;
    }

    function _createUnits(board) {
        const unitEls = [];

        board.grid.forEach((row) => {
            let unitIndex = 0;

            row.forEach((unit) => {
                const unitEl = document.createElement('button');
                unitEl.classList.add('unit');

                _styleUnit(unit, unitEl);

                const x = unitIndex;
                const y = board.grid.indexOf(row);

                unitEl.addEventListener('click', () =>
                    _emitAttackInputCoords(x, y)
                );
                unitEl.addEventListener('click', () =>
                    _styleAttackedUnit(unitEl)
                );

                unitEls.push(unitEl);

                unitIndex++;
            });
        });

        return unitEls;
    }

    function render(board) {
        const boardEl = _createBoard();
        const unitEls = _createUnits(board);
        unitEls.forEach((unitEl) => boardEl.appendChild(unitEl));

        main.appendChild(boardEl);
    }

    function _styleUnit(unit, unitEl) {
        if (unit === 'miss') {
            unitEl.classList.add('miss');
        } else if (unit !== null) {
            console.log(unit);
            unitEl.classList.add('bug');
        }
    }

    function _styleAttackedUnit(unitEl) {
        if (unitEl.classList.contains('bug')) {
            unitEl.classList.add('hit');
        } else {
            unitEl.classList.add('miss');
        }
    }

    function _emitAttackInputCoords(x, y) {
        // game object should listen for this event
        console.log(x, y);
        events.emit('unitClicked', [x, y]);
    }

    // TODO: function disableBoard() {

    // }

    return { render };
})();

const message = document.createElement('div');
message.textContent = "It is Player 1's turn";
message.id = 'message';
main.appendChild(message);

game.boards.forEach((board) => {
    boardDisplay.render(board);
});

export default main;
