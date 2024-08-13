import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReservationService } from '../../services/reservation.service';

@Component({
  selector: 'app-ver-disponibilidad',
  templateUrl: './ver-disponibilidad.component.html',
  styleUrls: ['./ver-disponibilidad.component.css']
})
export class VerDisponibilidadComponent {
  disponibilidadForm: FormGroup;
  disponible: boolean | null = null;
  availableTimes: string[] = [];

  constructor(private fb: FormBuilder, private reservationService: ReservationService) {
    this.disponibilidadForm = this.fb.group({
      date: [''],
      time: ['']
    });

    // Genera las horas disponibles
    this.generateAvailableTimes();
  }

  generateAvailableTimes() {
    const times = [];
    const intervals = ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00',
                       '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00'];
    for (const interval of intervals) {
      times.push(interval);
    }
    this.availableTimes = times;
  }

  verificarDisponibilidad() {
    const { date, time } = this.disponibilidadForm.value;
    const selectedDateTime = new Date(`${date}T${time}`);
    const currentDateTime = new Date();

    // Validación: no permitir reservar fechas y horas anteriores al momento actual
    if (selectedDateTime < currentDateTime) {
      this.disponible = false;
      console.warn('No se puede reservar una fecha u hora anterior al momento actual.');
      return;
    }

    this.reservationService.verificarDisponibilidad(date, time).subscribe(
      (response: { disponible: boolean }) => {
        this.disponible = response.disponible;
      },
      (error: any) => {
        console.error('Error al verificar la disponibilidad', error);
      }
    );
  }
}
