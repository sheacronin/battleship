import game from '../game';
import { BugPen } from './bug-pen';
import { main } from '../index';
import { styleUnitWithBugImageWithRotation } from './bug-images';

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
            this.containerEl.classList.add('active');
        } else {
            this.containerEl.classList.remove('active');
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
            const bug = unit[0];
            const unitIndex = unit[1];
            // if this unit was hit, add styles
            if (bug.units[unitIndex] === 'hit') unitEl.classList.add('hit');
            // if this bug was swatted, add styles
            if (bug.isSwatted()) unitEl.classList.add('swatted');
            // temporarily add name until bug assets are added
            if (game.shouldShowBugs(this.boardOwnerPlayer)) {
                unitEl.classList.add('bug');
                styleUnitWithBugImageWithRotation(unitEl, bug, unitIndex);
            }
        }
    }

    _shouldThisBoardBeActive() {
        return !this.boardOwnerPlayer.isMyTurn;
    }

    _shouldThisBoardBeClickable() {
        return (
            !this.boardOwnerPlayer.isMyTurn && !game.getWhoseTurn().isComputer
        );
    }

    _addClickEventListener(unitEl, [x, y]) {
        unitEl.addEventListener('click', () => game.playTurn(x, y));
    }

    disable() {
        // styles - opacity lower
        this.boardEl.style.opacity = '0.5';
        // remove active class
        this.containerEl.classList.remove('active');
        // disable unit buttons
        this.boardEl.childNodes.forEach((unit) => (unit.disabled = true));
    }
}

export { BoardDisplay };
