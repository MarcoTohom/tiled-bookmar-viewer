
// 🔽 Cambiar el icono de la extensión según la vista seleccionada
document.getElementById('listView').addEventListener('click', () => {
  document.getElementById('bookmarks').className = 'bookmarks list';
});

document.getElementById('gridView').addEventListener('click', () => {
  document.getElementById('bookmarks').className = 'bookmarks grid';
});

// 🔽 Función actualizada con icono dinámico y agrupación visual por jerarquía
function renderBookmarks(bookmarks, container, depth = 0) {
  bookmarks.forEach(bookmark => {
    if (bookmark.children && bookmark.children.length > 0) {
      const folder = document.createElement('div');
      folder.className = 'folder expanded';
      folder.style.marginLeft = `${depth * 15}px`; // 🔽 Sangría por jerarquía

      const title = document.createElement('h3');
      const arrow = document.createElement('span');
      arrow.className = 'arrow';
      arrow.textContent = '▼'; // 🔽 Triángulo hacia abajo por defecto

      title.appendChild(arrow);
      title.appendChild(document.createTextNode(bookmark.title || 'Sin nombre'));

      const content = document.createElement('div');
      content.className = 'folder-content';

      renderBookmarks(bookmark.children, content, depth + 1);

      title.addEventListener('click', () => {
        const isCollapsed = content.classList.toggle('collapsed');
        folder.classList.toggle('collapsed', isCollapsed);
        folder.classList.toggle('expanded', !isCollapsed);
        arrow.textContent = isCollapsed ? '▶' : '▼';
      });

      folder.appendChild(title);
      folder.appendChild(content);
      container.appendChild(folder);
    } else if (bookmark.url) {
      const el = document.createElement('div');
      el.className = 'bookmark';

      const link = document.createElement('a');
      link.href = bookmark.url;
      link.target = '_blank';

      const img = document.createElement('img');
      img.src = 'chrome://favicon/size/16@1x/' + bookmark.url;
      img.alt = 'Favicon';
      img.className = 'favicon-img'; // Added class for styling

      link.appendChild(img);
      link.appendChild(document.createTextNode(bookmark.title));

      el.appendChild(link);
      container.appendChild(el);
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('bookmarks');
  chrome.bookmarks.getTree((nodes) => {
    renderBookmarks(nodes, container);
  });
});