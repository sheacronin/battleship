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
            // this.grid[y][x]
            // this.grid[y].fill(bug, x, x + bug.length);
        } else {
            let bugIndex = 0;
            for (let rowI = y; rowI < y + bug.length; rowI++) {
                if (this.grid[rowI][x] !== null) {
                    throw new Error('there is already another bug here!');
                }
                this.grid[rowI][x] = [bug, bugIndex];
                bugIndex++;
            }
        }

        this.bugs.push(bug);
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
                return;
            case null:
                console.log(`Missed at ${x}, ${y}!`);
                this.grid[y][x] = 'miss';
                return ['miss', [x, y]];
            default:
                console.log(`Hit ${this.grid[y][x][0].name} at ${x}, ${y}`);
                return this._hitBug(this.grid[y][x], [x, y]);
        }
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
