import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegistroComponent } from './components/registro/registro.component';
import { HotelesComponent } from './components/hoteles/hoteles.component';
import { HomeComponent } from './components/home/home.component';
import { IndefinidoComponent } from './components/indefinido/indefinido.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { HotelesEventosComponent } from './components/hoteles-eventos/hoteles-eventos.component';
import { ReservacionesComponent } from './components/reservaciones/reservaciones.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { AdminHotelComponent } from './components/admin-hotel/admin-hotel.component';
import { HuespedComponent } from './components/huesped/huesped.component';
import { HospedadoEncontradoComponent } from './components/hospedado-encontrado/hospedado-encontrado.component';
import { UserComponent } from './components/user/user.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    RegistroComponent,
    HotelesComponent,
    HomeComponent,
    IndefinidoComponent,
    EventosComponent,
    HotelesEventosComponent,
    ReservacionesComponent,
    AdminPanelComponent,
    AdminHotelComponent,
    HuespedComponent,
    HospedadoEncontradoComponent,
    UserComponent
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
