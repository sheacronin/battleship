import game from './game';
import events from './events';

const main = document.querySelector('main');

game.boards.forEach((board) => {
    // populate grid.
    const boardContainer = document.createElement('div');
    boardContainer.classList.add('board');

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
                console.log('x', x);
                console.log('y', y);
                // emit event that x, y was clicked
                // game object should listen for that
                events.emit('unitClicked', [x, y]);
            });

            boardContainer.appendChild(square);

            unitIndex++;
        });
    });

    main.appendChild(boardContainer);
});

export default main;
