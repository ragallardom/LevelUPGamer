import { CATEGORIES } from "../data/admin-data.js";
import { textLen, isIntGE0, isPrice } from "../forms/validators.js";

const $ = id => document.getElementById(id);
const KEY = "admin_products";
const getAll = () => JSON.parse(localStorage.getItem(KEY)||"[]");
const saveAll = arr => localStorage.setItem(KEY, JSON.stringify(arr));

// llenar categorías
const categoria = $("categoria");
CATEGORIES.forEach(c=> categoria.insertAdjacentHTML("beforeend", `<option value="${c}">${c}</option>`));

// modo edición si viene ?id=CODIGO
const params = new URLSearchParams(location.search);
const editId = params.get("id");
if(editId){
    const item = getAll().find(p=>p.codigo===editId);
    if(item){
        $("codigo").value=item.codigo; $("codigo").readOnly=true;
        $("nombre").value=item.nombre;
        $("descripcion").value=item.descripcion||"";
        $("precio").value=item.precio;
        $("stock").value=item.stock;
        $("stockCritico").value=item.stockCritico??"";
        $("categoria").value=item.categoria;
        $("imagen").value=item.imagen||"";
    }
}

document.getElementById("productForm").addEventListener("submit", e=>{
    e.preventDefault();
    const producto = {
        codigo: $("codigo").value.trim(),
        nombre: $("nombre").value.trim(),
        descripcion: $("descripcion").value.trim(),
        precio: Number($("precio").value),
        stock: parseInt($("stock").value,10),
        stockCritico: $("stockCritico").value==="" ? null : parseInt($("stockCritico").value,10),
        categoria: $("categoria").value,
        imagen: $("imagen").value.trim()
    };

    const ok =
        textLen(producto.codigo,3,999) &&
        textLen(producto.nombre,1,100) &&
        textLen(producto.descripcion||"",0,500,false) &&
        isPrice(producto.precio) &&
        isIntGE0(producto.stock) &&
        (producto.stockCritico===null || isIntGE0(producto.stockCritico)) &&
        !!producto.categoria;

    const msg = $("msg");
    if(!ok){ msg.innerHTML = `<div class="alert alert-danger">Revisa campos obligatorios y límites solicitados.</div>`; return; }

    const arr = getAll();
    const ix = arr.findIndex(x=>x.codigo===producto.codigo);
    if(ix>=0) arr[ix]=producto; else arr.push(producto);
    saveAll(arr);
    msg.innerHTML = `<div class="alert alert-success">Producto guardado.</div>`;
    setTimeout(()=> location.href="productos.html", 700);
});
