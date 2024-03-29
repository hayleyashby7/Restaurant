import data from './menu.json';

const imgCache = {};

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
	const menuDiv = document.createElement('div');

	menuDiv.appendChild(addMainsCollapse());
	menuDiv.appendChild(addMainsContent());

	menuDiv.appendChild(addDessertCollapse());
	menuDiv.appendChild(addDessertsContent());

	importMenuImages();
	parseMenuData(menuDiv);

	return menuDiv;
}

function addMainsCollapse() {
	const mainMeals = document.createElement('button');
	mainMeals.innerHTML = 'Main Meals';
	mainMeals.classList.add('collapse');

	return mainMeals;
}

function addMainsContent() {
	const mainsContent = document.createElement('div');
	mainsContent.classList.add('content-text', 'menu-content', 'mains');

	return mainsContent;
}

function addDessertCollapse() {
	const desserts = document.createElement('button');
	desserts.innerHTML = 'Desserts';
	desserts.classList.add('collapse');

	return desserts;
}

function addDessertsContent() {
	const dessertsContent = document.createElement('div');
	dessertsContent.classList.add('content-text', 'menu-content', 'desserts');

	return dessertsContent;
}

function importMenuImages() {
	const images = require.context('./images', true, /\.(jpg)$/);

	for (const key of images.keys()) {
		imgCache[key] = images(key);
	}
}

function parseMenuData(menuDiv) {
	const fullMenu = data.Menu;
	const mains = menuDiv.querySelectorAll('.mains')[0];
	const desserts = menuDiv.querySelectorAll('.desserts')[0];

	for (const item of fullMenu) {
		const newItem = new MenuItem(item.Name, item.Image, item.Text, item.Price);

		switch (item.Course) {
			case 'Main':
				mains.appendChild(addItem(newItem));
				break;
			case 'Dessert':
				desserts.appendChild(addItem(newItem));
				break;
			default:
				break;
		}
	}
}

function addItem(item) {
	const menuItem = document.createElement('div');
	menuItem.classList.add('menu-item');

	menuItem.appendChild(addItemName(item));
	menuItem.appendChild(addItemImage(item));
	menuItem.appendChild(addItemText(item));
	menuItem.appendChild(addItemPrice(item));

	return menuItem;
}

function addItemName(item) {
	const itemName = document.createElement('h1');
	itemName.innerHTML = item.getName();
	itemName.classList.add('menu-name');

	return itemName;
}

function addItemImage(item) {
	const itemImage = document.createElement('img');
	itemImage.classList.add('menu-image');

	const imageName = './' + item.getImage() + '.jpg';
	itemImage.setAttribute('src', imgCache[imageName]);
	itemImage.setAttribute('alt', item.getName());

	return itemImage;
}

function addItemText(item) {
	const itemText = document.createElement('p');
	itemText.innerHTML = item.getDescription();
	itemText.classList.add('menu-desc');

	return itemText;
}

function addItemPrice(item) {
	const itemPrice = document.createElement('p');
	itemPrice.innerHTML = item.getPrice();
	itemPrice.classList.add('menu-price');

	return itemPrice;
}
