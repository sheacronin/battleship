import './styles.css';
import { setup } from './dom/setup-dom';
import messages from './dom/messages';

const main = document.querySelector('main');

messages.render();
setup.render();

export { main };
