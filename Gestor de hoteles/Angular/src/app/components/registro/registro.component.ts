import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
  providers: [UsuarioService]
})
export class RegistroComponent implements OnInit {

  public usuarioModelPost: Usuario;

  constructor(private _usuarioService: UsuarioService, private _router: Router) {
    this.usuarioModelPost = new Usuario(
      '',
      '',
      '',
      '',
      ''
    )
  }

  ngOnInit(): void {
  }

  postUsuario() {
    this._usuarioService.registro(this.usuarioModelPost).subscribe(
      (response) => {

        Swal.fire({
          title: 'Guardado exitosamente',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500
        }).then((result) => {
          this._router.navigate(['/login']);
          console.log(response);
          this.usuarioModelPost.email = '',
            this.usuarioModelPost.nombre = '',
            this.usuarioModelPost.password = ''

        });
      }


    )
  }


}
