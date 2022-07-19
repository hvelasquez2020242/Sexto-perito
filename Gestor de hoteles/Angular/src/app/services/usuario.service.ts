import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  public url : String = 'https://gestion-hoteles-kinal.herokuapp.com/api';
  public headersVariable = new HttpHeaders().set('Content-Type', 'application/json');
  public token;
  public identidad;

  constructor(public _http: HttpClient) {

   }

  login(usuario, obtenerToken = null): Observable<any> {

    if(obtenerToken != null){
      usuario.obtenerToken = obtenerToken;
    }

    let params = JSON.stringify(usuario);

    return this._http.post(this.url + '/login', params, { headers: this.headersVariable });
  }
  registro(modeloUsuario: Usuario): Observable<any>{
    let parametros = JSON.stringify(modeloUsuario);

    return this._http.post(this.url + '/registro', parametros, {headers: this.headersVariable})

  }


  getToken(){
    var token2 = localStorage.getItem("token");
    if(token2 != undefined){
      this.token = token2
    } else {
      this.token = '';
    }

    return this.token;
  }


  getIdentidad() {
    var identidad2 = JSON.parse(localStorage.getItem('identidad'));
    if(identidad2 != undefined){
      this.identidad = identidad2;
    }else{
      this.identidad = null;
    }

    return this.identidad;
  }
  getUsuarioId(id, token){

    let headersToken = this.headersVariable.set('Authorization', token);
    return this._http.get(this.url + '/obtenerUsuariosId/' + id,  {headers: headersToken})


  }

  busquerdaUsuarioRol(token) {

    let headersToken = this.headersVariable.set('Authorization', token);

    return this._http.get(this.url + '/obtenerUsuarioRol', { headers: headersToken })

  }
}
