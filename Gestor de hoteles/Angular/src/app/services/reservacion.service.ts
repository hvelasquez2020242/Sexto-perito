import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { cantidadDias } from '../models/dias.model';
import { Hotel } from '../models/hotel.model';
import { Reservacion } from '../models/reservacion.model';
import { Hospedados } from '../models/hospedados.model';
import { Servicio } from '../models/servicio.model';

@Injectable({
  providedIn: 'root'
})
export class ReservacionService {
  public url: String = 'https://gestion-hoteles-kinal.herokuapp.com/api'
  constructor(public _http: HttpClient) { }
  public headersVariable = new HttpHeaders().set('Content-Type', 'application/json')

  obtenerReservacionId(token): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token);

    return this._http.get(this.url + '/obtenerReservacionId', { headers: headersToken });

  }
  agregarReservacion(token, idHabitacion, cantidadDias): Observable<any> {
    let parametros = null;

    let headersToken = this.headersVariable.set('Authorization', token)
    return this._http.post(this.url + '/agregarReservacion/' + idHabitacion + '/' + cantidadDias, parametros, { headers: headersToken });
  }
  obtenerUser(token) : Observable<any>{
    let headersToken = this.headersVariable.set('Authorization', token);
    return this._http.get(this.url + '/obtenerUsuariosId', { headers: headersToken })
  }
  agregarHospedaje(token, idReservacion) {
    let parametros = null;

    let headersToken = this.headersVariable.set('Authorization', token);

    return this._http.post(this.url + '/agregarHospedaje/' + idReservacion, parametros, { headers: headersToken })

  }
  obtenerReservacion(token): Observable<any> {

    let headersToken = this.headersVariable.set('Authorization', token);

    return this._http.get(this.url + '/obtenerReservacion', { headers: headersToken })

  }
  obtenerServicios(token, idHospedaje): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token);

    return this._http.get(this.url + '/obtenerServicios/' + idHospedaje, { headers: headersToken })
  }
  agregarServicio(token, modelServicio: Servicio, idHospedaje) {
    let headersToken = this.headersVariable.set('Authorization', token);
    let parametros = JSON.stringify(modelServicio)
    return this._http.post(this.url + '/agregarServicio/' + idHospedaje, parametros, { headers: headersToken })
  }
  hacerFactura(token, idFactura){
    let parametros = null;
    let headersToken = this.headersVariable.set('Authorization', token);

    return this._http.post(this.url + '/hacerFactura/' + idFactura, parametros, { headers: headersToken })
  }
  eliminarReservacion(token, idReservacion): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token);
    return this._http.delete(this.url + '/eliminarReservacion/' + idReservacion, { headers: headersToken })
  }
  obtenerFacturasId(token): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token);
    return this._http.get(this.url + '/obtenerFacturasId', { headers: headersToken })
  }
}

