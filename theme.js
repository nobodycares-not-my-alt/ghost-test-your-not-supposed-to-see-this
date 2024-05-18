// nobodycares is a skiddy kid af LOL

function initTheme() {
    const savedTheme = localStorage.getItem('themeSwitch');
    if (savedTheme) {
        document.body.setAttribute('data-theme', savedTheme);
    }
}

initTheme(); 

function toggleTheme() {
    const currentTheme = document.body.getAttribute('data-theme');
    const newTheme = currentTheme === 'catppuccinma' ? 'light' : 'catppuccinma';

    document.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('themeSwitch', newTheme);
}

const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', toggleTheme);

initTheme();