# Barbería Distrito: sitio de demostración

Página de una sola sección hecha con HTML, CSS y JavaScript básico.
Todos los datos (precios, horarios, dirección, teléfono, correo) son ficticios.

## Abrir
Doble clic en `index.html`. No necesita servidor ni instalación.

## Qué editar
| Quiero cambiar...                          | Archivo             |
|--------------------------------------------|---------------------|
| Número de WhatsApp (enlace y texto visible)| `js/config.js`      |
| Mensaje de WhatsApp                        | `js/config.js`      |
| Quitar los avisos de "número de demostración" | `js/config.js` (`whatsappIsDemo: false`) |
| Textos, precios, horarios, correo, dirección | `index.html`      |
| Colores y tipografías                      | `css/styles.css` (bloque `:root`, al inicio) |
| Fotos                                      | `img/` (ver `img/LEEME.txt`) |

El número de WhatsApp se escribe **una sola vez**, en `js/config.js`. El enlace de los
botones y el número que se muestra en Contacto se generan desde ese mismo valor, por lo
que no pueden quedar distintos. No escribas el número directamente en `index.html`.

Si el número falta o es inválido, la página no crea ningún enlace: oculta los botones de
WhatsApp y el número, y deja un aviso en la consola del navegador.

## Antes de entregar a un cliente real
- Reemplazar todos los datos ficticios por los reales.
- En `js/config.js`: poner el número real y cambiar `whatsappIsDemo` a `false`.
- Quitar el aviso de demostración (`<p class="demo">`) y la etiqueta `noindex` del `<head>`.
- Añadir fotografías autorizadas.

## Publicación
Es una carpeta estática con rutas relativas, por lo que puede alojarse en servicios
de alojamiento estático. Se tratará en una etapa posterior.