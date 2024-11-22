document.addEventListener('DOMContentLoaded', function () {
    // Establecer la fecha mínima en el input
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

let fecha;
// Evento de cambio de fecha
document.getElementById('fechaTurno').addEventListener('change', function () {
    const input = this.value; // Captura el valor del input (formato YYYY-MM-DD)
    const [year, month, day] = input.split('-'); // Divide el valor por guiones
    fecha = `${day}/${month}/${year}`; // Reformatea el valor al formato DD/MM/YYYY
});

const modalBody = document.querySelector('.modal-body');
const modal = new bootstrap.Modal(document.getElementById('confirmationModal'));

// Función para validar nombre (solo letras)
function validarNombre(nombre) {
    const regex = /^[A-Za-záéíóúÁÉÍÓÚÑñ\s]+$/;
    return regex.test(nombre);
}

// Función para validar teléfono (solo números)
function validarTelefono(telefono) {
    const regex = /^[0-9]+$/;
    return regex.test(telefono);
}

// Función para validar correo electrónico
function validarCorreo(correo) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(correo);
}

// Validación de formulario
document.getElementById('showModalButton').addEventListener('click', function () {
    // Resetear los mensajes de error
    document.querySelectorAll('.text-danger').forEach(error => error.style.display = 'none');

    const nombre = document.getElementById('nombreCliente').value;
    const correo = document.getElementById('correoCliente').value;
    const telefono = document.getElementById('telefonoCliente').value;
    const fechaTurno = document.getElementById('fechaTurno').value;

    let formIsValid = true;

    // Validar nombre
    if (!validarNombre(nombre)) {
        document.getElementById('nombreError').style.display = 'block';
        formIsValid = false;
    }

    // Validar correo
    if (!validarCorreo(correo)) {
        document.getElementById('correoError').style.display = 'block';
        formIsValid = false;
    }

    // Validar teléfono
    if (!validarTelefono(telefono)) {
        document.getElementById('telefonoError').style.display = 'block';
        formIsValid = false;
    }

    // Validar fecha
    if (!fechaTurno) {
        document.getElementById('fechaError').style.display = 'block';
        formIsValid = false;
    }

    // Si el formulario es válido, mostrar el modal
    if (formIsValid) {
        modalBody.textContent = `¡Felicitaciones ${nombre}! Su turno agendado para el ${fecha} fue agendado correctamente.`;
        modal.show();
    }
});

// Evento de clic en "Reservar Turno" dentro del modal
document.getElementById('bookAppointment').addEventListener('click', function () {
    document.getElementById('nombreCliente').value = '';
    document.getElementById('correoCliente').value = '';
    document.getElementById('telefonoCliente').value = '';
    document.getElementById('fechaTurno').value = '';
    modal.hide();
});
document.getElementById('button-close').addEventListener('click', function () {
    modal.hide();
});

