import game from './game';
import { containerEl as messagesContainer } from './messages';
import { setup } from './setup-dom';

const main = document.querySelector('main');

class BoardDisplay {
    constructor(board, boardOwnerPlayer) {
        this.board = board;
        this.boardOwnerPlayer = boardOwnerPlayer;
        this.containerEl = document.createElement('article');
        this.nameEl = document.createElement('h2');
        this.nameEl.classList.add('board-title');
        this.boardEl = document.createElement('div');
        this.boardEl.classList.add('board');
        this.bugPen = new BugPen(this);
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

        // add board labels
        this.boardEl.appendChild(this._createXAxisLabels());
        this.boardEl.appendChild(this._createYAxisLabels());

        // add units to board
        const unitEls = this._createUnits();
        unitEls.forEach((unitEl) => this.boardEl.appendChild(unitEl));

        // add board element
        this.containerEl.appendChild(this.boardEl);

        // add bug pen
        this.bugPen.render(this.board.bugs);

        // add container
        main.appendChild(this.containerEl);
    }

    _clearBoard() {
        while (this.boardEl.firstChild) {
            this.boardEl.removeChild(this.boardEl.firstChild);
        }
    }

    _createXAxisLabels() {
        const xLabelsContainer = document.createElement('div');
        xLabelsContainer.classList.add('board-x-labels');

        for (let n = 1; n <= 10; n++) {
            const xLabel = document.createElement('div');
            xLabel.textContent = n;
            xLabelsContainer.appendChild(xLabel);
        }

        return xLabelsContainer;
    }

    _createYAxisLabels() {
        const yLabelsContainer = document.createElement('div');
        yLabelsContainer.classList.add('board-y-labels');

        let yCharCode = 65;
        for (let n = 1; n <= 10; n++) {
            // Start y label as 'A'
            // add letter by unicode
            const yLabel = document.createElement('div');
            yLabel.textContent = String.fromCharCode(yCharCode);
            yLabelsContainer.appendChild(yLabel);

            yCharCode++;
        }

        return yLabelsContainer;
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
    constructor(boardDisplay) {
        this.boardDisplay = boardDisplay;
        this.board = boardDisplay.board;
        this.owner = boardDisplay.boardOwnerPlayer;

        this.bugEls = [];

        this.containerEl = document.createElement('div');
        this.containerEl.classList.add('bug-pen');

        this.titleEl = document.createElement('h3');
        this.titleEl.textContent = `${this.owner.name}'s Bugs`;
        this.containerEl.appendChild(this.titleEl);
    }

    render(bugs) {
        bugs.forEach((bug) => {
            const bugContainer = document.createElement('div');

            const bugName = document.createElement('h4');
            bugName.textContent = bug.name;
            bugContainer.appendChild(bugName);

            const wholeBug = document.createElement('div');
            wholeBug.classList.add('whole-bug');
            wholeBug.draggable = true;
            this.addDragEventListeners(wholeBug);

            bug.units.forEach(() => {
                const bugUnit = document.createElement('div');
                bugUnit.classList.add('unit');
                bugUnit.classList.add('bug');
                wholeBug.appendChild(bugUnit);
            });

            bugContainer.appendChild(wholeBug);

            // only add inputs if the owner of the bugs is human
            if (!this.owner.isComputer) {
                bugContainer.appendChild(this._createCoordsInput(bug));
            }

            this.containerEl.appendChild(bugContainer);
        });

        // reset bugs on board object so that they don't get doubled up
        // when the player places them on the board
        this.board.bugs = [];

        this.boardDisplay.containerEl.appendChild(this.containerEl);
    }

    _createCoordsInput(bug) {
        const coordsInputContainer = document.createElement('div');
        const label = document.createElement('label');
        coordsInputContainer.appendChild(label);

        label.textContent = 'Enter Coordinates:';
        const input = document.createElement('input');
        input.maxLength = 2;
        input.minLength = 2;
        coordsInputContainer.appendChild(input);

        const submit = document.createElement('button');
        submit.textContent = 'Place';
        submit.addEventListener('click', () =>
            this.onSubmitCoords(submit, input, bug)
        );
        coordsInputContainer.appendChild(submit);

        return coordsInputContainer;
    }

    onSubmitCoords(submitBtn, inputEl, bug) {
        console.log(inputEl.value);
        const [x, y] = this.board.convertCoordsToIndicies(inputEl.value);
        console.log(x, y);

        this.board.placeBug(bug, x, y);
        // render board
        this.boardDisplay.render();

        submitBtn.remove();
    }

    addDragEventListeners(bugContainer) {
        bugContainer.addEventListener('dragstart', onDragStart);

        function onDragStart(e) {
            console.log(e);
        }

        bugContainer.addEventListener('dragend', onDragEnd);

        function onDragEnd(e) {
            const dropX = e.screenX;
            const dropY = e.screenY;

            const dropEl = document.elementFromPoint(dropX, dropY);
            console.log(dropEl);
        }
    }
}

const playAgainBtn = document.createElement('button');
playAgainBtn.textContent = 'Play Again';
playAgainBtn.addEventListener('click', () => {
    while (main.firstChild) {
        main.removeChild(main.firstChild);
    }
    setup.render();
});

// Functions run on page load - move to index.js?
setup.render();
main.appendChild(messagesContainer);

export { BoardDisplay, BugPen, playAgainBtn, main };
