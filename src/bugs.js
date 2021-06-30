class Bug {
    constructor(length) {
        this._length = length;
        this.units = this._initUnits();
    }

    _initUnits() {
        const units = [];
        for (let i = 0; i < this._length; i++) {
            // 'safe' indicates a non-hit unit.
            units.push('safe');
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

    isSwatted() {
        if (this.units.includes('safe')) {
            // If not all units are hit, bug is not swatted.
            return false;
        } else {
            return true;
        }
    }
}

export default Bug;
