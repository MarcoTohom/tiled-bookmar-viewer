

document.getElementById('listView').addEventListener('click', () => {
  document.getElementById('bookmarks').className = 'bookmarks list';
});

document.getElementById('gridView').addEventListener('click', () => {
  document.getElementById('bookmarks').className = 'bookmarks grid';
});

// 🔽 Función actualizada para agrupar y colapsar carpetas
function renderBookmarks(bookmarks, container) {
  bookmarks.forEach(bookmark => {
    if (bookmark.children && bookmark.children.length > 0) {
      const folder = document.createElement('div');
      folder.className = 'folder';
      const title = document.createElement('h3');
      title.textContent = bookmark.title || 'Sin nombre';

      const content = document.createElement('div');
      content.className = 'folder-content';
      renderBookmarks(bookmark.children, content);

      // 🔽 Nueva funcionalidad: expandir/contraer carpeta
      title.addEventListener('click', () => {
        content.classList.toggle('collapsed');
      });

      folder.appendChild(title);
      folder.appendChild(content);
      container.appendChild(folder);
    } else if (bookmark.url) {
      const el = document.createElement('div');
      el.className = 'bookmark';
      el.innerHTML = `<a href="${bookmark.url}" target="_blank">${bookmark.title}</a>`;
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