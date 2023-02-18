const btnDarkMode = document.querySelector(".dark-mode-btn");

//Check at the level of system settings
if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    btnDarkMode.classList.add("dark-mode-btn--active");
    document.body.classList.add("dark");    
}

//Check up dark mode in local storage
if (localStorage.getItem('darkMode') === 'dark') {
    btnDarkMode.classList.add("dark-mode-btn--active");
    document.body.classList.add("dark");
} else if ((localStorage.getItem('lightMode') === 'light')) {
    btnDarkMode.classList.remove("dark-mode-btn--active");
    document.body.classList.remove("dark"); 
}

// Mode according to time
window.matchMedia("(prefers-color-scheme: dark").addEventListener('change', (event) => {
 const newColorScheme = event.matches ? "dark" : 'light';

 if (newColorScheme === 'dark') {
    btnDarkMode.classList.add("dark-mode-btn--active");
    document.body.classList.add("dark");  
 } else {
    btnDarkMode.classList.remove("dark-mode-btn--active");
    document.body.classList.remove("dark"); 
 }
})

// Switch on dark mode on button
btnDarkMode.onclick = function () {
    btnDarkMode.classList.toggle("dark-mode-btn--active");
    const isDark = document.body.classList.toggle('dark');

    if (isDark) {
        localStorage.setItem('darkMode', 'dark');
    } else {
        localStorage.setItem('darkMode', 'light');
    }
}
