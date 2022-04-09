const btn = document.querySelector('.btn-toggle-color');
const body = document.body;
const counterH = document.querySelector('.counter-header');

let counter = Number(localStorage.getItem('counter'));
counterH.innerText = String(counter);

const clicker = () => {
    counterH.innerText = ++counter;
    localStorage.setItem('counter', counter.toString());
}

const darkMode = () => {
    const isDark = body.classList.toggle('dark-mode');
    if(isDark) {
        btn.innerText = 'Turn on lights'
    } else {
        btn.innerText = 'Make it dark!'
    }
    clicker();
}
btn.addEventListener('click', darkMode);
