import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReservationService } from '../../services/reservation.service';

@Component({
  selector: 'app-buscar-reservacion',
  templateUrl: './buscar-reservacion.component.html',
  styleUrls: ['./buscar-reservacion.component.css']
})
export class BuscarReservacionComponent {
  codigoAsignado: string = '';
  reservacion: any = null; 
  errorMsg: string = ''; 

  mostrarFormulario = false;
  modificacionForm: FormGroup;
  services: string[] = [
    'Masaje Sueco', 'Masaje Mediterraneo', 'Masaje con Piedras Volcanicas',
    'Bambu terapia', 'Limpieza Facial Profunda con Revitalización',
    'Tratamiento Piel Madura', 'Tratamiento de Hiper-Pigmentación',
    'Rejuvenecimiento Facial con RadioFrecuencia'
  ];
  availableTimes: string[] = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00',
    '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00'
  ];

  constructor(private reservationService: ReservationService, private fb: FormBuilder) {
    this.modificacionForm = this.fb.group({
      date: [''],
      time: [''],
      service: [''],
      clientName: [''],
      clientEmail: ['']
    });

    this.generateAvailableTimes();
  }

  generateAvailableTimes() {
    this.availableTimes = [
      '09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00',
      '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00'
    ];
  }

  buscarReservacion() {

    console.log('Código buscado:', this.codigoAsignado); // Depuración
  
    // Verificar que turnoBuscado esté definido y sea un número válido
    if (!this.codigoAsignado || typeof this.codigoAsignado !== 'string') {
      this.errorMsg = 'Por favor, ingresa un código válido';
      return;
    }
  
    this.reservationService.buscarReservacion(this.codigoAsignado).subscribe(

      data => {
        this.reservacion = data;
        this.errorMsg = '';
      },
      error => {
        console.error('Error al buscar la reservación:', error);
        this.errorMsg = 'Reservación no encontrada';
        this.reservacion = null;
      }
    );
  }

  mostrarFormularioModificacion() {
    this.mostrarFormulario = true;
    this.modificacionForm.patchValue({
      date: this.reservacion.date,
      time: this.reservacion.time,
      service: this.reservacion.service,
      clientName: this.reservacion.clientName,
      clientEmail: this.reservacion.clientEmail
    });
  }

  onModificar() {
    console.log('Código buscado en modificar:', this.codigoAsignado); // Depurar turnoBuscado

    const formData = this.modificacionForm.value;
    const selectedDateTime = new Date(`${formData.date}T${formData.time}`);
    const currentDateTime = new Date();

    // Verificar que la fecha y hora sean válidas
    if (!formData.date || !formData.time) {
      alert('Por favor selecciona una fecha y hora válidas.');
      return;
    }

    if (this.codigoAsignado === null) {
      alert('El codigo buscado no es válido.');
      return;
    }
  
    this.reservationService.modificarReservacion(this.codigoAsignado, formData).subscribe(

   
      data => {
        alert('Reservación modificada exitosamente');
        this.reservacion = data;
        this.mostrarFormulario = false; // Ocultar el formulario después de la modificación
      },
      error => {
        console.error('Error al modificar la reservación:', error);
        alert('Error al modificar la reservación');
      }
    );
  }

  eliminarReservacion() {
    if (confirm('¿Estás seguro de que deseas eliminar esta reservación?')) {
      if (this.codigoAsignado !== null) {
        this.reservationService.eliminarReservacion(this.codigoAsignado.toString()).subscribe(
          () => {
            alert('Reservación eliminada exitosamente');
            this.reservacion = null;
            this.mostrarFormulario = false;
          },
          error => {
            console.error('Error al eliminar la reservación:', error);
            alert('Error al eliminar la reservación');
          }
        );
      } else {
        alert('Por favor, ingresa un turno válido antes de intentar eliminar la reservación.');
      }
    }
  }
}
