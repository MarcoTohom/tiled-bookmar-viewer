
document.getElementById('listView').addEventListener('click', () => {
  document.getElementById('bookmarks').className = 'bookmarks list';
});

document.getElementById('gridView').addEventListener('click', () => {
  document.getElementById('bookmarks').className = 'bookmarks grid';
});

function renderBookmarks(bookmarks, container) {
  bookmarks.forEach(bookmark => {
    if (bookmark.url) {
      const el = document.createElement('div');
      el.className = 'bookmark';
      el.innerHTML = `<a href="${bookmark.url}" target="_blank">${bookmark.title}</a>`;
      container.appendChild(el);
    } else if (bookmark.children) {
      renderBookmarks(bookmark.children, container);
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('bookmarks');
  chrome.bookmarks.getTree((nodes) => {
    renderBookmarks(nodes, container);
  });
});