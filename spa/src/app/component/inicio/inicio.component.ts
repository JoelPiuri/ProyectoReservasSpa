import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  ngOnInit() {
    const bookingForm = document.getElementById('booking-form');
    const availabilityMessage = document.getElementById('availability-message');

    bookingForm?.addEventListener('submit', function(event) {
      event.preventDefault();
      if (availabilityMessage) {
        availabilityMessage.style.display = 'block';
      }
    });
  }
}
