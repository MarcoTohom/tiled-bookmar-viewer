
# Visor de Marcadores (Chrome Extension)

Este proyecto es una extensión para navegadores Chromium (Chrome, Edge, Brave) que permite visualizar los marcadores del usuario en vista **lista** o **cuadrícula**, con agrupación por carpetas, expandir/contraer y jerarquía visual.

## 🗂️ Estructura de Archivos

- `manifest.json`   
- `background.js`   
- `index.html`      
- `popup.js`        
- `style.css`       
- `icon.png`        
- `donate.html`     ⬆️ Nueva página para recibir donaciones via PayPal

## ⚙️ Instalación y Prueba

1. Clona o descarga este repositorio.
2. Abre Chrome y ve a `chrome://extensions/`.
3. Activa **Modo desarrollador** (esquina superior derecha).
4. Haz clic en **Cargar descomprimida (Load unpacked)**.
5. Selecciona la carpeta `bookmarks-viewer-extension/`.
6. Verás la extensión con el título **Visor de Marcadores**.
7. Haz clic en el ícono de la extensión para abrir una nueva pestaña con tus marcadores.

## 🔍 Funcionalidades

- **Lista / Cuadrícula**: Cambia entre vistas con los botones superiores.
- **Agrupación por carpetas**: Cada carpeta muestra su contenido anidado.
- **Expandir / Contraer**: Haz clic en el título de la carpeta para alternar.
- **Icono dinámico**: Triángulo ▶ (colapsado) / ▼ (expandido).
- **Jerarquía visual**: Sangría y borde en cada nivel de carpeta.
- **Donaciones PayPal**: Accede a `donate.html` para apoyar el proyecto.

## 🛠️ Desarrollo

- Edita `style.css` para personalizar estilos.
- Modifica `renderBookmarks` en `popup.js` para ajustar la lógica.
- Usa `manifest.json` para agregar permisos o background scripts adicionales.

## 🚀 Publicación (Opcional)

1. Empaqueta tu extensión en un `.zip` (sin archivos innecesarios).
2. Regístrate como desarrollador en la Chrome Web Store.
3. Sube el paquete y completa la ficha de la tienda.
4. Paga la tarifa única de $5 USD.

## 🤝 Contribuciones

¡Bienvenidas! Para contribuir, abre un Pull Request o issue con sugerencias.