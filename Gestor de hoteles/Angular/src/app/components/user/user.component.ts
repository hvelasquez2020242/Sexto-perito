import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { ReservacionService } from 'src/app/services/reservacion.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  public usuarioModelGet: Usuario;
  public token;
  public reservacionesModelGet: any;
  constructor(private _usuarioService: UsuarioService, private _reservacionService: ReservacionService) {
    this.usuarioModelGet = new Usuario('', '', '', '', '')
    this.token = this._usuarioService.getToken();

  }

  ngOnInit(): void {
    this.getUser()
  }
  getUser() {
    this.usuarioModelGet = this._usuarioService.getIdentidad()
    console.log(this.usuarioModelGet);

  }
  obtenerHistorial() {
    this._reservacionService.obtenerFacturasId(this.token).subscribe({
      next: (response: any)=>{
        console.log(response);
        this.reservacionesModelGet = response.facturas

      },
      error: (err)=>{
        console.log(err);

      }
    })

  }
}

