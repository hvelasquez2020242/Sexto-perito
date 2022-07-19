import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FooterComponent } from './components/footer/footer.component';
import { EmpresasComponent } from './components/empresas/empresas.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EmpreSucComponent } from './components/empre-suc/empre-suc.component';
import { SucursalComponent } from './components/sucursal/sucursal.component';
import { IndefinidoComponent } from './components/indefinido/indefinido.component';
import { IntegrantesComponent } from './components/integrantes/integrantes.component';
import { SearchPipe } from './pipes/search.pipe';
import {GraficasComponent} from './components/graficas/graficas.component';
import { ChartsModule } from '@rinminase/ng-charts';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent,
    DashboardComponent,
    GraficasComponent,
    FooterComponent,
    EmpresasComponent,
    EmpreSucComponent,
    SucursalComponent,
    IndefinidoComponent,
    IntegrantesComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ChartsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
