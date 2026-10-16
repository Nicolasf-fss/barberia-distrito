/* Hace dos cosas: (1) menú desplegable en celular, (2) WhatsApp:
   enlaces y número visible, ambos generados desde js/config.js. */
(function () {
  "use strict";

  // Avisa al CSS que JavaScript está activo (activa el menú desplegable).
  document.documentElement.classList.add("js");

  /* ---------- 1. Menú móvil ---------- */
  var toggle = document.querySelector(".nav-toggle");
  var menu = document.getElementById("menu");

  if (toggle && menu) {
    var setOpen = function (open) {
      toggle.setAttribute("aria-expanded", String(open));
      menu.classList.toggle("is-open", open);
    };

    toggle.addEventListener("click", function () {
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });

    // Cierra el menú al elegir un enlace.
    menu.addEventListener("click", function (e) {
      if (e.target.closest("a")) { setOpen(false); }
    });

    // Cierra con la tecla Escape.
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        setOpen(false);
        toggle.focus();
      }
    });
  }

  /* ---------- 2. WhatsApp ---------- */

  // Oculta un elemento (hidden + display, para que funcione aunque el CSS defina display).
  function hide(el) {
    el.hidden = true;
    el.style.display = "none";
  }

  // Devuelve solo los dígitos del número si es válido; si no, null.
  // Acepta separadores comunes (+, espacios, guiones, paréntesis, puntos).
  // Rechaza letras u otros símbolos, para no "adivinar" un número distinto.
  // Válido = entre 8 y 15 dígitos, sin empezar por 0 (formato internacional).
  function normalizeNumber(value) {
    if (typeof value !== "string" && typeof value !== "number") { return null; }
    var raw = String(value).trim();
    if (!/^[\d\s+\-().]+$/.test(raw)) { return null; }
    var digits = raw.replace(/\D/g, "");
    return /^[1-9]\d{7,14}$/.test(digits) ? digits : null;
  }

  // Formato legible. Colombia (57 + 10 dígitos): +57 300 123 4567.
  // Cualquier otro país: "+" seguido de los dígitos, sin agrupar.
  function formatNumber(digits) {
    var m = /^57(\d{3})(\d{3})(\d{4})$/.exec(digits);
    return m ? "+57 " + m[1] + " " + m[2] + " " + m[3] : "+" + digits;
  }

  function buildWhatsAppUrl(digits, message) {
    var text = typeof message === "string" ? message.trim() : "";
    return "https://wa.me/" + digits + (text ? "?text=" + encodeURIComponent(text) : "");
  }

  var config = window.SITE_CONFIG || {};
  var digits = normalizeNumber(config.whatsappNumber); // se valida UNA sola vez

  var links = document.querySelectorAll("[data-whatsapp]");
  var numberSlots = document.querySelectorAll("[data-whatsapp-number]");
  var numberRows = document.querySelectorAll("[data-whatsapp-row]");
  var demoNotes = document.querySelectorAll("[data-demo-note]");

  if (digits) {
    // El enlace y el número visible salen del MISMO valor (digits).
    var url = buildWhatsAppUrl(digits, config.whatsappMessage);
    var shown = formatNumber(digits);

    links.forEach(function (link) {
      link.href = url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    });

    numberSlots.forEach(function (slot) { slot.textContent = shown; });
    numberRows.forEach(function (row) { row.hidden = false; });

    // Los avisos de demostración solo se quitan si se indica explícitamente false.
    if (config.whatsappIsDemo === false) {
      demoNotes.forEach(hide);
    }
  } else {
    // Configuración ausente o inválida: no se crea ningún enlace.
    // Se ocultan los botones de WhatsApp y sus avisos; la fila del número
    // ya está oculta por defecto en index.html.
    links.forEach(hide);
    demoNotes.forEach(hide);
    if (window.console && console.warn) {
      console.warn("[Barbería Distrito] whatsappNumber falta o no es válido en js/config.js. " +
        "Se ocultaron los botones de WhatsApp para no mostrar un enlace incorrecto.");
    }
  }
})();
