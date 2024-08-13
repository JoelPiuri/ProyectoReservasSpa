import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Servicios {
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
}

@Injectable({
  providedIn: 'root'
})

export class ServiciosService {
  private apiUrl = 'http://localhost:3600/servicios';

  constructor(private http: HttpClient) { }

  // Obtener todos los servicios
  getAllServices(): Observable<Servicios[]> {
    return this.http.get<Servicios[]>(this.apiUrl);
  }

  // Obtener servicios por categoría
  getServicesByCategory(category: string): Observable<Servicios[]> {
    return this.http.get<Servicios[]>(`${this.apiUrl}/category/${encodeURIComponent(category)}`);
  }

  // Crear un nuevo servicio
  createService(service: Servicios): Observable<Servicios> {
    return this.http.post<Servicios>(this.apiUrl, service);
  }

  // Actualizar un servicio
  updateService(id: string, service: Servicios): Observable<Servicios> {
    return this.http.put<Servicios>(`${this.apiUrl}/${id}`, service);
  }

  // Eliminar un servicio
  deleteService(id: string): Observable<Servicios> {
    return this.http.delete<Servicios>(`${this.apiUrl}/${id}`);
  }
}
