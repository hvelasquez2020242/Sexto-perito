import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HotelService } from 'src/app/services/hotele.service';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Hospedados } from 'src/app/models/hospedados.model';

@Component({
  selector: 'app-hospedado-encontrado',
  templateUrl: './hospedado-encontrado.component.html',
  styleUrls: ['./hospedado-encontrado.component.scss']
})
export class HospedadoEncontradoComponent implements OnInit {
  public idUsuario: any;
  public nombre: String;
  public token;
  public usuarioModelGet: Usuario;
  public hospedadosModelGet: any;
  constructor( private _usuarioService: UsuarioService, public _activatedRoute: ActivatedRoute, private _hotelService: HotelService) {
    this.usuarioModelGet = new Usuario(
      '',
      '',
      '',
      '',
      ''
    ),
    this.token = this._usuarioService.getToken();
  }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((dataRuta) => {
      this.idUsuario = (dataRuta.get('idUsuario'));
      this.nombre = dataRuta.get('nombre');
      this.obtenetDatos()
    });
  }

  obtenetDatos(){

    this._hotelService.buscarHhospedado(this.token, this.nombre).subscribe({
      next: (response: any) => {
        console.log(response);
        this.hospedadosModelGet = response.hospedado
        this.usuarioModelGet = response.usuario

      },
      error: (err)=>{
      console.log(err);

      }
    })
  }
}
