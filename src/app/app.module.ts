import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaClientesComponent } from './components/lista-clientes/lista-clientes.component';
import { CrearClienteComponent } from './components/crear-cliente/crear-cliente.component';
import { FormsModule } from '@angular/forms';
import { UpdateClienteComponent } from './components/update-cliente/update-cliente.component';
import { DetallesClienteComponent } from './components/detalles-cliente/detalles-cliente.component';
import { GestionHabitacionesComponent } from './components/gestion-habitaciones/gestion-habitaciones.component';
/* import { GestionReservasComponent } from './gestion-reservas/gestion-reservas.component';
 */

@NgModule({
  declarations: [
    AppComponent,
    ListaClientesComponent,
    CrearClienteComponent,
    UpdateClienteComponent,
    DetallesClienteComponent,
    GestionHabitacionesComponent
/*     GestionReservasComponent, */
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
