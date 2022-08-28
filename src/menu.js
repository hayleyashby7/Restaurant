function MenuItem(name, image, description, price) {
	this.name = name;
	this.image = image;
	this.description = description;
	this.price = price;

	this.getName = function () {
		return this.name;
	};

	this.getImage = function () {
		return this.image;
	};

	this.getDescription = function () {
		return this.description;
	};

	this.getPrice = function () {
		return this.price;
	};
}

export function menuContent() {
	const menuDiv = document.createElement("div");

	menuDiv.classList.add("menu-div");

	const testItem = new MenuItem("NAME", "", "TEST DESC", "9.99");

	menuDiv.appendChild(addItem(testItem));

	return menuDiv;
}

function addItem(item) {
	const menuItem = document.createElement("div");
	menuItem.classList.add("menu-item");

	const itemName = document.createElement("h1");
	itemName.innerHTML = item.getName();

	const itemImage = document.createElement("img");
	itemName.setAttribute("src", item.getImage());
	itemName.setAttribute("alt", item.getName());

	const itemText = document.createElement("p");
	itemText.innerHTML = item.getDescription();

	const itemPrice = document.createElement("p");
	itemPrice.innerHTML = item.getPrice();

	menuItem.appendChild(itemName);
	menuItem.appendChild(document.createElement("br"));
	menuItem.appendChild(itemImage);
	menuItem.appendChild(document.createElement("br"));
	menuItem.appendChild(itemText);
	menuItem.appendChild(document.createElement("br"));
	menuItem.appendChild(itemPrice);

	return menuItem;
}
