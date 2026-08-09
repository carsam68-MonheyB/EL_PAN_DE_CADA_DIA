/* =========================================================
   El Pan de Cada Día — Interacción
   ========================================================= */
(function () {
  "use strict";

  var WHATSAPP_NUMBER = "528719706133"; // +52 871 970 6133

  /* ---- Menú móvil ---- */
  var toggle = document.getElementById("nav-toggle");
  var nav = document.querySelector(".nav");
  var navLinks = document.getElementById("nav-links");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  // Cerrar el menú al hacer clic en un enlace (móvil)
  if (navLinks) {
    navLinks.addEventListener("click", function (e) {
      if (e.target.tagName === "A" && nav.classList.contains("open")) {
        nav.classList.remove("open");
        toggle.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---- Año dinámico en el footer ---- */
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  /* ---- Formulario de pedidos -> WhatsApp ---- */
  var form = document.getElementById("order-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      var name = (form.name.value || "").trim();
      var product = form.product.value;
      var qty = (form.qty.value || "").trim();
      var type = form.type.value;
      var note = (form.note.value || "").trim();

      var lines = [];
      lines.push("¡Hola El Pan de Cada Día! 🍞 Quiero hacer un pedido:");
      lines.push("");
      if (name) lines.push("• Nombre: " + name);
      lines.push("• Producto: " + product);
      if (qty) lines.push("• Cantidad: " + qty);
      lines.push("• Entrega: " + type);
      if (note) lines.push("• Comentarios: " + note);
      lines.push("");
      lines.push("¿Me confirman disponibilidad? ¡Gracias!");

      var url =
        "https://wa.me/" +
        WHATSAPP_NUMBER +
        "?text=" +
        encodeURIComponent(lines.join("\n"));

      window.open(url, "_blank", "noopener");
    });
  }
})();
