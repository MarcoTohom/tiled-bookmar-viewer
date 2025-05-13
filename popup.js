
document.getElementById('listView').addEventListener('click', () => {
  document.getElementById('bookmarks').className = 'bookmarks list';
});

document.getElementById('gridView').addEventListener('click', () => {
  document.getElementById('bookmarks').className = 'bookmarks grid';
});

function renderBookmarks(bookmarks, container) {
  bookmarks.forEach(bookmark => {
    if (bookmark.children && bookmark.children.length > 0) {
      const folder = document.createElement('div');
      folder.className = 'folder';
      folder.innerHTML = `<h3>${bookmark.title || 'Sin nombre'}</h3>`;
      renderBookmarks(bookmark.children, folder);
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