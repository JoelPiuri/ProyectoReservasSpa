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
  services: string[] =['Masaje Sueco','Masaje Mediterraneo','Masaje con Piedras Volcanicas', 'Bambu terapia','Limpiesa Facial Profunda con Revitalizacion','Tratamiento Piel Madura'
    ,'Tratamioento de Hiper-Pingmentacion', 'Rejuvenecimiento Facial con RadioFrecuencia'
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
}
