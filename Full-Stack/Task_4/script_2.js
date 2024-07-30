/* External JS */
let pageNumber = 1;
let limit = 6;

let listProducts = document.querySelector('.list');
let listPages = document.querySelector('.listPage');

async function createProducts(imgUrl, titleName, details, costPrice) {
	let product = document.createElement('div');
	let image = document.createElement('div');
	let img = document.createElement('img');
	let content = document.createElement('div');
	let title = document.createElement('div');
	let description = document.createElement('div');
	let price = document.createElement('div');
	let button = document.createElement('button');

	product.className = 'item';
	image.className = 'img';
	img.setAttribute('src', imgUrl);
	content.className = 'content';
	title.className = 'title';
	description.className = 'des';
	price.className = 'price';
	button.className = 'add';

	title.innerText = titleName;
	description.innerText = details;
	price.innerText = '$ ' + costPrice;
	button.innerText = 'Add to cart';

	image.appendChild(img);
	content.appendChild(title);
	content.appendChild(description);
	content.appendChild(price);
	content.appendChild(button);
	product.appendChild(image);
	product.appendChild(content);

	// listProducts?.appendChild(product);
	return product;
}
async function getProduct() {
	try {
		// const response = await fetch('https://fakestoreapi.com/products');
		const response = await fetch('https://dummyjson.com/products');
		const data = await response.json();
		// console.log( data );
		const product = data.products;
		product.forEach(async (product) => {
			listProducts?.appendChild(
				await createProducts(
					product.images[0],
					product.title,
					product.description,
					product.price
				)
			);
		});
	} catch (error) {
		console.error(error.message);
	}
}

getProduct().then(loadItem);

function loadItem() {
	let listItems = document.querySelectorAll('.list .item');
	let beginGet = limit * (pageNumber - 1);
	let endGet = limit * pageNumber - 1;
	if (listItems) {
		listItems.forEach((item, key) => {
			if (key >= beginGet && key <= endGet) {
				item.style.display = 'block';
			} else {
				item.style.display = 'none';
			}
		});
		listPage(listItems);
	}
	console.log(listItems);
}
loadItem();

function listPage(listItems) {
	let count = Math.ceil(listItems.length / limit);
	if (listPages) {
		listPages.innerHTML = '';
	}

	if (pageNumber != 1) {
		let prevPage = document.createElement('li');
		prevPage.innerText = 'Prev';
		prevPage.setAttribute('onclick', 'changePage(' + (pageNumber - 1) + ')');
		listPages?.appendChild(prevPage);
	}

	for (let i = 1; i <= count; i++) {
		let newPage = document.createElement('li');
		newPage.innerText = i.toString();
		if (i == pageNumber) {
			newPage.classList.add('active');
		}
		newPage.setAttribute('onclick', 'changePage(' + i + ')');
		listPages?.appendChild(newPage);
	}

	if (pageNumber != count) {
		let nextPage = document.createElement('li');
		nextPage.innerText = 'Next';
		nextPage.setAttribute('onclick', 'changePage(' + (pageNumber + 1) + ')');
		listPages?.appendChild(nextPage);
	}
}

function changePage(i) {
	pageNumber = i;
	loadItem();
}
