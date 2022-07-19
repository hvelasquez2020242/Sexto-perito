import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Servicio } from 'src/app/models/servicio.model';
import { Usuario } from 'src/app/models/usuario.model';
import { HotelService } from 'src/app/services/hotele.service';
import { ReservacionService } from 'src/app/services/reservacion.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-huesped',
  templateUrl: './huesped.component.html',
  styleUrls: ['./huesped.component.scss']
})
export class HuespedComponent implements OnInit {
  public token;
  public usuarioModelGetId: Usuario;
  public hospedajeModelGet: any;
  public servicioModelPost: Servicio;
  public servicioModelGet: any;
  public idHospedaje: String;

  constructor(private _usuarioService: UsuarioService, public _activatedRoute: ActivatedRoute, private _reservacionService: ReservacionService, private _hotelService: HotelService) {
    this.usuarioModelGetId = new Usuario(
      '',
      '',
      '',
      '',
      ''
    ),
    this.servicioModelPost = new Servicio(
    '',
    '',
    0
    )
      this.token = this._usuarioService.getToken();

  }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((dataRuta) => {
      this.obtenerUsuariosId(dataRuta.get('idUsuario'));
      this.idHospedaje = dataRuta.get('idHospedaje')
    });
  }
  obtenerUsuariosId(usuarioId) {
    this._usuarioService.getUsuarioId(usuarioId, this.token).subscribe({
      next: (response: any) => {
        console.log(response.usuario);
        this.getHospedados()

        this.usuarioModelGetId = response.usuario;
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
  getReservacion(){
    this._reservacionService.obtenerServicios(this.token, this.idHospedaje).subscribe({
      next: (response: any) =>{
        console.log(response.servicio);
        this.servicioModelGet = response.servicio
      },
      error: (err)=>{
        console.log(err);

      }
    })
  }
  postServicio(){

    this._reservacionService.agregarServicio(this.token, this.servicioModelPost, this.idHospedaje).subscribe({
      next: (response : any)=>{
        console.log(response);

        this.servicioModelPost._id = '',
        this.servicioModelPost.nombre = '',
        this.servicioModelPost.precio = 0
      },
      error: (err)=>{
        console.log(err);

      }
    })
  }
  hacerFactura(){
    Swal.fire({
      title: 'Desea facturar el usuario?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'SI'
    }).then((result) => {
      if (result.isConfirmed) {
        this._reservacionService.hacerFactura(this.token, this.idHospedaje).subscribe({
          next: (response: any)=>{
            console.log(response);

          },
          error: (err)=>{
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Hubo un error',
            })

          }
        })
        Swal.fire(
          'Facturado',
          'usuario facturado',
          'success'
        )
      }else{
        Swal.fire('Cancelado')

      }
    })
  }
}
