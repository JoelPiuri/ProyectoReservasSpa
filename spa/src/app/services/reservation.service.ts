import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private apiUrl = 'http://localhost:5000/api/reservations';

  constructor(private http: HttpClient) {}

  verificarDisponibilidad(date: string, time: string): Observable<{ disponible: boolean }> {
    return this.http.post<{ disponible: boolean }>(`${this.apiUrl}/verificar-disponibilidad`, { date, time });
  }

  crearReservacion(reservationData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/reserve`, reservationData);
  }

  buscarReservacion(turno: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/buscar/${turno}`);
  }  
  
  modificarReservacion(turno: string, reservacion: any) {
    return this.http.put(`http://localhost:5000/api/reservations/modificar/${turno}`, reservacion);
  }
  
  eliminarReservacion(turno: string) {
    return this.http.delete(`http://localhost:5000/api/reservations/eliminar/${turno}`);
  }
  
  
}
