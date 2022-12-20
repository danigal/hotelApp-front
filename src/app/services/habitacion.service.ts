import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habitacion } from '../models/habitacion';

@Injectable({
  providedIn: 'root'
})
export class HabitacionService {

  private baseURL = "http://localhost:8080/api/v1/habitaciones"

  constructor(private httpClient: HttpClient) { }

  getListaHabitaciones() : Observable<Habitacion[]>{
    return this.httpClient.get<Habitacion[]>(`${this.baseURL}`);
  }

  addHabitacion(nuevaHabitacion: Habitacion) : Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, nuevaHabitacion);
  }

  editarHabitacion(habitacion: Habitacion) : Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${habitacion.idHabitacion}`, habitacion);
  }
  
  eliminarHabitacion(id: number) : Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  actualizarPrecioPorNoche(tipoHabitacion: string, nuevoPrecioPorNoche: number) : Observable<Object>{
    return this.httpClient.put(`${this.baseURL}`, { tipoHabitacion, nuevoPrecioPorNoche});
  }


}
