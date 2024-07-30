/* External JS */
let listItems = document.querySelectorAll('.list .item');
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
	product.appendChild( content );

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
			listProducts?.appendChild(await createProducts(
					product.images[ 0 ],
					product.title,
					product.description,
					product.price
				));
		});
	} catch (error) {
		console.error(error.message);
	}
}

getProduct();

function listPage() {
	let count = Math.ceil(listItems.length / limit);
	if (listPages) {
		listPages.innerHTML = '';
	}

	if (thisPage != 1) {
		let prev = document.createElement('li');
		prev.innerText = 'Prev';
		prev.setAttribute('onclick', 'changePage(' + (thisPage - 1) + ')');
		listPages?.appendChild(prev);
	}

	for (let i = 1; i <= count; i++) {
		let newPage = document.createElement('li');
		newPage.innerText = i.toString();
		if (i == thisPage) {
			newPage.classList.add('active');
		}
		newPage.setAttribute('onclick', 'changePage(' + i + ')');
		listPages?.appendChild(newPage);
	}

	if (thisPage != count) {
		let next = document.createElement('li');
		next.innerText = 'Next';
		next.setAttribute('onclick', 'changePage(' + (thisPage + 1) + ')');
		listPages?.appendChild( next );
	}
}
