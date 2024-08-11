import { Component } from '@angular/core';

interface Treatment {
  img: string;
  title: string;
  description: string;
  duration: string;
  price: string;
}

@Component({
  selector: 'app-tratamiento-facial',
  templateUrl: './tratamiento-facial.component.html',
  styleUrls: ['./tratamiento-facial.component.css']
})
export class TratamientoFacialComponent {
  treatments: Treatment[] = [
    {
      img: 'css/img/facial1.jpg',
      title: 'LIMPIEZA FACIAL PROFUNDA CON REVITALIZACIÓN',
      description: 'Eliminamos las impurezas que opacan tu piel, además la revitalizamos con nutrientes concentrados y fototerapia...',
      duration: '80 MIN',
      price: '$50'
    },
    {
      img: 'css/img/facial2.jpg',
      title: 'TRATAMIENTO PIEL MADURA',
      description: 'Disminuye la aparición de arrugas, es decir, líneas de expresión...',
      duration: '90 MIN',
      price: '$65'
    },
    {
      img: 'css/img/facial3.jpg',
      title: 'TRATAMIENTO DE HIPERPIGMENTACIÓN',
      description: 'Como resultado, atenúa notablemente las manchas de la piel...',
      duration: '60 MIN',
      price: '$50'
    },
    {
      img: 'css/img/facial4.jpg',
      title: 'REJUVENECIMIENTO FACIAL CON RADIOFRECUENCIA',
      description: 'Estimula la producción de colágeno natural, en otras palabras, previene la flacidez...',
      duration: '90 MIN',
      price: '$65'
    }
  ];
 
}
