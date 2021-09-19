import game from './game';
import events from './events';

const main = document.querySelector('main');

const displayBoards = (() => {
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

    function _createPlayerName(player) {
        const nameEl = document.createElement('h2');
        nameEl.textContent = `${player.name}'s board`;
        return nameEl;
    }

    function render(board) {
        const containerEl = document.createElement('article');

        const nameEl = _createPlayerName(
            game.players.find((player) => player.enemyBoard !== board)
        );
        const boardEl = _createBoard();
        const unitEls = _createUnits(board);
        unitEls.forEach((unitEl) => boardEl.appendChild(unitEl));

        containerEl.appendChild(nameEl);
        containerEl.appendChild(boardEl);

        main.appendChild(containerEl);
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

const displayMessages = (() => {
    const messages = document.createElement('div');
    messages.id = 'messages';

    function _updateWhoseTurnText(whoseTurnEl) {
        const whoseTurn = game.players.find((player) => player.isMyTurn);
        whoseTurnEl.textContent = `It is ${whoseTurn.name}'s turn.`;
    }

    function _renderWhoseTurnText() {
        const whoseTurnEl = document.createElement('p');
        _updateWhoseTurnText(whoseTurnEl);
        messages.appendChild(whoseTurnEl);
    }

    function _updateActionText(actionEl) {
        // this should listen for an event?
        actionEl.textContent = '[[action text here]]';
    }

    function _renderActionText() {
        const actionEl = document.createElement('p');
        _updateActionText(actionEl);
        messages.appendChild(actionEl);
    }

    function render() {
        _renderWhoseTurnText();
        _renderActionText();
        main.appendChild(messages);
    }

    return { render };
})();

displayMessages.render();

game.boards.forEach((board) => {
    displayBoards.render(board);
});

export default main;
