import { REGIONES } from "../data/admin-data.js";
import { isValidRUN, isAllowedEmail, textLen } from "../forms/validators.js";

const $ = id => document.getElementById(id);
const KEY = "admin_users";
const getAll = () => JSON.parse(localStorage.getItem(KEY)||"[]");
const saveAll = arr => localStorage.setItem(KEY, JSON.stringify(arr));

// región/comuna dependientes
const selRegion = $("region"), selComuna = $("comuna");
selRegion.innerHTML = `<option value="">Seleccione…</option>` + Object.keys(REGIONES).map(r=>`<option>${r}</option>`).join("");
selRegion.addEventListener("change", ()=>{
    const comunas = REGIONES[selRegion.value] || [];
    selComuna.innerHTML = `<option value="">Seleccione…</option>` + comunas.map(c=>`<option>${c}</option>`).join("");
});

// modo edición si viene ?run=xxxx
const params = new URLSearchParams(location.search);
const editId = params.get("run");
if(editId){
    const u = getAll().find(x=>x.run===editId);
    if(u){
        $("run").value=u.run; $("run").readOnly=true;
        $("nombre").value=u.nombre;
        $("apellidos").value=u.apellidos;
        $("correo").value=u.correo;
        $("nacimiento").value=u.nacimiento||"";
        $("tipo").value=u.tipo;
        $("region").value=u.region; selRegion.dispatchEvent(new Event('change'));
        $("comuna").value=u.comuna;
        $("direccion").value=u.direccion;
    }
}

document.getElementById("userForm").addEventListener("submit", e=>{
    e.preventDefault();
    const user = {
        run: $("run").value.trim().toUpperCase(),
        nombre: $("nombre").value.trim(),
        apellidos: $("apellidos").value.trim(),
        correo: $("correo").value.trim(),
        nacimiento: $("nacimiento").value || null,
        tipo: $("tipo").value,
        region: $("region").value,
        comuna: $("comuna").value,
        direccion: $("direccion").value.trim()
    };

    const ok =
        isValidRUN(user.run) &&
        textLen(user.nombre,1,50) &&
        textLen(user.apellidos,1,100) &&
        isAllowedEmail(user.correo) &&
        !!user.tipo && !!user.region && !!user.comuna &&
        textLen(user.direccion,1,300);

    const msg = $("msg");
    if(!ok){ msg.innerHTML = `<div class="alert alert-danger">Revisa RUN, correo y campos obligatorios.</div>`; return; }

    const arr = getAll();
    const ix = arr.findIndex(x=>x.run===user.run);
    if(ix>=0) arr[ix]=user; else arr.push(user);
    saveAll(arr);
    msg.innerHTML = `<div class="alert alert-success">Usuario guardado.</div>`;
    setTimeout(()=> location.href="usuarios.html", 700);
});
