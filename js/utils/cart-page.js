function changeQuantity(id, delta) {
    const cart = getCart();
    const item = cart.find(i => i.id === id);
    if (!item) return;
    item.quantity += delta;
    if (item.quantity <= 0) {
        const index = cart.indexOf(item);
        cart.splice(index, 1);
    }
    saveCart(cart);
    updateCartCount();
    renderCart();
}

function renderCart() {
    const itemsContainer = document.getElementById('cart-items');
    const totalEl = document.getElementById('cart-total');
    if (!itemsContainer || !totalEl) return;

    const cart = getCart();
    if (cart.length === 0) {
        itemsContainer.innerHTML = '<p>Tu carrito está vacío.</p>';
        totalEl.textContent = '$0.00';
        return;
    }
    itemsContainer.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const priceNum = parseFloat(String(item.price).replace(/[^0-9.-]+/g, '')) || 0;
        const subtotal = priceNum * item.quantity;
        total += subtotal;
        const row = document.createElement('div');
        row.className = 'row align-items-center cart-item';
        row.innerHTML = `
            <div class="col-3 col-md-2">
                <img src="../${item.image}" alt="${item.name}" class="img-fluid rounded">
            </div>
            <div class="col-9 col-md-4">${item.name}</div>
            <div class="col-7 col-md-3 d-flex align-items-center mt-2 mt-md-0">
                <span class="me-2 price">${item.price}</span>
                <div class="input-group input-group-sm" style="width: 100px;">
                    <button class="btn btn-outline-secondary decrease" data-id="${item.id}">-</button>
                    <input type="text" class="form-control text-center" value="${item.quantity}" readonly>
                    <button class="btn btn-outline-secondary increase" data-id="${item.id}">+</button>
                </div>
            </div>
            <div class="col-5 col-md-3 text-end mt-2 mt-md-0">
                <span class="price">$${subtotal.toFixed(2)}</span>
            </div>
        `;
        itemsContainer.appendChild(row);
    });

    totalEl.textContent = `$${total.toFixed(2)}`;

    itemsContainer.querySelectorAll('.increase').forEach(btn => {
        btn.addEventListener('click', e => {
            const id = parseInt(e.currentTarget.dataset.id, 10);
            changeQuantity(id, 1);
        });
    });

    itemsContainer.querySelectorAll('.decrease').forEach(btn => {
        btn.addEventListener('click', e => {
            const id = parseInt(e.currentTarget.dataset.id, 10);
            changeQuantity(id, -1);
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderCart();
    updateCartCount();
});