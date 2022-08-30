import openData from "../data/hours.json";

export function aboutContent() {
	const aboutDiv = document.createElement("div");
	aboutDiv.classList.add("content-text", "about-content");

	const aboutText = document.createElement("p");
	aboutText.classList.add("about-text");
	aboutText.innerHTML = "Whether it's a quick lunch on your own or a long hearty dinner with friends, there's always a warm welcome at the Three Legged Stool.";

	aboutDiv.appendChild(aboutText);
	aboutDiv.appendChild(addHours());

	return aboutDiv;
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
	const dailyTimes = openData.OpeningHours;

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
