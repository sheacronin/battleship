import game from '../game';
import {
    styleUnitWithBugImageWithoutRotation,
    styleUnitWithBugImageWithRotation,
} from './bug-images';
import { passToPlayerNScreen } from './messages';
import rotateImg from '../img/rotate.png';

class BugPen {
    constructor(boardDisplay) {
        this.boardDisplay = boardDisplay;
        this.board = boardDisplay.board;
        this.owner = boardDisplay.boardOwnerPlayer;

        this.bugsOnBoard = [];

        this.containerEl = document.createElement('div');
        this.containerEl.classList.add('bug-pen');

        this.titleEl = document.createElement('h3');
        this.titleEl.textContent = `${this.owner.name}'s Bugs`;

        this.placeBugsRandomlyBtn = document.createElement('button');
        this.placeBugsRandomlyBtn.classList.add('place-bugs-random');
        this.placeBugsRandomlyBtn.textContent = 'Place Bugs Randomly';
    }

    render() {
        this._clear();

        this.createBugPen();

        this.boardDisplay.containerEl.appendChild(this.containerEl);
    }

    _clear() {
        while (this.containerEl.firstChild) {
            this.containerEl.removeChild(this.containerEl.firstChild);
        }
        this.containerEl.remove();
    }

    createBugPen() {
        this.containerEl.appendChild(this.titleEl);

        const bugsDiv = document.createElement('div');
        bugsDiv.classList.add('all-bugs-container');
        const bugContainers = this._createBugsEls(this.board.bugs);
        bugContainers.forEach((bugContainer) =>
            bugsDiv.appendChild(bugContainer)
        );
        this.containerEl.appendChild(bugsDiv);

        if (this.areWePlacingBugs()) {
            this._addPlaceBugsRandomlyBtn(this.board.bugs);
            this.containerEl.classList.remove('status-bugs');
        } else {
            this.containerEl.classList.add('status-bugs');
        }
    }

    _createBugsEls(bugs) {
        const bugContainers = [];

        bugs.forEach((bug) => {
            const bugContainer = document.createElement('div');
            bugContainer.classList.add('bug-container');
            bugContainer.classList.add(bug.name.toLowerCase());

            const bugName = document.createElement('h4');
            bugName.textContent = bug.name;
            bugContainer.appendChild(bugName);

            const wholeBug = document.createElement('div');
            wholeBug.classList.add('whole-bug');
            if (bug.isSwatted()) wholeBug.classList.add('swatted');

            for (let i = 0; i < bug.units.length; i++) {
                const bugUnit = document.createElement('div');
                bugUnit.classList.add('unit');
                bugUnit.classList.add('bug');
                styleUnitWithBugImageWithoutRotation(bugUnit, bug, i);
                wholeBug.appendChild(bugUnit);
            }

            bugContainer.appendChild(wholeBug);

            if (this.areWePlacingBugs() && !this.bugsOnBoard.includes(bug)) {
                this._addInputs(bugContainer, bug, wholeBug);
            }

            bugContainers.push(bugContainer);
        });

        return bugContainers;
    }

    areWePlacingBugs() {
        if (!this.owner.isComputer && this.bugsOnBoard.length !== 5) {
            return true;
        } else {
            return false;
        }
    }

    _addInputs(bugContainer, bug, wholeBug) {
        bugContainer.appendChild(this._createRotateBtn(bug, wholeBug));
        bugContainer.appendChild(this._createCoordsInput(bug));
    }

    _addPlaceBugsRandomlyBtn(bugs) {
        this.placeBugsRandomlyBtn.addEventListener('click', () => {
            bugs.forEach((bug) => {
                if (!this.bugsOnBoard.includes(bug)) {
                    this.board.placeBugRandomly(bug);
                    this.bugsOnBoard.push(bug);
                }
            });
            this.placeBugsRandomlyBtn.disabled = true;
            this.boardDisplay.render();
            setTimeout(() => this.onAllBugsArePlaced(), 1500);
        });
        this.containerEl.appendChild(this.placeBugsRandomlyBtn);
    }

    _createRotateBtn(bug, bugEl) {
        const rotateBtn = document.createElement('button');
        rotateBtn.classList.add('rotate-bug');

        const rotateImgEl = document.createElement('img');
        rotateImgEl.src = rotateImg;
        rotateImgEl.alt = 'Rotate Icon';
        rotateBtn.appendChild(rotateImgEl);

        rotateBtn.addEventListener('click', () => {
            if (bug.direction === 'horizontal') {
                bug.direction = 'vertical';
                bugEl.style.flexDirection = 'column';
            } else {
                bug.direction = 'horizontal';
                bugEl.style.flexDirection = 'row';
            }
            // update background styles
            for (let i = 0; i < bug.units.length; i++) {
                styleUnitWithBugImageWithRotation(bugEl.childNodes[i], bug, i);
            }
        });
        return rotateBtn;
    }

    _createCoordsInput(bug) {
        const coordsInputContainer = document.createElement('div');
        coordsInputContainer.classList.add('coords-input-container');

        const label = document.createElement('label');
        label.textContent = 'Coordinates:';
        coordsInputContainer.appendChild(label);

        const input = document.createElement('input');
        input.maxLength = 3;
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
        const [x, y] = this.board.convertCoordsToIndicies(inputEl.value);

        this.board.placeBug(bug, x, y);
        this.bugsOnBoard.push(bug);

        this.boardDisplay.render();

        submitBtn.remove();

        // TODO: add edit button

        if (this.bugsOnBoard.length === 5) {
            this.onAllBugsArePlaced();
        }
    }

    onAllBugsArePlaced() {
        console.log('all bugs have been added!');
        const enemy = game.getEnemyPlayer(this.owner);
        if (enemy.isComputer) {
            game.setupFirstTurn();
        } else {
            try {
                passToPlayerNScreen.render(enemy.name);
                game.placeBugsFromPen(enemy);
            } catch {
                console.log('catch');
                // switch the turns back so it is player 1's turn
                game.switchBothPlayersTurn();
                game.setupFirstTurn();
            }
        }
    }
}

export { BugPen };
