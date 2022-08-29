import { generatePage, updateContentText } from "./pageLoad";
import { aboutContent } from "./about.js";
import { contactContent } from "./contact.js";
import { menuContent } from "./menu.js";
import { addBtnEvent } from "./events.js";

generatePage();
setPageEvents();

function setPageEvents() {
	addBtnEvent("about", loadAbout);
	addBtnEvent("menu", loadMenu);
	addBtnEvent("contact", loadContact);
}

function loadAbout(event) {
	updateNavGlow(event.target);

	updateContentText(aboutContent());
}

function loadMenu(event) {
	updateNavGlow(event.target);
	updateContentText(menuContent());
}

function loadContact(event) {
	updateNavGlow(event.target);
	updateContentText(contactContent());
}

function updateNavGlow(target) {
	const navBtns = document.getElementsByClassName("nav-btn");

	for (const button of navBtns) {
		button.classList.remove("active");
	}

	target.classList.add("active");
}
