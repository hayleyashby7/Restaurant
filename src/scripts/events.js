export function addBtnEvent(buttonName, handler) {
	let button = "";

	switch (buttonName) {
		case "about":
			button = document.getElementsByClassName("nav-btn about")[0];
			break;
		case "menu":
			button = document.getElementsByClassName("nav-btn menu")[0];
			break;
		case "contact":
			button = document.getElementsByClassName("nav-btn contact")[0];
			break;
		default:
			break;
	}

	if (button != "") {
		button.addEventListener("click", handler);
	}
}

export function addCollapseEvent(handler) {
	const collapseButtons = document.getElementsByClassName("collapse");

	for (const button of collapseButtons) {
		button.addEventListener("click", handler);
	}
}
