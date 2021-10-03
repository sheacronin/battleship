import game from '../game';
import { main } from '../index';

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

export { setup };
