const KEY="admin_users";
const tbody = document.getElementById("tbodyUsuarios");
const getAll = () => JSON.parse(localStorage.getItem(KEY)||"[]");
const saveAll = arr => localStorage.setItem(KEY, JSON.stringify(arr));

function render(){
    const items = getAll();
    tbody.innerHTML = items.map(u=>`
    <tr>
      <td><span class="badge">${u.run}</span></td>
      <td>${u.nombre} ${u.apellidos}</td>
      <td>${u.correo}</td>
      <td>${u.tipo}</td>
      <td>${u.region} / ${u.comuna}</td>
      <td class="text-end">
        <a class="btn btn-sm btn-secondary" href="usuario-form.html?run=${encodeURIComponent(u.run)}"><i class="bi bi-pencil"></i> Editar</a>
        <button class="btn btn-sm btn-outline-light" data-del="${u.run}"><i class="bi bi-trash"></i></button>
      </td>
    </tr>
  `).join("");

    tbody.querySelectorAll("[data-del]").forEach(btn=>{
        btn.addEventListener("click", ()=>{
            const id = btn.dataset.del;
            if(confirm(`¿Eliminar usuario ${id}?`)){
                const arr = getAll().filter(x=>x.run!==id);
                saveAll(arr); render();
            }
        });
    });
}
document.addEventListener("DOMContentLoaded", render);
