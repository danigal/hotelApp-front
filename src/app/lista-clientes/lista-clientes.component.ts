import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent implements OnInit{

  clientes: Cliente[];

  constructor() {}

  ngOnInit(): void {
    this.clientes = [{
      "idCliente" : 1,
      "nombre" : "Christian",
      "apellido" : "Fernandez",
      "email" : "christian@gmail.com"
    },
    {
      "idCliente" : 2,
      "nombre" : "Gabriel",
      "apellido" : "Ramirez",
      "email" : "gabriel@gmail.com"
    }];
  }  
  }
