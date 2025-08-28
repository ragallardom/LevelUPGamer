function renderProductDetail() {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get('id'), 10);
    const product = products.find(p => p.id === id) || products[0];
    if (!product) return;

    const imgEl = document.getElementById('product-image');
    const nameEl = document.getElementById('product-name');
    const priceEl = document.getElementById('product-price');
    const descEl = document.getElementById('product-description');

    imgEl.src = product.image;
    imgEl.alt = product.alt;
    nameEl.textContent = product.name;
    priceEl.textContent = product.price;
    descEl.textContent = product.description;

    const relatedContainer = document.getElementById('related-products');
    products.filter(p => p.id !== product.id).slice(0, 4).forEach(rel => {
        const col = document.createElement('div');
        col.className = 'col';
        col.innerHTML = `
      <div class="card h-100 text-center">
        <a href="detalle-producto.html?id=${rel.id}">
          <img src="${rel.image}" alt="${rel.alt}" class="resp">
        </a>
        <h3><a href="detalle-producto.html?id=${rel.id}" class="text-decoration-none">${rel.name}</a></h3>
        <p class="price">${rel.price}</p>
      </div>
    `;
        relatedContainer.appendChild(col);
    });
}

document.addEventListener('DOMContentLoaded', renderProductDetail);