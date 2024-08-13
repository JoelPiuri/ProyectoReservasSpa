import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface FAQ {
  question: string;
  answer: string;
}

@Injectable({
  providedIn: 'root'
})
export class FaqService {
  private apiUrl = 'http://localhost:5000/api/faqs';

  constructor(private http: HttpClient) {}

  getFaqs(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/obtenerFAQ`);  // Endpoint para obtener las FAQs
  }

  createFaq(faq: FAQ): Observable<any> {
    return this.http.post(`${this.apiUrl}/crearFAQ`, faq);
  }
}
