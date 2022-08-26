// Generate Page
export function generatePage() {
	const content = document.getElementById("content");

	content.appendChild(generateHeader());
	content.appendChild(generateNav());
	content.appendChild(generateContent());
	content.appendChild(generateFooter());
}

function generateHeader() {
	const header = document.createElement("header");
	header.classList.add("header-container");

	const headerContent = document.createElement("h1");
	headerContent.classList.add("header-title");
	headerContent.innerHTML = "Three Legged Stool";

	header.appendChild(headerContent);

	return header;
}
function generateNav() {
	const navBar = document.createElement("nav");
	navBar.classList.add("nav-bar");
	navBar.setAttribute("role", "navigation");

	return navBar;
}

function generateContent() {
	const content = document.createElement("main");
	content.classList.add("content-container");

	const contentText = document.createElement("p");
	contentText.classList.add("content-text");
	contentText.innerHTML = "EXAMPLE TEXT FOR NOW";

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
