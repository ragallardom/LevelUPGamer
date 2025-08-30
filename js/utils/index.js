const scriptSrc = document.currentScript?.src || '';
const rootPath = scriptSrc.split('/js/utils')[0];

function renderFeaturedProducts() {
    const container = document.getElementById('featured-products');
    if (!container) return;

    const featuredProducts = products.slice(0, 8);

    featuredProducts.forEach(product => {
        const col = document.createElement('div');
        col.className = 'col';
        col.innerHTML = `
      <div class="card h-100 text-center">
        <a href="${rootPath}/html_tienda/detalle-producto.html?id=${product.id}">
          <img src="${rootPath}/${product.image}" alt="${product.alt}" class="resp">
        </a>
        <h3><a href="${rootPath}/html_tienda/detalle-producto.html?id=${product.id}" class="text-decoration-none">${product.name}</a></h3>
        <p>${product.description}</p>
        <p class="price">${product.price}</p>
      </div>
    `;
        container.appendChild(col);
    });
}

document.addEventListener('DOMContentLoaded', renderFeaturedProducts);
