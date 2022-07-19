import { Component, OnInit } from '@angular/core';
import { Evento } from 'src/app/models/evento.model';
import { EventoService } from 'src/app/services/evento.service';
@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {

  public eventoModelGetId: Evento;

  constructor(private _EventosService: EventoService) {
    this.eventoModelGetId = new Evento(
      '',
      '',
      '',
      '',
      '',
      '',
      ''
      );
  }

  ngOnInit(): void {
  }

  obtenerEventosId(tipo) {
    this._EventosService.obtenerEventosTipos(tipo).subscribe({
      next: (response: any) => {
        this.eventoModelGetId = response.evento;
        console.log(response.evento);
      },
      error: (err) => {
        console.log(err);

      }
    })
  }

}
