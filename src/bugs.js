class Bug {
    constructor(length) {
        this._length = length;
        this.units = this._initUnits();
    }

    _initUnits() {
        const units = [];
        for (let i = 0; i < this._length; i++) {
            // 0 indicates a non-hit unit.
            units.push(0);
        }
        return units;
    }

    hit(index) {
        if (index >= this._length || index < 0) {
            throw new Error('invalid target index');
        }
        const newUnits = [...this.units];
        newUnits.splice(index, 1, 'hit');
        this.units = newUnits;
    }
}

export default Bug;
