const sidebar = document.getElementById('sidebar');
const mainContent = document.getElementById('main-content');
const btn = document.getElementById('toggle-sidebar');

btn.addEventListener('click', () => {
    const isCollapsing = !sidebar.classList.contains('collapsed');

    sidebar.classList.toggle('collapsed');
    mainContent.classList.toggle('expanded');
    btn.classList.toggle('collapsed');

    btn.innerHTML = isCollapsing ? '&#8250;' : '&#8249;';
});