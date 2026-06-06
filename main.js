const sidebar      = document.getElementById('sidebar');
const mainContent  = document.getElementById('main-content');
const btn          = document.getElementById('toggle-sidebar');
const themeBtn     = document.getElementById('theme-toggle');
const editor       = document.getElementById('editor');
const lineNumbers  = document.getElementById('line-numbers');
const wordCount    = document.getElementById('word-count');
const charCount    = document.getElementById('char-count');


themeBtn.addEventListener('click', () => {
    const isLight = document.documentElement.classList.toggle('light');
    themeBtn.innerHTML = isLight
        ? '<i data-lucide="moon"></i>'
        : '<i data-lucide="sun"></i>';
    lucide.createIcons();
});

btn.addEventListener('click', () => {
    const isCollapsing = !sidebar.classList.contains('collapsed');
    sidebar.classList.toggle('collapsed');
    mainContent.classList.toggle('expanded');
    btn.classList.toggle('collapsed');

    btn.innerHTML = isCollapsing
        ? '<i data-lucide="chevron-right"></i>'
        : '<i data-lucide="chevron-left"></i>';
    lucide.createIcons();
});


function updateLineNumbers() {
    const text   = editor.innerText;
    const lines  = text === '' ? 1 : text.split('\n').length;
    let nums = '';
    for (let i = 1; i <= lines; i++) nums += i + '\n';
    lineNumbers.textContent = nums;
}

function updateCounts() {
    const text  = editor.innerText.trim();
    const words = text === '' ? 0 : text.split(/\s+/).filter(Boolean).length;
    const chars = editor.innerText.replace(/\n$/, '').length;
    wordCount.textContent = words + ' word' + (words !== 1 ? 's' : '');
    charCount.textContent = chars + ' char' + (chars !== 1 ? 's' : '');
}

editor.addEventListener('input', () => {
    updateLineNumbers();
    updateCounts();
});


lucide.createIcons();
updateLineNumbers();
updateCounts();


// Optional: Add keyboard shortcut (Ctrl+B) to toggle sidebar
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key.toLowerCase() === 'b') {
        e.preventDefault();
        btn.click();
    }
});