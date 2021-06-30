class Player {
    constructor(isComputer = false) {
        this.isComputer = isComputer;
    }
    attack() {
        if (this.isComputer) {
            return [
                Math.floor(Math.random() * 10),
                Math.floor(Math.random() * 10),
            ];
        }
        return [0, 0];
    }
}

export default Player;
