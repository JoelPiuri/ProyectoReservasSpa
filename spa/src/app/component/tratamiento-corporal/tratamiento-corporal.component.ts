import { Component } from '@angular/core';
interface Massage {
  img: string;
  title: string;
  description: string;
  duration: string;
  price: string;
}

@Component({
  selector: 'app-tratamiento-corporal',
  templateUrl: './tratamiento-corporal.component.html',
  styleUrls: ['./tratamiento-corporal.component.css']
})
export class TratamientoCorporalComponent {
  massages: Massage[] = [
    {
      img: 'css/img/masa1.jpg',
      title: 'MASAJE SUECO',
      description: 'Combinación de técnicas con las manos. Como resultado, relaja y brinda energía al cuerpo...',
      duration: '60 MIN',
      price: '$40'
    },
    {
      img: 'css/img/masa2.jpg',
      title: 'MASAJE MEDITERRÁNEO',
      description: 'Con presión de nivel medio-duro, sin duda, libera de contracturas musculares...',
      duration: '60 MIN',
      price: '$50'
    },
    {
      img: 'css/img/masa3.jpg',
      title: 'MASAJE CON PIEDRAS VOLCÁNICAS',
      description: 'Por la combinación de las manos con piedras calientes, relaja los músculos y equilibra tu energía...',
      duration: '75 MIN',
      price: '$60'
    },
    {
      img: 'css/img/masa4.jpg',
      title: 'BAMBUTERAPIA',
      description: 'Por la combinación de las manos con cañas de bambú, descontractura y desinflama los músculos...',
      duration: '75 MIN',
      price: '$60'
    }
  ];
}
