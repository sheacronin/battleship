import game from './game';
import events from './events';

const main = document.querySelector('main');

function DOMBoard(board) {
    const containerEl = document.createElement('article');

    const boardEl = document.createElement('div');
    boardEl.classList.add('board');

    const nameEl = document.createElement('h2');
    const boardOwnerPlayer = game.players.find(
        (player) => player.enemyBoard !== board
    );
    nameEl.textContent = `${boardOwnerPlayer.name}'s board`;

    function render() {
        console.log('====== BOARD RENDER =====');
        _clearBoard();

        const unitEls = _createUnits();
        unitEls.forEach((unitEl) => boardEl.appendChild(unitEl));

        containerEl.appendChild(nameEl);
        containerEl.appendChild(boardEl);

        main.appendChild(containerEl);
    }

    function _clearBoard() {
        while (boardEl.firstChild) {
            boardEl.removeChild(boardEl.firstChild);
        }
    }

    function _createUnits() {
        const unitEls = [];

        board.grid.forEach((row) => {
            let unitIndex = 0;

            row.forEach((unit) => {
                const unitEl = _createUnit(unit);

                const x = unitIndex;
                const y = board.grid.indexOf(row);

                if (
                    !boardOwnerPlayer.isMyTurn &&
                    !game.players.find((player) => player.isMyTurn).isComputer
                ) {
                    _addClickEventListener(unitEl, [x, y]);
                }

                unitEls.push(unitEl);

                unitIndex++;
            });
        });

        return unitEls;
    }

    function _createUnit(unit) {
        const unitEl = document.createElement('button');
        unitEl.classList.add('unit');

        _styleUnit(unit, unitEl);

        return unitEl;
    }

    function _addClickEventListener(unitEl, [x, y]) {
        unitEl.addEventListener('click', () => _emitAttackInputCoords(x, y));
    }

    function _styleUnit(unit, unitEl) {
        if (
            !boardOwnerPlayer.isMyTurn &&
            !game.players.find((player) => player.isMyTurn).isComputer
        ) {
            unitEl.classList.add('active');
        }

        if (unit === 'miss') {
            unitEl.classList.add('miss');
        } else if (unit !== null) {
            unitEl.classList.add('bug');
            if (unit[0].units[unit[1]] === 'hit') unitEl.classList.add('hit');
            // temp add name until bug assets are added
            unitEl.textContent = unit[0].name;
        }
    }

    function _emitAttackInputCoords(x, y) {
        // game object should listen for this event
        events.emit('unitClicked', [x, y]);
    }

    events.on('turnEnded', (result) => render(result));

    return { render };
}

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

    function _updateActionText(actionEl, result) {
        const whoDidAction = game.players.find((player) => !player.isMyTurn);
        const whoReceivedAction = game.players.find(
            (player) => player.isMyTurn
        );
        if (result) {
            if (result[0] === 'miss') {
                actionEl.textContent = `${whoDidAction.name} missed at ${result[1]}`;
            } else {
                actionEl.textContent = `${whoDidAction.name} hit ${whoReceivedAction.name}'s ${result[0].name} at ${result[1]}!`;
            }
        }
    }

    function _renderActionText(result) {
        const actionEl = document.createElement('p');
        _updateActionText(actionEl, result);
        messages.appendChild(actionEl);
    }

    function render(result) {
        _clearMessages();
        _renderActionText(result);
        _renderWhoseTurnText();
        main.appendChild(messages);
    }

    function _clearMessages() {
        while (messages.firstChild) {
            messages.removeChild(messages.firstChild);
        }
    }

    events.on('turnEnded', (result) => render(result));

    return { render };
})();

displayMessages.render();

game.boards.forEach((board) => {
    const thisDOMBoard = new DOMBoard(board);
    thisDOMBoard.render();
});

export default main;
