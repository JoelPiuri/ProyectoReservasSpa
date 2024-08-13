import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../../services/servicios.service';

@Component({
  selector: 'app-tratamiento-facial',
  templateUrl: './tratamiento-facial.component.html',
  styleUrls: ['./tratamiento-facial.component.css']
})
export class TratamientoFacialComponent implements OnInit {
  services: any[] = [];

  constructor(private serviciosService: ServiciosService) {}

  ngOnInit(): void {
    this.loadServices();
  }

  loadServices(): void {
    this.serviciosService.getServicesByCategory('Tratamiento facial').subscribe(
      data => this.services = data,
      error => console.error('Error fetching facial services', error)
    );
  }
  isBannerVisible: boolean = true;

  closeBanner(event: Event): void {
    event.stopPropagation(); // Evita que el clic en la "X" active el clic en el banner
    this.isBannerVisible = false;
  }

  onBannerClick(): void {
    const url = 'https://www.wix.com/'; // Aquí define la URL a la que quieres redirigir
    window.location.href = url;
  }
}
// export class TratamientoFacialComponent {
//   treatments: Treatment[] = [
    // {
    //   img: 'css/img/facial1.jpg',
    //   title: 'LIMPIEZA FACIAL PROFUNDA CON REVITALIZACIÓN',
    //   description: 'Eliminamos las impurezas que opacan tu piel, además la revitalizamos con nutrientes concentrados y fototerapia...',
    //   duration: '80 MIN',
    //   price: '$50'
    // },
    // {
    //   img: 'css/img/facial2.jpg',
    //   title: 'TRATAMIENTO PIEL MADURA',
    //   description: 'Disminuye la aparición de arrugas, es decir, líneas de expresión...',
    //   duration: '90 MIN',
    //   price: '$65'
    // },
    // {
    //   img: 'css/img/facial3.jpg',
    //   title: 'TRATAMIENTO DE HIPERPIGMENTACIÓN',
    //   description: 'Como resultado, atenúa notablemente las manchas de la piel...',
    //   duration: '60 MIN',
    //   price: '$50'
    // },
    // {
    //   img: 'css/img/facial4.jpg',
    //   title: 'REJUVENECIMIENTO FACIAL CON RADIOFRECUENCIA',
    //   description: 'Estimula la producción de colágeno natural, en otras palabras, previene la flacidez...',
    //   duration: '90 MIN',
    //   price: '$65'
    // }
  // ];

  
 
//}

