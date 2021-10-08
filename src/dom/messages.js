import { main } from '../index';
import { setup } from './setup-dom';

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
                // render "Player X, please place your bugs by typing..."
                text.push(
                    `${turnData.whoDidAction}, please place your bugs by typing in coordinates for where you would like the topmost or leftmost unit to be. Please type the coordinates with a capital letter and number (example: A1).`
                );
                return;
            case 'miss':
                text.push(
                    `${turnData.whoDidAction} missed at ${turnData.coords}`
                );
                break;
            case 'hit':
                text.push(
                    `${turnData.whoDidAction} hit ${turnData.whoReceivedAction}'s ${turnData.hitBug} at ${turnData.coords}!`
                );
                break;
            default:
                console.log('Something went wrong with messages');
        }

        // // render "Pass to other player"
        // if (turnData.firstTurn) {
        // }

        if (turnData.wasABugSwatted) {
            text.push(
                `${turnData.whoReceivedAction}'s ${turnData.missOrBug} has been swatted!`
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
