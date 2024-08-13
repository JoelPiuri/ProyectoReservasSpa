import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReservationService } from '../../services/reservation.service';

@Component({
  selector: 'app-reservacion',
  templateUrl: './reservacion.component.html',
  styleUrls: ['./reservacion.component.css']
})
export class ReservacionComponent {
  @Input() fecha: string = '';
  @Input() hora: string = '';

  reservationForm: FormGroup;
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

  constructor(
    private fb: FormBuilder,
    private reservationService: ReservationService
  ) {
    this.reservationForm = this.fb.group({
      date: [this.fecha || ''],
      time: [this.hora || ''],
      service: [''],
      clientName: [''],
      clientEmail: ['']
    });
  }

  onSubmit() {
    this.reservationForm.patchValue({
      date: this.fecha,
      time: this.hora
    });

    if (!this.isTimeValid(this.reservationForm.value.time)) {
      alert('Por favor selecciona una hora válida dentro de los intervalos permitidos.');
      return;
    }

    const selectedDateTime = new Date(`${this.reservationForm.value.date}T${this.reservationForm.value.time}`);
    const currentDateTime = new Date();

    if (selectedDateTime < currentDateTime) {
      alert('No se puede reservar una fecha u hora anterior al momento actual.');
      return;
    }

    if (this.reservationForm.valid) {
      console.log('Datos a enviar:', this.reservationForm.value);
      this.reservationService.crearReservacion(this.reservationForm.value).subscribe(
        response => {
          const { turno, date, time, service, clientName } = response;
          alert(`Gracias por reservar ${clientName}. Tu ${service} se realizará el ${date} a las ${time}. Tu turno es ${turno}.`);
        },
        error => {
          console.error('Error al crear la reservación', error);
        }
      );
    }
  }

  isTimeValid(time: string): boolean {
    const allowedTimes = [
      '09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00',
      '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00'
    ];
    return allowedTimes.includes(time);
  }
}
