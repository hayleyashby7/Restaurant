function component(type, classes = "", id = "", content = "") {
	const element = document.createElement(type);

	if (classes != "") {
		element.classList.add(classes);
	}

	if (id != "") {
		element.id = id;
	}

	if (content != "") {
		element.innerHTML = content;
	}

	return element;
}

function generateHeader() {
	const header = component("div", "header");

	header.appendChild(component("div", "logo", "", "LOGO HERE"));

	const info = generateInfoMenu();
	header.appendChild(info);

	header.appendChild(component("div", "title", "", "Three Legged Stool"));

	return header;
}

function generateInfoMenu() {
	const info = component("div", "info-container");

	info.appendChild(component("div", "info", "about", "About"));
	info.appendChild(component("div", "info", "menu", "Menu"));
	info.appendChild(component("div", "info", "contact", "Contact"));

	return info;
}

function generateContent() {
	const content = component("div", "content-container");
	content.appendChild(
		component(
			"p",
			"content-text",
			"",
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed augue porttitor, sagittis ex nec, suscipit lacus. Vivamus non orci metus. Curabitur varius rutrum malesuada. Etiam turpis mi, sagittis eu nulla ut, tempor ornare nunc. Maecenas lorem risus, aliquam sed accumsan vel, mollis quis dolor. Aenean laoreet lobortis metus dictum pellentesque. Cras tincidunt neque a elit faucibus sagittis."
		)
	);
	content.appendChild(document.createElement("br"));
	content.appendChild(
		component(
			"p",
			"content-text",
			"",
			"Nulla rutrum eget quam sit amet ultrices. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec augue magna, feugiat at elit vitae, consequat mollis erat. Etiam eu egestas arcu, sed vulputate enim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque in gravida tellus. Aliquam ut nisi ut massa semper lobortis. Fusce vel scelerisque sem. Proin vel velit quis ipsum imperdiet dapibus. Phasellus commodo lectus eu vestibulum interdum. Maecenas rutrum purus metus, non lacinia est maximus at. Quisque porttitor turpis eget purus pretium tincidunt. Nam ut nisi sed sem interdum iaculis in lacinia felis. Donec quis lectus id erat pellentesque convallis id ac felis."
		)
	);
	content.appendChild(document.createElement("br"));
	content.appendChild(
		component(
			"p",
			"content-text",
			"",
			"Suspendisse tempus viverra neque eu malesuada. Morbi consectetur felis nec nisl laoreet faucibus. Curabitur eget ex tristique, aliquam augue eu, commodo ipsum. Morbi vehicula metus a quam venenatis venenatis et dapibus turpis. Sed facilisis lobortis dolor, eu pellentesque dolor. Suspendisse gravida nisi a erat ultricies aliquet. Praesent molestie id dolor quis egestas. Fusce vel commodo turpis."
		)
	);

	return content;
}

// Main content
export function generateMain() {
	const mainContent = document.getElementById("content");
	mainContent.appendChild(generateHeader());
	mainContent.appendChild(generateContent());
}
