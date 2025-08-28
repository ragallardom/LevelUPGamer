const products = [
    { image: "assets/img/index/carrusel/img1.svg", alt: "Producto 1", name: "Producto 1", price: "$0.00" },
    { image: "assets/img/index/carrusel/img2.svg", alt: "Producto 2", name: "Producto 2", price: "$0.00" },
    { image: "assets/img/index/carrusel/img3.svg", alt: "Producto 3", name: "Producto 3", price: "$0.00" },
    { image: "assets/img/index/carrusel/img1.svg", alt: "Producto 4", name: "Producto 4", price: "$0.00" },
    { image: "assets/img/index/carrusel/img2.svg", alt: "Producto 5", name: "Producto 5", price: "$0.00" },
    { image: "assets/img/index/carrusel/img3.svg", alt: "Producto 6", name: "Producto 6", price: "$0.00" },
    { image: "assets/img/index/carrusel/img1.svg", alt: "Producto 7", name: "Producto 7", price: "$0.00" },
    { image: "assets/img/index/carrusel/img2.svg", alt: "Producto 8", name: "Producto 8", price: "$0.00" }
];

function renderProducts() {
    const container = document.getElementById('product-list');
    if (!container) return;

    products.forEach(product => {
        const col = document.createElement('div');
        col.className = 'col';
        col.innerHTML = `
      <div class="card h-100 text-center">
        <img src="${product.image}" alt="${product.alt}" class="resp">
        <h3>${product.name}</h3>
        <p class="price">${product.price}</p>
        <button class="btn btn-primary" disabled>Añadir al carrito</button>
      </div>
    `;
        container.appendChild(col);
    });
}

document.addEventListener('DOMContentLoaded', renderProducts);