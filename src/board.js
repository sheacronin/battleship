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
        const row = [...this.coordinates[y]];
        row.fill(bug.name, x, x + bug.length);
        this.coordinates[y] = row;
        console.log(row, x, x + bug.length);
    }
}

export default Board;
