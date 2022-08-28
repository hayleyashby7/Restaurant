export function aboutContent() {
	const aboutDiv = document.createElement("div");
	aboutDiv.classList.add("content-text", "about-content");
	aboutDiv.innerHTML = "Whether it's a quick lunch on your own or a long hearty dinner with friends, there's always a warm welcome at the Three Legged Stool.";

	return aboutDiv;
}
