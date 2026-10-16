/* ============================================================
   CONFIGURACIÓN DE WHATSAPP
   Este es el ÚNICO lugar donde se escribe el número de WhatsApp.
   El enlace de los botones Y el número que se ve en la sección
   Contacto se generan automáticamente a partir de este mismo valor,
   así que no pueden quedar distintos. No escribas el número en
   index.html.
   ============================================================ */
window.SITE_CONFIG = {
  // Número en formato internacional: código de país + número, sin ceros
  // iniciales. Se recomienda escribir SOLO DÍGITOS (ejemplo Colombia:
  // 57 + 10 dígitos). Se toleran espacios, guiones, paréntesis y "+".
  // Si el número queda vacío o con formato inválido, la página NO crea
  // ningún enlace: oculta los botones de WhatsApp y el número, y escribe
  // un aviso en la consola del navegador.
  // ¡ATENCIÓN! 570000000000 es un número de DEMOSTRACIÓN: no existe.
  whatsappNumber: "570000000000",

  // Mensaje que aparecerá escrito de antemano en WhatsApp (opcional).
  // Si lo dejas vacío, el enlace se crea sin mensaje.
  whatsappMessage: "Hola, quiero solicitar una cita en Barbería Distrito.",

  // true  = el número es de demostración: la página muestra los avisos
  //         "número de demostración".
  // false = número real de un cliente: se ocultan esos avisos.
  // Si esta línea falta, se asume true (lado seguro).
  // Pon false SOLO cuando whatsappNumber sea un número real y autorizado.
  whatsappIsDemo: true
};