const scriptSrc = document.currentScript?.src || '';
const rootPath = scriptSrc.split('/js/utils')[0];

function renderProducts() {
    const container = document.getElementById('product-list');
    if (!container) return;

    products.forEach(product => {
        const col = document.createElement('div');
        col.className = 'col';
        col.innerHTML = `
      <div class="card h-100 text-center">
        <a href="${rootPath}/html_tienda/detalle-producto.html?id=${product.id}">
          <img src="${rootPath}/${product.image}" alt="${product.alt}" class="resp">
        </a>
        <h3><a href="${rootPath}/html_tienda/detalle-producto.html?id=${product.id}" class="text-decoration-none">${product.name}</a></h3>
        <p class="price">${product.price}</p>
        <button class="btn btn-primary add-cart">Añadir al carrito</button>
      </div>
    `;
        const btn = col.querySelector('.add-cart');
        btn.addEventListener('click', () => addToCart(product));
        container.appendChild(col);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    updateCartCount();
});
