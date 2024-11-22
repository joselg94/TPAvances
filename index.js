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
    // agendarButton.addEventListener('click', (e) => {
    //     console.log("antes del prevent")
    //     e.preventDefault();
    //     console.log("despues del prevent")
    //     // Capturar los valores de los campos del formulario
    //     const nombre = document.getElementById('nombreCliente').value;
    //     const correo = document.getElementById('correoCliente').value;
    //     const telefono = document.getElementById('telefonoCliente').value;
    //     //   const fecha = document.getElementById('fechaTurno').value;
    
    //   // Verificar que los campos no estén vacíos antes de continuar
    //   if (nombre && correo && telefono && fecha) {
    //     // Personalizar el mensaje en el modal
    //     modalBody.textContent = `¡Felicitaciones ${nombre}! Su turno agendado para el ${fecha} fue agendado correctamente.`;
    //   } else {
    //     // Mensaje de validación en caso de campos vacíos (opcional)
    //     modalBody.textContent = `Por favor, complete todos los campos antes de agendar el turno.`;
    //   }
    // });
    const modal = new bootstrap.Modal(document.getElementById('confirmationModal'));

    console.log("carga inicial", document.getElementById("showModalButton"))
    document.getElementById('showModalButton').addEventListener('click', (e) => {
        e.preventDefault();
        
        console.log("antes del prevent")
        e.preventDefault();
        console.log("despues del prevent")
        // Capturar los valores de los campos del formulario
        const nombre = document.getElementById('nombreCliente').value;
        const correo = document.getElementById('correoCliente').value;
        const telefono = document.getElementById('telefonoCliente').value;
        //   const fecha = document.getElementById('fechaTurno').value;
    
        // Verificar que los campos no estén vacíos antes de continuar
        if (nombre && correo && telefono && fecha) {
        // Personalizar el mensaje en el modal
        modalBody.textContent = `¡Felicitaciones ${nombre}! Su turno agendado para el ${fecha} fue agendado correctamente.`;
        } else {
        // Mensaje de validación en caso de campos vacíos (opcional)
        modalBody.textContent = `Por favor, complete todos los campos antes de agendar el turno.`;
        }
      
        modal.show();
    });
    document.querySelector('.btn-close').addEventListener('click', () => {
        modal.hide();
    });
    document.getElementById('bookAppointment').addEventListener('click', () => {
        modal.hide();
    });
    document.addEventListener('DOMContentLoaded', () => {
        console.log("carga de fecha inicial")
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




  
