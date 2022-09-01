import './reset.css';
import './style.css';
import './about/about.css';
import './menu/menu.css';
import './contact/contact.css';

import { generatePage, updateContentText } from './pageLoad.js';
import { aboutContent } from './about/about.js';
import { contactContent } from './contact/contact.js';
import { menuContent } from './menu/menu.js';
import { addBtnEvent, addCollapseEvent } from './events.js';

generatePage();
setPageEvents();

function setPageEvents() {
	addBtnEvent('about', loadAbout);
	addBtnEvent('menu', loadMenu);
	addBtnEvent('contact', loadContact);
}

function loadAbout(event) {
	updateNavGlow(event.target);

	updateContentText(aboutContent());
}

function loadMenu(event) {
	updateNavGlow(event.target);
	updateContentText(menuContent());
	addCollapseEvent(collapseMenuHandler);
}

function loadContact(event) {
	updateNavGlow(event.target);
	updateContentText(contactContent());
}

function updateNavGlow(target) {
	const navBtns = document.getElementsByClassName('nav-btn');

	for (const button of navBtns) {
		button.classList.remove('active');
	}

	target.classList.add('active');
}

function collapseMenuHandler(event) {
	event.target.classList.toggle('active');

	const content = event.target.nextElementSibling;

	if (content.style.display === 'flex') {
		content.style.display = 'none';
	} else {
		content.style.display = 'flex';
	}
}
