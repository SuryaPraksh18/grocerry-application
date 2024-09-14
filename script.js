// Sample product data
const products = [
    { id: 1, name: 'Apples', price: 1.99 },
    { id: 2, name: 'Bananas', price: 0.99 },
    { id: 3, name: 'Carrots', price: 2.49 },
    { id: 1, name: 'mango', price: 1.99 },
    { id: 2, name: 'grapes', price: 0.99 },
    { id: 3, name: 'potato', price: 2.49 },
    { id: 1, name: 'tomato', price: 1.99 },
    { id: 2, name: 'onion', price: 0.99 },
    { id: 3, name: 'orange', price: 2.49 },
    { id: 1, name: 'nuts', price: 1.99 },
    { id: 2, name: 'cucumber', price: 0.99 },
    { id: 3, name: 'lemon', price: 2.49 },
];

// State to keep track of cart
let cart = [];

// Function to render products
function renderProducts() {
    const productsContainer = document.getElementById('products');
    productsContainer.innerHTML = '';

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
        `;
        productsContainer.appendChild(productDiv);
    });
}

// Function to update cart display
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    cartItems.innerHTML = '';

    let totalPrice = 0;

    cart.forEach(item => {
        const product = products.find(p => p.id === item.id);
        const cartItem = document.createElement('li');
        cartItem.textContent = `${product.name} - $${product.price.toFixed(2)} x ${item.quantity}`;
        cartItems.appendChild(cartItem);
        totalPrice += product.price * item.quantity;
    });

    totalPriceElement.textContent = `Total: $${totalPrice.toFixed(2)}`;
}

// Function to handle "Add to Cart" button click
function handleAddToCart(event) {
    const button = event.target;
    const productId = parseInt(button.getAttribute('data-id'), 10);
    const product = products.find(p => p.id === productId);

    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ id: productId, quantity: 1 });
    }

    updateCart();
}

// Function to handle "Checkout" button click
function handleCheckout() {
    alert('Checkout functionality is not implemented yet.');
}

// Initialize app
function init() {
    renderProducts();
    document.getElementById('products').addEventListener('click', event => {
        if (event.target.classList.contains('add-to-cart')) {
            handleAddToCart(event);
        }
    });

    document.getElementById('view-cart').addEventListener('click', () => {
        document.getElementById('cart').classList.toggle('hidden');
    });

    document.getElementById('checkout').addEventListener('click', handleCheckout);
}

init();
