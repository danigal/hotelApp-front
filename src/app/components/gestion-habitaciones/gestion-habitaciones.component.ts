import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Habitacion } from 'src/app/models/habitacion';
import { HabitacionService } from 'src/app/services/habitacion.service';

@Component({
  selector: 'app-gestion-habitaciones',
  templateUrl: './gestion-habitaciones.component.html',
  styleUrls: ['./gestion-habitaciones.component.css']
})

export class GestionHabitacionesComponent implements OnInit {
    // Declaración de la variable "habitaciones" de tipo "Habitacion[]" y la variable
  // "nuevaHabitacion" de tipo "Habitacion" con su valor inicializado como una nueva instancia de "Habitacion"
  habitaciones: Habitacion[]
  nuevaHabitacion: Habitacion = new Habitacion();
    // Declaración de la variable "tipoHabitacion" de tipo "string" y la variable
  // "nuevoPrecioPorNoche" de tipo "number"

  tipoHabitacion: string;
  nuevoPrecioPorNoche: number;
// Inyección de dependencia del servicio "HabitacionService" en el constructor
  constructor(private habitacionService: HabitacionService, router: Router){}

  ngOnInit(): void {
    // Llamada al método "getHabitaciones" al inicializar el componente
    this.getHabitaciones();
  }
// Método para obtener la lista de habitaciones
  private getHabitaciones(){
    // Llamada al método "getListaHabitaciones" del servicio "HabitacionService" y suscripción al observable
    this.habitacionService.getListaHabitaciones().subscribe(data => {
      this.habitaciones = data;
    })
  }
// Método para agregar una habitación
  addHabitacion(){
    // Llamada al método "addHabitacion" del servicio "HabitacionService" y suscripción al observable
    // que devuelve el servicio. Dentro de la función de callback "next", se muestra un mensaje en la consola
    // y se vuelve a llamar al método "getHabitaciones" para actualizar la lista de habitaciones. En la función
    // de callback "error", se muestra el error en la consola
    this.habitacionService.addHabitacion(this.nuevaHabitacion).subscribe({
      next: () => {
        console.log("Habitación agregada exitosamente");
        this.getHabitaciones();
      },
      error : (error) => console.log(error)
    });
  }

  // Método para editar una habitación
  editarHabitacion(habitacion: Habitacion) {
    // Llamada al método "editarHabitacion" del servicio "HabitacionService" y suscripción al observable
    this.habitacionService.editarHabitacion(habitacion).subscribe({
      next: () => {
        console.log("Habitación agregada exitosamente");
        this.getHabitaciones();
      },
      error : (error)=> console.log('Error al editar habitación: ' + error)
      });
  }

  eliminarHabitacion(id: number) {
    this.habitacionService.eliminarHabitacion(id).subscribe({
      next: () => {
        console.log("Habitación eliminada exitosamente");
        this.getHabitaciones();
      },
      error : (error)=> console.log('Error al eliminar la habitación: ' + error)
      });
  }

  actualizarPrecioPorNoche() {
    this.habitacionService.actualizarPrecioPorNoche(this.tipoHabitacion, this.nuevoPrecioPorNoche).subscribe({
      next: () => {
        console.log("Precio por noche actulizado exitosamente");
        this.getHabitaciones();
      },
      error : (error)=> console.log('Error al actulizar el precio por noche: ' + error)
      });
  }
}
