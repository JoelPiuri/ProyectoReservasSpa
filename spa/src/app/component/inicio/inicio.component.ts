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

  isBannerVisible: boolean = true;

  closeBanner(event: Event): void {
    event.stopPropagation(); // Evita que el clic en la "X" active el clic en el banner
    this.isBannerVisible = false;
  }

  onBannerClick(): void {
    const url = 'https://www.temu.com/'; // Aquí define la URL a la que quieres redirigir
    window.location.href = url;
  }
}


