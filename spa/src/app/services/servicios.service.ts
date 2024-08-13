import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {
  private apiUrl = 'http://localhost:3600/servicios';

  constructor(private http: HttpClient) { }

  // Obtener todos los servicios
  getAllServices(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Obtener servicios por categoría
  getServicesByCategory(category: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/category/${category}`);
  }

  // Crear un nuevo servicio
  createService(service: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, service);
  }

  // Actualizar un servicio
  updateService(id: string, service: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, service);
  }

  // Eliminar un servicio
  deleteService(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
