import './styles.css';
import { setup } from './setup-dom';
import { containerEl as messagesContainer } from './messages';

const main = document.querySelector('main');

setup.render();
main.appendChild(messagesContainer);

export { main };
