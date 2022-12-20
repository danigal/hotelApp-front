import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearClienteComponent } from './components/crear-cliente/crear-cliente.component';
import { DetallesClienteComponent } from './components/detalles-cliente/detalles-cliente.component';
import { GestionHabitacionesComponent } from './components/gestion-habitaciones/gestion-habitaciones.component';
import { ListaClientesComponent } from './components/lista-clientes/lista-clientes.component';
import { UpdateClienteComponent } from './components/update-cliente/update-cliente.component';

const routes: Routes = [
  {path: `clientes`, component: ListaClientesComponent},
  {path: `crear-cliente`, component: CrearClienteComponent},
  {path: ``, redirectTo: `clientes`, pathMatch: 'full'},
  {path: `update-cliente/:id`, component: UpdateClienteComponent},
  {path: 'detalles-cliente/:id', component: DetallesClienteComponent},
  {path: `gestion-habitaciones`, component: GestionHabitacionesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
