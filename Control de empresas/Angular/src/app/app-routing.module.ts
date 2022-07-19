import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EmpresasComponent } from './components/empresas/empresas.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EmpreSucComponent } from './components/empre-suc/empre-suc.component';
import { SucursalComponent } from './components/sucursal/sucursal.component';
import { IndefinidoComponent } from './components/indefinido/indefinido.component';
import { IntegrantesComponent } from './components/integrantes/integrantes.component';
import { GraficasComponent } from './components/graficas/graficas.component';
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'integrantes', component: IntegrantesComponent},
  {path: 'home', component: HomeComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'empresas', component: EmpresasComponent},
  {path: 'empre-suc', component: EmpreSucComponent, children: [
    {path: 'dashboard', component: DashboardComponent},
    {path: 'graficas/:idSucursal', component: GraficasComponent},
    {path: 'sucursal/:idSucursal', component: SucursalComponent}

  ]},
  { path: '**', component: IndefinidoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
