import data from "../data/menu.json";

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

	const mainMeals = document.createElement("button");
	mainMeals.innerHTML = "Main Meals";
	mainMeals.classList.add("collapse");
	menuDiv.appendChild(mainMeals);

	const menuContent = document.createElement("div");
	menuContent.classList.add("content-text", "menu-content");
	menuDiv.appendChild(menuContent);

	parseMenuData(menuContent);

	return menuDiv;
}

function parseMenuData(menuDiv) {
	const fullMenu = data.Menu;

	for (const item of fullMenu) {
		const newItem = new MenuItem(item.Name, item.Image, item.Text, item.Price);
		menuDiv.appendChild(addItem(newItem));
	}
}

function addItem(item) {
	const menuItem = document.createElement("div");
	menuItem.classList.add("menu-item");

	menuItem.appendChild(addItemName(item));
	menuItem.appendChild(addItemImage(item));
	menuItem.appendChild(addItemText(item));
	menuItem.appendChild(addItemPrice(item));

	return menuItem;
}

function addItemName(item) {
	const itemName = document.createElement("h1");
	itemName.innerHTML = item.getName();
	itemName.classList.add("menu-name");

	return itemName;
}

function addItemImage(item) {
	const itemImage = document.createElement("img");
	itemImage.classList.add("menu-image");
	itemImage.setAttribute("src", item.getImage());
	itemImage.setAttribute("alt", item.getName());

	return itemImage;
}

function addItemText(item) {
	const itemText = document.createElement("p");
	itemText.innerHTML = item.getDescription();
	itemText.classList.add("menu-desc");

	return itemText;
}

function addItemPrice(item) {
	const itemPrice = document.createElement("p");
	itemPrice.innerHTML = item.getPrice();
	itemPrice.classList.add("menu-price");

	return itemPrice;
}
