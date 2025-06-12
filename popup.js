document.getElementById('listView').addEventListener('click', () => {
  document.getElementById('bookmarks').className = 'bookmarks list';
});

document.getElementById('gridView').addEventListener('click', () => {
  document.getElementById('bookmarks').className = 'bookmarks grid';
});


const getFaviconUrl = (url) => {
  try {
    const { hostname } = new URL(url);
    return `https://www.google.com/s2/favicons?domain=${hostname}&sz=32`;
  } catch (e) {
    return '';
  }
};

function renderBookmarks(bookmarks, container, depth = 0) {
  bookmarks.forEach(bookmark => {
    if (bookmark.children && bookmark.children.length > 0) {
      const folder = document.createElement('div');
      folder.className = 'folder expanded';
      folder.style.marginLeft = `${depth * 15}px`;
      const title = document.createElement('h3');
      const arrow = document.createElement('span');
      arrow.className = 'arrow';
      arrow.textContent = '▼';
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
      const el = document.createElement('a');
      el.href = bookmark.url;
      el.target = '_blank';
      el.className = 'bookmark bookmark-link';
      el.innerHTML = `
        <img src="${getFaviconUrl(bookmark.url)}" alt="Favicon" class="favicon-img">
        ${bookmark.title}
      `;
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