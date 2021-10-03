import { main } from './board-dom';
import { setup } from './setup-dom';

class MessageDisplay {
    constructor() {
        this.messageEl = document.createElement('p');
    }
}

const displays = {
    previousAction: new MessageDisplay(),
    wasABugSwatted: new MessageDisplay(),
    whoseTurn: new MessageDisplay(),
};

displays.previousAction.render = (turnData) => {
    let message;
    if (turnData.missOrBug === 'miss') {
        message = `${turnData.whoDidAction.name} missed at ${turnData.coords}`;
    } else {
        message = `${turnData.whoDidAction.name} hit ${turnData.whoReceivedAction.name}'s ${turnData.missOrBug.name} at ${turnData.coords}!`;
    }

    displays.previousAction.messageEl.textContent = message;
};

displays.wasABugSwatted.render = (turnData) => {
    let message;
    if (turnData.wasABugSwatted) {
        message = `${turnData.whoReceivedAction.name}'s ${turnData.missOrBug.name} has been swatted!`;
    } else {
        message = '';
    }

    displays.wasABugSwatted.messageEl.textContent = message;
};

displays.whoseTurn.render = (turnData) => {
    if (!turnData.shouldGameEnd) {
        displays.whoseTurn.messageEl.textContent = `It is ${turnData.whoReceivedAction.name}'s turn`;
    } else {
        displays.whoseTurn.messageEl.textContent = `Game over! ${turnData.whoDidAction.name} wins!`;
        displays.whoseTurn.messageEl.appendChild(playAgainBtn);
    }
};

const containerEl = document.createElement('div');
containerEl.id = 'messages';

for (let message in displays) {
    containerEl.appendChild(displays[message].messageEl);
}

const playAgainBtn = document.createElement('button');
playAgainBtn.textContent = 'Play Again';
playAgainBtn.addEventListener('click', () => {
    while (main.firstChild) {
        main.removeChild(main.firstChild);
    }
    setup.render();
});

export { containerEl, displays };
