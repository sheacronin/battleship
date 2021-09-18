class Player {
    constructor(name, enemyBoard) {
        this.name = name;
        this.isComputer = name === 'Computer';
        this.enemyBoard = enemyBoard;
        this.isMyTurn = false;
    }

    switchTurn() {
        this.isMyTurn = !this.isMyTurn;
    }

    attack(x, y) {
        if (!this.enemyBoard) {
            throw new Error('player must have an enemy board to attack');
        }

        if (this.isComputer) {
            x = Math.floor(Math.random() * 10);
            y = Math.floor(Math.random() * 10);
        }
        this.enemyBoard.receiveAttack(x, y);
        return [x, y];
    }
}

export default Player;
