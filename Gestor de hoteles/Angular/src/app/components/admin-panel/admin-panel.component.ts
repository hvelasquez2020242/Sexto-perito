import { Component, OnInit } from '@angular/core';
import { Hotel } from 'src/app/models/hotel.model';
import { HotelService } from 'src/app/services/hotele.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent implements OnInit {
  public hotelModelPost: Hotel;
  public token;
  public hotelModelGet: any;
  public usuarioModelGet: any;

  constructor(private _router: Router, private _HotelService: HotelService, private _usuarioService: UsuarioService) {

    this.hotelModelPost = new Hotel(
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
    )
    this.token = this._usuarioService.getToken();

  }

  ngOnInit(): void {
    this.getHoteles()
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

  getFacturas() {
    this._HotelService.obtenerFacturas(this.token).subscribe({
      next: (response: any) => {
        console.log(response.facturas);
        ;
      },
      error: (err) => {
        console.log(err);

      }
    })
  }

    // putHoteles() {
    //   this._HotelService.editarHoteles(this.productosModelGetId, this.token).subscribe(

    //     (response) => {
    //       console.log(response);
    //       this.getProductos();
    //     },
    //     (error) => {

    //     }

    //   )
    // }

    // getProductoId(idProducto){
    //   this._empresasService.obtenerProductosId(idProducto, this.token).subscribe(
    //     (response)=>{
    //       console.log(response);
    //       this.productosModelGetId = response.productos;

    //     },
    //     (error)=>{

    //     }
    //   )
    // }



    getUsuarios(){
      this._usuarioService.busquerdaUsuarioRol(this.token).subscribe({
        next: (response: any)=>{
          this.usuarioModelGet = response.usuarios
        },
        error: (err) =>{
          console.log(err);

        }
      })
      }

  postHoteles() {
    this._HotelService.agregarHotel(this.hotelModelPost, this.token).subscribe(
      (response) => {
        console.log(response);
        this.getHoteles()
        this._router.navigate(['/hoteles']);
        this.hotelModelPost.nombre = "";
        this.hotelModelPost.direccion = "";
        this.hotelModelPost.descripcion = "";
        this.hotelModelPost.administrador = "";
        this.hotelModelPost.password = "";
        this.hotelModelPost.idioma = "";
        this.hotelModelPost.telefono = 0;
        this.hotelModelPost.puesto = "";
      },
      (err) => {
        console.log(<any>err)
      }
    )
  }
}
