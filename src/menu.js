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

	menuItem.appendChild(addItemName(item));
	menuItem.appendChild(document.createElement("br"));

	menuItem.appendChild(addItemImage(item));
	menuItem.appendChild(document.createElement("br"));

	menuItem.appendChild(addItemText(item));
	menuItem.appendChild(document.createElement("br"));

	menuItem.appendChild(addItemPrice(item));

	return menuItem;
}

function addItemName(item) {
	const itemName = document.createElement("h1");
	itemName.innerHTML = item.getName();

	return itemName;
}

function addItemImage(item) {
	const itemImage = document.createElement("img");
	itemImage.setAttribute("src", item.getImage());
	itemImage.setAttribute("alt", item.getName());

	return itemImage;
}

function addItemText(item) {
	const itemText = document.createElement("p");
	itemText.innerHTML = item.getDescription();

	return itemText;
}

function addItemPrice(item) {
	const itemPrice = document.createElement("p");
	itemPrice.innerHTML = item.getPrice();

	return itemPrice;
}
