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
  
  habitaciones: Habitacion[]
  nuevaHabitacion: Habitacion = new Habitacion();
  tipoHabitacion: string;
  nuevoPrecioPorNoche: number;

  constructor(private habitacionService: HabitacionService, router: Router){}

  ngOnInit(): void {
    this.getHabitaciones();
  }

  private getHabitaciones(){
    this.habitacionService.getListaHabitaciones().subscribe(data => {
      //Inside the callback function, the room object that is returned by the server is pushed to
      // the rooms array and the newRoom object is reset to its default values.
      this.habitaciones = data;
    })
  }

  addHabitacion(){
    this.habitacionService.addHabitacion(this.nuevaHabitacion).subscribe({
      next: () => {
        console.log("Habitación agregada exitosamente");
        this.getHabitaciones();
      },
      error : (error) => console.log(error)
    });
  }

  editarHabitacion(habitacion: Habitacion) {
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
