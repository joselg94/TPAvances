const darkModeSwitch = document.getElementById('darkModeSwitch');
const darkModeSwitch1 = document.getElementById('darkModeSwitch1');
const navbar = document.querySelector('.navbar');
const footer = document.querySelector('.py-5');
const titulo = document.querySelectorAll('.titulo');
const direcciones = document.querySelectorAll('.direccion');

// Función para aplicar el modo oscuro
function enableDarkMode() {
    document.body.classList.add('dark-mode');
    navbar.classList.add('dark-mode');
    footer.classList.add('dark-mode');
    titulo.forEach(element => element.classList.add('dark-mode'));
    direcciones.forEach(element => element.classList.add('dark-mode'));
    localStorage.setItem('dark-mode', 'enabled');
    darkModeSwitch.checked = true;
    darkModeSwitch1.checked = true;
}

// Función para desactivar el modo oscuro
function disableDarkMode() {
    document.body.classList.remove('dark-mode');
    navbar.classList.remove('dark-mode');
    footer.classList.remove('dark-mode');
    titulo.forEach(element => element.classList.remove('dark-mode'));
    direcciones.forEach(element => element.classList.remove('dark-mode'));
    localStorage.setItem('dark-mode', 'disabled');
    darkModeSwitch.checked = false;
    darkModeSwitch1.checked = false;
}

// Función para sincronizar el estado inicial
function syncDarkModeState() {
    if (localStorage.getItem('dark-mode') === 'enabled') {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
}

// Escucha de eventos para ambos toggles
darkModeSwitch.addEventListener('change', () => {
    if (darkModeSwitch.checked) {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});

darkModeSwitch1.addEventListener('change', () => {
    if (darkModeSwitch1.checked) {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});


syncDarkModeState();


// Mostrar el botón de scroll al inicio
const scrollToTopBtn1 = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    scrollToTopBtn1.style.display = 'block';
  } else {
    scrollToTopBtn1.style.display = 'none';
  }
});

// Volver al inicio al hacer clic en el botón
scrollToTopBtn1.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


  
