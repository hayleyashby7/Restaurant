import data from "../data/hours.json";

export function contactContent() {
	const contactDiv = document.createElement("div");

	contactDiv.classList.add("content-text", "contact-content");

	contactDiv.appendChild(addAddress());
	contactDiv.appendChild(addHours());
	contactDiv.appendChild(addContactDetails());

	return contactDiv;
}

function addAddress() {
	const address = document.createElement("div");
	address.classList.add("address");

	const header = document.createElement("h1");
	header.innerHTML = "Address";

	address.appendChild(header);

	return address;
}

function addHours() {
	const hours = document.createElement("div");
	hours.classList.add("hours");

	const header = document.createElement("h1");
	header.innerHTML = "Opening Times";

	hours.appendChild(header);

	const openingTimes = document.createElement("table");
	hours.appendChild(openingTimes);

	parseHours(openingTimes);

	return hours;
}

function parseHours(table) {
	const dailyTimes = data.OpeningHours;

	for (const daily of dailyTimes) {
		let dayRow = document.createElement("tr");

		let day = document.createElement("td");
		day.innerHTML = daily.Day;
		dayRow.appendChild(day);

		let times = document.createElement("td");
		times.innerHTML = daily.Hours;
		dayRow.appendChild(times);

		table.appendChild(dayRow);
	}
}

function addContactDetails() {
	const contact = document.createElement("div");
	contact.classList.add("contact");

	const header = document.createElement("h1");
	header.innerHTML = "Contact Us";

	contact.appendChild(header);

	return contact;
}
