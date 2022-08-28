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

function loadAbout() {
	updateContentText(aboutContent());
}

function loadMenu() {
	updateContentText(menuContent());
}

function loadContact() {
	updateContentText(contactContent());
}
