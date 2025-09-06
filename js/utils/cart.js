const CART_KEY = 'cart';

function getCart() {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
}

function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

function getCartCount() {
    return getCart().reduce((sum, item) => sum + item.quantity, 0);
}

function updateCartCount() {
    const el = document.getElementById('cart-count');
    if (el) {
        el.textContent = getCartCount();
    }
}

function addToCart(product, quantity = 1) {
    const qty = parseInt(quantity, 10);
    if (isNaN(qty) || qty < 1) return; // regla: cantidad mínima 1
    const cart = getCart();
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
        existing.quantity += qty;
    } else {
        cart.push({ id: product.id, name: product.name, price: product.price, image: product.image, quantity: qty });
    }
    saveCart(cart);
    updateCartCount();
}

function removeFromCart(id) {
    const cart = getCart().filter(item => item.id !== id);
    saveCart(cart);
    updateCartCount();
}