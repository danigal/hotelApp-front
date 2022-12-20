import { Cliente } from "./cliente";
import { Habitacion } from "./habitacion";

export class Reserva {
    idReserva: number;
    cliente: Cliente;
    habitacion: Habitacion;
    checkInDate: Date;
    checkOutDate: Date;
    precioTotal: number;
}
