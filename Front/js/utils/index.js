const featuredProducts = [
    { image: "", alt: "Producto 1", name: "Producto 1", description: "Descripción", price: "$0.00" },
    { image: "", alt: "Producto 2", name: "Producto 2", description: "Descripción", price: "$0.00" },
    { image: "", alt: "Producto 3", name: "Producto 3", description: "Descripción.", price: "$0.00" },
    { image: "", alt: "Producto 4", name: "Producto 4", description: "Descripción", price: "$0.00" },
    { image: "", alt: "Producto 5", name: "Producto 5", description: "Descripción", price: "$0.00" },
    { image: "", alt: "Producto 6", name: "Producto 6", description: "Descripción", price: "$0.00" },
    { image: "", alt: "Producto 7", name: "Producto 7", description: "Descripción", price: "$0.00" },
    { image: "", alt: "Producto 8", name: "Producto 8", description: "Descripción", price: "$0.00" }
];

function renderFeaturedProducts() {
    const container = document.getElementById('featured-products');
    if (!container) return;

    featuredProducts.forEach(product => {
        const col = document.createElement('div');
        col.className = 'col';
        col.innerHTML = `
      <div class="card h-100 text-center">
        <img src="${product.image}" alt="${product.alt}" class="resp">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p class="price">${product.price}</p>
      </div>
    `;
        container.appendChild(col);
    });
}

document.addEventListener('DOMContentLoaded', renderFeaturedProducts);