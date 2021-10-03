import './styles.css';
import { setup } from './dom/setup-dom';
import { containerEl as messagesContainer } from './dom/messages';

const main = document.querySelector('main');

setup.render();
main.appendChild(messagesContainer);

export { main };
