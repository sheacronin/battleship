import { main } from '../index';
import { setup } from './setup-dom';

function convertIndiciesToCoords(indicies) {
    const letter = indicies[0];
    const number = indicies[1];
    let coords = '';

    switch (letter) {
        case 0:
            coords = 'A';
            break;
        case 1:
            coords = 'B';
            break;
        case 2:
            coords = 'C';
            break;
        case 3:
            coords = 'D';
            break;
        case 4:
            coords = 'E';
            break;
        case 5:
            coords = 'F';
            break;
        case 6:
            coords = 'G';
            break;
        case 7:
            coords = 'H';
            break;
        case 8:
            coords = 'I';
            break;
        case 9:
            coords = 'J';
            break;
        default:
            throw new Error('invalid first index');
    }

    if (number < 0 || number > 9 || isNaN(number)) {
        throw new Error('invalid second index');
    }

    coords += number + 1;

    return coords;
}

const messages = (() => {
    const containerEl = document.createElement('div');
    containerEl.id = 'messages';

    const text = [];

    function render(turnData) {
        containerEl.remove();
        _clear();
        _create(turnData);
        text.forEach((message) => {
            if (message === 'playAgainBtn') {
                containerEl.appendChild(playAgainBtn);
            } else {
                const p = document.createElement('p');
                p.textContent = message;
                containerEl.appendChild(p);
            }
        });
        main.appendChild(containerEl);
    }

    function _clear() {
        while (containerEl.firstChild) {
            containerEl.removeChild(containerEl.firstChild);
        }
        text.length = 0;
    }

    function _create(turnData) {
        if (!turnData) {
            text.push(
                'Welcome to BatteBug! Please enter your information and click "Play".'
            );
            return;
        }

        switch (turnData.action) {
            case 'firstTurn':
                text.push(
                    `${turnData.whoDidAction}, you go first! Click on ${turnData.whoReceivedAction}'s board to attack!`
                );
                return;
            case 'placeBugs':
                text.push(
                    `${turnData.whoDidAction}, please place your bugs by typing in coordinates for where you would like the topmost or leftmost unit to be. Please type the coordinates with a capital letter and number (example: A1).`
                );
                return;
            case 'miss':
                turnData.coords = convertIndiciesToCoords(turnData.coords);
                text.push(
                    `${turnData.whoDidAction} missed at ${turnData.coords}`
                );
                break;
            case 'hit':
                turnData.coords = convertIndiciesToCoords(turnData.coords);
                text.push(
                    `${turnData.whoDidAction} hit one of ${turnData.whoReceivedAction}'s bugs at ${turnData.coords}!`
                );
                break;
            default:
                console.log('Something went wrong with messages');
        }

        // TODO:
        // // render "Pass to other player"
        // if (turnData.firstTurn) {
        // }

        if (turnData.wasABugSwatted) {
            text.push(
                `${turnData.whoReceivedAction}'s ${turnData.hitBug} has been swatted!`
            );
        }

        if (!turnData.shouldGameEnd) {
            text.push(`It is ${turnData.whoReceivedAction}'s turn`);
        } else {
            text.push(`Game over! ${turnData.whoDidAction} wins!`);
            text.push('playAgainBtn');
        }
    }

    return { render };
})();

const playAgainBtn = document.createElement('button');
playAgainBtn.textContent = 'Play Again';
playAgainBtn.addEventListener('click', () => {
    while (main.firstChild) {
        main.removeChild(main.firstChild);
    }
    setup.render();
});

export default messages;
