import game from './game';

const main = document.querySelector('main');

game.boards.forEach((board) => {
    // populate grid.
    const boardContainer = document.createElement('div');
    boardContainer.classList.add('board');

    board.grid.forEach((row) => {
        row.forEach((unit) => {
            const square = document.createElement('button');
            square.classList.add('unit');

            // add styles if unit is bug / missed target
            // will need to only do some of this for own board
            if (unit) square.classList.add('bug');

            boardContainer.appendChild(square);
        });
    });

    main.appendChild(boardContainer);
});

export default main;
