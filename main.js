const sidebar = document.getElementById('sidebar');
const mainContent = document.getElementById('main-content');
const btn = document.getElementById('toggle-sidebar');
const themeBtn = document.getElementById('theme-toggle');

themeBtn.addEventListener('click', () => {
    const isLight = document.documentElement.classList.toggle('light');
    themeBtn.innerHTML = isLight ? '<i data-lucide="moon"></i>' : '<i data-lucide="sun"></i>';
    lucide.createIcons();   // re-renders the new icon
});

// render icons on first load
lucide.createIcons();
btn.addEventListener('click', () => {
    const isCollapsing = !sidebar.classList.contains('collapsed');

    sidebar.classList.toggle('collapsed');
    mainContent.classList.toggle('expanded');
    btn.classList.toggle('collapsed');

    btn.innerHTML = isCollapsing ? '&#8250;' : '&#8249;';
});