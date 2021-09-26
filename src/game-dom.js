import game from './game';
import events from './events';

const main = document.querySelector('main');

class BoardDisplay {
    constructor(board) {
        this.board = board;
        this.boardOwnerPlayer = game.players.find(
            (player) => player.enemyBoard !== board
        );
        this.containerEl = document.createElement('article');
        this.nameEl = document.createElement('h2');
        this.boardEl = document.createElement('div');
        this.boardEl.classList.add('board');
    }

    render() {
        this._clearBoard();

        // add name element
        this.nameEl.textContent = `${this.boardOwnerPlayer.name}'s board`;
        this.containerEl.appendChild(this.nameEl);

        // add units to board
        const unitEls = this._createUnits();
        unitEls.forEach((unitEl) => this.boardEl.appendChild(unitEl));

        // add board element
        this.containerEl.appendChild(this.boardEl);

        // add container
        main.appendChild(this.containerEl);
    }

    _clearBoard() {
        while (this.boardEl.firstChild) {
            this.boardEl.removeChild(this.boardEl.firstChild);
        }
    }

    _createUnits() {
        const unitEls = [];

        this.board.grid.forEach((row) => {
            let unitIndex = 0;

            row.forEach((unit) => {
                const unitEl = this._createUnit(unit);

                const x = unitIndex;
                const y = this.board.grid.indexOf(row);

                if (this._shouldThisBoardBeClickable()) {
                    this._addClickEventListener(unitEl, [x, y]);
                }

                unitEls.push(unitEl);

                unitIndex++;
            });
        });

        return unitEls;
    }

    _createUnit(unit) {
        const unitEl = document.createElement('button');
        unitEl.classList.add('unit');

        this._styleUnit(unit, unitEl);

        return unitEl;
    }

    _styleUnit(unit, unitEl) {
        if (this._shouldThisBoardBeClickable()) {
            unitEl.classList.add('active');
        }

        if (unit === 'miss') {
            unitEl.classList.add('miss');
        } else if (unit !== null) {
            unitEl.classList.add('bug');
            const bug = unit[0];
            // if this unit was hit, add styles
            if (bug.units[unit[1]] === 'hit') unitEl.classList.add('hit');
            // if this bug was swatted, add styles
            if (bug.isSwatted()) unitEl.classList.add('swatted');
            // temporarily add name until bug assets are added
            unitEl.textContent = bug.name;
        }
    }

    _shouldThisBoardBeActive() {
        return !this.boardOwnerPlayer.isMyTurn;
    }

    _shouldThisBoardBeClickable() {
        return (
            !this.boardOwnerPlayer.isMyTurn &&
            !game.players.find((player) => player.isMyTurn).isComputer
        );
    }

    _addClickEventListener(unitEl, [x, y]) {
        unitEl.addEventListener('click', () =>
            this._emitAttackInputCoords(x, y)
        );
    }

    _emitAttackInputCoords(x, y) {
        // game object should listen for this event
        events.emit('unitClicked', [x, y]);
    }

    disable() {
        // style disabled - opacity lower
        this.boardEl.style.opacity = '0.5';
    }
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

const boardDisplays = [];

game.boards.forEach((board) => {
    const thisBoardDisplay = new BoardDisplay(board);
    boardDisplays.push(thisBoardDisplay);
    thisBoardDisplay.render();
});

export { boardDisplays };
