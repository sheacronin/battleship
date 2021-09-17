class Player {
    constructor(name) {
        this.name = name;
        this.isComputer = name === 'Computer';
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
