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



  isBannerVisible: boolean = true;

  closeBanner(event: Event): void {
    event.stopPropagation(); // Evita que el clic en la "X" active el clic en el banner
    this.isBannerVisible = false;
  }

  onBannerClick(): void {
    const url = 'https://open.spotify.com/intl-es'; // Aquí define la URL a la que quieres redirigir
    window.location.href = url;
  }
}
