import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [UsuarioService]
})
export class LoginComponent implements OnInit {
  IniciarSesion="Iniciar Sesion";
  Registrarme="Registrarme";
  nombreUsuario="nombre de usuario"
  Contrasena="Contraseña";
  Recordarme="Recordarme";
  ContraOlvid="¿Has olvidado tu contraseña?";
  mail="correo";
  mienbroAct="¿Ya eres miembro?";

  public usuarioModel: Usuario;

  constructor(private _usuarioService: UsuarioService) {
    this.usuarioModel = new Usuario(
      "",
      "",
      "",
      "",
      ""
    );
  }

  ngOnInit(): void {
  }

  getToken(){
    this._usuarioService.login(this.usuarioModel, "true").subscribe(
      (response)=>{
        console.log(response.token);
        localStorage.setItem("token", response.token)
      },
      (error)=>{
        console.log(<any>error);

      }
    )
  }

  getTokenPromesa(): Promise<any> {
    return new Promise((resolve, reject)=>{
      this._usuarioService.login(this.usuarioModel, "true").subscribe(
        (response)=>{
          localStorage.setItem("token", response.token)
          resolve(response);
        },
        (error)=>{
          console.log(<any>error);

        }
      )
    })
  }

  login(){
    this._usuarioService.login(this.usuarioModel).subscribe(
      (response)=>{

        this.getTokenPromesa().then(respuesta => {
          console.log(respuesta);
          localStorage.setItem('identidad', JSON.stringify(response.usuario))

        })
      },
      (error)=>{
        console.log(<any>error);
      }
    );
  }

}
