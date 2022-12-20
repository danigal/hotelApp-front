import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../../models/cliente';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent implements OnInit{

  clientes: Cliente[];

  constructor(private clienteService : ClienteService, private router: Router) {}

  ngOnInit(): void {
    this.getClientes();
  }  
  
  private getClientes(){
    this.clienteService.getListaClientes().subscribe(data => {
      this.clientes = data;
    })
  }

  updateCliente(id: number){
    //Al método navigate le vamos a pasar un array con el path y el id
    this.router.navigate(['update-cliente', id]);
  }

  eliminarCliente(id: number){
    this.clienteService.eliminarCliente(id).subscribe(data => {
      console.log(data);
      this.getClientes();
    })
  }

  detallesCliente(id:number){
    //Le pasamos la ruta definida en app-routing.module
    this.router.navigate(['detalles-cliente', id]);
  }

  }
