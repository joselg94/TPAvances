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

if(window.location.pathname === '/turnos.html'){
    let fecha;
    document.getElementById('fechaTurno').addEventListener('change', function () {
        const input = this.value; // Captura el valor del input (formato YYYY-MM-DD)
        const [year, month, day] = input.split('-'); // Divide el valor por guiones
        fecha = `${day}/${month}/${year}`; // Reformatea el valor al formato DD/MM/YYYY
    });
    const agendarButton = document.querySelector('button[data-bs-toggle="modal"]');
    const modalBody = document.querySelector('.modal-body');
    // Escuchar el clic en el botón de agendar turno
    agendarButton.addEventListener('click', (e) => {
        e.preventDefault();

        // Capturar los valores de los campos del formulario
        const nombre = document.getElementById('nombreCliente').value;
        const correo = document.getElementById('correoCliente').value;
        const telefono = document.getElementById('telefonoCliente').value;
        const fechaInput = document.getElementById('fechaTurno').value;

        // Referencias a los elementos de error
        const nombreError = document.getElementById('nombreError');
        const correoError = document.getElementById('correoError');
        const telefonoError = document.getElementById('telefonoError');
        const fechaError = document.getElementById('fechaError');

        // Validaciones
        let valid = true;

        // Validar nombre: solo letras
        if (!/^[a-zA-ZÁÉÍÓÚáéíóúñÑ\s]+$/.test(nombre)) {
            nombreError.classList.remove('d-none');
            valid = false;
        } else {
            nombreError.classList.add('d-none');
        }

        // Validar correo: formato de correo electrónico
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
            correoError.classList.remove('d-none');
            valid = false;
        } else {
            correoError.classList.add('d-none');
        }

        // Validar teléfono: solo números
        if (!/^\d+$/.test(telefono)) {
            telefonoError.classList.remove('d-none');
            valid = false;
        } else {
            telefonoError.classList.add('d-none');
        }

        // Validar fecha: campo no vacío
        if (!fechaInput) {
            fechaError.classList.remove('d-none');
            valid = false;
        } else {
            fechaError.classList.add('d-none');
        }

        // Mostrar el mensaje en el modal si todo es válido
        if (valid) {
            modalBody.textContent = `¡Felicitaciones ${nombre}! Su turno para el ${fecha} fue agendado correctamente.`;
        } else {
            modalBody.textContent = `Por favor, complete todos los campos correctamente antes de agendar el turno.`;
        }
    });

    let button = document.getElementById('success-btn');
    button.addEventListener('click', (e) =>{
        document.getElementById('nombreCliente').value = '';
        document.getElementById('correoCliente').value = '';
        document.getElementById('telefonoCliente').value = '';
        document.getElementById('fechaTurno').value = '';

    })

    document.addEventListener('DOMContentLoaded', () => {
        const fechaInput = document.getElementById('fechaTurno');
        
        // Obtener la fecha actual en formato YYYY-MM-DD
        const hoy = new Date();
        const anio = hoy.getFullYear();
        const mes = String(hoy.getMonth() + 1).padStart(2, '0'); // Mes en formato 2 dígitos
        const dia = String(hoy.getDate()).padStart(2, '0'); // Día en formato 2 dígitos
        
        const fechaMinima = `${anio}-${mes}-${dia}`;
        
        // Establecer el valor mínimo en el input
        fechaInput.setAttribute('min', fechaMinima);
      });
}

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




  
