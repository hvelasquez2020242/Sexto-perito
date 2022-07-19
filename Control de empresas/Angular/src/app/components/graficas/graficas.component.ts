import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { SucursalesService } from 'src/app/services/sucursales.service';
import { Productos } from 'src/app/models/productos.model';
import { Sucursales } from 'src/app/models/sucursales.model';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.component.html',
  styleUrls: ['./graficas.component.scss'],
  providers:[UsuarioService, SucursalesService]
})
export class GraficasComponent implements OnInit {

  public doughnutChartLabels:any= [];
  public doughnutChartData:any = [];
  public doughnutChartColors:any = [
    {
      backgroundColor: []
    }
  ];

  public doughnutChartType = 'doughnut';
  public productosModelGet: any = [];
public sucursalModelGetId:any = [];
public idSucursal: String;

public token;


  constructor(
    public _sucursalService: SucursalesService,
    public _usuariosService: UsuarioService,
    public _activatedRoute: ActivatedRoute
  ) { this.token = this._usuariosService.getToken(); }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((dataRuta)=>{
    this.getSucursalesId(dataRuta.get('idSucursal'));
    this.idSucursal = dataRuta.get('idSucursal')
    this.getSucursalId(dataRuta.get('idSucursal'));

    });
  }

  getSucursalId(idSucursal){
    this._sucursalService.obtenerProductos(idSucursal, this.token).subscribe(
      (response)=>{
        console.log(response.productos);
        this.productosModelGet = response.productos;
        this.productosModelGet.forEach(dato => {
          this.doughnutChartLabels.push(dato.nombreProducto);
          this.doughnutChartData.push(dato.stock);
          this.doughnutChartColors[0].backgroundColor.push(`#${Math.floor(Math.random()*16777215).toString(16)}`);
        });
      },
      (error)=>{
        console.log('Hubo un error');
      }
    )
  }
  getSucursalesId(idSucursal){
    this._sucursalService.obtenerSucursalId(idSucursal, this.token).subscribe(
      (response)=>{
        console.log(response);
        this.sucursalModelGetId = response.sucursal;
      },
      (error)=>{

      }
    )
  }


}
