import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../../models/cliente';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-update-cliente',
  templateUrl: './update-cliente.component.html',
  styleUrls: ['./update-cliente.component.css']
})
export class UpdateClienteComponent implements OnInit{

  id: number;
  cliente: Cliente = new Cliente();
  constructor(private clienteService: ClienteService, 
    private route: ActivatedRoute, 
    private router: Router) { }

  ngOnInit(): void {
      //getClienteporId espera que se le pase una id
      //Usamos ActivatedRoute para obtener el id de la ruta
      this.id = this.route.snapshot.params['id'];
      this.clienteService.getClientePorId(this.id).subscribe({
        next: (data) => this.cliente = data,
        error : (error) => console.log(error)
      });
  }

  onSubmit(){
    this.clienteService.updateCliente(this.id, this.cliente).subscribe({
      next: () => this.irAListaClientes(),
      error: (error) => console.log(error)
    });
  }
  
  irAListaClientes(){
    this.router.navigate([`/clientes`]);
  }

}
