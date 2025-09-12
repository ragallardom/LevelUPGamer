const KEY="admin_products";
const tbody = document.getElementById("tbodyProductos");
const CLP = n => Number(n||0).toLocaleString('es-CL',{style:'currency',currency:'CLP'});
const getAll = () => JSON.parse(localStorage.getItem(KEY)||"[]");
const saveAll = arr => localStorage.setItem(KEY, JSON.stringify(arr));

function render(){
    const items = getAll();
    tbody.innerHTML = items.map(p=>{
        const low = (p.stockCritico!=null && p.stock<=p.stockCritico) ? ' style="color:#ff6b6b;font-weight:700"' : '';
        return `<tr>
      <td><span class="badge">${p.codigo}</span></td>
      <td>${p.categoria}</td>
      <td>${p.nombre}</td>
      <td>${CLP(p.precio)}</td>
      <td${low}>${p.stock}</td>
      <td class="text-end">
        <a class="btn btn-sm btn-secondary" href="producto-form.html?id=${encodeURIComponent(p.codigo)}"><i class="bi bi-pencil"></i> Editar</a>
        <button class="btn btn-sm btn-outline-light" data-del="${p.codigo}"><i class="bi bi-trash"></i></button>
      </td>
    </tr>`;
    }).join("");

    tbody.querySelectorAll("[data-del]").forEach(btn=>{
        btn.addEventListener("click", ()=>{
            const id = btn.dataset.del;
            if(confirm(`¿Eliminar producto ${id}?`)){
                const arr = getAll().filter(x=>x.codigo!==id);
                saveAll(arr); render();
            }
        });
    });
}
document.addEventListener("DOMContentLoaded", render);
