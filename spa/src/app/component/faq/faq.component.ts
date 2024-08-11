import { Component } from '@angular/core';

interface FAQ {
  question: string;
  answer: string;
  active: boolean;
}

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {
  faqs: FAQ[] = [
    { question: '¿Con cuánto tiempo de anticipación debo hacer una reservación?', answer: 'El mínimo tiempo para hacer una reserva es de una hora y el máximo es indefinido.', active: false },
    { question: '¿Cuántos masajes se pueden dar al mismo tiempo?', answer: 'Por el momento contamos con personal para 8 masajes al tiempo, si necesitan más personas se puede arreglar haciendo una reservación con un día de anticipación.', active: false },
    { question: '¿Se hacen masajes a 4 manos?', answer: 'Sí.', active: false },
    { question: '¿Se hacen masajes de parejas?', answer: 'Sí, todas nuestras locaciones cuentan con 2 camillas juntas para compartir con tu pareja.', active: false },
    { question: '¿Dónde se hacen los masajes?', answer: 'Tenemos 3 lugares diferentes donde pueden disfrutar de un masaje: La playa frente al océano, dentro del SPA con aire acondicionado o en nuestra principal atracción que es nuestro hermoso jardín botánico.', active: false },
    { question: '¿Qué tipos de productos utilizan?', answer: 'Todos nuestros productos son 100% naturales preparados por nosotros mismos.', active: false },
    { question: '¿Dónde puedo adquirir estos productos?', answer: 'Todos nuestros productos están a la venta directamente en nuestro SPA, pueden acercarse en cualquier momento y darles un vistazo.', active: false }
  ];

  toggleAnswer(faq: FAQ) {
    faq.active = !faq.active;
  }
}
