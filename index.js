const darkModeSwitch = document.getElementById('darkModeSwitch');
const darkModeSwitch1 = document.getElementById('darkModeSwitch1');
const navbar = document.querySelector('.navbar');
const footer = document.querySelector('.py-5');
const titulo = document.querySelectorAll('.titulo');
const direcciones = document.querySelectorAll('.direccion');

if (localStorage.getItem('dark-mode') === 'enabled') {
    document.body.classList.add('dark-mode');
    navbar.classList.add('dark-mode');
    footer.classList.add('dark-mode');
    titulo.forEach(element => {
        element.classList.add('dark-mode');
    });
    direcciones.forEach(element => {
        element.classList.add('dark-mode');
    });
    darkModeSwitch.checked = true;
    darkModeSwitch1.checked = true;
}else{
    document.body.classList.remove('dark-mode');
    navbar.classList.remove('dark-mode');
    footer.classList.remove('dark-mode');
    titulo.forEach(element => {
        element.classList.remove('dark-mode');
    });
    direcciones.forEach(element => {
        element.classList.remove('dark-mode');
    });
    darkModeSwitch.checked = false;
    darkModeSwitch1.checked = false;
}
darkModeSwitch.addEventListener('change', () => {
    if (darkModeSwitch.checked) {
        document.body.classList.add('dark-mode');
        navbar.classList.add('dark-mode');
        footer.classList.add('dark-mode');
        titulo.forEach(element => {
            element.classList.add('dark-mode');
        });
        direcciones.forEach(element => {
            element.classList.add('dark-mode');
        });

        localStorage.setItem('dark-mode', 'enabled');
    } else {
        document.body.classList.remove('dark-mode');
        navbar.classList.remove('dark-mode');
        footer.classList.remove('dark-mode');
        titulo.forEach(element => {
            element.classList.remove('dark-mode');
        });
        direcciones.forEach(element => {
            element.classList.remove('dark-mode');
        });
        localStorage.setItem('dark-mode', 'disabled');
    }
});

darkModeSwitch1.addEventListener('change', () => {
    if (darkModeSwitch1.checked) {
        document.body.classList.add('dark-mode');
        navbar.classList.add('dark-mode');
        footer.classList.add('dark-mode');
        titulo.forEach(element => {
            element.classList.add('dark-mode');
        });
        direcciones.forEach(element => {
            element.classList.add('dark-mode');
        });
        localStorage.setItem('dark-mode', 'enabled');
    } else {
        document.body.classList.remove('dark-mode');
        navbar.classList.remove('dark-mode');
        footer.classList.remove('dark-mode');
        titulo.forEach(element => {
            element.classList.remove('dark-mode');
        });
        direcciones.forEach(element => {
            element.classList.remove('dark-mode');
        });
        localStorage.setItem('dark-mode', 'disabled');
    }
});