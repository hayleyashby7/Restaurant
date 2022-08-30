import contactData from "../data/contact.json";
import emailSVG from "../images/email.svg";
import phoneSVG from "../images/phone.svg";
import locationSVG from "../images/location.svg";

export function contactContent() {
	const contactDiv = document.createElement("div");

	contactDiv.classList.add("content-text", "contact-content");
	contactDiv.appendChild(addMap());
	contactDiv.appendChild(addContactDetails());

	return contactDiv;
}

function addMap() {
	const map = document.createElement("div");
	map.classList.add("map");

	const header = document.createElement("h1");
	header.innerHTML = "We're Here!";

	map.appendChild(header);

	const mapImage = document.createElement("img");
	mapImage.classList.add("contact-map");
	mapImage.src = "../src/images/map.png";

	map.appendChild(mapImage);

	return map;
}

function addContactDetails() {
	const contact = document.createElement("div");
	contact.classList.add("contact");

	const header = document.createElement("h1");
	header.innerHTML = "Contact Us";
	contact.appendChild(header);

	contact.appendChild(parseContact());

	return contact;
}

function parseContact() {
	const contactMethods = contactData.Methods;
	const methods = document.createElement("div");

	for (const contact of contactMethods) {
		let methodData = document.createElement("div");
		methodData.classList.add("contact-method");

		switch (contact.Method) {
			case "Email":
				methodData.innerHTML = emailSVG;
				break;
			case "Phone":
				methodData.innerHTML = phoneSVG;
				break;
			case "Address":
				methodData.innerHTML = locationSVG;
				break;
			default:
				break;
		}

		let details = document.createElement("p");
		details.innerHTML = contact.Details;

		methodData.appendChild(details);

		methods.appendChild(methodData);
	}

	console.log(emailSVG);

	return methods;
}
