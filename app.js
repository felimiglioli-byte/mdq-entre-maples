(function(){
const C = window.CONFIG, $ = s => document.querySelector(s);
const fmt = n => "$" + n.toLocaleString("es-AR");
const valido = p => typeof p === "number" && isFinite(p) && p > 0;
let tipo = null, prod = null, cant = 1;

function ir(id){
  document.querySelectorAll(".pantalla").forEach(p => p.classList.toggle("activa", p.id === id));
  window.scrollTo(0,0);
}
function foto(el, src) {
  if (!src) return;
  const i = new Image();
  i.onload = () => {
    el.style.backgroundImage = `url("${src}")`;
    el.style.backgroundSize = "contain";
    el.style.backgroundPosition = "center";
    el.style.backgroundRepeat = "no-repeat";
    el.textContent = "";
  };
  i.onerror = () => console.error("No se pudo cargar la imagen:", src);
  i.src = src;
}
document.querySelectorAll("[data-ir]").forEach(b => {
  b.addEventListener("click", () => ir(b.dataset.ir));
});

document.querySelectorAll("[data-tipo]").forEach(b => {
  b.addEventListener("click", () => {
    const tipoElegido = b.getAttribute("data-tipo");
    console.log("Tipo seleccionado:", tipoElegido);

    if (C && C.tipos && C.tipos[tipoElegido]) {
      mostrarProductos(tipoElegido);
    } else {
      console.error("Tipo no encontrado en CONFIG:", tipoElegido);
    }
  });
});

$("#volver-prod").onclick = () => ir("productos");
function mostrarProductos(t){
  tipo = t; const cfg = C.tipos[t];
  $("#prod-titulo").textContent = cfg.titulo;
  const g = $("#grid"); g.innerHTML = "";
  cfg.productos.forEach(p => {
    const d = document.createElement("div"); d.className = "card";
    d.innerHTML = `<span class="foto">🥚</span><h3></h3><small></small><div class="precio"></div><button class="btn">ELEGIR</button>`;
    d.querySelector("h3").textContent = p.nombre;
    d.querySelector("small").textContent = p.detalle;
    const pr = d.querySelector(".precio");
    if (valido(p.precio)) pr.textContent = fmt(p.precio); else { pr.textContent = "Precio no configurado"; pr.classList.add("falta"); }
    foto(d.querySelector(".foto"), p.imagen);
    d.querySelector(".btn").onclick = () => confirmar(p);
    g.appendChild(d);
  });
  ir("productos");
}

function confirmar(p){ prod = p; cant = 1; ir("confirmar"); render(); }
function render(){
  const cfg = C.tipos[tipo], ok = valido(prod.precio), total = ok ? prod.precio * cant : null;
  $("#r-tipo").textContent = cfg.titulo; $("#r-pres").textContent = prod.nombre; $("#r-cant").textContent = cant;
  $("#r-unit").textContent = ok ? fmt(prod.precio) : "No configurado";
  $("#r-total").textContent = ok ? fmt(total) : "—";
  $("#aviso").hidden = ok;
  const wa = $("#wa");
  if (!ok){ wa.classList.add("off"); wa.removeAttribute("href"); return; }
  wa.classList.remove("off");
  const quiero = cant === 1 ? `el ${prod.nombre}` : `${cant} unidades de ${prod.nombre}`;
  const msg = `Hola, te quiero comprar ${quiero} de huevos ${cfg.etiqueta}.\n\nPrecio final: ${fmt(total)}.\n\n¿Me confirmás la disponibilidad y me pasás los datos para coordinar la entrega?`;
  wa.href = `https://wa.me/${C.whatsappNumber}?text=${encodeURIComponent(msg)}`;
}
$("#mas").onclick = () => { if (cant < 999){ cant++; render(); } };
$("#menos").onclick = () => { if (cant > 1){ cant--; render(); } };
})();
