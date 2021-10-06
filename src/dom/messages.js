import { main } from '../index';
import { setup } from './setup-dom';

const messages = (() => {
    const containerEl = document.createElement('div');
    containerEl.id = 'messages';

    const text = [];

    function render(turnData) {
        console.log('rendering messages');
        containerEl.remove();
        _clear();
        _create(turnData);
        text.forEach((message) => {
            if (text === 'playAgainBtn') {
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
        }
        // render "Player X, please place your bugs by typing..."
        // render "Pass to other player"

        if (turnData.missOrBug === 'miss') {
            text.push(
                `${turnData.whoDidAction.name} missed at ${turnData.coords}`
            );
        } else {
            text.push(
                `${turnData.whoDidAction.name} hit ${turnData.whoReceivedAction.name}'s ${turnData.missOrBug.name} at ${turnData.coords}!`
            );
        }

        // was a bug swatted
        if (turnData.wasABugSwatted) {
            text.push(
                `${turnData.whoReceivedAction.name}'s ${turnData.missOrBug.name} has been swatted!`
            );
        }

        // whose turn
        if (!turnData.shouldGameEnd) {
            text.push(`It is ${turnData.whoReceivedAction.name}'s turn`);
        } else {
            text.push(`Game over! ${turnData.whoDidAction.name} wins!`);
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
