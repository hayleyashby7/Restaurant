import { aboutContent } from "./about.js";

// Generate Page
export function generatePage() {
	const content = document.getElementById("content");

	content.appendChild(generateHeader());
	content.appendChild(generateContent());
	content.appendChild(generateFooter());
}

export function updateContentText(contentText) {
	const content = document.getElementsByClassName("content-container")[0];
	content.replaceChild(contentText, content.childNodes[0]);
}

function generateHeader() {
	const header = document.createElement("header");
	header.classList.add("header-container");

	const headerContent = document.createElement("h1");
	headerContent.classList.add("header-text");
	headerContent.innerHTML = "3 Legged Stool";

	header.appendChild(headerContent);

	header.appendChild(generateNav());

	return header;
}

function generateNav() {
	const navBar = document.createElement("nav");
	navBar.classList.add("nav-bar");
	navBar.setAttribute("role", "navigation");

	const about = document.createElement("button");
	about.classList.add("nav-btn", "about", "active");
	about.innerHTML = "About";
	navBar.appendChild(about);

	const menu = document.createElement("button");
	menu.classList.add("nav-btn", "menu");
	menu.innerHTML = "Menu";
	navBar.appendChild(menu);

	const contact = document.createElement("button");
	contact.classList.add("nav-btn", "contact");
	contact.innerHTML = "Contact";
	navBar.appendChild(contact);

	return navBar;
}

function generateContent() {
	const content = document.createElement("main");
	content.classList.add("content-container");

	const contentText = aboutContent();

	content.appendChild(contentText);

	return content;
}

function generateFooter() {
	const footer = document.createElement("footer");
	footer.classList.add("footer-container");

	const footerContent = document.createElement("p");
	footerContent.classList.add("footer-text");
	footerContent.innerHTML = "&copy Hayley Ashby 2022";

	footer.appendChild(footerContent);

	return footer;
}
