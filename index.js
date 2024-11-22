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

// Mostrar el botón de scroll al inicio
const scrollToTopBtn1 = document.getElementById('scrollToTop');

// Mostrar u ocultar el botón según el scroll
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




  
