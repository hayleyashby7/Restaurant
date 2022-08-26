// Generate Page
export function generatePage() {
	const content = document.getElementById("content");

	content.appendChild(generateHeader());
	content.appendChild(generateContent());
	content.appendChild(generateFooter());
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
	about.classList.add("nav-btn", "about");
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

	const contentText = document.createElement("p");
	contentText.classList.add("content-text");
	contentText.innerHTML = "Whether it's a quick lunch on your own or a long hearty dinner with friends, there's always a warm welcome at the 3 Legged Stool.";

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
