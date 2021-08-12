import game from './game';
import events from './events';

const main = document.querySelector('main');

game.boards.forEach((board) => {
    // const boardContainer = document.createElement('section');
    // const boardTitle = document.createElement('h2');
    // boardTitle.textContent = board

    // populate grid.
    const boardEl = document.createElement('div');
    boardEl.classList.add('board');

    board.grid.forEach((row) => {
        let unitIndex = 0;

        row.forEach((unit) => {
            const square = document.createElement('button');
            square.classList.add('unit');

            // add styles if unit is bug / missed target
            // will need to only do some of this for own board
            if (unit) square.classList.add('bug');

            const x = unitIndex;
            const y = board.grid.indexOf(row);

            // add event listeners to squares
            square.addEventListener('click', () => {
                console.log(unit);
                // emit event that x, y was clicked
                // game object should listen for that
                events.emit('unitClicked', [x, y]);

                // should separate this --> happen after bug.hit runs?
                if (square.classList.contains('bug')) {
                    square.classList.add('hit');
                } else {
                    square.classList.add('miss');
                }

                console.log(board.grid);
            });

            boardEl.appendChild(square);

            unitIndex++;
        });
    });

    main.appendChild(boardEl);
});

export default main;
