const modal = new bootstrap.Modal(document.getElementById('confirmationModal'));
if(window.location.pathname === '/calculadora.html'){
  const checkboxes = document.querySelectorAll('.form-check-input1');
  const totalBudgetDisplay = document.getElementById('totalBudget');
  
  // Conectar los contenedores del resumen con los elementos del DOM
  const diagnosticSummary = document.getElementById('diagnostic-summary');
  const maintenanceSummary = document.getElementById('maintenance-summary');
  const repairSummary = document.getElementById('repair-summary');
  
  function updateSummary() {
  
      let total = 0;
      // Limpiar las listas del resumen
      diagnosticSummary.innerHTML = '';
      maintenanceSummary.innerHTML = '';
      repairSummary.innerHTML = '';
  
      checkboxes.forEach((checkbox) => {
          if (checkbox.checked) {
          const label = document.querySelector(`label[for="${checkbox.id}"]`);
          const item = document.createElement('li');
          item.classList.add('summary-item');
  
          // Texto del servicio
          const text = document.createElement('span');
          text.textContent = label.textContent;
  
          // Botón de eliminar
          const deleteButton = document.createElement('button');
          deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
          deleteButton.classList.add('delete-btn');
          deleteButton.addEventListener('click', () => {
              checkbox.checked = false; // Desmarcar el checkbox
              updateSummary(); // Actualizar el resumen
          });
  
          // Agregar texto y botón al ítem
          item.appendChild(text);
          item.appendChild(deleteButton);
  
          // Clasificar el ítem en la categoría correspondiente
          if (checkbox.id.startsWith('diagnostic'))
              diagnosticSummary.appendChild(item);
          else if (checkbox.id.startsWith('maintenance'))
              maintenanceSummary.appendChild(item);
          else if (checkbox.id.startsWith('repair'))
              repairSummary.appendChild(item);
  
          total += parseInt(checkbox.value, 10);
          }
      });
  
      // Actualizar el presupuesto total
      totalBudgetDisplay.textContent = total.toLocaleString('es-AR');
  }
  
  // Vincular eventos a los checkboxes
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', updateSummary);
  });
  
  // Limpiar selección y resumen
  document.getElementById('clearButton').addEventListener('click', () => {
    checkboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });
    updateSummary();
  });

  // Mostrar el botón de scroll al inicio
  const scrollToTopBtn = document.getElementById('scrollToTop');

  // Mostrar u ocultar el botón según el scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      scrollToTopBtn.style.display = 'block';
    } else {
      scrollToTopBtn.style.display = 'none';
    }
  });

  // Volver al inicio al hacer clic en el botón
  scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Limpiar checkboxes al volver a la página
  window.addEventListener('pageshow', () => {
    checkboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });
    updateSummary(); // Actualizar el resumen
  });
  // Mostrar el modal solo si no se seleccionaron servicios
  document.getElementById('showModalButton').addEventListener('click', () => {
    
    const isChecked = Array.from(checkboxes).some((checkbox) => checkbox.checked);
  
    if (!isChecked) {
      // Si no hay servicios seleccionados, mostrar el modal con mensaje personalizado
      document.getElementById('confirmationModalLabel').textContent =
        'No seleccionaste ningún servicio';
      document.querySelector('.modal-body').textContent =
        '¿Quieres reservar un turno de todos modos?';
    } else {
      // Si se seleccionaron servicios, muestra el modal normalmente
      document.getElementById('confirmationModalLabel').textContent =
        '¿Reservar Turno?';
      document.querySelector('.modal-body').textContent =
        'Tu presupuesto está listo. ¿Deseas reservar un turno para estos servicios?';
    }
  
    modal.show();
  });
  
  // Redirigir a la página de turnos
  document.getElementById('bookAppointment').addEventListener('click', () => {
    window.location.href = 'turnos.html';
  });
}else if(window.location.pathname === '/turnos.html'){
  // Mostrar el modal solo si no se seleccionaron servicios
  let fecha;
  document.getElementById('fechaTurno').addEventListener('change', function () {
      const input = this.value; // Captura el valor del input (formato YYYY-MM-DD)
      const [year, month, day] = input.split('-'); // Divide el valor por guiones
      fecha = `${day}/${month}/${year}`; // Reformatea el valor al formato DD/MM/YYYY
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
  const modalBody = document.querySelector('.modal-body');
  document.getElementById('showModalButton').addEventListener('click', () => {
    console.log("antes del prevent")
      // e.preventDefault();
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
}


// Permitir cerrar con la cruz o al hacer clic fuera del modal
document.querySelector('.btn-close').addEventListener('click', () => {
  modal.hide();
});

document
  .getElementById('confirmationModal')
  .addEventListener('hidden.bs.modal', () => {
    // Limpiar el contenido del modal después de cerrarlo
    document.getElementById('confirmationModalLabel').textContent = '';
    document.querySelector('.modal-body').textContent = '';
  });

