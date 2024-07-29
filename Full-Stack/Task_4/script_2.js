/* External JS */

let listProducts = document.querySelector('.list');
let listPages = document.querySelector('.listPage');

function createProducts(imgUrl, titleName, details, costPrice) {
	let product = document.createElement('div');
	let image = document.createElement('div');
	let img = document.createElement('img');
	let content = document.createElement('div');
	let title = document.createElement('div');
	let description = document.createElement('div');
	let price = document.createElement('div');
	let button = document.createElement('button');

	product.setAttribute('class', 'item');
	image.setAttribute('class', 'img');
	img.setAttribute('src', imgUrl);
	content.setAttribute('class', 'content');
	title.setAttribute('class', 'title');
	description.setAttribute('class', 'des');
	price.setAttribute('class', 'price');
	button.setAttribute('class', 'add');

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

	// <div class="item">
	//     <div class="img">
	//         <img src="https://drcoder.alfadigital.az/codepen-assets/frontend-pagination/1.png">
	//     </div>
	//     <div class="content">
	//         <div class="title">Product 1</div>
	//         <div class="des">
	//             Lorem ipsum dolor sit amet consectetur
	//              adipisicing elit. Repellendus, minus.
	//         </div>
	//         <div class="price">$ 150</div>
	//         <button class="add">Add to cart</button>
	//     </div>
	// </div>

	listProducts?.appendChild(product);
}
async function getProduct() {
	try {
		// const response = await fetch('https://fakestoreapi.com/products');
		const response = await fetch('https://dummyjson.com/products');
		const data = await response.json();
		console.log(data);
	} catch (error) {
		console.error(error.message);
	}
}

getProduct();
