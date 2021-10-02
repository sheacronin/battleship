import game from './game';

const main = document.querySelector('main');

console.log(game);

const setup = (() => {
    const containerEl = document.createElement('article');
    containerEl.id = 'setup';

    const setupTitle = document.createElement('h3');
    setupTitle.textContent = 'Setup';
    containerEl.appendChild(setupTitle);

    class PlayerInfo {
        constructor(playerN) {
            this.playerN = playerN;
            this.containerEl = document.createElement('section');
            this.containerEl.classList.add('player-info');

            this.playerName = new PlayerInfoAttribute(playerN, 'name');
            this.playerName.render = () => {
                this.playerName.labelEl.textContent = `What is Player ${playerN}'s name?`;
                this.playerName.containerEl.appendChild(
                    this.playerName.labelEl
                );
                this.playerName.containerEl.appendChild(
                    this.playerName.inputEl
                );

                this.containerEl.appendChild(this.playerName.containerEl);
            };

            this.playerIsComputer = new PlayerInfoAttribute(
                playerN,
                'is-computer'
            );
            this.playerIsComputer.render = () => {
                this.playerIsComputer.labelEl.textContent = `Is Player ${playerN} a computer?`;
                this.playerIsComputer.containerEl.appendChild(
                    this.playerIsComputer.labelEl
                );

                this.playerIsComputer.inputEl.type = 'checkbox';
                this.playerIsComputer.inputEl.addEventListener('change', () =>
                    onIsComputerClick(
                        this.playerIsComputer.inputEl,
                        this.playerName.inputEl
                    )
                );
                this.playerIsComputer.containerEl.appendChild(
                    this.playerIsComputer.inputEl
                );

                function onIsComputerClick(checkbox, nameInput) {
                    if (checkbox.checked) {
                        nameInput.value = 'Computer';
                        nameInput.disabled = true;
                    } else {
                        nameInput.value = '';
                        nameInput.disabled = false;
                    }
                }

                this.containerEl.appendChild(this.playerIsComputer.containerEl);
            };
        }

        render() {
            this.playerName.render();
            this.playerIsComputer.render();
            containerEl.appendChild(this.containerEl);
        }
    }

    class PlayerInfoAttribute {
        constructor(playerN, attribute) {
            this.playerN = playerN;

            this.containerEl = document.createElement('div');
            this.containerEl.classList.add(`player-${attribute}`);

            this.labelEl = document.createElement('label');
            this.labelEl.setAttribute('for', `player${playerN}-${attribute}`);

            this.inputEl = document.createElement('input');
            this.inputEl.id = `player${playerN}-${attribute}`;
            this.inputEl.setAttribute('name', `player${playerN}-${attribute}`);
        }
    }

    for (let playerN = 1; playerN < 3; playerN++) {
        const playerInfo = new PlayerInfo(playerN);
        playerInfo.render();
    }

    const playBtn = document.createElement('button');
    playBtn.textContent = 'Play';
    containerEl.appendChild(playBtn);

    // on check of isComputer
    function onIsComputerClick(checkbox, nameInput) {
        if (checkbox.checked) {
            nameInput.value = 'Computer';
            nameInput.disabled = true;
        } else {
            nameInput.value = '';
            nameInput.disabled = false;
        }
    }

    // on click submit button
    function onPlayBtnClick(e) {
        // get name inputs
        // if none, default to "Player 1"
        // get is computer inputs
        // remove setup elements
        // play game function
        // this should render the boards
    }

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
