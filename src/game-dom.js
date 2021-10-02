import game from './game';

const main = document.querySelector('main');

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
            this.playerName = new PlayerName(playerN, 'name');
            this.playerIsComputer = new PlayerIsComputer(
                playerN,
                'is-computer'
            );
        }

        render() {
            this.playerName.create();
            this.containerEl.appendChild(this.playerName.containerEl);

            this.playerIsComputer.create(this.playerName.inputEl);
            this.containerEl.appendChild(this.playerIsComputer.containerEl);

            containerEl.appendChild(this.containerEl);
        }
    }

    class PlayerInfoAttribute {
        constructor(playerN, attribute) {
            this.playerN = playerN;
            this.attribute = attribute;

            this.containerEl = document.createElement('div');
            this.containerEl.classList.add(`player-${this.attribute}`);

            this.labelEl = document.createElement('label');
            this.labelEl.setAttribute(
                'for',
                `player${playerN}-${this.attribute}`
            );

            this.inputEl = document.createElement('input');
            this.inputEl.id = `player${playerN}-${this.attribute}`;
            this.inputEl.setAttribute(
                'name',
                `player${playerN}-${this.attribute}`
            );
        }
    }

    class PlayerName extends PlayerInfoAttribute {
        constructor(playerN, attribute) {
            super(playerN, attribute);
            this.labelEl.textContent = `What is Player ${playerN}'s name?`;
        }

        create() {
            this.containerEl.appendChild(this.labelEl);
            this.containerEl.appendChild(this.inputEl);
        }
    }

    class PlayerIsComputer extends PlayerInfoAttribute {
        constructor(playerN, attribute) {
            super(playerN, attribute);
            this.labelEl.textContent = `Is Player ${playerN} a computer?`;
        }

        create(playerNameInput) {
            this.containerEl.appendChild(this.labelEl);

            this.inputEl.type = 'checkbox';
            this.inputEl.addEventListener('change', () =>
                this.onIsComputerClick(playerNameInput)
            );

            if (this.playerN === 2) {
                this.makePlayerAComputer(playerNameInput);
            }

            this.containerEl.appendChild(this.inputEl);
        }

        onIsComputerClick(nameInput) {
            if (this.inputEl.checked) {
                this.makePlayerAComputer(nameInput);
            } else {
                this.makePlayerNotAComputer(nameInput);
            }
        }

        makePlayerAComputer(nameInput) {
            this.inputEl.checked = true;
            nameInput.value = 'Computer';
            nameInput.disabled = true;
        }

        makePlayerNotAComputer(nameInput) {
            this.inputEl.checked = false;
            nameInput.value = '';
            nameInput.disabled = false;
        }
    }

    const playersNameInfo = {};

    for (let playerN = 1; playerN < 3; playerN++) {
        const playerInfo = new PlayerInfo(playerN);
        playersNameInfo[playerN] = playerInfo.playerName;
        playerInfo.render();
    }

    const playBtn = document.createElement('button');
    playBtn.textContent = 'Play';
    playBtn.addEventListener('click', onPlayBtnClick);
    containerEl.appendChild(playBtn);

    // on click submit button
    function onPlayBtnClick() {
        // get name inputs
        const playerNames = {
            1: playersNameInfo['1'].inputEl.value,
            2: playersNameInfo['2'].inputEl.value,
        };

        // if none, default to "Player N"
        for (let player in playerNames) {
            if (playerNames[player] === '') {
                playerNames[player] = `Player ${player}`;
            }
        }

        // remove setup elements
        removeSetup();

        // play game function
        game.setup(playerNames);
        // this should render the boards
    }

    function render() {
        main.appendChild(containerEl);
    }

    function removeSetup() {
        main.removeChild(containerEl);
    }

    return { render };
})();

setup.render();

class BoardDisplay {
    constructor(board, boardOwnerPlayer) {
        this.board = board;
        this.boardOwnerPlayer = boardOwnerPlayer;
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

class BugPen {
    constructor(bugs) {
        this.bugs = bugs;
        this.bugEls = [];
        this.containerEl = document.createElement('div');
        this.containerEl.classList.add('bug-pen');
    }

    render() {
        this.bugs.forEach((bug) => {
            const bugContainer = document.createElement('div');
            bugContainer.classList.add('bug-container');
            bug.units.forEach(() => {
                const bugUnit = document.createElement('div');
                bugUnit.classList.add('unit');
                bugUnit.classList.add('bug');
                bugContainer.appendChild(bugUnit);
            });

            this.containerEl.appendChild(bugContainer);
        });

        main.appendChild(this.containerEl);
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
playAgainBtn.addEventListener('click', () => {
    while (main.firstChild) {
        main.removeChild(main.firstChild);
    }
    setup.render();
});

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

export { BoardDisplay, BugPen, messageDisplays };
