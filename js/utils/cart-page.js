function renderCart() {
    const container = document.getElementById('cart-container');
    const cart = getCart();
    if (!container) return;
    if (cart.length === 0) {
        container.innerHTML = '<p>Tu carrito está vacío.</p>';
        return;
    }
    const table = document.createElement('table');
    table.className = 'table';
    table.innerHTML = '<thead><tr><th>Producto</th><th>Cantidad</th><th>Precio</th><th>Subtotal</th><th></th></tr></thead>';
    const tbody = document.createElement('tbody');
    let total = 0;
    cart.forEach(item => {
        const price = parseFloat(String(item.price).replace(/[^0-9.-]+/g, '')) || 0;
        const subtotal = price * item.quantity;
        total += subtotal;
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${item.name}</td><td>${item.quantity}</td><td>${item.price}</td><td>$${subtotal.toFixed(2)}</td><td><button class="btn btn-sm btn-danger remove" data-id="${item.id}">X</button></td>`;
        tbody.appendChild(tr);
    });
    table.appendChild(tbody);
    table.innerHTML += `<tfoot><tr><td colspan="3" class="text-end">Total</td><td>$${total.toFixed(2)}</td><td></td></tr></tfoot>`;
    container.innerHTML = '';
    container.appendChild(table);

    container.querySelectorAll('.remove').forEach(btn => {
        btn.addEventListener('click', e => {
            const id = parseInt(e.target.dataset.id, 10);
            removeFromCart(id);
            renderCart();
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderCart();
    updateCartCount();
});