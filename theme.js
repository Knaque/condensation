const themeButton = document.getElementById('theme-button');
const body = document.body;

const theme = localStorage.getItem('theme')
if (theme === "dark") {
    body.classList.replace('light', 'dark')
}

themeButton.onclick = () => {
    if (body.classList.contains('dark')) {
        body.classList.replace('dark', 'light');
        localStorage.setItem('theme', 'light')

    } else if (body.classList.contains('light')) {
        body.classList.replace('light', 'dark');
        localStorage.setItem('theme', 'dark')
    };
};
