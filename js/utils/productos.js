function renderProducts() {
    const container = document.getElementById('product-list');
    if (!container) return;
    const rootPath = document.currentScript.src.split('/js/utils')[0];

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
        <button class="btn btn-primary" disabled>Añadir al carrito</button>
      </div>
    `;
        container.appendChild(col);
    });
}

document.addEventListener('DOMContentLoaded', renderProducts);
