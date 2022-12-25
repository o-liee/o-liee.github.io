// Get elements
let r = document.querySelector(':root');
btn = document.querySelector('.theme');

function myFunction_set(oldVar, newVar) {
    r.style.setProperty(oldVar, newVar);
}

function mode() {
    if (darkMode) {
        btn.innerHTML = "🌙";
        darkMode = false;
        // Colors for light mode
        myFunction_set('--color-text', '#50256b');
        myFunction_set('--color-bg', '#f1b5ff');
        myFunction_set('--color-bg-light', '#eee0f1');
        myFunction_set('--color-bg-dark', '#dc97f7');
        myFunction_set('--color-selection-text', '#6925b3');
        myFunction_set('--color-selection-bg', '#a168af');
    } else {
        btn.innerHTML = "☀️";
        darkMode = true;
        // Colors for dark mode
        myFunction_set('--color-text', '#f1b5ff');
        myFunction_set('--color-bg', '#1a0a24');
        myFunction_set('--color-bg-light', '#7c378b1e');
        myFunction_set('--color-bg-dark', '#0e0111');
        myFunction_set('--color-selection-text', '#bd83ff');
        myFunction_set('--color-selection-bg', '#55315e');
    }
}

darkMode = true;
btn.addEventListener('click', mode);
