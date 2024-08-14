import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private apiUrl = 'http://localhost:3600/api/reservacion';

  constructor(private http: HttpClient) {}

  verificarDisponibilidad(date: string, time: string): Observable<{ disponible: boolean }> {
    return this.http.post<{ disponible: boolean }>(`${this.apiUrl}/verificar-disponibilidad`, { date, time });
  }

  crearReservacion(reservationData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/reserve`, reservationData);
  }

  buscarReservacion(codigo: String): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/buscar/${codigo}`);
  }  
  
 // Método para modificar una reservación existente
 modificarReservacion(codigo: string, reservacion: any): Observable<any> {
  return this.http.put(`${this.apiUrl}/modificar/${codigo}`, reservacion);
}

// Método para eliminar una reservación por código
eliminarReservacion(codigo: string): Observable<any> {
  return this.http.delete(`${this.apiUrl}/eliminar/${codigo}`);
}
  
  
}
