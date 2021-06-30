class Board {
    constructor() {
        this.coordinates = this._initCoordinates();
    }

    _initCoordinates() {
        const coordinates = [];
        for (let i = 0; i < 10; i++) {
            const row = [];
            for (let j = 0; j < 10; j++) {
                row.push(null);
            }
            coordinates.push(row);
        }
        return coordinates;
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
                this.coordinates[y]
                    .slice(x, x + bug.length)
                    .some((unit) => unit !== null)
            ) {
                throw new Error('there is already another bug here!');
            }
            this.coordinates[y].fill(bug, x, x + bug.length);
        } else {
            for (let rowI = y; rowI < y + bug.length; rowI++) {
                if (this.coordinates[rowI][x] !== null) {
                    throw new Error('there is already another bug here!');
                }
                this.coordinates[rowI][x] = bug;
            }
        }
    }

    receiveAttack(x, y) {
        const isHit = this.coordinates[y][x] !== null;
        if (isHit) {
            const bug = this.coordinates[y][x];
            let hitIndex = 0;

            if (bug.direction === 'horizontal') {
                // go to the left,
                // and if bug still there, increase hitIndex++
                // stop when bug not there.
                let n = 1;
                while (this.coordinates[y][x - n] === bug) {
                    hitIndex++;
                    n++;
                }
            } else {
                // vertical
                let n = 1;
                while (this.coordinates[y - n][x] === bug) {
                    hitIndex++;
                    n++;
                }
            }

            bug.hit(hitIndex);
        }

        return isHit ? this.coordinates[y][x] : [x, y];
    }
}

export default Board;
