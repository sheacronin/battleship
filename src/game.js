import Player from './player';
import Board from './board';
import Bug from './bugs';
import events from './events';

const game = (() => {
    const player1 = new Player();
    const player2 = new Player(true);

    const board1 = new Board();
    const board2 = new Board();

    // add enemy board prop?
    player1.enemyBoard = board2;
    player2.enemyBoard = board1;

    const worm = new Bug(5, 'Worm');
    const caterpillar = new Bug(4, 'Caterpillar');
    const ant = new Bug(3, 'Ant');
    const spider = new Bug(3, 'Spider');
    const ladybug = new Bug(2, 'Ladybug');
    const bugCollection = [worm, caterpillar, ant, spider, ladybug];

    bugCollection.forEach((bug) => {
        board1.placeBugRandomly(bug);
        board2.placeBugRandomly(bug);
    });

    // store whose turn it is.
    let whoseTurn = player1;

    function switchTurn() {
        whoseTurn = whoseTurn === player1 ? player2 : player1;
    }

    // listen for events.
    events.on('unitClicked', ([x, y]) => {
        // determine who clicked/whose turn it is
        // player.attack() ??
        // use above determination to determine whose board
        // is being attacked
        whoseTurn.enemyBoard.receiveAttack(x, y);
        // get returned value?
        switchTurn();
    });

    return { boards: [board1, board2] };
})();

export default game;
