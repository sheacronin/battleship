import game from '../game';

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
        this.placeBugsRandomlyBtn.textContent = 'Place Bugs Randomly';
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

            bug.units.forEach(() => {
                const bugUnit = document.createElement('div');
                bugUnit.classList.add('unit');
                bugUnit.classList.add('bug');
                wholeBug.appendChild(bugUnit);
            });

            bugContainer.appendChild(wholeBug);

            // only add inputs if the owner of the bugs is human
            if (!this.owner.isComputer) {
                bugContainer.appendChild(this._createRotateBtn(bug, wholeBug));
                bugContainer.appendChild(this._createCoordsInput(bug));
            }

            this.containerEl.appendChild(bugContainer);
        });

        // append button to place bugs randomly
        this.placeBugsRandomlyBtn.addEventListener('click', () => {
            // clear board bugs because they will be added again when placed
            bugs.forEach((bug) => this.board.placeBugRandomly(bug));
            this.placeBugsRandomlyBtn.disabled = true;
            this.onAllBugsArePlaced();
        });
        this.containerEl.appendChild(this.placeBugsRandomlyBtn);

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
        rotateBtn.textContent = 'Rotate Bug';
        rotateBtn.addEventListener('click', () => {
            if (bug.direction === 'horizontal') {
                bug.direction = 'vertical';
                bugEl.style.flexDirection = 'column';
            } else {
                bug.direction = 'horizontal';
                bugEl.style.flexDirection = 'row';
            }
        });
        return rotateBtn;
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
        const [x, y] = this.board.convertCoordsToIndicies(inputEl.value);

        this.board.placeBug(bug, x, y);

        this.boardDisplay.render();

        submitBtn.remove();

        // TODO: add edit button

        // check if all coords have been submitted
        this.bugsOnBoardCount++;
        if (this.bugsOnBoardCount === 5) {
            this.onAllBugsArePlaced();
        }
    }

    onAllBugsArePlaced() {
        console.log('all bugs have been added!');
        // render both boards and start game
        // make sure turns switch twice if the other player is computer
        // so you can still go first

        // TODO: fix this section
        const enemy = game.getEnemyPlayer(this.owner);

        if (enemy.isComputer) {
            game.setupFirstTurn();
        } else {
            // If it is player 2, because it will be p1's turn
            if (!enemy.isMyTurn) {
                game.placeBugsFromPen(enemy);
            } else {
                // if the enemy is p1, p2 already placed bugs
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
