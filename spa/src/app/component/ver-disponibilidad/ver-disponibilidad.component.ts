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

  constructor(private fb: FormBuilder, private reservationService: ReservationService) {
    this.disponibilidadForm = this.fb.group({
      date: [''],
      time: ['']
    });
  }

  verificarDisponibilidad() {
    const { date, time } = this.disponibilidadForm.value;
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
