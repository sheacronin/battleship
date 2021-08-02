import game from './game';

// populate grid.
const board1 = document.createElement('div');
board1.classList.add('board');

game.board1.grid.forEach((row) => {
    row.forEach((unit) => {
        const square = document.createElement('button');
        square.classList.add('unit');
        board1.appendChild(square);
    });
});

const main = document.querySelector('main');
main.appendChild(board1);

export default main;
