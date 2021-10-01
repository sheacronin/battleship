import game from './game';

const main = document.querySelector('main');

console.log(game);

const setup = (() => {
    const containerEl = document.createElement('article');

    const setupTitle = document.createElement('h3');
    setupTitle.textContent = 'Setup';
    containerEl.appendChild(setupTitle);

    for (let playerN = 1; playerN < 3; playerN++) {
        const whoIsPlayerContainer = document.createElement('section');
        whoIsPlayerContainer.id = 'setup';

        const whoIsPlayerLabel = document.createElement('label');
        whoIsPlayerLabel.textContent = `What is ${playerN}'s name?`;
        whoIsPlayerContainer.appendChild(whoIsPlayerLabel);

        const whoIsPlayerInput = document.createElement('input');
        whoIsPlayerContainer.appendChild(whoIsPlayerInput);

        const isComputerContainer = document.createElement('div');

        const isComputerLabel = document.createElement('label');
        isComputerLabel.textContent = 'Is this player a computer?';
        isComputerContainer.appendChild(isComputerLabel);

        const isComputerCheckbox = document.createElement('input');
        isComputerCheckbox.type = 'checkbox';
        isComputerContainer.appendChild(isComputerCheckbox);
        whoIsPlayerContainer.appendChild(isComputerContainer);

        const whoIsPlayerSubmit = document.createElement('button');
        whoIsPlayerSubmit.textContent = 'Submit';
        whoIsPlayerContainer.appendChild(whoIsPlayerSubmit);

        containerEl.appendChild(whoIsPlayerContainer);
    }

    const readyToPlayBtn = document.createElement('button');
    readyToPlayBtn.textContent = 'Play';
    containerEl.appendChild(readyToPlayBtn);

    function render() {
        main.appendChild(containerEl);
    }

    return { render };
})();

setup.render();

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
        if (this._shouldThisBoardBeActive()) {
            this.boardEl.classList.add('active');
        } else {
            this.boardEl.classList.remove('active');
        }

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
        unitEl.addEventListener('click', () => game.playTurn(x, y));
    }

    disable() {
        // styles - opacity lower
        this.boardEl.style.opacity = '0.5';
        // remove active class
        this.boardEl.classList.remove('active');
        // disable unit buttons
        this.boardEl.childNodes.forEach((unit) => (unit.disabled = true));
    }
}

class MessageDisplay {
    constructor() {
        this.messageEl = document.createElement('p');
    }
}

const messageDisplays = {
    previousAction: new MessageDisplay(),
    wasABugSwatted: new MessageDisplay(),
    whoseTurn: new MessageDisplay(),
};

messageDisplays.previousAction.render = (turnData) => {
    let message;
    if (turnData.missOrBug === 'miss') {
        message = `${turnData.whoDidAction.name} missed at ${turnData.coords}`;
    } else {
        message = `${turnData.whoDidAction.name} hit ${turnData.whoReceivedAction.name}'s ${turnData.missOrBug.name} at ${turnData.coords}!`;
    }

    messageDisplays.previousAction.messageEl.textContent = message;
};

messageDisplays.wasABugSwatted.render = (turnData) => {
    let message;
    if (turnData.wasABugSwatted) {
        message = `${turnData.whoReceivedAction.name}'s ${turnData.missOrBug.name} has been swatted!`;
    } else {
        message = '';
    }

    messageDisplays.wasABugSwatted.messageEl.textContent = message;
};

const playAgainBtn = document.createElement('button');
playAgainBtn.textContent = 'Play Again';
//TODO: setup --- playAgainBtn.addEventListener('click', )

messageDisplays.whoseTurn.render = (turnData) => {
    if (!turnData.shouldGameEnd) {
        messageDisplays.whoseTurn.messageEl.textContent = `It is ${turnData.whoReceivedAction.name}'s turn`;
    } else {
        messageDisplays.whoseTurn.messageEl.textContent = `Game over! ${turnData.whoDidAction.name} wins!`;
        messageDisplays.whoseTurn.messageEl.appendChild(playAgainBtn);
    }
};

const messagesContainer = document.createElement('div');
messagesContainer.id = 'messages';
messagesContainer.appendChild(messageDisplays.previousAction.messageEl);
messagesContainer.appendChild(messageDisplays.wasABugSwatted.messageEl);
messagesContainer.appendChild(messageDisplays.whoseTurn.messageEl);
main.appendChild(messagesContainer);

const boardDisplays = [];

// game.boards.forEach((board) => {
//     const thisBoardDisplay = new BoardDisplay(board);
//     boardDisplays.push(thisBoardDisplay);
//     thisBoardDisplay.render();
// });

export { boardDisplays, messageDisplays };
