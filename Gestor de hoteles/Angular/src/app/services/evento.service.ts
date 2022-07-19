import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Evento } from '../models/evento.model';

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  public url : String = 'https://gestion-hoteles-kinal.herokuapp.com/api'
  constructor(public _http: HttpClient) { }
  public headersVariable = new HttpHeaders().set('Content-Type', 'application/json')

  obtenerEventos(token): Observable<any>{
    let headersToken = this.headersVariable.set('Authorization', token);

    return this._http.get(this.url + '/obtenerHoteles', {headers: headersToken})
  }
  obtenerEventosTipos(tipo): Observable<any>{

    return this._http.get(this.url + '/obtenerEventosId/' + tipo, {headers: this.headersVariable})

  }

}
