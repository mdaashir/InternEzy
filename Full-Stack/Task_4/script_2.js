/* External JS */

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
