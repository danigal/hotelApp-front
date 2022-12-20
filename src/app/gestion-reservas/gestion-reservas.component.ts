import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../models/cliente';
import { Habitacion } from '../models/habitacion';
import { Reserva } from '../models/reserva';

@Component({
  selector: 'app-gestion-reservas',
  templateUrl: './gestion-reservas.component.html',
  styleUrls: ['./gestion-reservas.component.css']
})

export class GestionReservasComponent implements OnInit {
  reservas: Reserva[];
  clientes: Cliente[];
  habitaciones: Habitacion[];
  idClienteSeleccionada: number | null;
  idHabitacionSeleccionada: number | null;
  idReserva: number;
  checkInDate: Date;
  checkOutDate: Date;
  private baseURL = "http://localhost:8080/api/v1/reservas";
  private clientesURL = "http://localhost:8080/api/v1/reservas";
  private habitacionesURL = "http://localhost:8080/api/v1/reservas";
  constructor(private http: HttpClient, private router: Router) { }
   

  ngOnInit(): void {
   
    // Obtener la lista de reservas de la API
    this.http.get<Reserva[]>(`${this.baseURL}`).subscribe(reservas => {
      this.reservas = reservas;
    });

    // Obtener la lista de clientes de la API
    this.http.get<Cliente[]>(`${this.clientesURL}`).subscribe(clientes => {
      this.clientes = clientes;
    });
    // // Obtener la lista de habitaciones de la API
    this.http.get<Habitacion[]>(this.habitacionesURL).subscribe(habitaciones => {
      this.habitaciones = habitaciones;
    });
  } 

  // Eliminar una reserva con el id dado
  eliminarReserva(id: number): void {
    this.http.delete(`${this.baseURL}/${id}`).subscribe(() => {
      this.reservas = this.reservas.filter(reserva => reserva.idReserva !== id);
    });
  }


  // Añadir una nueva reserva con el cliente seleccionado, habitación seleccionada, fecha de entrada y fecha de salida
  addReserva(): void {
    const reserva: Reserva = {
      idReserva: this.idReserva,
      cliente: this.clientes.find(cliente => cliente.idCliente === this.idClienteSeleccionada)!,
      habitacion: this.habitaciones.find(Habitacion => Habitacion.idHabitacion === this.idHabitacionSeleccionada)!,
      checkInDate: this.checkInDate,
      checkOutDate: this.checkOutDate,
      precioTotal: this.calcularPrecioTotal()
    };
    // Enviar la nueva reserva a la API y añadirla
  
    
    this.http.post<Reserva>(`${this.baseURL}`, reserva).subscribe(nuevaReserva => {
      this.reservas.push(nuevaReserva);
      this.idClienteSeleccionada = null;
      this.idHabitacionSeleccionada = null;
      this.checkInDate = new Date();
      this.checkOutDate = new Date;
    });
    
  }

  // Calcular el precio totalnumero total para la reserva seleccionada 
  private calcularPrecioTotal(): number {
    // Calcular el numero de días entre el check-in y el check-out
    const diffInDays = (this.checkOutDate.getTime() - this.checkInDate.getTime()) / (1000 * 60 * 60 * 24);
    // Find the room with the selected room id
    //Encontrar la habitacion con el idHabitacion seleccionada
    const habitacion = this.habitaciones.find(habitacion => habitacion.idHabitacion === this.idHabitacionSeleccionada);
    // Si la habitación no se ha encontrado, devolver 0 como precio total
    if (!habitacion) {
      return 0;
    }
    // Calculate and return the total price
    return diffInDays * habitacion.precioPorNoche;
  }
}

