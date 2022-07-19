import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HotelesComponent } from './components/hoteles/hoteles.component';
import { IndefinidoComponent } from './components/indefinido/indefinido.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { HotelesEventosComponent } from './components/hoteles-eventos/hoteles-eventos.component';
import { ReservacionesComponent } from './components/reservaciones/reservaciones.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { AdminHotelComponent } from './components/admin-hotel/admin-hotel.component';
import { HuespedComponent } from './components/huesped/huesped.component';
import { HospedadoEncontradoComponent } from './components/hospedado-encontrado/hospedado-encontrado.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminPanelComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'user', component: UserComponent },
  { path: 'hoteles', component: HotelesComponent },
  { path: 'home', component: HomeComponent },
  { path: 'adminHotel', component: AdminHotelComponent },
  { path: 'reservaciones', component: ReservacionesComponent },
  { path: 'huesped/:idUsuario/:idHospedaje', component: HuespedComponent },
  {
    path: 'hotelesEventos', component: HotelesEventosComponent, children: [
      { path: 'eventos', component: EventosComponent }
    ]
  },
  { path: 'huespedEncontrado/:idUsuario/:nombre', component: HospedadoEncontradoComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: IndefinidoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
