// Array of products
const products = [
	{
		name: 'Product 1',
		price: 10.99
	},
	{
		name: 'Product 2',
		price: 19.99
	},
	{
		name: 'Product 3',
		price: 7.99
	}
];

// Cart array to store added products
let cart = [];

// Function to display products on the page
function displayProducts() {
	const productsContainer = document.querySelector('.products');
	productsContainer.innerHTML = '';

	products.forEach(product => {
		const productDiv = document.createElement('div');
		productDiv.classList.add('product');

		const productImage = document.createElement('img');
		productImage.src = 'product.jpg';
		productImage.alt = product.name;

		const productName = document.createElement('h3');
		productName.textContent = product.name;

		const productPrice = document.createElement('p');
		productPrice.textContent = '$' + product.price;

		const addToCartButton = document.createElement('button');
		addToCartButton.classList.add('button');
		addToCartButton.textContent = 'Add to Cart';
		addToCartButton.addEventListener('click', () => {
			addToCart(product);
		});

		productDiv.appendChild(productImage);
		productDiv.appendChild(productName);
		productDiv.appendChild(productPrice);
		productDiv.appendChild(addToCartButton);

		productsContainer.appendChild(productDiv);
	});
}

// Function to add a product to the cart
function addToCart(product) {
	cart.push(product);
	displayCart();
}

// Function to display the cart on the page
function displayCart() {
	const cartItems = document.querySelector('#cart-items');
	const cartTotal = document.querySelector('#cart-total');

	let cartItemsHTML = '';
	let cartTotalPrice = 0;

	cart.forEach(product => {
		cartItemsHTML += `<li>${product.name} - $${product.price}</li>`;
		cartTotalPrice += product.price;
	});

	cartItems.innerHTML = cartItemsHTML;
	cartTotal.textContent = '$' + cartTotalPrice.toFixed(2);
}

// Function to process checkout
function checkout() {
	if (cart.length === 0) {
		alert('Your cart is empty');
	} else {
		alert('Thank you for your purchase');
		cart = [];
		displayCart();
	}
}

// Display products on page load
displayProducts();
