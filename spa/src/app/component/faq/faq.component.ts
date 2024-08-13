import { Component, OnInit } from '@angular/core';
import { FaqService } from '../../services/faqs.service';

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
export class FaqComponent implements OnInit {
  faqs: FAQ[] = [];

  constructor(private faqService: FaqService) {}

  ngOnInit() {
    this.faqService.getFaqs().subscribe((data: Omit<FAQ, 'active'>[]) => {  // Ajuste en el tipo recibido
      this.faqs = data.map(faq => ({ ...faq, active: false }));  // Añade la propiedad 'active'
    });
  }

  toggleAnswer(faq: FAQ) {
    faq.active = !faq.active;
  }
}
