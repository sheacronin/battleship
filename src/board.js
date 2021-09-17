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
            this.grid[y].fill(bug, x, x + bug.length);
        } else {
            for (let rowI = y; rowI < y + bug.length; rowI++) {
                if (this.grid[rowI][x] !== null) {
                    throw new Error('there is already another bug here!');
                }
                this.grid[rowI][x] = bug;
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
                console.log('miss!');
                this.grid[y][x] = 'miss';
                return [x, y];
            default:
                console.log('hit!');
                return this._hitBug(this.grid[y][x], [x, y]);
        }
    }

    _hitBug(bug, [x, y]) {
        console.log(this);
        let hitIndex = 0;

        if (bug.direction === 'horizontal') {
            // go to the left,
            // and if bug still there, increase hitIndex++
            // stop when bug not there.
            let n = 1;
            while (this.grid[y][x - n] === bug) {
                hitIndex++;
                n++;
            }
        } else {
            // vertical
            let n = 1;
            while (this.grid[y - n][x] === bug) {
                hitIndex++;
                n++;
            }
        }

        bug.hit(hitIndex);
        return bug;
    }

    areAllBugsSwatted() {
        return this.bugs.every((bug) => bug.isSwatted());
    }
}

export default Board;
