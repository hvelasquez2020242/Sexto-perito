import { Component, OnInit } from '@angular/core';
import { Reservacion } from 'src/app/models/reservacion.model';
import { ReservacionService } from 'src/app/services/reservacion.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-reservaciones',
  templateUrl: './reservaciones.component.html',
  styleUrls: ['./reservaciones.component.scss'],
  providers: [ReservacionService]
})
export class ReservacionesComponent implements OnInit {
  public token;
  public usuario: any;
  public reservacionModelGet: any;
  constructor(private _reservacionService: ReservacionService, private _usuarioService: UsuarioService) {

    this.token = this._usuarioService.getToken();

  }

  ngOnInit(): void {
    this.getUsuarioId();
    this.getUsuario();
  }

  getUsuarioId() {
    this._reservacionService.obtenerReservacionId(this.token).subscribe({
      next: (response: any) => {
        this.reservacionModelGet = response.reservacion;
        console.log(response.reservacion);

      }
    })
  }
  getUsuario() {
    this._reservacionService.obtenerUser(this.token).subscribe({
      next: (response: any) => {
        this.usuario = response.usuario
        console.log(response.usuario);

      },
      error: (err) => {
        console.log(err);

      }
    })
  }
  postHospedaje(idReservacion) {

    Swal.fire({
      title: 'Desea empezar su reservacion?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'SI'
    }).then((result) => {
      if (result.isConfirmed) {
        this._reservacionService.agregarHospedaje(this.token, idReservacion).subscribe({
          next: (response: any) => {
            console.log(response);
            this.getUsuarioId();

          },
          error: (err) => {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Hubo un error',
            })

          }
        })
        Swal.fire(
          'Iniciada',
          'Ya inicio su estadia en el hotel',
          'success'
        )
      } else {
        Swal.fire('Cancelado')
      }
    })
  }
  cancelarHospedaje(idReservacion){

    Swal.fire({
      title: 'Desea cancelar su reservacion?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'SI'
    }).then((result) => {
      if (result.isConfirmed) {
        this._reservacionService.eliminarReservacion(this.token, idReservacion).subscribe({
          next: (response: any) => {
            console.log(response);
            this.getUsuarioId();

          },
          error: (err) => {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Hubo un error',
            })

          }
        })
        Swal.fire(
          'Eliminada',
          'Se elimino su reservacion',
          'success'
        )
      } else {
        Swal.fire('Cancelado')
      }
    })
  }
}
