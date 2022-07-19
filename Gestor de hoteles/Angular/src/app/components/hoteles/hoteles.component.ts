import { Component, OnInit } from '@angular/core';
import { Hotel } from 'src/app/models/hotel.model';
import { HotelService } from 'src/app/services/hotele.service';
import { Habitaciones } from '../../models/habitacion.model'
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';
import { cantidadDias } from 'src/app/models/dias.model';
import { ReservacionService } from 'src/app/services/reservacion.service';
import { Reservacion } from 'src/app/models/reservacion.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-hoteles',
  templateUrl: './hoteles.component.html',
  styleUrls: ['./hoteles.component.scss'],
  providers: [HotelService]
})
export class HotelesComponent implements OnInit {
  public hotelModelGet: any;
  public hotelModelGetId: Hotel;
  public habitacionesModelGetId: Habitaciones;
  public habitacionesModelGet: any;
  public habitacionesModelGetLujosa: any;
  public habitacionesModelGetMedia: any;
  public cantidadDeDiasModelPost: cantidadDias;
  public idHotel: any;
  public token;
  public reservacionModelPost: Reservacion;


  constructor(private _HotelService: HotelService, private _usuarioService: UsuarioService, private _router: Router,
    private _reservacionService: ReservacionService) {



    this.token = this._usuarioService.getToken()
    this.hotelModelGetId = new Hotel(
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      0,
      ''
    ),

      this.cantidadDeDiasModelPost = new cantidadDias(
        0
      )
      ,
      this.habitacionesModelGetId = new Habitaciones(
        '',
        '',
        0,
        '',
        '',
        '',
        ''
      )
  }

  ngOnInit(): void {
    this.getHoteles();
    this.token = this._usuarioService.getToken()

  }


  getHoteles() {
    this._HotelService.obtenerHoteles().subscribe({
      next: (response: any) => {
        console.log(response.hoteles);
        this.hotelModelGet = response.hoteles;
      },
      error: (err) => {
        console.log(err);

      }
    })
  }
  asignarId(id) {
    this.idHotel = id;
  }
  getHotelesId(idHotel) {
    this._HotelService.obtenerHotelesId(idHotel).subscribe({
      next: (response: any) => {
        console.log(response);
        this.hotelModelGetId = response.hotel;

      },
      error: (err) => {
        console.log(err);

      }
    })
  }
  getHabitacionesSimple(idHotel) {
    this._HotelService.obtenerHabitacionesSimple(idHotel).subscribe({
      next: (response: any) => {
        console.log(response.habitaciones);
        this.habitacionesModelGet = response.habitaciones;
      },
      error: (err) => {
        console.log(err);

      }
    })
  }
  getHabitacionesMedia(idHotel) {
    this._HotelService.obtenerHabitacionesMedia(idHotel).subscribe({
      next: (response: any) => {
        console.log(response.habitaciones);
        this.habitacionesModelGetMedia = response.habitaciones;
      },
      error: (err) => {
        console.log(err);

      }
    })
  }
  getHabitacionesLujosa(idHotel) {
    this._HotelService.obtenerHabitacionesLujosa(idHotel).subscribe({
      next: (response: any) => {
        console.log(response.habitaciones);
        this.habitacionesModelGetLujosa = response.habitaciones;
      },
      error: (err) => {
        console.log(err);

      }
    })
  }
  eventosGet() {
    this._router.navigate(['/hotelesEventos/eventos']);
  }

  asignarDias() {
    if (this.token === '') {

      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Necestia estar registrado con su cuenta!',
        timer: 3000
      }).then((result) => {
        this._router.navigate(['/login']);
      });
    } else {
      this._reservacionService.agregarReservacion(this.token, this.hotelModelGetId._id, this.cantidadDeDiasModelPost.numero).subscribe(
        (response) => {
          this._router.navigate(['/reservaciones']);
          console.log(response);

        },
        (err) => {
          console.log(typeof this.token);

        }
      )
    }


  }
}
