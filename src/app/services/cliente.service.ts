import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  //Definimos una baseURL para nuestros REST endpoints
  private baseURL = "http://localhost:8080/api/v1/clientes";

  constructor(private httpClient : HttpClient) { }

  getListaClientes() : Observable<Cliente[]>{
    return this.httpClient.get<Cliente[]>(`${this.baseURL}`);
  }

  crearCliente(cliente: Cliente): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, cliente);
  }

  getClientePorId(id:number):Observable<Cliente>{
    return this.httpClient.get<Cliente>(`${this.baseURL}/${id}`);
  }

  updateCliente(id: number, cliente: Cliente): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, cliente);
  }

  eliminarCliente(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
