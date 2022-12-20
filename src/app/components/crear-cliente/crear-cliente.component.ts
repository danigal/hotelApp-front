import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../../models/cliente';
import { ClienteService } from '../../services/cliente.service';


@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent {
  
  cliente: Cliente = new Cliente();

  constructor(private clienteService: ClienteService, private router: Router){ }
  
  guardarCliente(){
    //método subscribe para que podamos procesar una respuesta sincrona 
    this.clienteService.crearCliente(this.cliente).subscribe({
      next: (data) => {
        console.log(data);
        //Despues de la respuesta de la REST API navegamos a la lista de clientes usando router
        this.irAListaClientes();
      },
      error : (error) => console.log(error)
    });
  }

  irAListaClientes(){
    this.router.navigate([`/clientes`]);
  }

  onSubmit(){
    console.log(this.cliente);
    this.guardarCliente();
  }
}
