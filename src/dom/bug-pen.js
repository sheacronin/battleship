import game from '../game';
import styleUnitWithBugImage from './bug-images';

class BugPen {
    constructor(boardDisplay) {
        this.boardDisplay = boardDisplay;
        this.board = boardDisplay.board;
        this.owner = boardDisplay.boardOwnerPlayer;

        this.hasBeenCreated = false;
        this.bugsOnBoardCount = 0;

        this.containerEl = document.createElement('div');
        this.containerEl.classList.add('bug-pen');

        this.titleEl = document.createElement('h3');
        this.titleEl.textContent = `${this.owner.name}'s Bugs`;
        this.containerEl.appendChild(this.titleEl);

        this.placeBugsRandomlyBtn = document.createElement('button');
        this.placeBugsRandomlyBtn.classList.add('place-bugs-random');
        this.placeBugsRandomlyBtn.textContent = 'Place Bugs Randomly';
        this.containerEl.appendChild(this.placeBugsRandomlyBtn);
    }

    createPen(bugs) {
        bugs.forEach((bug) => {
            const bugContainer = document.createElement('div');
            bugContainer.classList.add('bug-container');
            bugContainer.classList.add(bug.name.toLowerCase());

            const bugName = document.createElement('h4');
            bugName.textContent = bug.name;
            bugContainer.appendChild(bugName);

            const wholeBug = document.createElement('div');
            wholeBug.classList.add('whole-bug');
            wholeBug.draggable = true;
            this.addDragEventListeners(wholeBug);

            for (let i = 0; i < bug.units.length; i++) {
                const bugUnit = document.createElement('div');
                bugUnit.classList.add('unit');
                bugUnit.classList.add('bug');
                styleUnitWithBugImage(bugUnit, bug, i);
                wholeBug.appendChild(bugUnit);
            }

            bugContainer.appendChild(wholeBug);

            // only add inputs if the owner of the bugs is human
            if (!this.owner.isComputer) {
                bugContainer.appendChild(this._createRotateBtn(bug, wholeBug));
                bugContainer.appendChild(this._createCoordsInput(bug));
            }

            this.containerEl.appendChild(bugContainer);
        });

        this.placeBugsRandomlyBtn.addEventListener('click', () => {
            bugs.forEach((bug) => this.board.placeBugRandomly(bug));
            this.placeBugsRandomlyBtn.disabled = true;
            this.onAllBugsArePlaced();
        });

        // reset bugs on board object so that they don't get doubled up
        // when the player places them on the board
        if (!this.owner.isComputer) {
            this.board.bugs = [];
        }

        // change this flag so extra bugs don't get added by BoardDisplay
        this.hasBeenCreated = true;
    }

    _createRotateBtn(bug, bugEl) {
        const rotateBtn = document.createElement('button');
        rotateBtn.classList.add('rotate-bug');
        rotateBtn.textContent = 'Rotate Bug';
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
                styleUnitWithBugImage(bugEl.childNodes[i], bug, i);
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

        this.boardDisplay.render();

        submitBtn.remove();

        // TODO: add edit button

        this.bugsOnBoardCount++;
        if (this.bugsOnBoardCount === 5) {
            this.onAllBugsArePlaced();
        }
    }

    onAllBugsArePlaced() {
        console.log('all bugs have been added!');
        const enemy = game.getEnemyPlayer(this.owner);
        if (enemy.isComputer) {
            game.setupFirstTurn();
        } else {
            // Check if it is player 2, because it will be player 1's turn
            if (!enemy.isMyTurn) {
                game.placeBugsFromPen(enemy);
            } else {
                // If the enemy is p1, p2 has already placed bugs
                // so we can begin the game
                game.setupFirstTurn();
            }
        }
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

export { BugPen };
