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
            this.coordinates[y].fill(bug.name, x, x + bug.length);
        } else {
            for (let rowI = y; rowI < y + bug.length; rowI++) {
                this.coordinates[rowI][x] = bug.name;
            }
        }
    }
}

export default Board;
