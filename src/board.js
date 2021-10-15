class Board {
    constructor() {
        this.grid = this._initGrid();
        this.bugs = [];
    }

    _initGrid() {
        const grid = [];
        for (let i = 0; i < 10; i++) {
            const row = [];
            for (let j = 0; j < 10; j++) {
                row.push(null);
            }
            grid.push(row);
        }
        return grid;
    }

    placeBug(bug, x, y) {
        if (
            x < 0 ||
            y < 0 ||
            x >= 10 ||
            y >= 10 ||
            (bug.direction === 'horizontal' && x + bug.length >= 10) ||
            (bug.direction === 'vertical' && y + bug.length >= 10)
        ) {
            throw new Error('cannot place bug off the grid');
        }

        if (bug.direction === 'horizontal') {
            if (
                this.grid[y]
                    .slice(x, x + bug.length)
                    .some((unit) => unit !== null)
            ) {
                throw new Error('there is already another bug here!');
            }
            for (let bugIndex = 0; bugIndex < bug.length; bugIndex++) {
                this.grid[y][x + bugIndex] = [bug, bugIndex];
            }
        } else {
            let bugIndex = 0;
            // first check if there are any other bugs here.
            for (let rowI = y; rowI < y + bug.length; rowI++) {
                if (this.grid[rowI][x] !== null) {
                    throw new Error('there is already another bug here!');
                }
            }
            // place the bug if there were no errors.
            for (let rowI = y; rowI < y + bug.length; rowI++) {
                this.grid[rowI][x] = [bug, bugIndex];
                bugIndex++;
            }
        }
    }

    placeBugRandomly(bug) {
        let x = Math.floor(Math.random() * 10);
        let y = Math.floor(Math.random() * 10);

        // select direction randomly as well
        let shouldDirectionChange = Math.random() < 0.5;
        if (shouldDirectionChange) bug.direction = 'vertical';

        try {
            this.placeBug(bug, x, y);
        } catch {
            // catch thrown error and re-run for bug
            // if there's an error
            this.placeBugRandomly(bug);
        }
    }

    receiveAttack(x, y) {
        switch (this.grid[y][x]) {
            case 'miss':
                console.log("you've already swatted here!");
                throw new Error('this unit has already been attacked!');
            case null:
                console.log(`Missed at ${x}, ${y}!`);
                this.grid[y][x] = 'miss';
                return ['miss', [x, y]];
            default:
                console.log(`Hit ${this.grid[y][x][0].name} at ${x}, ${y}`);
                return this._hitBug(this.grid[y][x], [x, y]);
        }
    }

    convertCoordsToIndicies(coords) {
        const letter = coords.slice(0, 1);
        const number = coords.slice(1);
        const indicies = [];
        switch (letter) {
            case 'A':
                indicies[1] = 0;
                break;
            case 'B':
                indicies[1] = 1;
                break;
            case 'C':
                indicies[1] = 2;
                break;
            case 'D':
                indicies[1] = 3;
                break;
            case 'E':
                indicies[1] = 4;
                break;
            case 'F':
                indicies[1] = 5;
                break;
            case 'G':
                indicies[1] = 6;
                break;
            case 'H':
                indicies[1] = 7;
                break;
            case 'I':
                indicies[1] = 8;
                break;
            case 'J':
                indicies[1] = 9;
                break;
            default:
                throw new Error('invalid coordinate letter');
        }

        if (number < 1 || number > 10 || isNaN(number)) {
            throw new Error('invalid coordinate number');
        }

        indicies[0] = number - 1;

        return indicies;
    }

    _hitBug([bug, bugIndex], [x, y]) {
        bug.hit(bugIndex);
        return [bug, [x, y]];
    }

    areAllBugsSwatted() {
        return this.bugs.every((bug) => bug.isSwatted());
    }
}

export default Board;
