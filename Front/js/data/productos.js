const products = [
    {
        id: 1,
        image: "assets/img/index/carrusel/img1.svg",
        alt: "Producto 1",
        name: "Producto 1",
        description: "Descripción del producto 1.",
        price: "$0.00"
    },
    {
        id: 2,
        image: "assets/img/index/carrusel/img2.svg",
        alt: "Producto 2",
        name: "Producto 2",
        description: "Descripción del producto 2.",
        price: "$0.00"
    },
    {
        id: 3,
        image: "assets/img/index/carrusel/img3.svg",
        alt: "Producto 3",
        name: "Producto 3",
        description: "Descripción del producto 3.",
        price: "$0.00"
    },
    {
        id: 4,
        image: "assets/img/index/carrusel/img1.svg",
        alt: "Producto 4",
        name: "Producto 4",
        description: "Descripción del producto 4.",
        price: "$0.00"
    },
    {
        id: 5,
        image: "assets/img/index/carrusel/img2.svg",
        alt: "Producto 5",
        name: "Producto 5",
        description: "Descripción del producto 5.",
        price: "$0.00"
    },
    {
        id: 6,
        image: "assets/img/index/carrusel/img3.svg",
        alt: "Producto 6",
        name: "Producto 6",
        description: "Descripción del producto 6.",
        price: "$0.00"
    },
    {
        id: 7,
        image: "assets/img/index/carrusel/img1.svg",
        alt: "Producto 7",
        name: "Producto 7",
        description: "Descripción del producto 7.",
        price: "$0.00"
    },
    {
        id: 8,
        image: "assets/img/index/carrusel/img2.svg",
        alt: "Producto 8",
        name: "Producto 8",
        description: "Descripción del producto 8.",
        price: "$0.00"
    }
];

function getProductById(id) {
    return products.find(p => p.id === id);
}