import { aboutContent } from './about/about.js';
import githubLogo from './github.png';

// Generate Page
export function generatePage() {
	const content = document.getElementById('content');

	content.appendChild(generateHeader());
	content.appendChild(generateContent());
	content.appendChild(generateFooter());
}

export function updateContentText(contentText) {
	const content = document.getElementsByClassName('content-container')[0];
	content.replaceChild(contentText, content.childNodes[0]);
}

function generateHeader() {
	const header = document.createElement('header');
	header.classList.add('header-container');

	const headerContent = document.createElement('h1');
	headerContent.classList.add('header-text');
	headerContent.innerHTML = 'Three Legged Stool';

	header.appendChild(headerContent);

	header.appendChild(generateNav());

	return header;
}

function generateNav() {
	const navBar = document.createElement('nav');
	navBar.classList.add('nav-bar');
	navBar.setAttribute('role', 'navigation');

	const about = document.createElement('button');
	about.classList.add('nav-btn', 'about', 'active');
	about.innerHTML = 'About';
	navBar.appendChild(about);

	const menu = document.createElement('button');
	menu.classList.add('nav-btn', 'menu');
	menu.innerHTML = 'Menu';
	navBar.appendChild(menu);

	const contact = document.createElement('button');
	contact.classList.add('nav-btn', 'contact');
	contact.innerHTML = 'Contact';
	navBar.appendChild(contact);

	return navBar;
}

function generateContent() {
	const content = document.createElement('main');
	content.classList.add('content-container');

	const contentText = aboutContent();

	content.appendChild(contentText);

	return content;
}

function generateFooter() {
	const footer = document.createElement('footer');
	footer.classList.add('footer-container');

	const githubLink = document.createElement('a');
	githubLink.setAttribute('href', 'https://github.com/hayleyashby7');

	const logo = document.createElement('img');
	logo.setAttribute('src', githubLogo);
	logo.classList.add('logo');

	githubLink.appendChild(logo);

	footer.appendChild(githubLink);

	const footerText = document.createElement('p');
	footerText.classList.add('footer-text');
	footerText.innerHTML = '&copy Hayley Ashby 2022';

	footer.appendChild(footerText);

	return footer;
}
