const navbarContainer = document.getElementById('navbar');
if (navbarContainer) {
    navbarContainer.innerHTML = `
<nav class="navbar navbar-expand-lg navbar-dark">
    <div class="container-fluid">
        <nav class="navbar navbar-expand-lg navbar-dark flex-grow-1">
            <a class="navbar-brand" href="index.html"><img src="assets/img/index/logo.png" alt="Logo"></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav mx-auto align-items-center">
                    <li class="nav-item"><a class="nav-link" href="index.html">Inicio</a></li>
                    <li class="nav-item"><a class="nav-link" href="productos.html">Productos</a></li>
                    <li class="nav-item"><a class="nav-link" href="nosotros.html">Nosotros</a></li>
                    <li class="nav-item"><a class="nav-link" href="blogs.html">Blogs</a></li>
                    <li class="nav-item"><a class="nav-link" href="contacto.html">Contacto</a></li>
                </ul>
                <ul class="navbar-nav ms-auto align-items-center">
                    <li class="nav-item ms-3"><a class="nav-link login-btn" href="login.html">Iniciar sesión</a></li>
                    <li class="nav-item ms-3"><a class="nav-link register-btn" href="registro.html">Registrarse</a></li>
                    <li class="nav-item ms-3">
                        <a class="nav-link cart-icon" href="carrito.html">
                            <i class="bi bi-cart"></i>
                            <span id="cart-count" class="badge">0</span>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</nav>
`;
}