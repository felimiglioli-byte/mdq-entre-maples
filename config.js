// ============================================================
//  CONFIGURACIÓN ÚNICA — editá solo este archivo
// ============================================================
window.CONFIG = {
  // Número comercial: código de país + 9 + área + número. Sin espacios, guiones ni "+".
  whatsappNumber: "5492235028187",

  // Precios: poné un número (ej: 4500). Mientras sea null se muestra
  // "Precio no configurado" y no se puede enviar el pedido.
  // "imagen": ruta de la foto (ej: "img/maple-blanco.jpg"). Si no existe, se ve un huevo de reemplazo.
  tipos: {
    blanco: {
      titulo: "Huevos blancos",
      etiqueta: "blancos", // se usa en el mensaje de WhatsApp
      productos: [
        { id: "b-maple1",  nombre: "Maple N°1",              detalle: "Ideal Familias",      precio: 6000, imagen: "Maple-N1.jpg" },
        { id: "b-medio1",  nombre: "Medio Cajón N°1",        detalle: "Intermedios",         precio: 32500, imagen: "Medio-cajon-n1.jpg" },
        { id: "b-cajon1",  nombre: "Cajón N°1 (12 maples)",  detalle: "Ideal Comercios",     precio: 65000, imagen: "img/cajon1-blanco.jpg" },
        { id: "b-cajon2",  nombre: "Cajón N°2",              detalle: "Gastronómicos",       precio: 60000, imagen: "img/cajon2-blanco.jpg" }
      ]
    },
    color: {
      titulo: "Huevos de color",
      etiqueta: "de color",
      productos: [
        { id: "c-maple1",  nombre: "Maple N°1",              detalle: "Ideal Familias",      precio: 6500, imagen: "img/maple-color.jpg" },
        { id: "c-medio1",  nombre: "Medio Cajón N°1",        detalle: "Intermedios",         precio: 35000, imagen: "img/medio-color.jpg" },
        { id: "c-cajon1",  nombre: "Cajón N°1 (12 maples)",  detalle: "Ideal Comercios",     precio: 70000, imagen: "img/cajon1-color.jpg" }
      ]
    }
  },

  // Fotos de las pantallas principales (opcionales)
  imagenes: { blanco: "img/blanco.jpg", color: "img/color.jpg", fondo: "img/fondo.jpg", logo: "img/logo.jpg" }
};
