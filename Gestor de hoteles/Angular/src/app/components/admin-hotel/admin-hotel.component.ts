import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { HotelService } from 'src/app/services/hotele.service';
import { Habitaciones } from 'src/app/models/habitacion.model';
import { ReservacionService } from 'src/app/services/reservacion.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-admin-hotel',
  templateUrl: './admin-hotel.component.html',
  styleUrls: ['./admin-hotel.component.scss']
})
export class AdminHotelComponent implements OnInit {
  public modelHabitacionPost: Habitaciones;
  public hospedajeModelGet: any;
  public token;
  public reservacionModelGet: any;


  @ViewChild('search') myDiv: ElementRef;

  constructor(private _usuarioService: UsuarioService, private _hotelService: HotelService, private _router: Router, private _reservacionService: ReservacionService, @Inject(DOCUMENT) document: Document) {
    this.modelHabitacionPost = new Habitaciones(
      '',
      '',
      0,
      '',
      '',
      '',
      ''
    )
    this.token = this._usuarioService.getToken();

  }

  ngOnInit(): void {
    this.getHospedados();
  }
  postHabitacion() {
    this._hotelService.agregarHabitacion(this.modelHabitacionPost, this.token).subscribe({
      next: (response: any) => {
        console.log(response);
        this.modelHabitacionPost._id = '',
        this.modelHabitacionPost.caracteristicas = '',
        this.modelHabitacionPost.precio = 0;
        this.modelHabitacionPost.disponibles = '';
        this.modelHabitacionPost.horario = '';
        this.modelHabitacionPost.idHotel = '';
        this.modelHabitacionPost.tipo = '';
      },
      error: (err) => {
        console.log(err);

      }
    })
  }
  getHospedados() {
    this._hotelService.obtenerHospedados(this.token).subscribe({
      next: (response: any) => {
        console.log(response);
        this.hospedajeModelGet = response.hospedados
      },
      error: (err) => {
        console.log(err);

      }
    })
  }
  getReservacion() {
    this._reservacionService.obtenerReservacion(this.token).subscribe({
      next: (response: any) => {
        this.reservacionModelGet = response.reservacion
      },
      error: (err) => {
        console.log(err);

      }
    })
  }
  verHuesped(usuario, idHospedaje) {
    this._router.navigate(['/huesped/'+ usuario + '/' +idHospedaje]);
  }
  buscarUsuario() {
    let nombre = (<HTMLInputElement>document.getElementById("search")).value;

    this._hotelService.buscarHhospedado(this.token, nombre).subscribe({
      next: (response: any) => {
        this._router.navigate(['/huespedEncontrado/'+ response.usuario._id + '/' + nombre]);
      },
      error: (err)=>{
      console.log(err);

      }
    })
  }
  getReservaciones(){
    this._reservacionService.obtenerReservacion(this.token).subscribe({
      next: (response : any)=>{
        console.log(response.reservacion);
      },
      error: (err)=>{
        console.log(err);

      }
    })
  }
}
function jQuery(arg0: string) {
  throw new Error('Function not implemented.');
}

